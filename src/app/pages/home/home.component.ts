import {ChangeDetectorRef, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {animate, style, transition, trigger} from "@angular/animations";
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {DataService} from "../../data.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {faArrowDownLong, faChevronLeft, faChevronRight, faCompress} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({transform: 'translateX(+100%)'}),
        animate('.5s ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit{


  constructor(
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private dataService: DataService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,) {
  }


  ngOnInit() {
  }

}
