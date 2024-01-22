import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ProductPageComponent} from "./product-page/product-page.component";

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
  },{
    path: 'product/:id',
    component: ProductPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export { routes }
