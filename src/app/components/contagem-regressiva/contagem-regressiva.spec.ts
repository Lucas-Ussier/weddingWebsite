import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContagemRegressiva } from './contagem-regressiva';

describe('ContagemRegressiva', () => {
  let component: ContagemRegressiva;
  let fixture: ComponentFixture<ContagemRegressiva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContagemRegressiva],
    }).compileComponents();

    fixture = TestBed.createComponent(ContagemRegressiva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
