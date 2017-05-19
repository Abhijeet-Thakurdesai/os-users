import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router'; 
import { HttpService } from './../http-handler.service'; 
import { FormGroup ,FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private form ;
  id : number ;
  user : any;
  constructor(private http: HttpService ,private roter:Router , private route : ActivatedRoute ) { 
    this.route.params.subscribe(params => { this.id = params['id']; });
    this.http.getUserById(this.id);
    this.http.user.subscribe( user => {
      this.user = user;
      this.form.patchValue({firstName: this.user.firstName});
      this.form.patchValue({lastName: this.user.lastName});
      this.form.patchValue({domainName: this.user.domainName});
      this.form.patchValue({loginName: this.user.loginName});
      this.form.patchValue({emailAddress: this.user.emailAddress});
      this.form.patchValue({instituteName: this.user.instituteName});
    } );
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

  onSubmit(form) {
    this.http.updateUserById(form,this.user.id);
  }

}
