import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {CategoryPageComponent} from "./category-page/category-page.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'p/:name/:id',
    component: ProductPageComponent
  },
  {
    path: 'c/:name/:category/:trademark/:page/:search',
    component: CategoryPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export { routes }
