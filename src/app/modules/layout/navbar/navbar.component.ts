import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {faBars, faCartShopping, faMagnifyingGlass, faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faUser} from "@fortawesome/free-regular-svg-icons";
import {NgbCarousel, NgbDropdown, NgbModal, NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
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
  @ViewChild('cart', { static: true }) cart: ElementRef;
  public searchValue:string = '';

  icons = {
    'faMagnifyingGlass': faMagnifyingGlass,
    'faHeart': faHeart,
    'faUser': faUser,
    'faCart': faCartShopping
  }

  constructor(
    private modalService: NgbModal,
    private offCanvasService: NgbOffcanvas,
    private router: Router
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

  openCart(){
    this.offCanvasService.open(this.cart, {position: 'end',});
  }

  searchProduct(){
    this.router.navigate(['c','search',0,0,1,this.searchValue]);

  }


}
