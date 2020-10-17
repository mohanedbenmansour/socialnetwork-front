import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { post } from '../../shared/post';
import { faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;
  profile: any;
  poster: any;
  pictures:any[]=[]
  faImages=faImages;
  imageName:any
  constructor(
    public postService: PostService,
    public userService: UserService,
    public profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.readPosts();
   this.getProfile(this.userService.getId());
  }

  image: File = null;
  onFileChanged(event) {
    this.image = <File>event.target.files[0];
    this.imageName=this.image.name;
    console.log(this.image);
  }
  toFormData<T>(formValue: T) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }
  onSubmit(form: NgForm) {
    this.getProfile(this.userService.getId());

    const formData = new FormData();
    const current_datetime = new Date();
    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
    formData.append('image', this.image);
    formData.append('content', form.value.content);
    formData.append('uploadTime', formatted_date);
    formData.append('user', this.userService.getId());
    formData.append('userImage', this.profile[0].picture);

    this.postService.createPost(formData).subscribe(
      (data) => {
        this.readPosts();
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  readPosts() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log(this.posts);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getProfile(user: string) {
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
