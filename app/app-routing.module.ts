import { FeedComponent } from './feed/feed.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './feedcomponents/homepage/homepage.component';
import { ProfileComponent } from './feedcomponents/profile/profile.component';
import { MessagesComponent } from './feedcomponents/messages/messages.component';
import { UserProfileComponent } from './feedcomponents/user-profile/user-profile.component';
import { SearchComponent } from './feedcomponents/search/search.component';
import {MyNetworkComponent} from "./feedcomponents/my-network/my-network.component"
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './feedcomponents/notifications/notifications.component';
import { 
  AuthGuardService as AuthGuard 
} from './guard/auth-guard.service';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home/signin', component: SignInComponent },
  { path: 'home/signup', component: SignUpComponent },
  { path: 'homepage', component: FeedComponent },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate:     [AuthGuard],
    children: [{ path: 'homepage', component: HomepageComponent }],
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate:     [AuthGuard],

    children: [{ path: 'profile', component: ProfileComponent }],
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate:     [AuthGuard],

    children: [{ path: 'messages', component: MessagesComponent }],
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate:     [AuthGuard],

    children: [{ path: 'mynetwork', component: MyNetworkComponent }],
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate:     [AuthGuard],

    children: [{ path: 'notifications', component: NotificationsComponent }],
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate:     [AuthGuard],

    children: [{ path: 'userprofile/:id', component: UserProfileComponent }],
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate:     [AuthGuard],

    children: [{ path: 'search/:name', component: SearchComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
