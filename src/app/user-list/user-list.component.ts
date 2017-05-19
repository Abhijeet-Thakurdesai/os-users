import { Component, OnInit , Input ,OnChanges } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router'; 
import { HttpService } from './../http-handler.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  userId : string;
  admin : any;
  users : any[];
  load = false;
  constructor(private http_service: HttpService , private router: Router) {
    this.userId = Cookie.get("loginName");
    this.admin = Cookie.get("admin");
    this.http_service.users.subscribe( users => {
      this.users = users ;
      this.load = true;
    } );
  }

  ngOnInit() {
    this.http_service.getUsers(null);
  }

  logout() {
    Cookie.deleteAll();
  }

  add() {
    this.router.navigate(['/addedit']);
  }

   onEnter(search : string) {
     this.http_service.getUsers(search);
   }
   showClient(id) {
     this.router.navigate(['/overview' , id]);
   }

}
