import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JeopardyComponent } from '../jeopardy/jeopardy.component';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css']
})
export class QuestionModalComponent implements OnInit {

  @Input() data = {};
  getCorrect: string;
  getWrong1: string;
  getWrong2: string;
  getWrong3: string;
  Spot1: string;
  Spot2: string;
  Spot3: string;
  Spot4: string;
  Result = ["", "", "", ""];
  randNumb: number;
  exitScore: number = 0;
  canExit:boolean = false;

  constructor(public activeModal: NgbActiveModal) {
  }
  
  ngOnInit() {
    this.Spot1 = 'empty';
    this.Spot2 = 'empty';
    this.Spot3 = 'empty';
    this.Spot4 = 'empty';
    this.getCorrect = this.data["correct_question"];
    this.getWrong1 = this.data["incorrect_questions"][0];
    this.getWrong2 = this.data["incorrect_questions"][1];
    this.getWrong3 = this.data["incorrect_questions"][2];
  
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.randNumb = getRandomInt(0, 3);

    if (this.randNumb === 0) {
        this.Spot1 = this.getCorrect;
    } else if (this.randNumb === 1) {
        this.Spot2 = this.getCorrect;
    } else if (this.randNumb === 2) {
        this.Spot3 = this.getCorrect;
    } else if (this.randNumb === 3) {
        this.Spot4 = this.getCorrect;
    }
    let i = 0;
    for (i; i <= 2; i++) {
        if (i === 0) {
            if (this.Spot1 === 'empty') {
                this.Spot1 = this.getWrong1;
            } else if (this.Spot2 === 'empty') {
                this.Spot2 = this.getWrong1;
            } else if (this.Spot3 === 'empty') {
                this.Spot3 = this.getWrong1;
            } else if (this.Spot4 === 'empty') {
                this.Spot4 = this.getWrong1;
            }
        } else if (i === 1) {
            if (this.Spot1 === 'empty') {
                this.Spot1 = this.getWrong2;
            } else if (this.Spot2 === 'empty') {
                this.Spot2 = this.getWrong2;
            } else if (this.Spot3 === 'empty') {
                this.Spot3 = this.getWrong2;
            } else if (this.Spot4 === 'empty') {
                this.Spot4 = this.getWrong2;
            }
        }else if (i === 2) {
            if (this.Spot1 === 'empty') {
                this.Spot1 = this.getWrong3;
            } else if (this.Spot2 === 'empty') {
                this.Spot2 = this.getWrong3;
            } else if (this.Spot3 === 'empty') {
                this.Spot3 = this.getWrong3;
            } else if (this.Spot4 === 'empty') {
                this.Spot4 = this.getWrong3;
            }
        }
    }
  }

  closeModal() {
    this.activeModal.close(this.exitScore);
  }

  onClick(num) {
    if (this.Result[0] === this.Result[1] && this.Result[1] === this.Result[2] && this.Result[2] == this.Result[3]) {
      if (num !== this.randNumb + 1) {
        this.Result[num - 1] = "incorrect";
        this.exitScore = -this.data["score"];
      } else {
        this.exitScore = this.data["score"];
      }
      this.Result[this.randNumb] = "correct";
      this.canExit = true;
    }
  }

  checkCanExit() {
      return this.canExit;
  }
}
