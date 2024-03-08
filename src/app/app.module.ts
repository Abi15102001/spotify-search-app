import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './authservice/auth.service';
import { TestService } from './testservice/test.service';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArtistalbumsComponent } from './components/artistalbums/artistalbums.component';
import { AlbumsTracksComponent } from './components/albums-tracks/albums-tracks.component';
import { CategoryPlayListComponent } from './pages/home/category-play-list/category-play-list.component';
import { CatPlayItemsComponent } from './pages/home/cat-play-items/cat-play-items.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    TopNavComponent,
    ArtistalbumsComponent,
    AlbumsTracksComponent,
    CategoryPlayListComponent,
    CatPlayItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatGridListModule,FormsModule,ReactiveFormsModule
  ],
  providers: [AuthService,TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
