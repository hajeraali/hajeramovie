import { Component } from '@angular/core';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  answers: string[] = [];
  resultMessage: string = ''; // Declare resultMessage property
  showResult: boolean = false; // Declare showResult property

  submitQuiz() {
    // Check if any answer is empty
    if (this.answers.some(answer => !answer)) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // Calculate result based on answers
    const result = this.calculateResult();
    this.resultMessage = `Based on your preferences, it seems like you're in the mood for a ${result} movie!`;
    this.showResult = true;
  }

  calculateResult(): string {
    interface GenreScores {
      Comedy: number;
      Drama: number;
      Romance: number;
      Thriller: number;
    }

    const scores: GenreScores = {
      Comedy: 0,
      Drama: 0,
      Romance: 0,
      Thriller: 0
    };

    // Scoring system
    this.answers.forEach(answer => {
      switch (answer) {
        case 'Happy':
          scores.Comedy += 3;
          scores.Romance += 4;
          break;
        case 'Sad':
          scores.Drama += 2;
          scores.Romance += 3;
          break;
        case 'Stressed':
          scores.Drama += 4;
          scores.Thriller += 3;
          break;
        case 'Excited':
          scores.Comedy += 3;
          scores.Drama += 4;
          break;
        case 'Alone':
          scores.Drama += 2;
          scores.Romance += 3;
          break;
        case 'With Family':
          scores.Comedy += 3;
          scores.Romance += 2;
          break;
        case 'With Friends':
          scores.Comedy += 4;
          scores.Drama += 3;
          break;
        case 'Date Night':
          scores.Romance += 5;
          scores.Comedy += 3;
          break;
        case 'Sunny':
          scores.Comedy += 3;
          scores.Romance += 2;
          break;
        case 'Rainy':
          scores.Drama += 2;
          scores.Romance += 3;
          break;
        case 'Snowy':
          scores.Romance += 4;
          scores.Thriller += 2;
          break;
        case 'Cloudy':
          scores.Comedy += 2;
          scores.Romance += 3;
          break;
        case 'Light-hearted':
          scores.Comedy += 3;
          scores.Romance += 2;
          break;
        case 'Dramatic':
          scores.Drama += 4;
          scores.Thriller += 3;
          break;
        case 'Adventurous':
          scores.Drama += 5;
          scores.Thriller += 3;
          break;
        case 'Comedic':
          scores.Comedy += 5;
          scores.Romance += 2;
          break;
          case 'Exciting':
            scores.Romance += 3;
            scores.Thriller += 4;
            break;
          case 'Cozy':
            scores.Comedy += 2;
            scores.Romance += 4;
            break;
          case 'Modern':
            scores.Comedy += 3;
            scores.Drama += 2;
            break;
          case 'Historical':
            scores.Drama += 3;
            scores.Romance += 2;
            break;
          case 'Futuristic':
            scores.Thriller += 3;
            scores.Comedy += 2;
            break;
          case 'Fantasy':
            scores.Romance += 3;
            scores.Thriller += 2;
            break;
          case 'Action':
            scores.Drama += 3;
            scores.Thriller += 4;
            break;
          case 'Suspense':
            scores.Thriller += 3;
            scores.Drama += 2;
            break;
          case 'Humor':
            scores.Comedy += 4;
            scores.Romance += 2;
            break;
          case 'Romantic':
            scores.Romance += 5;
            scores.Comedy += 3;
            break;
          case 'Short':
            scores.Comedy += 2;
            scores.Romance += 1;
            break;
          case 'Medium':
            scores.Drama += 3;
            scores.Romance += 2;
            break;
          case 'Long':
            scores.Thriller += 3;
            scores.Drama += 2;
            break;
          case 'Very Long':
            scores.Romance += 4;
            scores.Thriller += 3;
            break;
        // Add more cases for other questions...
      }
    });

    console.log("Scores:", scores); // Log scores for debugging
    let maxScore = 0;
    let resultGenre: string = '';

    for (const genre in scores) {
      if (scores.hasOwnProperty(genre)) {
        if (scores[genre as keyof GenreScores] > maxScore) {
          maxScore = scores[genre as keyof GenreScores];
          resultGenre = genre;
        }
      }
    }

    return resultGenre;
  }
}
