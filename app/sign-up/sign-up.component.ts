import { UserService } from '../services/user.service'
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  profileForm = new FormGroup({
 
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required])
  
  });
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  get email() {
    return this.profileForm.get('email');
  }
  get firstName() {
    return this.profileForm.get('firstName');
  }
  get lastName() {
    return this.profileForm.get('lastName');
  }
  get password() {
    return this.profileForm.get('password');
  }
  onSubmit(form:FormGroup){
    this.userService.createUser(form.value).subscribe(
      (data) => {
        form.reset();
        this.router.navigateByUrl('home/signin');
      },
      (err) => {
        console.log(err)
        
      }
    );
  }
}
