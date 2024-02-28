import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {DataService} from "../../../../data.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ConfirmPasswordValidator} from "./confirm-password.validator";
import {AuthService} from "../../services/auth.service";
import {FacebookLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {FacebookService} from "ngx-facebook";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  @Output() closeAndUpdate = new EventEmitter;
  registrationForm: FormGroup;
  public formErrors;
  public isFormInvalid;


  icons = {
    'faTimes': faTimes,
    'faFacebookF': faFacebookF,
  }

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    public toastr: ToastrService
  ) {
  }


  ngOnInit(){
    this.initForm();
  }

  initForm() {
    this.registrationForm = this.fb.group(
      {
        fullname: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
          ]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
          ]),
        ],
        cPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
          ]),
        ],
        agree: [false, Validators.compose([Validators.required])],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }

  register(){
    if(this.registrationForm.valid){
      var data = [];
      data['controller'] = 'base';
      data['action'] = 'register';
      data['email'] = this.registrationForm.get('email').value;
      data['password'] = this.registrationForm.get('password').value;
      data['cpassword'] = this.registrationForm.get('cPassword').value;
      this.dataService.Get(data).subscribe((res) => {
        this.isFormInvalid = false;
        this.authService.set_user(
          res['data'].token,
          res['data'].user_id
        )
        this.toastr.success('Успешна регистрация!');
        this.closeAndUpdate.emit();
      });
    } else {
      this.isFormInvalid = true;
      this.formErrors = this.getAllFormErrors(this.registrationForm);
    }
  }

  getAllFormErrors(formGroup: FormGroup = this.registrationForm): any {
    const errors = {};
    Object.keys(formGroup.controls).forEach((controlName) => {
      const control = formGroup.get(controlName);
      if (control instanceof FormGroup) {
        errors[controlName] = this.getAllFormErrors(control);
      }
      if (control.errors) {
        errors[controlName] = control.errors;
      }
    });
    return errors;
  }

  loginWithFacebook(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
