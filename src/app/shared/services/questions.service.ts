import { Injectable } from '@angular/core';
import { questions } from '../mocks/questions.mock';
import { Observable, of } from 'rxjs';
import { Question } from '../enums/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor() {}

  getQuestions(): Observable<Question[]> {
    return of(questions);
  }
}
