import { Component, OnInit } from "@angular/core";
import { ApiRestauranteService } from "src/app/service/restaurante/api-restaurante.service";
import { Restaurante } from "src/app/model/restaurante";
import { DataRestauranteService } from "src/app/service/restaurante/data-restaurante.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-restaurantes",
  templateUrl: "./restaurantes.component.html",
  styleUrls: ["./restaurantes.component.css"]
})
export class RestaurantesComponent implements OnInit {
  constructor(
    private _api: ApiRestauranteService,
    private _data: DataRestauranteService,
    private router: Router
  ) {}
  restaurantes: Restaurante[];
  mensagemErro: string;
  carregando: boolean;

  ngOnInit() {
    this._api.consultar().subscribe(
      res => {
        this.restaurantes = res;
        console.log(this.restaurantes);
        this.carregando = false;
      },
      err => {
        console.log(err);
        this.carregando = false;
      }
    );
  }

  irParaEdicao(restaurante: Restaurante) {
    this._data.setRestaurante(restaurante);
    this.router.navigateByUrl("/restaurante-editar");
  }

  excluir(id) {
    this.carregando = true;
    this._api.excluir(id).subscribe(
      res => {
        this.carregando = false;
        this.ngOnInit();
      },
      err => {
        console.log(err);
        this.carregando = false;
      }
    );
  }
}
