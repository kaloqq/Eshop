import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrl: './checkout-delivery.component.css'
})
export class CheckoutDeliveryComponent implements OnInit{
  @Output() update = new EventEmitter;
  public deliverData:{} = {};
  public econtOffices:any[] = [];
  public data:{} = {};

  icons = {
    'faAnglesRight': faAnglesRight,
    'faAnglesLeft': faAnglesLeft
  }

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {
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

  getEcontOffice(e?){
    // if(e.term.length >= 2){
    //   var data = [];
    //   data['controller'] = 'transport';
    //   data['action'] = 'econt_get_office';
    //   data['term'] = e.term ? e.term : '';
    //   data['econtmat'] = '0';
    //   this.dataService.Get(data).subscribe((el:any) => {
    //     console.log(el);
    //     this.econtOffices = [];
    //     this.econtOffices = el;
    //     this.cdr.detectChanges();
    //   })
    // }
  }


}
