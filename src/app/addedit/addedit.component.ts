import { HttpService } from './../http-handler.service';
import { FormGroup ,FormControl , Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {

  private form ;
  id : number;
  user : any;
  load = false;
  constructor(private http: HttpService ,  private route : ActivatedRoute ) { 
    this.route.params.subscribe(params => { this.id = params['id']; });
    if(this.id){
       this.http.getUserById(this.id);
       this.http.user.subscribe( user => {
        this.user = user;
        this.form.patchValue({firstName: this.user.firstName});
        this.form.patchValue({lastName: this.user.lastName});
        this.form.patchValue({domainName: this.user.domainName});
        this.form.patchValue({loginName: this.user.loginName});
        this.form.patchValue({emailAddress: this.user.emailAddress});
        this.form.patchValue({instituteName: this.user.instituteName});
        this.load=true;
      });
  } else {
      this.load = true;
    }
  }

  ngOnInit() {
    this.form = new FormGroup( {
     firstName : new FormControl(),
     lastName: new FormControl(),
     domainName : new FormControl(),
     loginName: new FormControl(),
     emailAddress: new FormControl(),
     instituteName: new FormControl(),
    }
    );
  }

  onSubmit(user) {
    if(this.id) {
      this.http.updateUserById(user , this.user.id);
    } else {
      this.http.addUser(user);
    }
  }

}
