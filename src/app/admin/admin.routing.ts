import { Routes } from '@angular/router';

const AdminRouting: Routes = [
  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export { AdminRouting };
