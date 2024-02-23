import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {
  faCircleCheck, faTimes
} from "@fortawesome/free-solid-svg-icons";
import {ToastrService} from "ngx-toastr";
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent implements OnInit{
  @Input() componentDesign;
  public fullCart;
  public totalRegularPrice:number = 0;
  public totalDiscount:number = 0;
  public totalPrice: number = 0;
  icons = {
    'faCircleCheck': faCircleCheck,
    'faTimes': faTimes
  };

  constructor(
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private offCanvasService: NgbOffcanvas
  ) {
  }

  ngOnInit() {
    this.fullCart = JSON.parse(localStorage.getItem('cart'));
    this.calculatePrices();
    this.cdr.detectChanges();
  }

  calculatePrices(){
    this.totalRegularPrice = 0;
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.fullCart.forEach((el) => {
      this.totalRegularPrice += el.qty * Number(el.regularPrice);
      if(el.promoPrice){
        this.totalDiscount += (Number(el.regularPrice) - Number(el.promoPrice)) * el.qty;
      }
      this.totalPrice = this.totalRegularPrice - this.totalDiscount;
    })
  }

  removeItemFromCart(index){
    this.fullCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.fullCart));
    this.toastr.info('Успешно премахнат от количката!');
    this.calculatePrices();
    this.cdr.detectChanges();
  }

  changeQty(action, pr){
    if(action === 'increment'){
      pr.qty++;
    } else if (action === 'decrement' && pr.qty > 1){
      pr.qty--;
    } else if (action === 'decrement' && pr.qty === 1){
    }
    this.calculatePrices();
    localStorage.setItem('cart', JSON.stringify(this.fullCart));
    this.cdr.detectChanges();
  }

  close(){
    this.offCanvasService.dismiss();
  }

}
