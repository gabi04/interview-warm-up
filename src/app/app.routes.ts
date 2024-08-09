import { Routes } from '@angular/router';
import { QuestionsComponent } from './pages/questions/questions.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
];
//TODO crear modulo pages
//TODO lazy loading
