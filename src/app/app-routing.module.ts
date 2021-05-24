import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule)
},
{
  path: 'books',
  loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
