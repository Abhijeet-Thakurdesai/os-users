import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpService } from './../http-handler.service';
import { FormGroup ,FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  user : any;
  id : number;
  load = false ;

  constructor(private http: HttpService , private router: Router , private route : ActivatedRoute) { 
    this.route.params.subscribe(params => { this.id = params['id']; });
    this.http.getUserById(this.id);
    this.http.user.subscribe( user => {
      this.user = user;
      this.load = true;
    });
  }

  ngOnInit() {
  }

  editUser() {
    this.router.navigate(['/addedit',this.id]);
  }

}
