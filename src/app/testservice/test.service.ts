import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {
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

  public getAllArtist(search:string):Observable<any>{
    let artistUrl =`https://api.spotify.com/v1/search?q=${search}&type=artist`;
    // let artistUrl =`https://api.spotify.com/v1/search?q=${search}&type=album%2Ctrack%2Cartist`;
    // https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album%2Ctrack%2Cartist
    return this.http.get<any>(artistUrl,this.httpOptions);
  }

  public getArtistProfile(artistId: any):Observable<any>{
    let ArtistIdUrl =`https://api.spotify.com/v1/artists/${artistId}`;
    return this.http.get<any>(ArtistIdUrl,this.httpOptions);
  }

 public getArtistAlbums(artistId: any):Observable<any>{
    let ArtistIdUrl =`https://api.spotify.com/v1/artists/${artistId}/albums?limit=30`;
    return this.http.get<any>(ArtistIdUrl,this.httpOptions);
  }

  public getSingleAlbum(albumsTracksId:any):Observable<any>{
    let SingleAlbumUrl =`https:api.spotify.com/v1/albums/${albumsTracksId}`;
    return this.http.get<any>(SingleAlbumUrl,this.httpOptions);
  }

//  public getAlbumsTracks(albumsTracksId: any):Observable<any>{
//     let AlbumsTracksUrl =`https://api.spotify.com/v1/albums/${albumsTracksId}/tracks`;
//      return this.http.get<any>(AlbumsTracksUrl,this.httpOptions);
//   }
}
