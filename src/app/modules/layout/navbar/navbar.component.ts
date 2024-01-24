import {
  AfterRenderRef,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import {faBars, faCartShopping, faMagnifyingGlass, faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faUser} from "@fortawesome/free-regular-svg-icons";
import {NgbCarousel, NgbDropdown, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  @ViewChild('sale', { static: true, read: NgbDropdown }) sale: NgbDropdown;
  @ViewChild('categories', { static: true, read: NgbDropdown }) categories: NgbDropdown;
  @ViewChild('account', { static: true, read: NgbDropdown }) account: NgbDropdown;
  @ViewChild('login', { static: true }) login: ElementRef;

  icons = {
    'faMagnifyingGlass': faMagnifyingGlass,
    'faRightLeft': faRightLeft,
    'faHeart': faHeart,
    'faUser': faUser,
    'faCart': faCartShopping
  }

  constructor(
    private modalService: NgbModal,
    public router: Router
  ) {
  }


  ngOnInit() {
  }

  saleHover(value){
    if(value === 'sale'){
      this.sale.toggle();
    } else if (value === 'categories'){
      this.categories.toggle();
    } else if (value === 'account'){
      this.account.toggle();
    }
  }

  openLoginModal(){
    this.modalService.open(this.login, { centered: true, size: 'md'});
    this.account.close();
  }


}
