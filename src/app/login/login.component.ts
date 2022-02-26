import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userPage: boolean = false;
  userData: any;

  constructor(private router: Router, private service: AuthserviceService) {
  }

  ngOnInit(): void {
  }
  login() {
    let username: any = document.getElementById("userName")
    let password: any = document.getElementById("password")

    if (username.value == "admin@test.com" && password.value == "Admin123!") {
      alert("Login successfully");
      this.service.getAlluserData().subscribe((data: any) => {
        this.userData = data
      })
      this.userPage = true
    }
    else {
      alert("Please enter valid username password");
      this.userPage = false
    }

  }
  signUp() {
    this.userPage = false

  }
}
