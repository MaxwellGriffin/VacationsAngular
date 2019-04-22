import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private _form: FormBuilder, private authService: AuthService ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.loginForm = this._form.group({
      Email: new FormControl,
      Password: new FormControl
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value);
  }

}
