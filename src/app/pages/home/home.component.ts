import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { CardComponent } from '../../shared/card/card.component';
import { CardPromocoesComponent } from '../../shared/card-promocoes/card-promocoes.component';
import { CardDepoimentoComponent } from '../../shared/card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from '../../shared/form-busca/form-busca.component';
import { PromocaoService } from '../../core/services/promocao.service';
import { HttpClientModule } from '@angular/common/http';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    CardComponent,
    CardPromocoesComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    HttpClientModule,
    PromocoesComponent,
    CardBuscaComponent,
    DepoimentosComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor( private servicePromocao: PromocaoService){
    
  }
  ngOnInit(): void {
    
  }
}
