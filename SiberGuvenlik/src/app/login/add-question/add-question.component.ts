import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuizService } from '../../shared/quiz.service';
import {AlertifyServiceService} from '../../shared/alertify-service.service'
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
  providers: [QuizService]
})
export class AddQuestionComponent implements OnInit {
  userQuestionForm: FormGroup;
  questions: Question;

  constructor(private formBuilder: FormBuilder, private quizService: QuizService, private activatedRoute:ActivatedRoute,private alertify:AlertifyServiceService) { }

  createQuestionForm() {
    this.userQuestionForm = this.formBuilder.group({
      question: ["", Validators.required],
      option1: ["", Validators.required],
      option2: ["", Validators.required],
      option3: ["", Validators.required],
      option4: ["", Validators.required],
      correctOption: ["", Validators.required]
    })
  }
  ngOnInit() {
    this.createQuestionForm();
  }

  addQuestions() {
    if (this.userQuestionForm.valid) {
      this.questions = Object.assign({}, this.userQuestionForm.value)
      console.log(this.questions)
      this.quizService.addQuestion(this.questions);
      this.alertify.success("Soru başarıyla eklendı.")
    }
  }
  
}
