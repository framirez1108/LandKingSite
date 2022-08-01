import { Component, OnInit } from '@angular/core';
import { User } from '../user/user'
import { UserService } from '../user/user-service.service'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public users: User[] = [];
  message: string = "TS works";
  button = true;
  password: string = "";
  username: string = "null name";
  email: string = "null email"
  user: User = {
    userId: 0,
    username: '',
    password: '',
    email: '',
  }


  constructor(private UserService: UserService) {
    UserService: UserService;

  }

  public getUsers(): void {
    this.UserService.getUsers().subscribe(
      (Response: User[]) => {
        this.users = Response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    );
  }

  OnClick() {
    this.button = !this.button;
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.email = (<HTMLInputElement > document.getElementById("email")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    this.user = {
      userId: 0,
      username: this.username,
      password: this.password,
      email: this.email,
    }
    if (this.username != "" || this.email != "") {
      this.UserService.addUser(this.user).subscribe(
        (response: User) => {
          alert("User created");
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }


  }




  ngOnInit(): void {

  }

}
