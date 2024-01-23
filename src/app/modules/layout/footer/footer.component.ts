import { Component } from '@angular/core';
import {faFacebookF, faInstagram} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  icons = {
    'faFacebook': faFacebookF,
    'faInstagram': faInstagram,
  }
}
