import { LoginComponent } from './login/login.component';
import { LoginModel } from './login.model';
import { Http , Headers ,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router'; 

@Injectable()
export class HttpService{

  flag : Subject<boolean> = new Subject<boolean>();
  users : Subject<any> = new Subject<any>();
  user : Subject<any> = new Subject<any>();
  success_object: any;
  private header: Headers;
  constructor(private http: Http , private router: Router) {

   }

   setHeaders() {
     this.header = new Headers();
     this.header.append('X-OS-API-TOKEN', Cookie.get('token'));
     this.header.append('Content-Type', 'application/json');
   }

  auth(id:string , passwd:string ) {
    let loginObj = new LoginModel(id,passwd);
    console.log(loginObj);
     this.http.post('http://test.openspecimen.org/os-test/rest/ng/sessions',loginObj).subscribe(
      response => {
        this.success_object  = response.json();
        Cookie.set('loginName',this.success_object.loginName,1 );
        Cookie.set('token',this.success_object.token,1 );
        Cookie.set('admin',this.success_object.admin,1 );
        console.log(this.success_object.token);
        this.router.navigate(['/home']);
        this.flag.next(false);
      },
      error => {
        this.flag.next(true);
      }
    );
  }

  getUsers(param:string) {
    this.setHeaders();
    let url='http://test.openspecimen.org/os-test/rest/ng/users';
    if(param != null) {
      url = url + '?searchString='+param;
    }
    this.http.get(url ,{headers: this.header})
    .subscribe(
      response => {
        let obj = response.json();
        this.users.next(obj);
      }
    );
  }

  addUser(user:any) {
    this.setHeaders();
    let url='http://test.openspecimen.org/os-test/rest/ng/users';
    let options = new RequestOptions({ headers: this.header });
    this.http.post(url,JSON.stringify(user), options).subscribe(
      response => {
        alert("New User Created");
        this.router.navigate(['/home']);
      },
      error => {
        alert("User was not  Created: " +error.json()[0].message);
      }
    );
  }

  getUserById(id:number) {
    this.setHeaders();
    let url='http://test.openspecimen.org/os-test/rest/ng/users'+'/'+id;
    this.http.get(url ,{headers: this.header})
    .subscribe(
      response => {
        let obj = response.json();
        this.user.next(obj);
      }
    );
  }

  updateUserById(user,id) {
    this.setHeaders();
    let url='http://test.openspecimen.org/os-test/rest/ng/users'+'/'+id;
    this.http.put(url ,JSON.stringify(user),{headers: this.header})
    .subscribe(
      response => {
        alert("User Updated!");
        this.router.navigate(['/home']);
      },
      error => {
        alert("User was not  Updated: " +error.json()[0].message);
      }
    );
  }

  }



