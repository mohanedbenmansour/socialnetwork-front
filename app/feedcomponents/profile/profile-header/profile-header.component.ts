import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';
import { faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private profileService: ProfileService
  ) {}
  title = 'appBootstrap';
  profile: any;
  closeResult: string;
  headline: string;
  faImages=faImages;
  imageName:string;
  //image
  image: File = null;
  onFileChanged(event) {
    this.image = <File>event.target.files[0];
    this.imageName=this.image.name
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
  //update headline
  updateheadline(form: NgForm) {
    const formData = new FormData();
    formData.append('image', this.image);
    formData.append('headline', this.headline);

    this.profileService
      .updateHeadline(formData, this.userService.getId())
      .subscribe(
        (data) => {
          this.getProfile(this.userService.getId());
        },
        (err) => {
          console.log(err);
        }
      );
  }
  ngOnInit(): void {
    this.getProfile(this.userService.getId());
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  getProfile(user: string) {
    this.profileService.getProfile(user).subscribe(
      (data) => {
        this.profile = data;
        console.log(this.profile);
        console.log(this.profile[0].mobilephone);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
