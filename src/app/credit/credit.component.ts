import { Component, OnInit} from '@angular/core';
import { Feature }  from "../services/feature.service"


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css'],
  providers: [
    Feature
  ]
})
export class CreditComponent implements OnInit {

  
  constructor(public feature:Feature){ }


   ngOnInit(){
    this.feature.change("Credits")
   }


}
