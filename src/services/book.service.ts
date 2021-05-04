import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from 'src/Models/BookModel';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getDataFromApi(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>('http://erolaksoy.net/api/books');
  }

  deleteEntity(id: Number) {
    return this.http.delete('http://erolaksoy.net/api/books/' + id);
  }

  addEntity(model: BookModel) {
    const headerss = new Headers({ 'content-type': 'application/json' });
    const body = JSON.stringify(model);
    console.log(body);
    return this.http.post('http://erolaksoy.net/api/books/', body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  updateEntity(bookModel : BookModel){
    const headerss = new Headers({ 'content-type': 'application/json' });
    const body = JSON.stringify(bookModel);
    console.log(body);
    return this.http.put("http://erolaksoy.net/api/books/",body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  getEntity(id : Number){
    return this.http.get<BookModel>('http://erolaksoy.net/api/books/getBookById/' + id);
  }
}
