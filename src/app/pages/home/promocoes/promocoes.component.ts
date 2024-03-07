import { Component, OnInit } from '@angular/core';
import { CardBuscaComponent } from '../card-busca/card-busca.component';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Promocao } from '../../../core/types/promocao';
import { PromocaoService } from '../../../core/services/promocao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promocoes',
  standalone: true,
  imports: [
    CardBuscaComponent,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './promocoes.component.html',
  styleUrl: './promocoes.component.scss'
})
export class PromocoesComponent implements OnInit {
  
  promocoes!: Promocao[];

  constructor( private servicePromocao : PromocaoService){

  }
  
  private apiUrl = environment.apiUrl;

  
  ngOnInit(): void {
    this.servicePromocao.list().subscribe(res=> this.promocoes= res)
  }

}
