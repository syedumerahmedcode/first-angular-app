import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from "../card/card";
import { JsonPipe } from '@angular/common';
import { Profile } from "../profile/profile";
import { User } from "../user/user";

@Component({
  selector: 'app-post-list',
  imports: [Card, JsonPipe, Profile, User],
  standalone: true,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {

@Input() childUser:any;




































/*   @Input() postListTitle:string="";
  @Input() postIsLogin:boolean=true;
  childMessage:string='Hello from child component'; 
  postCount:number=0;
  parentMessage:string='Message from the child component using Click event';

  @Output() messageEvent=new EventEmitter();

  sendMessage(){
    console.log("Button click");
    this.messageEvent.emit(this.parentMessage);
  } */

}
