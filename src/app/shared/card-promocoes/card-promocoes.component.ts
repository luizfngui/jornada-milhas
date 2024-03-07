import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-card-promocoes',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './card-promocoes.component.html',
  styleUrl: './card-promocoes.component.scss'
})
export class CardPromocoesComponent {
  @Input() city : string = 'Veneza';
  @Input() price : string = 'RS 500'
   
}
