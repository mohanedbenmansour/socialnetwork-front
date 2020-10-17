import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  createUser(user: User) {
    return this.http.post('http://localhost:4000/auth/register', user);
  }
  login(authCredentials) {
    return this.http.post(
      'http://localhost:4000/auth/login',
      authCredentials,
      this.noAuthHeader
    );
  }
  //not prema
  //email field
  setEmail(email: string) {
    localStorage.setItem('Email', email);
  }
  getEmail() {
    return localStorage.getItem('Email');
  }
  deleteEmail() {
    localStorage.removeItem('Email');
  }

  //user id
  getId() {
    return localStorage.getItem('id');
  }

  setId(id: string) {
    localStorage.setItem('id', id);
  }
  deleteId() {
    localStorage.removeItem('id');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  //role field

  getUserPayload() {
    let token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else return null;
  }
  getFriends(id: string) {
    return this.http.get('http://localhost:4000/user/getFriends/' + id);
  }
  getNotifs(user:string){
return this.http.get("http://localhost:4000/user/getNotif/"+user);
  }
  deleteNotifs(user:string){
    return this.http.get("http://localhost:4000/user/deleteNotif/"+user);

  }
  isLoggedIn() {
    let userPayload = this.getUserPayload();
    if (userPayload) return userPayload.exp > Date.now() / 1000;
    else return false;
  }
}
