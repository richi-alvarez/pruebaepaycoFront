import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhalletRecargaComponent } from './whallet-recarga.component';

describe('WhalletRecargaComponent', () => {
  let component: WhalletRecargaComponent;
  let fixture: ComponentFixture<WhalletRecargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhalletRecargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhalletRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
