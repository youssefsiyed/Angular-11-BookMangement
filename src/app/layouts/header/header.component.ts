import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  booksListFav: string | any[] | null = [];
  booksListCart: string | any[] | null = [];

  constructor(private router:Router, private config:ConfigService) { }

  ngOnInit() {
    this.config.currentBookFavList.subscribe(item => this.booksListFav = item);
    this.config.currentBookCartList.subscribe(item => this.booksListCart = item);
  }

  onNavigateToHome() {
   return this.router.navigate(['/home']);
  }

  onNavigateToBookList() {
    return this.router.navigate(['/books']);
  }

  onNavigateToBookFavList() {
    return this.router.navigate(['/favorites']);
  }
  
  onNavigateToBookCartList() {
    return this.router.navigate(['/shopping']);
  }
}
