import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/testservice/test.service';

@Component({
  selector: 'app-albums-tracks',
  templateUrl: './albums-tracks.component.html',
  styleUrls: ['./albums-tracks.component.css']
})
export class AlbumsTracksComponent {

  albumsTracksId:any;
  constructor(private route:ActivatedRoute,private albumTracksService:TestService,private navigate:Router){
    this.route.paramMap.subscribe((id)=>{this.albumsTracksId=id.get('id')})
  }

  ngOnInit(){
    this.getSingleAlbum();
    // this.getAlbumsTracks();
  }
album:any;
tracks:any;
artistId:any
getSingleAlbum(){
  this.albumTracksService.getSingleAlbum(this.albumsTracksId).subscribe((data)=>{this.album =data;console.log(this.album);
    this.tracks = data.tracks.items;
    this.artistId=data.artists[0].id;
    console.log(this.artistId);
    
    console.log();
    
  })
}

back(){
   this.navigate.navigate([`/artistAlbums/${this.artistId}`])
}

// albumTracks:any;
//   getAlbumsTracks(){
//     this.albumTracksService.getAlbumsTracks(this.albumsTracksId).subscribe((data)=>{this.albumTracks=data.items;console.log(this.albumTracks);
//     })
//   }

}
