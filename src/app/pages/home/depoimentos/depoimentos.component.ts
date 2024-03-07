import { Component, OnInit } from '@angular/core';
import { CardDepoimentoComponent } from '../../../shared/card-depoimento/card-depoimento.component';
import { DepoimentoService } from '../../../core/services/depoimento.service';
import { Depoimento } from '../../../core/types/depoimento';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [
    CardDepoimentoComponent,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent implements OnInit {
  
  constructor(private serviceDepoimentos : DepoimentoService){}
  ngOnInit(): void {
   this.serviceDepoimentos.listarDepoimentos().subscribe(res => {
    this.depoimentos = res;
    console.log(res);
  });
   
  }

  depoimentos! : Depoimento[];
}
