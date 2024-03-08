import { Component } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private spotifyService:HomeService){}

  ngOnInit(){this.getCategories()}
  
  categories:any;
  getCategories(){
    this.spotifyService.getbrowseCategories().subscribe((data)=>{this.categories=data.categories.items;console.log(this.categories);
    })
  }
}
