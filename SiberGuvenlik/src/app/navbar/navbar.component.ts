import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }
  isLoggedin(){
    return this.accountService.isLoggedIn();
  }

  logOut(){
    return this.accountService.logOut();
  }
}
