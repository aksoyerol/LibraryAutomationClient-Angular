import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { BorrowbookComponent } from './borrowbook/borrowbook.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'user', component: UserComponent },
  { path: 'borrowbook', component: BorrowbookComponent},
  { path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
