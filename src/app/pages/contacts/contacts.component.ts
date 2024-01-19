import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

}
