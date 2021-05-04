import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorModel } from 'src/Models/AuthorModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {}

  deleteEntity(id: Number) {
    return this.http.delete('http://erolaksoy.net/api/authors/' + id);
  }

  getAuthorsWithBooks(){
    return this.http.get<AuthorModel[]>('http://erolaksoy.net/api/authors/GetAuthorsWithBook/');
  }

  addEntity(model: AuthorModel) {
    const headerss = new Headers({ 'content-type': 'application/json' });
    const body = JSON.stringify(model);
    console.log(body);
    return this.http.post('http://erolaksoy.net/api/authors/', body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  updateEntity(AuthorModel : AuthorModel){
    const headerss = new Headers({ 'content-type': 'application/json' });
    const body = JSON.stringify(AuthorModel);
    console.log(body);
    return this.http.put("http://erolaksoy.net/api/authors/",body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  getEntity(id : Number){
    return this.http.get<AuthorModel>('http://erolaksoy.net/api/getAuthorById/' + id);
  }

  getAuthors() : Observable<AuthorModel[]>{
    return this.http.get<AuthorModel[]>("http://erolaksoy.net/api/authors")
  }
}
