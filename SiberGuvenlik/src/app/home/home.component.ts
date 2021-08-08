import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { User } from '../models/user';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User[];
  total: number;
  success: City[];
  enk:number
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.successCity();
    this.quizService.getUser().subscribe(data => {
      this.user = data;
      for (let i = 0; i < this.success.length; i++) {
        for (let j = 0; j < this.user.length; j++) {
          if (this.success[i]["names"] == this.user[j]["city"]) {
            this.success[i]['puan'] += this.user[j]["score"]
            this.success[i]['sayac']++;
          }
        }
      }
      for (let k = 0; k < this.success.length; k++) {
        if (!(this.success[k]["puan"] == 0 && (this.success[k]["sayac"] == 0 || this.success[k]["sayac"] > 0))) {
          this.success[k]["puan"] = this.success[k]["puan"] / this.success[k]["sayac"]
          
        }
        else{
          this.success[k]["puan"] = 0
        }
        
      }
      
    });

    this.quizService.getDailyCount().subscribe(tot => {
      this.total = tot;
    });
  }

  successCity() {
    this.success = [{ "names": "Adana", "puan": 0, "sayac": 0 }, { "names": "Adıyaman", "puan": 0, "sayac": 0 }, { "names": "Afyon", "puan": 0, "sayac": 0 }, { "names": "Ağrı", "puan": 0, "sayac": 0 },
    { "names": "Amasya", "puan": 0, "sayac": 0 }, { "names": "Ankara", "puan": 0, "sayac": 0 }, { "names": "Antalya", "puan": 0, "sayac": 0 }, { "names": "Artvin", "puan": 0, "sayac": 0 },
    { "names": "Aydın", "puan": 0, "sayac": 0 }, { "names": "Balıkesir", "puan": 0, "sayac": 0 }, { "names": "Bilecik", "puan": 0, "sayac": 0 }, { "names": "Bingöl", "puan": 0, "sayac": 0 },
    { "names": "Bitlis", "puan": 0, "sayac": 0 }, { "names": "Bolu", "puan": 0, "sayac": 0 }, { "names": "Burdur", "puan": 0, "sayac": 0 }, { "names": "Bursa", "puan": 0, "sayac": 0 },
    { "names": "Çanakkale", "puan": 0, "sayac": 0 }, { "names": "Çankırı", "puan": 0, "sayac": 0 }, { "names": "Çorum", "puan": 0, "sayac": 0 }, { "names": "Denizli", "puan": 0, "sayac": 0 },
    { "names": "Diyarbakır", "puan": 0, "sayac": 0 }, { "names": "Edirne", "puan": 0, "sayac": 0 }, { "names": "Elazığ", "puan": 0, "sayac": 0 }, { "names": "Erzincan", "puan": 0, "sayac": 0 },
    { "names": "Erzurum", "puan": 0, "sayac": 0 }, { "names": "Eskişehir", "puan": 0, "sayac": 0 }, { "names": "Gaziantep", "puan": 0, "sayac": 0 }, { "names": "Giresun", "puan": 0, "sayac": 0 },
    { "names": "Gümüşhane", "puan": 0, "sayac": 0 }, { "names": "Hakkari", "puan": 0, "sayac": 0 }, { "names": "Hatay", "puan": 0, "sayac": 0 }, { "names": "Isparta", "puan": 0, "sayac": 0 },
    { "names": "İçel(Mersin)", "puan": 0, "sayac": 0 }, { "names": "İstanbul", "puan": 0, "sayac": 0 }, { "names": "İzmir", "puan": 0, "sayac": 0 }, { "names": "Kars", "puan": 0, "sayac": 0 },
    { "names": "Kastamonu", "puan": 0, "sayac": 0 }, { "names": "Kayseri", "puan": 0, "sayac": 0 }, { "names": "Kırklareli", "puan": 0, "sayac": 0 }, { "names": "Kırşehir", "puan": 0, "sayac": 0 },
    { "names": "Kocaeli", "puan": 0, "sayac": 0 }, { "names": "Konya", "puan": 0, "sayac": 0 }, { "names": "Kütahya", "puan": 0, "sayac": 0 }, { "names": "Malatya", "puan": 0, "sayac": 0 },
    { "names": "Manisa", "puan": 0, "sayac": 0 }, { "names": "Kahramanmaraş", "puan": 0, "sayac": 0 }, { "names": "Mardin", "puan": 0, "sayac": 0 }, { "names": "Muğla", "puan": 0, "sayac": 0 },
    { "names": "Muş", "puan": 0, "sayac": 0 }, { "names": "Nevşehir", "puan": 0, "sayac": 0 }, { "names": "Niğde", "puan": 0, "sayac": 0 }, { "names": "Ordu", "puan": 0, "sayac": 0 },
    { "names": "Rize", "puan": 0, "sayac": 0 }, { "names": "Sakarya", "puan": 0, "sayac": 0 }, { "names": "Samsun", "puan": 0, "sayac": 0 }, { "names": "Siirt", "puan": 0, "sayac": 0 },
    { "names": "Sinop", "puan": 0, "sayac": 0 }, { "names": "Sivas", "puan": 0, "sayac": 0 }, { "names": "Tekirdağ", "puan": 0, "sayac": 0 }, { "names": "Tokat", "puan": 0, "sayac": 0 },
    { "names": "Trabzon", "puan": 0, "sayac": 0 }, { "names": "Tunceli", "puan": 0, "sayac": 0 }, { "names": "Şanlıurfa", "puan": 0, "sayac": 0 }, { "names": "Uşak", "puan": 0, "sayac": 0 },
    { "names": "Van", "puan": 0, "sayac": 0 }, { "names": "Yozgat", "puan": 0, "sayac": 0 }, { "names": "Zonguldak", "puan": 0, "sayac": 0 }, { "names": "Aksaray", "puan": 0, "sayac": 0 },
    { "names": "Bayburt", "puan": 0, "sayac": 0 }, { "names": "Karaman", "puan": 0, "sayac": 0 }, { "names": "Kırıkkale", "puan": 0, "sayac": 0 }, { "names": "Batman", "puan": 0, "sayac": 0 },
    { "names": "Şırnak", "puan": 0, "sayac": 0 }, { "names": "Bartın", "puan": 0, "sayac": 0 }, { "names": "Ardahan", "puan": 0, "sayac": 0 }, { "names": "Iğdır", "puan": 0, "sayac": 0 },
    { "names": "Yalova", "puan": 0, "sayac": 0 }, { "names": "Karabük", "puan": 0, "sayac": 0 }, { "names": "Kilis", "puan": 0, "sayac": 0 }, { "names": "Osmaniye", "puan": 0, "sayac": 0 },
    { "names": "Düzce", "puan": 0, "sayac": 0 }
    ]
  }

}
