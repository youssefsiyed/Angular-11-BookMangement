import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
// @ts-ignore
bookFavList = new BehaviorSubject(JSON.parse(localStorage.getItem('books_fav')) || []) ;
currentBookFavList = this.bookFavList.asObservable();

// @ts-ignore
bookCartList = new BehaviorSubject(JSON.parse(localStorage.getItem('books_cart')) || []) ;
currentBookCartList = this.bookCartList.asObservable();

constructor() { }

public addBookToFavItem(item: any) {
  // @ts-ignore
  let booksFav= JSON.parse(localStorage.getItem('books_fav')) || [];
  if(booksFav){
    booksFav.push(item);
    localStorage.setItem('books_fav',JSON.stringify(booksFav));
    this.bookFavList.next(booksFav);
  }
 
}

public addBookToCartItem(item: any){
  // @ts-ignore
  let booksCart = JSON.parse(localStorage.getItem('books_cart')) || [];
    booksCart.push(item);
    this.bookCartList.next(booksCart);
    localStorage.setItem('books_cart',booksCart);
}
}
