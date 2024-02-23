import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrl: './checkout-delivery.component.css'
})
export class CheckoutDeliveryComponent implements OnInit{
  @Output() update = new EventEmitter;
  public deliverData:{} = {};

  icons = {
    'faAnglesRight': faAnglesRight,
    'faAnglesLeft': faAnglesLeft
  }

  constructor() {
    this.deliverData['dlv_type'] = 'office';
    this.deliverData['office_type'] = 'office_speedy';
    this.deliverData['address_type'] = 'address_speedy';
  }

  ngOnInit() {
  }

  goToStep(val){
    this.deliverData['action'] = val;
    this.update.emit(this.deliverData);
  }


}
