import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleComponent } from '../article/article.component';

const routes: Routes = [
  {
    path: 'article',
    component: ArticleComponent,
    children: [
      {
        path: '',
        component: ArticleListComponent,
      },
      {
        path: 'detail',
        component: ArticleDetailComponent
      }
    ]
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
