import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  { path: 's', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component: SuccessComponent },
];
