import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPromocoesComponent } from './card-promocoes.component';

describe('CardPromocoesComponent', () => {
  let component: CardPromocoesComponent;
  let fixture: ComponentFixture<CardPromocoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPromocoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
