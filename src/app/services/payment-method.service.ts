import { Injectable } from '@angular/core';

type PaymentMethod = 'CREDIT' | 'DEBIT' | 'MONEY';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService {
  paymentMethod: PaymentMethod = 'CREDIT';
}
