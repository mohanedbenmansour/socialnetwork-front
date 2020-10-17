import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss'],
})
export class ProfilePreviewComponent implements OnInit {
  profile: any;
  constructor(
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserProfile(this.userService.getId());
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
}
