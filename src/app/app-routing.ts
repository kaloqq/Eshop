import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes} from "./pages/routing";

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
