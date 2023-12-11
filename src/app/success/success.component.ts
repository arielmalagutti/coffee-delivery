import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, NgxPhosphorIconsModule],
  templateUrl: './success.component.html',
})
export class SuccessComponent {}
