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
  NgbModule, NgbPagination,
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
import {LoginRegisterComponent} from "./modals/login-register/login-register.component";
import {CategoryPageComponent} from "./pages/category-page/category-page.component";
import {NgxPaginationModule} from "ngx-pagination";
import {CartModalComponent} from "./modals/cart-modal/cart-modal.component";
import {AuthModule} from "./modules/auth/auth.module";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {CheckoutInformationComponent} from "./components/checkout-information/checkout-information.component";
import {CheckoutDeliveryComponent} from "./components/checkout-delivery/checkout-delivery.component";
import {NgSelectModule} from "@ng-select/ng-select";



@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      NavbarComponent,
      FooterComponent,
      AboutUsComponent,
      ContactsComponent,
      ProductCardComponent,
      ProductPageComponent,
      LoginRegisterComponent,
      CategoryPageComponent,
      CartModalComponent,
      CheckoutComponent,
      CheckoutInformationComponent,
      CheckoutDeliveryComponent
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
      NgxPaginationModule,
      AuthModule,
      NgSelectModule
    ],
    bootstrap: [AppComponent],
  exports: [
    NavbarComponent,
    ProductCardComponent,
  ],
    providers: [
      provideClientHydration(),
    ]
})
export class AppModule {}
