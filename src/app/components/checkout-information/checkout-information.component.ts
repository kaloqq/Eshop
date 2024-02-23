import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-checkout-information',
  templateUrl: './checkout-information.component.html',
  styleUrl: './checkout-information.component.css'
})
export class CheckoutInformationComponent implements OnInit{
  @Output() update = new EventEmitter;
  public privateData:{} = {};

  icons = {
    'faAnglesRight': faAnglesRight
  }

  constructor() {
  }

  ngOnInit() {
  }

  goToStep(val){
    this.privateData['action'] = val;
    this.update.emit(this.privateData);
  }

}
