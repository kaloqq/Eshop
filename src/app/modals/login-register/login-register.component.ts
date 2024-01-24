import { Component } from '@angular/core';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {DataService} from "../../data.service";


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
  public registrationInfo:{} = {};
  public loginInfo:{} = {};

  icons = {
    'faTimes': faTimes,
    'faFacebookF': faFacebookF,
  }

  constructor(
    private modalService: NgbModal,
    private dataService: DataService
  ) {
  }


  register(){
    var data = [];
    data['controller'] = 'base';
    data['action'] = 'register';
    data['email'] = this.registrationInfo['email'];
    data['password'] = this.registrationInfo['password'];
    data['cpassword'] = this.registrationInfo['cpassword'];
    this.dataService.Get(data).subscribe((res) => {
      console.log(res);
    })
  }

  login(){
    var data = [];
    data['controller'] = 'base';
    data['action'] = 'login';
    data['email'] = this.loginInfo['email'];
    data['password'] = this.loginInfo['password'];
    this.dataService.Get(data).subscribe((res) => {
      console.log(res);
    })
  }

  close(){
    this.modalService.dismissAll();
  }


  // public function login(){
  //   $login = new LoginItem();
  //   return $login->login($this->_params['email'],$this->_params['password']);
  // }

}
