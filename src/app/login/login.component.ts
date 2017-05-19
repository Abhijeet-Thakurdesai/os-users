import { HttpService } from './../http-handler.service';
import { FormGroup , FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errMessage : boolean = false;

  constructor(private http_service: HttpService) {
    this.http_service.flag.subscribe( flag => {
      this.errMessage = flag ;
    } );
   }

  ngOnInit() {
  }

  login(id,pass): void {
    this.http_service.auth(id,pass);
  }

}
