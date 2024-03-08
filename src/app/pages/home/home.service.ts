import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  authtoken =localStorage.getItem('access_token') as string;

   private authKey =this.authtoken;
  private httpOptions ={
    headers:new HttpHeaders({
      'Accept': 'application/json',
      'content-type':'application/json',
      'Authorization':`Bearer ${this.authKey}`
    })
  }

  constructor(private http:HttpClient) { }

  getbrowseCategories():Observable<any>{
    // let categoriesUrl =`https://api.spotify.com/v1/browse/${category}`;
    let categoriesUrl =`https://api.spotify.com/v1/browse/categories?limit=50`;
    return this.http.get<any>(categoriesUrl,this.httpOptions);
  }

  getCategoryPlayList(categoryId:any):Observable<any>{
    let CategoryPlayListUrl=`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?limit=30`
    return this.http.get<any>(CategoryPlayListUrl,this.httpOptions);
  }

  getTracks(playListId:any):Observable<any>{
    let tracksUrl =`https://api.spotify.com/v1/playlists/${playListId}/tracks`
    // let tracksUrl =`https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM`
    return this.http.get<any>(tracksUrl,this.httpOptions);
  }

}
