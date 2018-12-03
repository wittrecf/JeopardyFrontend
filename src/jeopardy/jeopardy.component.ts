import { Component } from '@angular/core';
import { JeopardyService } from './jeopardy.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionModalComponent } from '../question-modal/question-modal.component';


@Component({
  selector: 'app-jeopardy',
  templateUrl: './jeopardy.component.html',
  styleUrls: ['./jeopardy.component.css']
})
export class JeopardyComponent {
  private questionSeeds = {
    "history": {},
    "earth": {},
    "animal": {},
    "food": {},
    "television": {}
  };

  private tileText = {
    "history": ["100", "200", "300", "400", "500"],
    "earth": ["100", "200", "300", "400", "500"],
    "animal": ["100", "200", "300", "400", "500"],
    "food": ["100", "200", "300", "400", "500"],
    "television": ["100", "200", "300", "400", "500"]
  };

  private score: number = 0;

  constructor (private httpService: JeopardyService, private modalService: NgbModal) {
    // Creates a seeded value for each box
    Object.keys(this.questionSeeds).forEach(function(category){
      for (var i = 1; i < 6; i++) {
        this.questionSeeds[category][(i*100).toString()] = Math.floor((Math.random() * 3));
      }
    }.bind(this));
  }

  openQuestionModal(data) {
    const modalRef = this.modalService.open(QuestionModalComponent, {backdrop: 'static', keyboard: false});
    modalRef.componentInstance.data = data;

    modalRef.result.then((result) => {
      console.log(result);
      this.score += Number.parseInt(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  // Calls the Jeopardy service to retrieve the appropriate data from the backend
  onClick(category, score) {
    if (this.tileText[category][(parseInt(score) / 100) - 1] !== "" && (this.tileText[category][(parseInt(score) / 100) - 1] === "100" || this.tileText[category][(parseInt(score) / 100) - 2] === "")) {
      this.tileText[category][(parseInt(score) / 100) - 1] = "";
      this.httpService.getData(category, score).subscribe(data => {
        this.openQuestionModal(data[this.questionSeeds[category][score]]);
      });
    }
  }
}
