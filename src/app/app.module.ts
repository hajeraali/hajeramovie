import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieApiServiceService } from './service/movie-api-service.service';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    QuizComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, // Add FormsModule here
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
