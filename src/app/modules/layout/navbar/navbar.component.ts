import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, Inject,
  OnInit, PLATFORM_ID,
  ViewChild
} from '@angular/core';
import {faBars, faCartShopping, faMagnifyingGlass, faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faUser} from "@fortawesome/free-regular-svg-icons";
import {NgbCarousel, NgbDropdown, NgbModal, NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {DataService} from "../../../data.service";
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  @ViewChild('account', { static: false, read: NgbDropdown }) account: NgbDropdown;
  @ViewChild('searchContainer', { static: false, read: NgbDropdown }) searchContainer: NgbDropdown;
  @ViewChild('sale', { static: true, read: NgbDropdown }) sale: NgbDropdown;
  @ViewChild('categories', { static: true, read: NgbDropdown }) categories: NgbDropdown;
  @ViewChild('registerLogin', { static: false, read: NgbDropdown }) registerLogin: NgbDropdown;
  @ViewChild('login', { static: true }) login: ElementRef;
  @ViewChild('cart', { static: true }) cart: ElementRef;
  public searchValue:string = '';
  public isUserSignedIn:boolean = false;
  public searchItems:any[] = [];

  icons = {
    'faMagnifyingGlass': faMagnifyingGlass,
    'faHeart': faHeart,
    'faUser': faUser,
    'faCart': faCartShopping
  }

  constructor(
    private modalService: NgbModal,
    private offCanvasService: NgbOffcanvas,
    private router: Router,
    private dataService: DataService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    if(isPlatformBrowser(platformId)){
      const token= this.document.defaultView?.localStorage.getItem('token');
      const user_id= this.document.defaultView?.localStorage.getItem('user_id');
      this.isUserSignedIn = token && user_id && token != '' && user_id != '';
    }
  }


  ngOnInit() {
  }

  saleHover(value){
    this.cdr.detectChanges();
    if(value === 'sale'){
      this.sale.toggle();
    } else if (value === 'categories'){
      this.categories.toggle();
    } else if (value === 'register-login'){
      this.registerLogin.toggle();
    } else if (value === 'account'){
      this.account.toggle()
    }
  }

  openLoginModal(){
    this.modalService.open(this.login, { centered: true, size: 'md'});
    this.registerLogin.close();
  }

  openCart(){
    this.offCanvasService.open(this.cart, {panelClass: 'cart-offcanvas', position: 'end',});
  }

  searchProduct(term){
    this.searchValue = term;
    if(term.length >= 2){
      var data = [];
      data['controller'] = 'base';
      data['action'] = 'search';
      data['language'] = 'bg';
      data['term'] = term;
      this.dataService.Get(data).subscribe((res) => {
        this.searchContainer.open();
        this.searchItems = res['data'];
        this.cdr.detectChanges();
      })
    } else {
      this.searchContainer.close();
    }
  }

  userSignedIn(){
    this.isUserSignedIn = true;
    this.cdr.detectChanges();
  }

  signOut(){
    this.socialAuthService.signOut();
    this.authService.logout();
    this.isUserSignedIn = false;
    this.cdr.detectChanges();
  }

  searchNavigate(item){
    this.searchContainer.close();
    this.router.navigate(['/'],item.name_bg);
  }

}
