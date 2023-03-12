import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    loadChildren:() =>import('./components/books/books.module').then(x=>x.BooksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
