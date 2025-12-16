import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from "../card/card";

@Component({
  selector: 'app-post-list',
  imports: [Card],
  standalone: true,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
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
