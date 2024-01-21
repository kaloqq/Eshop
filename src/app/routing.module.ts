import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";
import { HomepageComponent} from "./homepage/homepage.component";
import { ViewProductComponent } from "./view-product/view-product.component";

const routes: Routes = [
  {path: '', component: HomepageComponent },
  {path: 'p/:name/:id', component: ViewProductComponent },
  //{path: 'c/:name/:category/:trademark/:page/:search', component: ProductListingComponent },
  //{path: 'favorites', component: FavoritesComponent },
  //{path: 'cart', component: CartComponent },
  //{path: 'profile', component: ProfileComponent },
  //{path: 'profile-product', component: ProfileProductComponent },
  //{path: 'profile-offer', component: ProfileOfferComponent },
  //{path: 'profile-orders', component: ProfileOrdersComponent },
  //{path: 'checkout/:supplier_id', component: CheckoutComponent },
  //{path: 'supplier/:id', component: SupplierComponent },
  //{path: 'about', component: AboutComponent },
  //{path: 'terms', component: TermsComponent },
  //{path: 'privacy-policy', component: PrivacyPolicyComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',useHash: true
  })],
  exports: [(RouterModule)]
})
export class RoutingModule { }
