import {ChangeDetectorRef, Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbCarousel, NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {faHeart, faStar} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowDownLong,
  faChevronDown,
  faChevronUp,
  faCircleCheck,
  faCompress,
  faStar as faStarSolid, faTimes
} from "@fortawesome/free-solid-svg-icons";
import {DataService} from "../../data.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  @ViewChild('addedToCart', { static: true }) addedToCart: NgbCarousel;
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
  private offcanvasService = inject(NgbOffcanvas);
  public fullCart;
  // TODO: STAR RATING FROM REQUEST
  public starRating:number = 4.7;
  icons = {
    'faHeart': faHeart,
    'faArrowDown': faArrowDownLong,
    'faCompress': faCompress,
    'faChevronUp': faChevronUp,
    'faChevronDown': faChevronDown,
    'faStar': faStar,
    'faStarSolid': faStarSolid,
    'faCircleCheck': faCircleCheck,
    'faTimes': faTimes
  };

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private changeDetection: ChangeDetectorRef,
    private toastr: ToastrService
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
      this.progressValueHardness = this.productData.info['bar1'];
      this.progressValueClass = this.productData.info['bar2'];
      this.selectedFeatureA = this.productData.features.featureA.options[0].id;
      this.changeDetection.detectChanges();
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

  addToCart(){
    let itemObject = {
      id: this.productData.info.id,
      name: this.productData.info.name_bg,
      qty: this.quantity,
      price: this.newPrices['promo'] ? this.newPrices['promo'] : this.newPrices['regular'],
      picture: this.productData.info.picture,
    }
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify(Array(itemObject)));
    } else {
      let local = localStorage.getItem('cart');
      let cart = JSON.parse(local);
      cart.forEach((el, i) => {
        if(el.id === itemObject.id){
          el.qty = el.qty + itemObject.qty;
        } else if (el.id != itemObject.id && i === cart.length - 1){
          cart.push(itemObject);
        }
      })
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    this.open();
  }

  open() {
    this.fullCart = JSON.parse(localStorage.getItem('cart'));
    this.offcanvasService.open(this.addedToCart, { position: 'end' });
  }

  removeItemFromCart(index){
    this.fullCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.fullCart));
    this.toastr.info('Успешно премахнат от количката!');
    this.changeDetection.detectChanges();
  }

  protected readonly Array = Array;
}
