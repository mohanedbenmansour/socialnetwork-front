import { Injectable } from '@angular/core';
import { post } from '../shared/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  selectedPost: post = {
    user: '',
    image: '',
    content: '',
    uploadTime: '',
    userImage:""
  };
  constructor(private http: HttpClient) {}
  createPost(post: FormData) {
    return this.http.post('http://localhost:4000/post/create', post);
  }
  getPosts() {
    return this.http.get('http://localhost:4000/post/getposts');
  }
  deletePost(id: string) {
    return this.http.delete('http://localhost:4000/deletepost/' + id);
  }
}
