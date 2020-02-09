import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PratosComponent } from "./components/prato/pratos/pratos.component";
import { PratoSalvarComponent } from "./components/prato/prato-salvar/prato-salvar.component";
import { PratoEditarComponent } from "./components/prato/prato-editar/prato-editar.component";
import { RestaurantesComponent } from "./components/restaurante/restaurantes/restaurantes.component";
import { RestauranteSalvarComponent } from "./components/restaurante/restaurante-salvar/restaurante-salvar.component";
import { RestauranteEditarComponent } from "./components/restaurante/restaurante-editar/restaurante-editar.component";
import { InicialComponent } from "./components/inicial/inicial.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PratosComponent,
    PratoSalvarComponent,
    PratoEditarComponent,
    RestaurantesComponent,
    RestauranteSalvarComponent,
    RestauranteEditarComponent,
    PratoSalvarComponent,
    PratoEditarComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
