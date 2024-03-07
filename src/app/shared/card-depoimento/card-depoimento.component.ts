import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Depoimento } from '../../core/types/depoimento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-depoimento',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
    
  ],
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.scss'
})
export class CardDepoimentoComponent {
  @Input() depoimento! : Depoimento;
}
