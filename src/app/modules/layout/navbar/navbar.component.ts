import {AfterRenderRef, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {DOCUMENT, isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  public selectedLanguage:any = '';
  public isOpen:boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      if (this.document.defaultView?.localStorage.getItem('language')) {
        this.selectedLanguage = this.document.defaultView?.localStorage.getItem('language');
      } else {
        this.selectedLanguage = this.document.defaultView?.localStorage.setItem('language', 'EN');
        this.selectedLanguage = 'EN';
      }
    }
  }

  icons = {
    'faBars': faBars
  }

  ngOnInit() {
  }

  changeLanguage(value:string) {
    this.selectedLanguage = value;
    this.document.defaultView?.localStorage.setItem('language', this.selectedLanguage);
    this.document.defaultView?.location.reload();
  }
}
