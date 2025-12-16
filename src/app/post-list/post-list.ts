import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  @Input() postListTitle:string="";
  @Input() postIsLogin:boolean=true;
  childMessage:string='Hello from child component'; 

}
