import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxPhosphorIconsModule, MatIconModule, HeaderComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
