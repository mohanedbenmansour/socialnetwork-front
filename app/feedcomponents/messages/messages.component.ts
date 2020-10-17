import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import {UserService} from "../../services/user.service"
import {ProfileService} from "../../services/profile.service"
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Message } from '../../shared/message';
import {MessageService} from "../../services/message.service"
import { Observable } from 'rxjs';
import { Receiver } from '../../shared/receiver';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  friends: any;
  faLocationArrow = faLocationArrow;
  faPaperclip = faPaperclip;
  receiver: Receiver = {
    name: '',
    id: '',
    picture:""
  };
  sender: string;
  data: Message;
  receivedData: any;
  /*test*/
  title = 'Websocket Angular client ';
  userName: string;
  message: string;
  output: any[] = [];
  feedback: string;
  listOfFriends: any[] = [];
  constructor(
    public userService: UserService,
    public messageService: MessageService,
    public profileService:ProfileService
  ) {}

  ngOnInit(): void {
    this.sender = this.userService.getId();
    this.getMsg();

    this.messageService
      .listen('typing')
      .subscribe((data) => this.updateFeedback(data));
    this.messageService
      .listen('chat')
      .subscribe((data) => this.updateMessage(data));
  }

  assignId(id: string, name: string,picture:string) {
    this.receiver = { id, name,picture };
    console.log(this.receiver);
  }

  pushMsg(data: any) {
    console.log(data);
  }

  messageTyping(): void {
    this.messageService.emit('typing', this.sender);
  }

  sendMessage(): void {
    this.data = {
      sender: this.sender,
      receiver: this.receiver.id,
      message: this.message,
    };
    console.log(this.receiver.id, '+++', this.sender);
    this.messageService.emit('chat', this.data);
  }

  updateMessage(data: any) {
    this.feedback = '';
    if (!!!data) return;
    console.log(`${data.sender}:${data.receiver}:${data.message}`);
    this.output.push(data);
  }

  updateFeedback(data: any) {
    this.feedback = `${data} is typing a message`;
  }
  getUser(id: string): Observable<any> {
    let test: any;
    this.profileService.getProfile(id).subscribe(
      (data) => {
        test = data;
        return test;
      },
      (err) => {
        return 1;
      }
    );
    return;
  }
  getMsg() {
    this.userService.getFriends(this.sender).subscribe(
      (data) => {
        this.friends = data[0]['friends'];
        this.friends.forEach((item) => {
          this.profileService.getProfile(item).subscribe(
            (data) => {

              this.receiver.name = data['user.firstName'];
              this.receiver.id = data['user._id'];
              this.listOfFriends.push(data);
              console.log(this.listOfFriends[0][0].user,"+++++")

            },
            (err) => {
              return 1;
            }
          );
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
