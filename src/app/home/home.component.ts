import { Component, OnInit } from '@angular/core';
import { Summary  } from '../services/summary.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    Summary
  ]
})
export class HomeComponent implements OnInit {

  constructor(public summary:Summary) { 
    this.summary.get().subscribe((data)=>console.log(data))
  }

  ngOnInit() {
  }



}
