import { Component, Input } from '@angular/core';
import { Promocao } from '../../../core/types/promocao';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss'
})
export class CardBuscaComponent {
  @Input() promocao!: Promocao;
}
