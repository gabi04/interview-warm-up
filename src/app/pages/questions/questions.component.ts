import { Component } from '@angular/core';
import { Question } from '../../shared/enums/questions';
import { QuestionsService } from '../../shared/services/questions.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  lastIndex = -1;
  currentIndex = 0;
  questions: Question[] = [];

  constructor(public questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService.getQuestions().subscribe((response: Question[]) => {
      this.questions = response;
    });
  }

  onLastClick() {
    const lastIndexAux = this.lastIndex;
    this.currentIndex = this.lastIndex;
    this.lastIndex = lastIndexAux;
  }

  onNextClick() {
    this.lastIndex = this.currentIndex;
    this.currentIndex = Math.floor(Math.random() * this.questions.length);
  }
}
