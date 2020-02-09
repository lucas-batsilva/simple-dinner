import { Restaurante } from "./restaurante";

export class Prato {
  id: number;
  restaurante: Restaurante;
  descricao: string;
  valor: number;

  constructor(params?: Partial<Prato>) {
    if (params) {
      this.id = params.id;
      this.restaurante = params.restaurante;
      this.descricao = params.descricao;
      this.valor = params.valor;
    }
  }
}
