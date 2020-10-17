import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RequestService } from 'src/app/services/request.service';
import { request } from 'src/app/shared/request';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userId: string;
  profile: any;
  request: request;
  status: any;

  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => (this.userId = params['id'])
    );
    this.request = {
      recipient: this.userId,
      requester: this.userService.getId(),
      status: 0,
    };
    //need to test if the id is for the same user
    this.getStatus();
    this.getUserProfile(this.userId);
  }
  getStatus(){
    this.requestService.getStatus(this.request).subscribe(
      (data) => {
        console.log(data);
        // this.status1 = data['status'];
        this.status = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getUserProfile(user: string) {
    this.profileService.getProfile(user).subscribe(
      (data) => {
        this.profile = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  addFriend() {
    this.requestService.addFriend(this.request).subscribe(
      (data) => {
        console.log(data);
this.getStatus()      },
      (err) => {
        console.log(err);
      }
    );
  }

  acceptRequest() {
    this.requestService.acceptFriend(this.request).subscribe(
      (data) => {
        this.getStatus()

      },
      (err) => {
        console.log(err);
      }
    );
  }
  declineRequest(){
    this.requestService.rejectFriend(this.request).subscribe(
      (data) => {
        this.getStatus()
      },
      (err) => {
        console.log(err);
      }
    );
  }

  sendMessage() {
    this.router.navigateByUrl('/feed/messages');
  }
}
