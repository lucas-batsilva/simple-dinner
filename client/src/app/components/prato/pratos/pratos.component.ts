import { Component, OnInit } from "@angular/core";
import { ApiPratoService } from "src/app/service/prato/api-prato.service";
import { Prato } from "src/app/model/prato";
import { DataPratoService } from "src/app/service/prato/data-prato.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pratos",
  templateUrl: "./pratos.component.html",
  styleUrls: ["./pratos.component.css"]
})
export class PratosComponent implements OnInit {
  constructor(
    private _api: ApiPratoService,
    private _data: DataPratoService,
    private router: Router
  ) {}
  pratos: Prato[];
  mensagemErro: string;
  carregando: boolean;

  ngOnInit() {
    this._api.consultar().subscribe(
      res => {
        this.pratos = res;
        console.log(this.pratos);
        this.carregando = false;
      },
      err => {
        console.log(err);
        this.carregando = false;
      }
    );
  }

  irParaEdicao(prato: Prato) {
    this._data.setPrato(prato);
    this.router.navigateByUrl("/prato-editar");
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
