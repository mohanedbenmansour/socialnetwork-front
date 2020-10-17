import { Injectable } from '@angular/core';
import { Profile } from '../shared/profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };
  getProfile(user: string) {
    return this.http.get(
      'http://localhost:4000/profile/' + user + '/getprofile'
    );
  }
  updateMobilePhone(mobilePhone: string, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/mobilephone',
      mobilePhone
    );
  }
  updateFacebook(facebook: string, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/facebook',
      facebook
    );
  }
  updateAdress(adress: string, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/adress',
      adress
    );
  }
  updateWebsite(website: string, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/website',
      website
    );
  }
  updateHeadline(headline: FormData, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/headline',
      headline
    );
  }
  updateDate(date: string, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/dateofbirth',
      date
    );
  }
  updateGender(gender: string, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/gender',
      gender
    );
  }
  updateWork(work: string, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/work',
      work
    );
  }
  updateEducation(education: string, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/education',
      education
    );
  }
  updateSkills(skills: string, user: string) {
    return this.http.put(
      'http://localhost:4000/profile/' + user + '/skills',
      skills
    );
  }
  getSearchResult(username: string, userid: string) {
    return this.http.get(
      'http://localhost:4000/profile/search/' + username + '/' + userid
    );
  }
  getFriendSuggestion(headline: string) {
    return this.http.get(
      'http://localhost:4000/profile/search/' + headline 
    );
  }

}
