import { Injectable } from "@angular/core";
import { Prato } from "src/app/model/prato";

@Injectable({
  providedIn: "root"
})
export class DataPratoService {
  private prato: Prato;

  constructor() {}

  getPrato() {
    return this.prato;
  }

  setPrato(prato: Prato) {
    this.prato = prato;
  }
}
