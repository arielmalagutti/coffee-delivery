import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxPhosphorIconsModule, MatIconModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
