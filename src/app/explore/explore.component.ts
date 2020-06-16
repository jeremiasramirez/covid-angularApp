import { Component, OnInit } from '@angular/core';
import { Summary  } from '../services/summary.service'
import { Feature  } from '../services/feature.service'
import {  typeAllCases } from '../services/typeCases.service'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],

  providers: [
    Summary,
    Feature
  ]

})
export class ExploreComponent   {

  public allCases :  typeAllCases[] = [];

  public spinner = {
    off:true
  }


  constructor(public summary:Summary, public feature:Feature) {
    this.getAllCases()
  }
  public getAllCases(){

    this.summary.getAll().
     subscribe((data:typeAllCases)=>{
      this.allCases = data;
    },
     (err)=>{return err},
     ()=>{this.spinner.off=false})

  }




}
