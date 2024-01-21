import { Component, ElementRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  @ViewChild("demo",{static:true}) demo:ElementRef;

  constructor(
    private modalService: NgbModal,
    ) {
  }

}


