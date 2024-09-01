import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



interface Answer {
  text: string;
  correct: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  questions: Question[] = [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hypertext Markup Language", correct: true },
        { text: "Hyper Transfer Markup Language", correct: false },
        { text: "High-Level Textual Markup Language", correct: false },
        { text: "Hypertext Management Language", correct: false },
      ],
    },
    {
      question: "Explain the term 'Responsive Design' in web development.",
      answers: [
          { text: "Designing for all devices", correct: true },
          { text: "Designing only for desktop", correct: false },
          { text: "Designing for print media", correct: false },
          { text: "Designing for audio devices", correct: false },
      ],
    },
  ];

  currentQuestionIndex: number = 0;
  userScore: number = 0;

  startQuiz(): void {
    this.currentQuestionIndex = 0;
    this.userScore = 0;
  }

  checkAnswer(answer: Answer): void {
    if (answer.correct) {
      this.userScore++;
    }
    this.nextQuestion();
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.currentQuestionIndex = 0; // Restart quiz
    }
  }
}
