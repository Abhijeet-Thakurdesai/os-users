import { HttpService } from './../http-handler.service';
import { FormGroup ,FormControl , Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private form ;

  constructor(private http_service: HttpService ) { }

  ngOnInit() {
    this.form = new FormGroup( {
     firstName : new FormControl(''),
     lastName: new FormControl(''),
     domainName : new FormControl('openspecimen'),
     loginName: new FormControl(''),
     emailAddress: new FormControl(''),
     instituteName: new FormControl('Krishagni'),
    }
    );
  }

  onSubmit(form) {
    this.http_service.addUser(form);
  }

}
