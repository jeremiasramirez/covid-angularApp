import { Component, OnInit } from '@angular/core';
import { Summary  } from '../services/summary.service'
import { Feature  } from '../services/feature.service'
import {  globalCases } from '../services/typeCases.service'
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../explore/explore.component.css'],
  providers: [
    Summary,
    Feature
  ]
})

export class HomeComponent implements OnInit{

  public statusConnection ={
    off:true,
    message: true
  }


    public spinner :spinner= {
      off:true
    }
    ngOnInit(){
      this.feature.change("Covid control")
    }
  public globalData : globalCases={
    NewConfirmed: null,
    NewDeaths: null,
    NewRecovered: null,
    TotalConfirmed: null,
    TotalDeaths: null,
    TotalRecovered: null
  };

  public spinnerChange : spinner ={
    off:true
  }


  constructor(public summary:Summary, public feature:Feature) {
    this.getDataOfGlobal()

    this.checkStatusConnection()

    this.fakeLoadSpinner()

  }
  public fakeLoadSpinner(){
      timer(500).subscribe(()=>this.spinner.off=false)
  }
  public getDataOfGlobal(){

    this.summary.get().subscribe((data:globalCases)=>{
      this.globalData=data;
    },
    (err)=>{return err},
    ()=>{this.spinnerChange.off=false})

  }
  public checkStatusConnection(){

    timer(5000).subscribe(()=>{

      if (this.spinnerChange.off===true){
        this.statusConnection.off = false
      }
      else{
        this.statusConnection.off = true
      }
    })


  }

  public intermediaryData(){
    this.getDataOfGlobal()
    this.statusConnection.message=false
    this.statusConnection.off = true
  }

  public referenceRouting(){
    this.feature.setRouting('explore')
  }

}

interface spinner {
  off:boolean;
}
