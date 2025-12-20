import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.html',
  styleUrl: './single-post.css',
})
export class SinglePost implements OnInit{
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>{
      console.log(value);
      let id=value.get('id');//router parameter defined in bootstrap file.
      console.log('index acquired is: '+id);

      let title=value.get('title');//router parameter defined in bootstrap file.
      console.log('title acquired is: '+title);
      
    })
  }
}
