import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [JsonPipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userSerice:any;
  constructor(private userServiceDI:UserService){
    this.userSerice=userServiceDI;
  }

}
