import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padrinhos } from './padrinhos';

describe('Padrinhos', () => {
  let component: Padrinhos;
  let fixture: ComponentFixture<Padrinhos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Padrinhos],
    }).compileComponents();

    fixture = TestBed.createComponent(Padrinhos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
