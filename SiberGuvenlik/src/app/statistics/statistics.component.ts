import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  user: User[];
  cities: string[];
  education:string[];
  filterText
  filterNumber
  filterGender
  filterEdu

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getUser().subscribe(data => {
      this.user = data;
      for (let i = 0; i < this.user.length; i++){
        this.user[i]['Id']=i+1;
      }
    });

    this.cities = ["--Seçiniz--","Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın",
      "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum",
      "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun",
      "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu",
      "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş",
      "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop",
      "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak",
      "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova",
      "Karabük", "Kilis", "Osmaniye", "Düzce"];
    
    this.education=["--Seçiniz--","İlkokul", "Ortaokul", "Lise", "Ön Lisans", "Lisans","Yüksek Lisans"]

    
  }
}


