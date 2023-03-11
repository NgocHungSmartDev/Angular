import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './compotents/article-detail/article-detail.component';
import { ArticleListComponent } from './compotents/article-list/article-list.component';

const routes: Routes = [
  {
    path: 'detail',
    component: ArticleDetailComponent
  },
  {
    path: '',
    component:ArticleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
