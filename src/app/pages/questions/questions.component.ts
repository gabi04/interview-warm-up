import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  // TODO types
  questions = [
    { id: 1, text: 'What can you tell me about yourself?' },
    { id: 2, text: 'What are the Maine responsibilities in your current job?' },
    { id: 3, text: 'What are your most relevant skills? ' },
  ];
  lastIndex = 0;
  currentIndex = 0;

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
