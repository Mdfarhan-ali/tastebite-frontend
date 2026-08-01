import { Routes } from '@angular/router';
import { CustomerLayout } from './layouts/customer-layout/customer-layout';
import { Home } from './features/home/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: CustomerLayout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  }
];