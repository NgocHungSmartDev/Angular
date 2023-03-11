import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleListComponent } from '../article-list/article-list.component';

const routes: Routes = [
  {
    path: 'article',
    component: ArticleListComponent,
  },
  {
    path: 'article/:slug',
    component: ArticleDetailComponent,
  },
];

@NgModule({
  declarations: [ArticleDetailComponent, ArticleListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule], 
})
export class ArticleModuleModule { }
