import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoSalvarComponent } from './prato-salvar.component';

describe('PratoSalvarComponent', () => {
  let component: PratoSalvarComponent;
  let fixture: ComponentFixture<PratoSalvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoSalvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
