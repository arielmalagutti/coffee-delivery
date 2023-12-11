import {
  Component,
  Input,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';
import { CartService } from '../services/cart.service';
import { Coffee } from '../home/home.component';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [MatIconModule, NgxPhosphorIconsModule],
  templateUrl: './coffee-card.component.html',
})
export class CoffeeCardComponent {
  cartService = inject(CartService);

  @Input() coffee!: Coffee;

  amount: WritableSignal<number> = signal(1);

  decrement() {
    this.amount.set(this.amount() - 1);
  }

  increment() {
    this.amount.set(this.amount() + 1);
  }
}
