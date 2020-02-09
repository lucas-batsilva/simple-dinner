export class Restaurante {
  id: number;
  descricao: string;

  constructor(params?: Partial<Restaurante>) {
    if (params) {
      this.id = params.id;
      this.descricao = params.descricao;
    }
  }
}
