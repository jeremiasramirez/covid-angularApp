import { Component, OnInit } from '@angular/core';
import { Summary  } from '../services/summary.service'
import { Feature  } from '../services/feature.service'
import {  typeAllCases } from '../services/typeCases.service'
import {  timer } from "rxjs"

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

  public index : number =0;
  public limit : number =10;
  public lenCard:number=10;
  public calcDivider:number=0;

  public scrolling = window;

  public spinner = {
    off:true,
    loadPag:false,
    hide:true
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
     ()=>{
       
       this.spinner.off=false;
       this.calcDivider= Math.ceil(this.allCases.length/this.lenCard)

     })

  }

  public next(){

    if (this.limit >= this.allCases.length){

        this.spinner.hide=false

    }
    else{
      timer(800).subscribe(()=>{
        this.spinner.loadPag = false

        this.limit+=10;

      })
      this.spinner.loadPag = true
    }

  }

  public up(){
      return this.scrolling.scrollTo(0,0);
  }


}
