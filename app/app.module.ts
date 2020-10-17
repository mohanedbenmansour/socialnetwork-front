import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//angular material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//ng forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//http
import { HttpClientModule } from '@angular/common/http';
//components
import { NavbarComponent } from './feedcomponents/navbar/navbar.component';
import { FriendsComponent } from './feedcomponents/friends/friends.component';
import { ProfilePreviewComponent } from './feedcomponents/profile-preview/profile-preview.component';
import { PostsComponent } from './feedcomponents/posts/posts.component';
import { FeedComponent } from './feed/feed.component';
//font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './feedcomponents/profile/profile.component';
import { HomepageComponent } from './feedcomponents/homepage/homepage.component';
import { MessagesComponent } from './feedcomponents/messages/messages.component';
//mat dialog
import { MatDialogModule } from '@angular/material/dialog';
//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileHeaderComponent } from './feedcomponents/profile/profile-header/profile-header.component';
import { WorkAndEducationComponent } from './feedcomponents/profile/work-and-education/work-and-education.component';
import { ContactInformationComponent } from './feedcomponents/profile/contact-information/contact-information.component';
import { BasicInformationComponent } from './feedcomponents/profile/basic-information/basic-information.component';
import { FriendListComponent } from './feedcomponents/profile/friend-list/friend-list.component';
import { PersonalInformationComponent } from './feedcomponents/profile/personal-information/personal-information.component';
//ngx bootstrap datepicker
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserProfileComponent } from './feedcomponents/user-profile/user-profile.component';
import { SearchComponent } from './feedcomponents/search/search.component';
import { MyNetworkComponent } from './feedcomponents/my-network/my-network.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { NotificationsComponent } from './feedcomponents/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    NavbarComponent,
    FriendsComponent,
    ProfilePreviewComponent,
    PostsComponent,
    FeedComponent,
    ProfileComponent,
    HomepageComponent,
    MessagesComponent,
    ProfileHeaderComponent,
    WorkAndEducationComponent,
    ContactInformationComponent,
    BasicInformationComponent,
    FriendListComponent,
    PersonalInformationComponent,
    UserProfileComponent,
    SearchComponent,
    MyNetworkComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    MatBadgeModule,
    MatIconModule
  ],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
