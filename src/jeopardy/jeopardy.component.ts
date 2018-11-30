import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-jeopardy',
  templateUrl: './jeopardy.component.html',
  styleUrls: ['./jeopardy.component.css']
})
export class JeopardyComponent {

  constructor (private httpService: JeopardyService) {}

  onTestGet() {
    this.httpService.getData().subscribe(data => {
      console.log(data);
    });
 }
}
