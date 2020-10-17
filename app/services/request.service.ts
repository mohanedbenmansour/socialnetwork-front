import { Injectable } from '@angular/core';
import { request } from '../shared/request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}
  addFriend(request: request) {
    return this.http.post('http://localhost:4000/user/sendRequest', request);
  }
  rejectFriend(request: request) {
    return this.http.put('http://localhost:4000/user/rejectRequest', request);
  }
  getStatus(request: request) {
    return this.http.get(
      'http://localhost:4000/user/getStatus/' +
        request.requester +
        '/' +
        request.recipient
    );
  }
  acceptFriend(request: request) {
    return this.http.put('http://localhost:4000/user/acceptRequest', request);
  }
}
