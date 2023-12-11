import { Component, WritableSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';

import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';

import COFFEES from '../../storage/COFFEES.json';

export type Coffee = {
  name: string;
  description: string;
  tags: string[];
  price: string;
  img: {
    path: string;
    alt: string;
  };
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgxPhosphorIconsModule,
    MatIconModule,
    HeaderComponent,
    HeroSectionComponent,
    CoffeeCardComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  stringifiedCoffees = JSON.stringify(COFFEES);
  coffeeMenu: Coffee[] = JSON.parse(this.stringifiedCoffees);
}
