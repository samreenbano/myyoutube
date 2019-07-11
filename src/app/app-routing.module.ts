import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingvideosComponent } from './trendingvideos/trendingvideos.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path:'trend',component:TrendingvideosComponent},
  { path:'search', component:SearchComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
