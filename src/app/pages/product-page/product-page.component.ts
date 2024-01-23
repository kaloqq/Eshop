import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";
import {faHeart, faStar} from "@fortawesome/free-regular-svg-icons";
import {faArrowDownLong, faChevronDown, faChevronUp, faCompress, faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import {DataService} from "../../data.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  public productID = this.route.snapshot.paramMap.get('id');
  public productData:any = [];
  public activeID:string = 'one';
  public progressValueHardness:number;
  public progressCountHardness:number;
  public progressWidthHardness:number;
  public progressValueClass:number;
  public progressCountClass:number;
  public progressWidthClass:number;
  public quantity:number = 1;
  public isExpanded:boolean = false;
  public selectedFeatureA;
  public newPrices:{} = {};
  // TODO: STAR RATING FROM REQUEST
  public starRating:number = 4.7;
  icons = {
    'faHeart': faHeart,
    'faArrowDown': faArrowDownLong,
    'faCompress': faCompress,
    'faChevronUp': faChevronUp,
    'faChevronDown': faChevronDown,
    'faStar': faStar,
    'faStarSolid': faStarSolid
  };

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getProductData();
    this.calculateProgress(this.progressValueHardness, 'hardness');
    this.calculateProgress(this.progressValueClass,'class');
  }

  getProductData(){
    var data = [];
    data['controller'] = 'base';
    data['action'] = 'product';
    data['id'] = this.productID;
    this.dataService.Get(data).subscribe((res) => {
      this.productData= res['data'];
      console.log(this.productData);
      this.progressValueHardness = this.productData.info['bar1'];
      this.progressValueClass = this.productData.info['bar2'];
      this.selectedFeatureA = this.productData.features.featureA.options[0].id;
      this.changePrice();
    })
  }

  onSlideEvent(value){
    this.activeID = value.current;
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

  changeActive(element) {
    this.activeID = element;
    this.carousel.select(element);
  }

  changeQty(type){
    if(type === 'decrement') {
      this.quantity--
    } else {
      this.quantity++
    }
  }

  changePrice(){
    let option = this.productData.features.featureA.options;
    option.forEach((el) => {
      if(el.id === this.selectedFeatureA){
        if(el['promo_bg'] != '' || el['promo_bg'] != '0.00'){
          this.newPrices['promo'] = el['promo_bg'];
        }
          this.newPrices['regular'] = el['price_bg'];
      }
    })
  }

  protected readonly Array = Array;
}
