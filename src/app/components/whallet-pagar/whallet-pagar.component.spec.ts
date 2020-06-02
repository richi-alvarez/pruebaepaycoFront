import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhalletPagarComponent } from './whallet-pagar.component';

describe('WhalletPagarComponent', () => {
  let component: WhalletPagarComponent;
  let fixture: ComponentFixture<WhalletPagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhalletPagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhalletPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
