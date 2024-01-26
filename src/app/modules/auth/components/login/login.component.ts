import { Component } from '@angular/core';
import {DataService} from "../../../../data.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginInfo:{} = {};
  public isInvalid:boolean = false;
  icons = {
    'faFacebookF': faFacebookF,
  }
  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {
  }

  login(){
    var data = [];
    data['controller'] = 'base';
    data['action'] = 'login';
    data['email'] = this.loginInfo['email'];
    data['password'] = this.loginInfo['password'];
    this.dataService.Get(data).subscribe((res) => {
      if(res['data'].msg === "err_login"){
        this.isInvalid = true;
      } else {
        this.isInvalid = false;
        this.authService.set_user(
          res['data'].token,
          res['data'].user_id
        )
      }
    })
  }
}
