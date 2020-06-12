import { Component } from '@angular/core';
import { Summary } from "./services/summary.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Summary]
})
export class AppComponent {
  title = 'covidApp';
  constructor(public summary:Summary){
  
  }
}
