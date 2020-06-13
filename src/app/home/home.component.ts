import { Component, OnInit } from '@angular/core';
import { Summary  } from '../services/summary.service'
import { Feature  } from '../services/feature.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    Summary,
    Feature
  ]
})

export class HomeComponent implements OnInit {

  public globalData : SummaryData={
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0
  };

  public spinnerChange :spinner ={
    off:true
  } 


  constructor(public summary:Summary) { 
    this.summary.get().subscribe((data:SummaryData)=>{
      this.globalData=data
      console.log(this.globalData);
      
    }, (err)=>{return err}, ()=>{this.spinnerChange.off=false})
    
  }

  ngOnInit() {
  } 
  
}

interface spinner {
  off:boolean;
}

interface SummaryData {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number
}
