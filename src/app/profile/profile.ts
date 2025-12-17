import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnChanges{
  @Input() pUsername:string ='';
  ngOnChanges() {
      console.log('OnChanges Triggerred');
      
  }
}
