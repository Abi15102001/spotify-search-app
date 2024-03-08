import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/testservice/test.service';

@Component({
  selector: 'app-artistalbums',
  templateUrl: './artistalbums.component.html',
  styleUrls: ['./artistalbums.component.css']
})
export class ArtistalbumsComponent {

  constructor(private route:ActivatedRoute,private artistService:TestService,private navigate:Router){
    this.route.paramMap.subscribe((id) => {this.artistId =id.get('id');
  });
  }

  artistId:any='';
 ngOnInit(){ 
  this.getArtistProfile();   
  this.getArtistAlbums();}

artistProfile:any;
getArtistProfile(){
  this.artistService.getArtistProfile(this.artistId).subscribe((data)=>{this.artistProfile=data ;console.log(this.artistProfile);}
  )
}

     artistAlbums:any;
  getArtistAlbums(){
    this.artistService.getArtistAlbums(this.artistId).subscribe((data)=>{this.artistAlbums =data.items;
    console.log(this.artistAlbums);
    })
  }

  back(){
this.navigate.navigate([`/search`])
  }
}
