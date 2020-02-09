import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RestauranteSalvarComponent } from "./restaurante-salvar.component";

describe("RestauranteSalvarComponent", () => {
  let component: RestauranteSalvarComponent;
  let fixture: ComponentFixture<RestauranteSalvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteSalvarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
