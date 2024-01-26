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


  icons = {
    'faTimes': faTimes,
  }
  constructor(
    private modalService: NgbModal,
  ) {
  }


  close(){
    this.modalService.dismissAll();
  }


}
