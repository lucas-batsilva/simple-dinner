import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Prato } from "src/app/model/prato";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "http://localhost:8080/pratos";

@Injectable({
  providedIn: "root"
})
export class ApiPratoService {
  constructor(private http: HttpClient) {}

  consultar(): Observable<Prato[]> {
    return this.http.get<Prato[]>(apiUrl).pipe(
      tap(pratos => console.log("retornou os pratos")),
      catchError(this.tratarErro("consultar", []))
    );
  }

  consultarPorId(id: number): Observable<Prato> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Prato>(url).pipe(
      tap(_ => console.log(`retorunou o prato id=${id}`)),
      catchError(this.tratarErro<Prato>(`consultarPorId id=${id}`))
    );
  }

  salvar(prato): Observable<Prato> {
    const url = `${apiUrl}/salvar`;
    return this.http.post<Prato>(url, prato, httpOptions).pipe(
      tap((prato: Prato) => console.log(`adicionou o prato id=${prato.id}`)),
      catchError(this.tratarErro<Prato>("salvar"))
    );
  }

  editar(id, prato): Observable<any> {
    const url = `${apiUrl}/editar/${id}`;
    return this.http.post(url, prato, httpOptions).pipe(
      tap(_ => console.log(`editou o prato =${id}`)),
      catchError(this.tratarErro<any>("editar"))
    );
  }

  excluir(id): Observable<Prato> {
    const url = `${apiUrl}/excluir/${id}`;

    return this.http.put<Prato>(url, httpOptions).pipe(
      tap(_ => console.log(`excluiu o prato =${id}`)),
      catchError(this.tratarErro<Prato>("excluir"))
    );
  }

  private tratarErro<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
