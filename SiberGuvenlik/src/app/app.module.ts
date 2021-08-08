import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { KatilimciComponent } from './katilimci/katilimci.component';
import { AddQuestionComponent } from "./login/add-question/add-question.component";
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { ArticleComponent } from './article/article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { CityFilterPipe } from './statistics/cityFilter.pipe';
import { AgeFilterPipe } from './statistics/ageFilter.pipe';
import { GenderFilterPipe } from './statistics/genderFilter.pipe';
import { EducationFilterPipe } from './statistics/educationFilter.pipe';
import { ScoreComponent } from './katilimci/score/score.component';
import { AccountService } from './shared/account.service';
import { LoginGuard } from './login/login.guard';
import { AlertifyServiceService } from './shared/alertify-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizComponent,
    HomeComponent,
    LoginComponent,
    KatilimciComponent,
    TestComponent,
    StatisticsComponent,
    ArticleComponent,
    CityFilterPipe,
    AgeFilterPipe,
    GenderFilterPipe,
    EducationFilterPipe,
    ScoreComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AccountService,LoginGuard,AlertifyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
