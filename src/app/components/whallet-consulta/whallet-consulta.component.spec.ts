import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhalletConsultaComponent } from './whallet-consulta.component';

describe('WhalletConsultaComponent', () => {
  let component: WhalletConsultaComponent;
  let fixture: ComponentFixture<WhalletConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhalletConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhalletConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
