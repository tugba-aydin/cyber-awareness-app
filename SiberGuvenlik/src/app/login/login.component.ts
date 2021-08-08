import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:Admin=new Admin();

  constructor(private router:Router,private accountService:AccountService) { }

  ngOnInit() {
  }

  addQuestions() {
    
    this.router.navigateByUrl("/soru-ekle", {
      replaceUrl: true
  });
  }

  login(form:NgForm){
    
    if (this.accountService.login(this.model)) {
      this.addQuestions()
    }
    
  }

}
