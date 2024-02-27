import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {faHeart, faStar} from "@fortawesome/free-regular-svg-icons";
import {faArrowDownLong, faCompress, faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import {animate, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(300, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({opacity:0}))
      ])
    ])
  ],
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  @Input() receivedData:{} = {};
  public isButtonHovered:boolean = false;
  public minPrice:string;
  public maxPrice:string;
  public isPromo:boolean;
  public progressValueHardness:number;
  public progressCountHardness:number;
  public progressWidthHardness:number;
  public progressValueClass:number;
  public progressCountClass:number;
  public progressWidthClass:number;
  public starRating:number = 3.7;
  icons = {
    'faHeart': faHeart,
    'faArrowDown': faArrowDownLong,
    'faStar': faStar,
    'faStarSolid': faStarSolid,
  };

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.calculatePrice(this.receivedData);
    this.progressValueHardness = this.receivedData['bar1'];
    this.progressValueClass = this.receivedData['bar2'];
    this.calculateProgress(this.progressValueHardness, 'hardness');
    this.calculateProgress(this.progressValueClass, 'class')
  }

  calculatePrice(data){
    let promo = data['promo_bg'].split(',');
    let regular = data['price_bg'].split(',');
    if(promo[promo.length - 1] == '0.00' || data['promo_bg'] == ''){
      this.isPromo = false;
      this.minPrice = regular[0];
      this.maxPrice = regular[regular.length - 1];
    } else {
      this.isPromo = true;
      this.minPrice = promo[0];
      this.maxPrice = promo[promo.length - 1];
      this.calculateSalePrice(Number(regular[regular.length -1]), Number(promo[promo.length - 1]));
    }
  }

  calculateSalePrice(price, promo){
    this.receivedData['sale_percentage'] = (((price - promo) / price) * 100).toFixed(0);
  }


  productHovered(){
    this.isButtonHovered = !this.isButtonHovered;
  }

  navigateProduct(id,name){
    this.router.navigate(['/',name], {state: {productID: id}});
  }

  calculateProgress(value, element){
    let ch = 100 / 7;
    let rest = (value / ch).toFixed(2);
    let split = rest.split('.');
    if(element === 'hardness'){
      this.progressCountHardness = Number(split[0]);
      this.progressWidthHardness = Number(split[1]);
    } else if (element === 'class'){
      this.progressCountClass = Number(split[0]);
      this.progressWidthClass = Number(split[1]);
    }
  }

  protected readonly Array = Array;
}
