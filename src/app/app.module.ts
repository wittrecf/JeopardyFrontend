import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeopardyService } from 'src/jeopardy/jeopardy.service';
import { QuestionModalComponent } from '../question-modal/question-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    QuestionModalComponent
  ]
})
export class AppModule { }
