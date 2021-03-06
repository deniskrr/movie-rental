import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {CreateMovieComponent} from "./create-movie/create-movie.component";

const routes: Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'create', component: CreateMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
