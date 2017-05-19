import { Router } from '@angular/router';
import { HttpService } from './http-handler.service';
import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpSvc: HttpService , private router: Router) {
      if( Cookie.get("token") ) {
      console.log("cookie found");
    } else {
      console.log("cookie not found");
      this.router.navigate(["/login"]);
    }
  }
}
