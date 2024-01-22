import {AfterRenderRef, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {faBars, faMagnifyingGlass, faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faUser} from "@fortawesome/free-regular-svg-icons";
import {NgbCarousel, NgbDropdown} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  @ViewChild('sale', { static: true, read: NgbDropdown }) sale: NgbDropdown;
  @ViewChild('categories', { static: true, read: NgbDropdown }) categories: NgbDropdown;


  icons = {
    'faMagnifyingGlass': faMagnifyingGlass,
    'faRightLeft': faRightLeft,
    'faHeart': faHeart,
    'faUser': faUser,
  }

  constructor(
  ) {
  }


  ngOnInit() {
  }

  saleHover(value){
    if(value === 'sale'){
      this.sale.toggle();
    } else if (value === 'categories'){
      this.categories.toggle();
    }
  }

}
