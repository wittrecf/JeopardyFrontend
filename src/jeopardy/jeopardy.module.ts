import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { JeopardyService } from './jeopardy.service';
import { Routes, RouterModule } from '@angular/router';
import { JeopardyComponent } from './jeopardy.component';

const routes: Routes = [
  {path: 'game', component: JeopardyComponent},
  {path: '**', redirectTo: 'game', pathMatch: 'full'}
];

export function jeopardyfactory(http: Http){
  return new JeopardyService(http, 'http://localhost:3000/search?');
}

@NgModule({
  declarations: [
    JeopardyComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [{provide: JeopardyService, useFactory: jeopardyfactory, deps: [Http]}],
  exports: [RouterModule]
})
export class JeopardyModule { }
