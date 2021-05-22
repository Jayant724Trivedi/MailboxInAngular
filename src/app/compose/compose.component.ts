import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  form :any;
  constructor(
    private router:Router,
    private route:ActivatedRoute
  )

  { 
    this.form=new FormGroup(
      {
        to:new FormControl(""),
        subject:new FormControl("")
      }
    )
  }

  ngOnInit(): void {}
    sent(){
      let info:any=this.form.value; 
      this.router.navigate(['./sent'],{
      queryParams:{info:JSON.stringify(info)}
})
}
}