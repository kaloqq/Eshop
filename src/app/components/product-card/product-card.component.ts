import { Component } from '@angular/core';
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faArrowDownLong, faCompress} from "@fortawesome/free-solid-svg-icons";
import {animate, style, transition, trigger} from "@angular/animations";

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
export class ProductCardComponent {
  public isButtonHovered:boolean = false

  icons = {
    'faHeart': faHeart,
    'faArrowDown': faArrowDownLong,
    'faCompress': faCompress,
  };


  productHovered(){
    this.isButtonHovered = true;
    let btn = document.querySelector('.btn-pr-open') as HTMLElement;
    btn.classList.add('btn-pr-open-hovered');
  }

  productUnhovered(){
    this.isButtonHovered = false;
    let btn = document.querySelector('.btn-pr-open') as HTMLElement;
    btn.classList.remove('btn-pr-open-hovered');
  }

}
