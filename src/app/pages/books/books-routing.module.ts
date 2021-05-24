import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFavoriteComponent } from './components/book-favorite/book-favorite.component';
import { BookListComponent } from './components/book-list/book-list.component';


const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: '/favorites', component: BookFavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
