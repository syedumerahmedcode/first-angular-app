import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Card } from "../card/card";
import { JsonPipe, NgForOf } from '@angular/common';
import { Profile } from "../profile/profile";
import { User } from "../user/user";
import { UserService } from '../services/user.service';
import { PostService } from '../services/post';
import { Post } from '../interfaces/post';
import { RouterLink, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post-list',
  imports: [Card, JsonPipe, Profile, User, RouterLink, NgForOf],
  standalone: true,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {
  posts=[
    {
      id:1,
      title:"Title 1",
      content:"Some long and boring text 1"
    },
    {
      id:2,
      title:"Title 2",
      content:"Some long and boring text 2"
    },
    {
      id:3,
      title:"Title 3",
      content:"Some long and boring text 3"
    }
  ]

  constructor(private route: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value=>{
      console.log(value);
      const page=value.get('page');
      console.log(page);
      const orderBy=value.get('orderBy');
      console.log(orderBy);
      
    })
  }
  
  
  
  
  










































  
/* @Input() childUser:any;
userService:any;
postService:any;
posts: Array<any>;

constructor(private userServiceDI:UserService, private postServiceDI:PostService){
  this.userService=userServiceDI;
  this.postService=postServiceDI;
  this.posts=postServiceDI.getPost();
  // this.userService=new UserService();
}

addPost(){
  let postData:Post={
    id:7,
    title:'Post title 7',
    post:'Dummy post 7'
  }
  this.postServiceDI.addPost(postData);
} */



































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
