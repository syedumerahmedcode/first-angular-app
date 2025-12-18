import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

/* export interface Post{
  id:number,
  title:string,
  post:string
} */


@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts:Array<Post>=[
    {id:1, title: 'post title 1', post:'Dummy post 1'},
    {id:2, title: 'post title 2', post:'Dummy post 2'},
    {id:3, title: 'post title 3', post:'Dummy post 3'},
    {id:4, title: 'post title 4', post:'Dummy post 4'},
    {id:5, title: 'post title 5', post:'Dummy post 5'}
  ]

  constructor(){
  }

  getPost(){
    return this.posts;
  }

  addPost(newPost:Post){
    console.log(newPost);
    this.posts.push(newPost);
    
  }
}
