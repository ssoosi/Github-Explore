import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'repository/:owner/:repo', component: RepositoryDetailsComponent },
  { path: 'repository/:owner/:repo/issues', component: IssuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
