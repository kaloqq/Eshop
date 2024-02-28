import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from "@ng-select/ng-select";
import { FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {ToastrModule} from "ngx-toastr";
import {CommonModule, DatePipe} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import { AdminRouting } from "./admin.routing";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    RouterModule.forChild(AdminRouting),
    FontAwesomeModule,
    DatePipe,
  ],
  providers: [DatePipe],
  exports: [
  ]
})
export class AdminModule {}
