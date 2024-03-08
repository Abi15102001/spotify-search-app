import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-cat-play-items',
  templateUrl: './cat-play-items.component.html',
  styleUrls: ['./cat-play-items.component.css']
})
export class CatPlayItemsComponent {
playListId:any;
constructor(private route:ActivatedRoute, private spotifyService:HomeService,private navigate:Router){
  this.route.paramMap.subscribe((id)=>{this.playListId = id.get('id');console.log(this.playListId);
  })
}

ngOnInit(){
  this.getPlayListItems()
}

categoryProfile:any;
getCategotyProfile(){
  this.spotifyService.getbrowseCategories()
}

playListTracks:any;
getPlayListItems(){
  this.spotifyService.getTracks(this.playListId).subscribe((data)=>{this.playListTracks=data.items;console.log(this.playListTracks);
  })
}

backNavigator(){
  this.navigate.navigate(['/'])
}

}
