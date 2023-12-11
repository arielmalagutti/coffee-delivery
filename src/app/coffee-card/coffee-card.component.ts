import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [MatIconModule, NgxPhosphorIconsModule],
  templateUrl: './coffee-card.component.html',
})
export class CoffeeCardComponent {
  @Input() img = { path: '', alt: '' };

  @Input() tags = [''];

  @Input() name = '';
  @Input() description = '';
  @Input() price = '';
}
