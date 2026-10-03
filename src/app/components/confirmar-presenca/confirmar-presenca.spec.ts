import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPresenca } from './confirmar-presenca';

describe('ConfirmarPresenca', () => {
  let component: ConfirmarPresenca;
  let fixture: ComponentFixture<ConfirmarPresenca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarPresenca],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmarPresenca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
