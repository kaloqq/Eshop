import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";
import {NavbarComponent} from "./modules/layout/navbar/navbar.component";
import {BrowserModule, provideClientHydration} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing";
import {FooterComponent} from "./modules/layout/footer/footer.component";
import {
  NgbCarousel,
  NgbCarouselConfig,
  NgbCarouselModule,
  NgbDropdownModule,
  NgbModule,
  NgbSlide
} from '@ng-bootstrap/ng-bootstrap';
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PipesModule} from "./pipes/pipes.module";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

import {ToastrModule} from "ngx-toastr";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";



@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      NavbarComponent,
      FooterComponent,
      AboutUsComponent,
      ContactsComponent,
      ProductCardComponent,
      ProductPageComponent
    ],
    imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule,
      NgbModule,
      NgbDropdownModule,
      FontAwesomeModule,
      PipesModule,
      FormsModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ToastrModule.forRoot({
        positionClass: 'toast-top-right'
      }),
      NgbCarouselModule,
    ],
    bootstrap: [AppComponent],
    exports: [
      NavbarComponent,
    ],
    providers: [
      provideClientHydration(),
    ]
})
export class AppModule {}
