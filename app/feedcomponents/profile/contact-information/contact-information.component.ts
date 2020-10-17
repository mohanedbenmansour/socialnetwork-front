import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ProfileService } from '../../../services/profile.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  Validators,
  FormGroup,
  Form,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
})
export class ContactInformationComponent implements OnInit {
  profile: any;

  mobilephone: string;
  facebook: string;
  website: string;
  adress: string;

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private modalService: NgbModal
  ) {}
  closeResult: string;

  ngOnInit(): void {
    this.getProfile(this.userService.getId());
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
  updatePhone(mobilePhoneForm: NgForm) {
    this.profileService
      .updateMobilePhone(mobilePhoneForm.value, this.userService.getId())
      .subscribe(
        (data) => {
          this.getProfile(this.userService.getId());
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  updatefacebook(facebookForm: NgForm) {
    this.profileService
      .updateFacebook(facebookForm.value, this.userService.getId())
      .subscribe(
        (data) => {
          this.getProfile(this.userService.getId());
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  updateadress(adressForm: NgForm) {
    this.profileService
      .updateAdress(adressForm.value, this.userService.getId())
      .subscribe(
        (data) => {
          this.getProfile(this.userService.getId());
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  updatewebsite(websiteForm: NgForm) {
    this.profileService
      .updateWebsite(websiteForm.value, this.userService.getId())
      .subscribe(
        (data) => {
          this.getProfile(this.userService.getId());
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
