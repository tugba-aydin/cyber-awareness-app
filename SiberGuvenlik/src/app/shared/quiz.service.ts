import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpC: HttpClient, private router: Router) { }
  path = 'http://localhost:56990/api/';
  
  getQuestion(): Observable<Question[]> {
    return this.httpC.get<Question[]>(this.path + "questions");
  }
  addUser(user) {
    this.httpC.post(this.path + 'users/add', user).subscribe();
  }
  addQuestion(question) {
    this.httpC.post(this.path + 'questions/add', question).subscribe();
  }
  getUser(): Observable<User[]> {
    return this.httpC.get<User[]>(this.path + "users");
  }
  getDailyCount():Observable<number>{
    return this.httpC.get<number>(this.path+'users/dailycount')
  }
}
