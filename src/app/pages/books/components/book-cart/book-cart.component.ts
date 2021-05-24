import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.scss'],
})
export class BookCartComponent implements OnInit {
  bookCartList: any[] = [];
  bookQte:number = 1;
  constructor(private router: Router, private config: ConfigService) {}

  ngOnInit() {
    this.getAllBookShoppingCart();
  }

  public getAllBookShoppingCart() {
    return this.config.currentBookCartList.subscribe((item) => this.bookCartList =item);
  }

  public onRemoveBookShoppingCart(id :number){
    if(confirm(`📙 Do you want to delete this book ?`)){
      this.config.removeBookToCartItem(id);
      this.getAllBookShoppingCart();
      this.getTotalPrice();
    }
  }

  public getTotalPrice() {  
    if (this.bookCartList) {  
        return this.bookCartList.map(item => item.price*this.bookQte).reduce((a, value) => a + value, 0); 
    }  
    return 0;  
  } 

  public onChangeBookQte(event:any){
    this.bookQte =parseInt(event);
    this.getTotalPrice();
  }

  public onNavigateToListBooks(){
    this.router.navigate(['/books']);
  }
  
}
