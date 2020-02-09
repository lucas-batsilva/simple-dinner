import { Component, OnInit } from "@angular/core";
import { DataRestauranteService } from "src/app/service/restaurante/data-restaurante.service";
import { Restaurante } from "src/app/model/restaurante";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { ApiRestauranteService } from "src/app/service/restaurante/api-restaurante.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-restaurante-editar",
  templateUrl: "./restaurante-editar.component.html",
  styleUrls: ["./restaurante-editar.component.css"]
})
export class RestauranteEditarComponent implements OnInit {
  constructor(
    private _data: DataRestauranteService,
    private _api: ApiRestauranteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  restaurante: Restaurante;
  formRestaurante: FormGroup;
  carregando: boolean = false;

  ngOnInit() {
    this.formRestaurante = this.formBuilder.group({
      descricao: ["", Validators.required]
    });
    this.getRestaurante();
  }

  getRestaurante() {
    this.restaurante = this._data.getRestaurante();
    this.formRestaurante.setValue({
      descricao: this.restaurante.descricao
    });
  }

  editar(form: NgForm) {
    this.carregando = true;
    this._api.editar(this.restaurante.id, form).subscribe(
      res => {
        this.carregando = false;
        this.router.navigateByUrl("/restaurantes");
      },
      err => {
        console.log(err);
        this.carregando = false;
      }
    );
  }
}
