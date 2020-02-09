import { Injectable } from "@angular/core";
import { Restaurante } from "src/app/model/restaurante";

@Injectable({
  providedIn: "root"
})
export class DataRestauranteService {
  private restaurante: Restaurante;

  constructor() {}

  getRestaurante() {
    return this.restaurante;
  }

  setRestaurante(restaurante: Restaurante) {
    this.restaurante = restaurante;
  }
}
