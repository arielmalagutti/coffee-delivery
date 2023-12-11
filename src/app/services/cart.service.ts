import { Injectable, signal } from '@angular/core';
import { Coffee } from '../home/home.component';

export type CartItem = { coffee: Coffee; amount: number };

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([
    {
      coffee: {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        tags: ['Tradicional'],
        price: '9.90',
        img: {
          path: '../../assets/expresso.png',
          alt: 'Expresso Tradicional',
        },
      },
      amount: 1,
    },
    {
      coffee: {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        tags: ['Tradicional'],
        price: '19.90',
        img: {
          path: '../../assets/americano.png',
          alt: 'Expresso Americano',
        },
      },
      amount: 2,
    },
  ]);

  addToCart(coffee: Coffee, amount: number) {
    this.cartItems.update((coffees) => [...coffees, { coffee, amount }]);
  }

  removeFromCart(cartItem: CartItem) {
    this.cartItems.update((items) =>
      items.filter((item) => item.coffee.name !== cartItem.coffee.name),
    );
  }

  updateInCart(cartItem: CartItem, amount: number) {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.coffee.name === cartItem.coffee.name
          ? { coffee: cartItem.coffee, amount }
          : item,
      ),
    );
  }
}
