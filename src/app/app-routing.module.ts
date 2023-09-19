import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowListingComponent } from './show-listing/show-listing.component';
import { ShowComponent } from './show/show.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'show', component: ShowComponent },
  { path: 'shows', component: ShowListingComponent },
  { path: 'more/:id', component: MoreComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
