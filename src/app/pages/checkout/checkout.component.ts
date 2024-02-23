import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  public activeStep:number = 1;
  public data:{} = {};

  constructor() {
  }

  ngOnInit() {
  }

  receiveData(event){
    if(event.action === 'next') {
      this.activeStep++;
      delete event.action
      this.data = {...this.data, ...event};
    } else {
      this.activeStep--;
    }
    console.log(this.data);
  }

}
