import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {DataService} from "../../data.service";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../modules/auth/services/auth.service";


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent implements OnInit{
  @Output() userSignedIn = new EventEmitter;
  public user:any;
  public loggedIn:any;

  icons = {
    'faTimes': faTimes,
  }
  constructor(
    private modalService: NgbModal,
    private socialAuthService: SocialAuthService,
    private dataService: DataService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        this.sendFacebookData();
      }
    })
  }

  sendFacebookData(){
    var data = [];
    data['controller'] = 'base';
    data['action'] = 'facebook_login';
    data['data'] = JSON.stringify(this.user);
    this.dataService.Get(data).subscribe((el) => {
      if(el['success'] === true){
        this.authService.set_user(
          el['data'].token,
          el['data'].user_id
        );
        this.toastr.success('Успешна регистрация!');
        this.userSignedIn.emit();
        this.close();
      }
    })
  }

  close(){
    this.modalService.dismissAll();
  }


}
