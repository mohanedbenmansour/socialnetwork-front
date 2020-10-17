import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service"
import {ProfileService} from "../../services/profile.service"
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.scss']
})
export class MyNetworkComponent implements OnInit {
  faUser=faUser;
  constructor(private userService:UserService,private profileService:ProfileService,private router:Router) { }
  friends: any;
  listOfFriends: any[] = [];

  ngOnInit(): void {
    this.getProfiles()
  }
getProfiles(){
  this.userService.getFriends(this.userService.getId()).subscribe(
    (data) => {
      this.friends = data[0]['friends'];
      this.friends.forEach((item) => {
        this.profileService.getProfile(item).subscribe(
          (data) => {
            this.listOfFriends.push(data);
          },
          (err) => {
            console.log(err)
          }
        );
      });
    },
    (err) => {
      console.log(err);
    }
  );
}
goToProfile(userId: string) {
  console.log(userId)
  this.router.navigateByUrl('/feed/userprofile/' + userId);
}
}
