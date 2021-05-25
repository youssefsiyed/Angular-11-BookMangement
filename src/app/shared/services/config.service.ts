import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from './api.service';

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

user = new BehaviorSubject<User>({
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  token: '',
});
currentUser = this.user.asObservable();

constructor(private api: ApiService ,private router:Router) { }

public addBookToFavItem(item: any) {
  // @ts-ignore
  let booksFav= JSON.parse(localStorage.getItem('books_fav')) || [];
  if(booksFav){
    booksFav.push(item);
    localStorage.setItem('books_fav',JSON.stringify(booksFav));
    this.bookFavList.next(booksFav);
  }
}

public removeBookToFavItem(id: number) {
  // @ts-ignore
  let booksFav= JSON.parse(localStorage.getItem('books_fav')) || [];
  if(booksFav){
    let books =booksFav.filter((book:any) => book.id != id)
    localStorage.setItem('books_fav',JSON.stringify(books));
    this.bookFavList.next(books);
  }
}

public addBookToCartItem(item: any){
  // @ts-ignore
  let booksCart = JSON.parse(localStorage.getItem('books_cart')) || [];
    booksCart.push(item);
    localStorage.setItem('books_cart',JSON.stringify(booksCart));
    this.bookCartList.next(booksCart);
}

public removeBookToCartItem(id: number) {
  // @ts-ignore
  let booksCart= JSON.parse(localStorage.getItem('books_cart')) || [];
  if(booksCart){
    let books =booksCart.filter((book:any) => book.id != id)
    localStorage.setItem('books_cart',JSON.stringify(books));
    this.bookCartList.next(books);
  }
}

public login(username: string, password: string){
  if(username != "" && password != ""){
    this.api.getUserByUsrnameAndPwd(username,password).subscribe(
      (res) => {
        if(res.length <= 0){
          alert('😢 the user is Not found !!');
          return;
        }
        this.user.next(res[0]);
        this.router.navigate(['/home']);
      },
      (error) => console.log('ERROR: ' + error)
    );
  }
}

public logout(){
  if(confirm('🔐 do you want to logout from the app !')){
    this.user.next({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      token: '',
    });
  }
 
}
}
