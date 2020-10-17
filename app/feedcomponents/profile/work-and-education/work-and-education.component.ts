import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user.service';
import { ProfileService } from '../../../services/profile.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-work-and-education',
  templateUrl: './work-and-education.component.html',
  styleUrls: ['./work-and-education.component.scss']
})
export class WorkAndEducationComponent implements OnInit {

  profile: any;
  closeResult: string;
  work: string;
  education: string;
  skills: string;

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private modalService: NgbModal
  ) {}

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
  updateeducation(educationform: NgForm) {
    this.profileService
      .updateEducation(educationform.value, this.userService.getId())
      .subscribe(
        (data) => {
          this.getProfile(this.userService.getId());
        },
        (err) => {
          console.log(err);
        }
      );
  }
  updatework(workform: NgForm) {
    this.profileService
      .updateWork(workform.value, this.userService.getId())
      .subscribe(
        (data) => {
          this.getProfile(this.userService.getId());
        },
        (err) => {
          console.log(err);
        }
      );
  }
  updateskills(skillsform: NgForm) {
    this.profileService
      .updateSkills(skillsform.value, this.userService.getId())
      .subscribe(
        (data) => {
          this.getProfile(this.userService.getId());
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
