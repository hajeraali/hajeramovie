import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'home',component: HomeComponent,canActivate: [authGuard] },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'',component:LoginComponent},
  {path:'search',component:SearchComponent},
  {path: 'quiz', component: QuizComponent },
  {path:'movie/:id', component:MovieDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
