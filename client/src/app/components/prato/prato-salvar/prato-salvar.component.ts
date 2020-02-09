import { Component, OnInit } from "@angular/core";
import { Restaurante } from "src/app/model/restaurante";
import { ApiRestauranteService } from "src/app/service/restaurante/api-restaurante.service";
import { Router } from "@angular/router";
import { ApiPratoService } from "src/app/service/prato/api-prato.service";
import { FormBuilder, Validators, FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "app-prato-salvar",
  templateUrl: "./prato-salvar.component.html",
  styleUrls: ["./prato-salvar.component.css"]
})
export class PratoSalvarComponent implements OnInit {
  restaurantes: Restaurante[];
  idRestauranteSelecionado: number;
  carregando = false;
  formPrato: FormGroup;

  constructor(
    private _api_restaurante: ApiRestauranteService,
    private router: Router,
    private _api: ApiPratoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getRestaurantes();
    this.formPrato = this.formBuilder.group({
      descricao: ["", Validators.required],
      restaurante: ["", Validators.required],
      valor: ["", Validators.required]
    });
    console.log(this.restaurantes);
  }

  /*setSelecionado(restaurante) {
    this.idRestauranteSelecionado = restaurante.id;
  }*/

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

  salvar(form: NgForm) {
    this._api.salvar(form).subscribe(
      res => {
        this.carregando = false;
        this.router.navigateByUrl("/pratos");
      },
      err => {
        console.log(err);
        this.carregando = false;
      }
    );
  }
}
