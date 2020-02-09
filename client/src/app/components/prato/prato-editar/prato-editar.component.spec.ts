import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoEditarComponent } from './prato-editar.component';

describe('PratoEditarComponent', () => {
  let component: PratoEditarComponent;
  let fixture: ComponentFixture<PratoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
