import { Component, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnChanges, OnInit{
  @Input() pUsername:string ='';
  ngOnChanges() {
      console.log('OnChanges Triggerred');      
  }

  ngOnInit(){
    console.log('ngOnInit hook triggered');
    
  }
}
