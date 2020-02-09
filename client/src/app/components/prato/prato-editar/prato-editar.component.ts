import { Component, OnInit } from "@angular/core";
import { DataPratoService } from "src/app/service/prato/data-prato.service";
import { Prato } from "src/app/model/prato";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { ApiPratoService } from "src/app/service/prato/api-prato.service";
import { Router } from "@angular/router";
import { Restaurante } from "src/app/model/restaurante";
import { DataRestauranteService } from "src/app/service/restaurante/data-restaurante.service";
import { ApiRestauranteService } from "src/app/service/restaurante/api-restaurante.service";

@Component({
  selector: "app-prato-editar",
  templateUrl: "./prato-editar.component.html",
  styleUrls: ["./prato-editar.component.css"]
})
export class PratoEditarComponent implements OnInit {
  constructor(
    private _data: DataPratoService,
    private _api_restaurante: ApiRestauranteService,
    private _api: ApiPratoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  prato: Prato;
  restaurantes: Restaurante[];
  formPrato: FormGroup;
  carregando: boolean = false;

  ngOnInit() {
    this.formPrato = this.formBuilder.group({
      descricao: ["", Validators.required],
      restaurante: ["", Validators.required],
      valor: ["", Validators.required]
    });
    this.getRestaurantes();
    this.getPrato();
  }

  getRestaurantes() {
    this._api_restaurante.consultar().subscribe(
      res => {
        this.restaurantes = res;
        console.log(this.restaurantes);
      },
      err => {
        console.log(err);
      }
    );
  }

  getPrato() {
    this.prato = this._data.getPrato();
    this.formPrato.get("descricao").setValue(this.prato.descricao);
    this.formPrato
      .get("restaurante")
      .setValue(this.prato.restaurante.descricao);
    this.formPrato.get("valor").setValue(this.prato.valor);
  }

  editar(form: NgForm) {
    this.carregando = true;
    this._api.editar(this.prato.id, form).subscribe(
      res => {
        this.carregando = false;
        this.router.navigateByUrl("/pratos");
      },
      err => {
        console.log(err);
        this.carregando = false;
      }
    );
    console.log(form);
  }
}
