import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-book-favorite',
  templateUrl: './book-favorite.component.html',
  styleUrls: ['./book-favorite.component.scss']
})
export class BookFavoriteComponent implements OnInit {

  booksListFav: any[] = [];
  constructor(private config :ConfigService,private router:Router) { }

  ngOnInit() {
    this.getAllBookFavs();
  }

  getAllBookFavs(){
    this.config.currentBookFavList.subscribe(item => this.booksListFav = item);
  }

  onNavigateToListBooks(){
    return this.router.navigate(['/books']);
  }

  onRemoveBookFav(id: number){
    if(confirm(`📙 Do you want to delete this book ?`)){
      this.config.removeBookToFavItem(id);
    }
  }
}
