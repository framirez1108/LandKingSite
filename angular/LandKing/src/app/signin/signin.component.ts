import { Component, OnInit } from '@angular/core';
import { User } from '../user/user'
import { UserService } from '../user/user-service.service'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public users: User[] = [];
  message: string = "TS works";
  button = true;
  password: string = "";
  username: string = "null name";
  email: string = "null email "
  user: User = {
    userId: 0,
    username: '',
    password: '',
    email: '',
  }


  constructor(private UserService :UserService) {
    UserService: UserService;
    
  }

  OnClick() {
    this.button = !this.button;
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    this.user = {
      userId: 1,
      username: this.username,
      password: this.password,
      email: this.email,
    }
    if (this.username != "" || this.email != "") {
      this.UserService.getSpecificUser(this.user.userId).subscribe(
        (Response: User) => {
          this.user = Response;
          console.log(Response);
          alert(this.user);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      console.log("Tried to send post");
      //This is getting nuts
    }


  }




ngOnInit(): void {

  }

}
