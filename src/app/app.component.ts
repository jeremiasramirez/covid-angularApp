import { Component } from '@angular/core';
import { ajax } from "rxjs/ajax"
import {pluck } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidApp';
  constructor(){
    ajax.get('https://api.covid19api.com/summary').pipe(
      pluck('response')
    ).subscribe((data)=>{console.log(data);
    })
  }
}
