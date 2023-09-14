import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowListingComponent } from './show-listing/show-listing.component';
import { MoreComponent } from './show/more/more.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'shows', 
    component: ShowListingComponent,
    children: [{path: 'more/:id', component:MoreComponent}]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
