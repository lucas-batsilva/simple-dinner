import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ApiRestauranteService } from "src/app/service/restaurante/api-restaurante.service";

@Component({
  selector: "app-restaurante-salvar",
  templateUrl: "./restaurante-salvar.component.html",
  styleUrls: ["./restaurante-salvar.component.css"]
})
export class RestauranteSalvarComponent implements OnInit {
  formRestaurante: FormGroup;
  carregando = false;
  constructor(
    private router: Router,
    private _api: ApiRestauranteService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formRestaurante = this.formBuilder.group({
      descricao: ["", Validators.required]
    });
  }

  salvar(form: NgForm) {
    this.carregando = true;
    this._api.salvar(form).subscribe(
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
