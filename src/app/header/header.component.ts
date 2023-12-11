import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, NgxPhosphorIconsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() cart = { items: [] };
}
