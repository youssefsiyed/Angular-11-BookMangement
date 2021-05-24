import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/shared/services/filter.pipe';
import { BookModalComponent } from './components/book-modal/book-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ],
  declarations: [ BookListComponent ,BookModalComponent, FilterPipe],
  exports:      [ BookListComponent ,BookModalComponent]
})
export class BooksModule { }