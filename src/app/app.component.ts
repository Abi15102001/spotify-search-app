import { Component } from '@angular/core';
import { AuthService } from './authservice/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private authService:AuthService){this.getToken()}


ngOnInit(){;
  }

getToken () {
  this.authService.getToken().subscribe({
    next:(res)=>{localStorage.setItem('access_token',res.access_token);
     console.log(res.access_token);
      },
    error:(err)=>{console.log(`error occured${err}`);
    }
   })
    }
}
  
