import { Component, OnChanges, SimpleChanges, Input, OnInit, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked{
  @Input() pUsername:string ='';
  counter:number=0;

  constructor(){
   /*  console.log('Contructor method from Profile component triggered');
    console.log(this.pUsername);
    console.log('--------'); */
    
    
    
  }
  ngOnChanges() {
      // console.log('OnChanges Triggerred');      
  }

  ngOnInit(){
  /*   console.log('ngOnInit hook triggered');
    console.log(this.pUsername);
    console.log('--------'); */
    
  }

  ngDoCheck(){
    // console.log('ngDoCheck triggers');
    
  }

  incrementCounter(){
    this.counter++;
  }

  ngAfterContentInit(){
    console.log('AfterContentInit triggered');    
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked triggered.');
    
  }

}
