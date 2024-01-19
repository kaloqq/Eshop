import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit() {
  }

}
