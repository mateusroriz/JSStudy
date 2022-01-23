import { Comentario, Comentarios } from './comentarios';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpClient : HttpClient) {}

    buscaComentario(id: number ): Observable<Comentarios>{
        return this.httpClient.get<Comentarios>(`${API}/photos/${id}/comments`);
    }

    incluiComentario(id: number, commentText: string) : Observable<Comentario>{
      return this.httpClient.post<Comentario>(`${API}/photos/${id}/comments`, {
        commentText
      });
    }
}
