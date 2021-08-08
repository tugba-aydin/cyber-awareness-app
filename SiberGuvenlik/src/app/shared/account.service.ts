import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { AlertifyServiceService } from '../shared/alertify-service.service'

@Injectable()
export class AccountService {

  constructor(private router: Router,private alertify:AlertifyServiceService) { }
  loggedIn = false
  login(admin: Admin): boolean {
    if (admin.username == "admin" && admin.password == "123456") {
      this.loggedIn = true
      localStorage.setItem("isLogged", admin.username)
      this.alertify.success("Giriş başarılı.")
      return true;
    }
    this.alertify.error("Kullanıcı adı veya şifre hatalı.")
    return false;
  }
  isLoggedIn() {
    return this.loggedIn;
  }
  logOut() {
    localStorage.removeItem("isLogged")
    this.loggedIn = false;
    this.alertify.error("Çıkış yapıldı.")
  }

}
