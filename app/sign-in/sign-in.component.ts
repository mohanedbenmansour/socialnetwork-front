import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, Form } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: FormGroup) {
    this.userService.login(form.value).subscribe(
      (res) => {
        console.log(res['user']);
        this.userService.setToken(res['token']);
        this.userService.setEmail(res['user'].email);
        this.userService.setId(res['user']._id);
        this.router.navigateByUrl('/feed/profile');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
