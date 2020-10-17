import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  notifications:any;
size:Number
  faHome = faHome;
  faEnvelope = faEnvelope;
  faBell = faBell;
  faUserFriends = faUserFriends;
  faSignOutAlt = faSignOutAlt;
  faIdBadge = faIdBadge;
  name: string;
  test="<h1>test</h1>"
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getLength()
  }
  logout() {
    this.userService.deleteToken();
    this.userService.deleteEmail();
    this.userService.deleteId();

    this.router.navigateByUrl('/home');
  }
  gotosearch(searchForm: NgForm) {
    console.log(searchForm.value.name);
    this.router.navigateByUrl('/feed/search/' + searchForm.value.name);
  }
  getLength(){
    this.userService.getNotifs(this.userService.getId()).subscribe(
(data)=>{
  this.notifications=data[0].notifications;
  this.size= this.notifications.length;
},
(err)=>{

}
    )
  }
}
