import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faArrowDownLong, faChevronDown, faChevronUp, faCompress} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  public activeID:string = 'one';
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  public progressValueHardness:number = 30;
  public progressCountHardness:number;
  public progressWidthHardness:number;
  public progressValueClass:number = 80;
  public progressCountClass:number;
  public progressWidthClass:number;
  public quantity:number = 1;
  public isExpanded:boolean = false;
  icons = {
    'faHeart': faHeart,
    'faArrowDown': faArrowDownLong,
    'faCompress': faCompress,
    'faChevronUp': faChevronUp,
    'faChevronDown': faChevronDown
  };

  constructor(
  ) {
  }

  ngOnInit() {
    this.calculateProgress(this.progressValueHardness, 'hardness');
    this.calculateProgress(this.progressValueClass,'class');
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

  protected readonly Array = Array;
}
