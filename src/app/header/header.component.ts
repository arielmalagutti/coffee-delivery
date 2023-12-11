import { Component, Input, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, NgxPhosphorIconsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() cart = { items: [] };

  cartService = inject(CartService);

  router = inject(Router);
}
