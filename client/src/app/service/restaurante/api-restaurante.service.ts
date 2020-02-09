import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Restaurante } from "src/app/model/restaurante";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "http://localhost:8080/restaurantes";

@Injectable({
  providedIn: "root"
})
export class ApiRestauranteService {
  constructor(private http: HttpClient) {}

  consultar(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(apiUrl).pipe(
      tap(restaurantes => console.log("retornou os restaurantes")),
      catchError(this.tratarErro("consultar", []))
    );
  }

  consultarPorId(id: number): Observable<Restaurante> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Restaurante>(url).pipe(
      tap(_ => console.log(`retorunou o restaurante id=${id}`)),
      catchError(this.tratarErro<Restaurante>(`consultarPorId id=${id}`))
    );
  }

  salvar(restaurante): Observable<Restaurante> {
    const url = `${apiUrl}/salvar`;
    return this.http.post<Restaurante>(url, restaurante, httpOptions).pipe(
      tap((restaurante: Restaurante) =>
        console.log(`adicionou o restaurante id=${restaurante.id}`)
      ),
      catchError(this.tratarErro<Restaurante>("salvar"))
    );
  }

  editar(id, restaurante): Observable<any> {
    const url = `${apiUrl}/editar/${id}`;
    return this.http.post(url, restaurante, httpOptions).pipe(
      tap(_ => console.log(`editou o restaurante =${id}`)),
      catchError(this.tratarErro<any>("editar"))
    );
  }

  excluir(id): Observable<Restaurante> {
    const url = `${apiUrl}/excluir/${id}`;

    return this.http.put<Restaurante>(url, httpOptions).pipe(
      tap(_ => console.log(`excluiu o restaurante =${id}`)),
      catchError(this.tratarErro<Restaurante>("excluir"))
    );
  }

  private tratarErro<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
