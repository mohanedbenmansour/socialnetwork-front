import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { RequestService } from 'src/app/services/request.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  profiles: any;
  username: string;
  status: string[] = [];
  faUser = faUser;
  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => (this.username = params['name'])
    );
    this.getProfiles(this.username);
  }
  getProfiles(username: string) {
    this.profileService
      .getSearchResult(username, this.userService.getId())
      .subscribe(
        (data) => {
          this.profiles = data;
        },
        (err) => {
          console.log(err);
        }
      );
  }
  goToProfile(userId: string) {
    this.router.navigateByUrl('/feed/userprofile/' + userId);
  }
  addFriend() {}
}
