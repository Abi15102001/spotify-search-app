import { Component } from '@angular/core';
import { TestService } from 'src/app/testservice/test.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

 constructor(private testservice: TestService){}

 ngOnInit(){}

  search:string ='';
  artists:any;
 searchArtist(){
this.testservice.getAllArtist(this.search).subscribe((data)=>{
this.artists =data.artists.items;
console.log(this.artists);
})
 }

}


