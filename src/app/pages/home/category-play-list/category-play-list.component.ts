import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-category-play-list',
  templateUrl: './category-play-list.component.html',
  styleUrls: ['./category-play-list.component.css']
})
export class CategoryPlayListComponent {
categoryId:any;
  constructor(private route:ActivatedRoute,private spotifyService:HomeService,private navigate:Router){ 
this.route.paramMap.subscribe((id)=>(this.categoryId=id.get('id')));
   }

   ngOnInit(){
    this.getCategoriesPlayList();
    
   }
   playLists:any;
getCategoriesPlayList(){
this.spotifyService.getCategoryPlayList(this.categoryId).subscribe((data)=>{this.playLists =data.playlists.items;console.log(this.playLists); 
})
}

backNavigator(){
  this.navigate.navigate(['/']);
}

}
