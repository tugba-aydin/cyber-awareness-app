import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  providers: [QuizService]

})
export class ScoreComponent implements OnInit {
  score;
  constructor(private activatedRoute:ActivatedRoute,  private router: Router, private quizService: QuizService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.score = params['score'];
      console.log(this.score);
    });
  }

}
