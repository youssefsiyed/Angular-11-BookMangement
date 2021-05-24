import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/shared/models/book';
import { Categorie } from 'src/app/shared/models/categorie';
import { ApiService } from 'src/app/shared/services/api.service';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  
  books: Array<Book> = [];
  categories: Array<Categorie> = [];
  book = new Book();
  searchBook: string = '';
  limitBook: number = 3;
  showSearchText: boolean = false;
  showBookModal: boolean = false;
  
  constructor(private api: ApiService,private config:ConfigService) {}

  ngOnInit() {
    this.getAllBookByLimitation();
    this.getAllCategories();
  }

  getAllBooks() {
    return this.api.getAllBooks().subscribe(
      (res) => {
        this.books = res;
      },
      (error) => console.log('ERROR: ' + error)
    );
  }

  getAllBookByLimitation(){
    return this.api.getAllBooksByLimit(this.limitBook).subscribe(
      (res) => {
        this.books = res;
      },
      (error) => console.log('ERROR: ' + error)
    );
  }

  getAllCategories() {
    return this.api.getAllCategories().subscribe(
      (res) => {
        this.categories = res;
      },
      (error) => console.log('ERROR: ' + error)
    );
  }

  onSelectCategorie(category: number) {
    if (category != null && category === 0) {
      this.showSearchText = true;
      return this.getAllBooks();
    } else {
      this.showSearchText = false;
      return this.api.getSearchBookByCategory(category).subscribe(
        (res) => {
          this.books = res;
        },
        (error) => console.log('ERROR: ' + error)
      );
    }
  }

  onSelectDetailBook(bookSelected :Book){
    this.showBookModal = true;
    this.book = bookSelected;
  }

  onSelectedShowMore(){
    this.limitBook = 10;
    this.getAllBookByLimitation();
  }

  onSelectedFavorieBook(book: Book){
    if(book) {
      this.config.addBookToFavItem(book);
      confirm(`📙 the ${book.title} is add to you're 💗 book favorites`);
    }
  }

  onSelectedCartBook(book: Book){
    if(book) {
      this.config.addBookToCartItem(book);
      confirm(`📙 the ${book.title} is add to you're 🛒 book carts`);
    }
  }

  onHideBookModal(event: any){
    this.showBookModal = event;
  }
}
