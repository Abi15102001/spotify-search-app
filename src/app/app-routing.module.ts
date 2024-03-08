import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ArtistalbumsComponent } from './components/artistalbums/artistalbums.component';
import { AlbumsTracksComponent } from './components/albums-tracks/albums-tracks.component';
import { CategoryPlayListComponent } from './pages/home/category-play-list/category-play-list.component';
import { CatPlayItemsComponent } from './pages/home/cat-play-items/cat-play-items.component';



const routes: Routes = [{path:'',component:HomeComponent},{path:'search',component:SearchComponent},{path:'artistAlbums/:id',component:ArtistalbumsComponent},
{path:'albumsTracks/:id',component:AlbumsTracksComponent},{path:'catPlay/:id',component:CategoryPlayListComponent},{path:'catPlayItems/:id',component:CatPlayItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
