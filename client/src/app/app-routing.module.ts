import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PratosComponent } from "./components/prato/pratos/pratos.component";
import { PratoSalvarComponent } from "./components/prato/prato-salvar/prato-salvar.component";
import { PratoEditarComponent } from "./components/prato/prato-editar/prato-editar.component";
import { RestaurantesComponent } from "./components/restaurante/restaurantes/restaurantes.component";
import { RestauranteSalvarComponent } from "./components/restaurante/restaurante-salvar/restaurante-salvar.component";
import { RestauranteEditarComponent } from "./components/restaurante/restaurante-editar/restaurante-editar.component";
import { InicialComponent } from "./components/inicial/inicial.component";

const routes: Routes = [
  {
    path: "inicial",
    component: InicialComponent,
    data: { title: "Página inicial" }
  },
  {
    path: "pratos",
    component: PratosComponent,
    data: { title: "Lista de pratos" }
  },
  {
    path: "prato-salvar",
    component: PratoSalvarComponent,
    data: { title: "Salvar prato" }
  },
  {
    path: "prato-editar",
    component: PratoEditarComponent,
    data: { title: "Editar prato" }
  },
  {
    path: "restaurantes",
    component: RestaurantesComponent,
    data: { title: "Lista de Restaurantes" }
  },
  {
    path: "restaurante-salvar",
    component: RestauranteSalvarComponent,
    data: { title: "Salvar restaurante" }
  },
  {
    path: "restaurante-editar",
    component: RestauranteEditarComponent,
    data: { title: "Editar restaurante" }
  },
  { path: "", redirectTo: "/inicial", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
