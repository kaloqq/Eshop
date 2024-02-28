import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cookies-bar',
  templateUrl: './cookies-bar.component.html',
  styleUrl: './cookies-bar.component.css'
})
export class CookiesBarComponent {
  public cookieMessage:any = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    if(isPlatformBrowser(this.platformId)){
      const cookie= this.document.defaultView?.localStorage.getItem('cookie_consent');
      this.cookieMessage = cookie && cookie == '1';
    }
  }

  ngOnInit() {
  }

  consentCookies(val){
    if(isPlatformBrowser(this.platformId)){
      this.document.defaultView?.localStorage.setItem('cookie_consent', '1');
      this.cookieMessage = true;
      if(val === 'terms'){
        this.router.navigate(['/terms-and-conditions']);
      }
    }
  }
}
