import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service"
import {ProfileService} from "../../services/profile.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
notifications:any;
listOfNotifications: any[] = [];

  constructor(
    private userService:UserService,
    private profileService:ProfileService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getNotifs(this.userService.getId())
  }
getNotifs(user:string){
this.userService.getNotifs(user).subscribe(
  (data)=>{this.notifications=data[0].notifications;
this.notifications.forEach(element => {

    console.log(element.user2)
  this.profileService.getProfile(element.user2).subscribe(
    (data)=>{
     this.listOfNotifications.push({user:data,status:element.status})
    },
    (err)=>{
      console.log(err)
    }
  )
  
  });
    


  },
  (err)=>{console.log(err)}
);
}
goToProfile(user:string){
  this.router.navigateByUrl('/feed/userprofile/' + user);


}
deleteNotif(){
  this.userService.deleteNotifs(this.userService.getId()).subscribe(
    (data)=>{
this.getNotifs(this.userService.getId())
    },
    (err)=>{

    }
  )
}


}
