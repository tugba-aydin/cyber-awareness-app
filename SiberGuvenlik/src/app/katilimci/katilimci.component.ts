import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { QuizService } from '../shared/quiz.service';
import { AlertifyServiceService } from '../shared/alertify-service.service'

@Component({
  selector: 'app-katilimci',
  templateUrl: './katilimci.component.html',
  styleUrls: ['./katilimci.component.css'],
  providers: [QuizService]
})
export class KatilimciComponent implements OnInit {
  userAddForm: FormGroup;
  users: User;
  scoree;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private quizService: QuizService,private alertify:AlertifyServiceService) { }

  createUserForm() {
    this.userAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      city: ["", Validators.required],
      age: ["", Validators.required],
      educationLevel: ["", Validators.required],
      gender: ["", Validators.required]
    })
  }
  ngOnInit() {
    this.createUserForm();
    this.activatedRoute.params.subscribe((params) => {
      this.scoree = params['puan'];
      console.log(this.scoree);
    });
  }
  addUsers() {
    if (this.userAddForm.valid) {
      this.users = Object.assign({}, this.userAddForm.value)
      this.users.score = this.scoree
      console.log(this.users)
      this.quizService.addUser(this.users);
      this.alertify.success("Bilgileriniz sisteme kaydedildi.")
    }
    this.router.navigateByUrl("/puan/"+this.scoree);
  }

}
