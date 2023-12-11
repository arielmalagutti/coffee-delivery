import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [MatIconModule, NgxPhosphorIconsModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {}
