import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  welcomeText: string;
  userName: string;
  loggedIn: boolean;

  constructor(private _authService: AuthService) {
    _authService.userLoggedIn.subscribe(() => {
      this.updateHeader();
  });
  this.loggedIn=false;
  }

  ngOnInit() {
    this.updateHeader();
  }

  updateHeader(){
    this.userName = null;
    if (localStorage.getItem("userName") != undefined){
      this.userName = localStorage.getItem("userName");
    }

    if (this.userName != null){
      this.loggedIn = true;
      this.welcomeText = `Welcome ${this.userName}!`;
    }
    else{
      this.loggedIn = false;
      this.welcomeText = "Not logged in";
    }
  }
}