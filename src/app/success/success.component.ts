import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';
import { PaymentMethodService } from '../services/payment-method.service';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, NgxPhosphorIconsModule],
  templateUrl: './success.component.html',
})
export class SuccessComponent {
  paymentService = inject(PaymentMethodService);
  paymentMethod =
    this.paymentService.paymentMethod === 'CREDIT'
      ? 'CRÉDITO'
      : this.paymentService.paymentMethod === 'DEBIT'
        ? 'DÉBITO'
        : this.paymentService.paymentMethod === 'MONEY'
          ? 'DINHEIRO'
          : 'NÃO SELECIONADO';
}
