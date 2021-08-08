  
import {Routes} from '@angular/router'
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { KatilimciComponent } from './katilimci/katilimci.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ArticleComponent } from './article/article.component';
import { ScoreComponent } from './katilimci/score/score.component';
import { AddQuestionComponent } from "./login/add-question/add-question.component";
import { LoginGuard } from './login/login.guard';
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes : Routes =[
    {path:'quiz',component:QuizComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'katilimci/:puan',component:KatilimciComponent},
    {path:'istatistik',component:StatisticsComponent},
    {path:'makale',component:ArticleComponent},
    {path:'puan/:score',component:ScoreComponent},
    {path:'test',component:TestComponent},
    {path:'soru-ekle',component:AddQuestionComponent,canActivate:[LoginGuard]},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];