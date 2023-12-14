import { Component, Input, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';

import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartItem, CartService } from '../services/cart.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaymentMethodService } from '../services/payment-method.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MatIconModule,
    NgxPhosphorIconsModule,
    HeaderComponent,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  cartService = inject(CartService);
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  paymentService = inject(PaymentMethodService);

  form = this.fb.nonNullable.group({
    cep: ['', Validators.required],
    rua: ['', Validators.required],
    numero: ['', Validators.required],
    complemento: [''],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    uf: ['', Validators.required],
  });

  totalItems = computed(() =>
    this.cartService
      .cartItems()
      .reduce((acc, item) => acc + Number(item.coffee.price) * item.amount, 0),
  );

  searchCEP() {
    let cep = this.form.get('cep')?.value ?? '';
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http
          .get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe((data) => this.setFormData(data));
      }
    }
  }

  setFormData(data: any) {
    this.form.patchValue({
      rua: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.localidade,
      uf: data.uf,
    });
  }

  decrement(cartItem: CartItem) {
    if (!(cartItem.amount <= 1))
      this.cartService.updateInCart(cartItem, cartItem.amount - 1);
  }

  increment(cartItem: CartItem) {
    this.cartService.updateInCart(cartItem, cartItem.amount + 1);
  }

  checkForNegativeValues(itemAmount: HTMLInputElement) {
    if (Number(itemAmount.value) < 0)
      itemAmount.value = String(Number(itemAmount.value) * -1);
  }
}
