import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../models/question';
import { QuizService } from '../shared/quiz.service';
import { AlertifyServiceService } from '../shared/alertify-service.service'
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})

export class QuizComponent implements OnInit {
  question: Question[];
  puan=0  
  soruId=0
  dogrumu = false
  counter=0
  @ViewChild("elLabelOption1") elLabelOption1: ElementRef
  @ViewChild("elLabelOption2") elLabelOption2: ElementRef
  @ViewChild("elLabelOption3") elLabelOption3: ElementRef
  @ViewChild("elLabelOption4") elLabelOption4: ElementRef

  @ViewChild("elLabelRadio1") elLabelRadio1: ElementRef
  @ViewChild("elLabelRadio2") elLabelRadio2: ElementRef
  @ViewChild("elLabelRadio3") elLabelRadio3: ElementRef
  @ViewChild("elLabelRadio4") elLabelRadio4: ElementRef

  @ViewChild("elQuestion") elQuestion: ElementRef

  constructor(private quizService: QuizService, private router: Router,private alertify:AlertifyServiceService) { }
  ngOnInit() {
    // if(parseInt(localStorage.getItem('sayac')as string)>0)
    // {
    //   this.soruId=JSON.parse(localStorage.getItem("soruid")as string)
    //   this.counter=JSON.parse(localStorage.getItem("sayac")as string)
    //   this.elQuestion.nativeElement=localStorage.getItem("question")
    //   this.elLabelOption1.nativeElement=localStorage.getItem("option1")
    //   this.elLabelOption2.nativeElement=localStorage.getItem("option2")
    //   this.elLabelOption3.nativeElement=localStorage.getItem("option3")
    //   this.elLabelOption4.nativeElement=localStorage.getItem("option4")
    //   this.puan=parseInt(localStorage.getItem("puan")as string)
    // }
    // else{
    //   this.counter=0
    //   this.puan = 0
    //   this.soruId = 0
      this.quizService.getQuestion().subscribe(data => {
        this.question = data;
        this.soruGetir();
      });
    
   
  }
  
  hesapla() {
    if (this.dogrumu == true) {
      this.puan += 10;
    }
    localStorage.setItem("puan",JSON.stringify(this.puan))
  }

  tamamla() {
    this.hesapla()
    this.router.navigateByUrl("/katilimci/"+this.puan);
    this.alertify.success("Testi tamamladınız.")
    console.log(this.puan)
  }
  
  soruGetir() {
    this.hesapla()
    this.counter++
    var sonraki = this.question[this.soruId];

    // localStorage.setItem("sayac",JSON.stringify(this.counter))
    // localStorage.setItem("soruid",JSON.stringify(this.soruId))
    //localStorage.setItem("question",this.elQuestion.nativeElement);
    // localStorage.setItem("option1",this.question.values["option1"]);
    // localStorage.setItem("option2",this.question.values["option2"]);
    // localStorage.setItem("option3",this.question.values["option3"]);
    // localStorage.setItem("option4",this.question.values["option4"]);
    
    this.elLabelOption1.nativeElement.innerHTML = sonraki["option1"]
    this.elLabelOption2.nativeElement.innerHTML = sonraki["option2"]
    this.elLabelOption3.nativeElement.innerHTML = sonraki["option3"]
    this.elLabelOption4.nativeElement.innerHTML = sonraki["option4"]

    this.elQuestion.nativeElement.innerHTML = "Soru " + this.counter + ": " + sonraki["question"]

    // console.log(this.elQuestion)
    this.soruId++
    // this.myNgForm.resetForm();
    this.dogrumu = false
    this.resetInput()
    //elLabel.text = sonraki.value["option1"]

  }

  sorucevaplandi(anahtar) {
    var next = this.question[this.soruId - 1];
    var key = "option" + anahtar;
    if (next["correctOption"] == next[key]) {
      this.dogrumu = true
    }
    else {
      this.dogrumu = false
    }
    console.log(next[key]);
    console.log(this.soruId)
  }
  
  resetInput()
  {
    console.log(this.elLabelRadio1)
    console.log(this.elLabelRadio1.nativeElement)
    this.elLabelRadio1.nativeElement.checked = false
    this.elLabelRadio2.nativeElement.checked = false
    this.elLabelRadio3.nativeElement.checked = false
    this.elLabelRadio4.nativeElement.checked = false
  }
}
