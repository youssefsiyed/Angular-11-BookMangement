import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { environment } from 'src/environments/environment';
import { Observable ,of, pipe  } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categorie } from '../models/categorie';
import { Author } from '../models/author';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

getAllBooks(): Observable<Book[]> {
  return this.http.get<Book[]>(`${environment.BASE_URL}/books`);
}

getAllBooksByLimit(limit: number): Observable<Book[]> {
  return this.http.get<Book[]>(`${environment.BASE_URL}/books?_limit=${limit}`);
}

getSearchBookByCategory(categorie: number): Observable<Book[]> {
  return this.http.get<Book[]>(`${environment.BASE_URL}/books?categorieId=${categorie}`);
}

getAllCategories(): Observable<Categorie[]> {
  return this.http.get<Categorie[]>(`${environment.BASE_URL}/catogories`);
}

getAuthorsById(id :number): Observable<Author> {
  return this.http.get<Author>(`${environment.BASE_URL}/authors/${id}`);
}

getUserByUsrnameAndPwd(username: string,password:string): Observable<User[]> {
  return this.http.get<User[]>(`${environment.BASE_URL}/users?username=${username}&password=${password}`);
}

}
