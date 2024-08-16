import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'questions',
    loadComponent: () =>
      import('./pages/questions/questions.component').then(
        (x) => x.QuestionsComponent
      ),
  },
];
