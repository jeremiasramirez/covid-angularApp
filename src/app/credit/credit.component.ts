import { Component,Input} from '@angular/core';
import { from,interval } from 'rxjs';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css','../home/home.component.css']
})
export class CreditComponent  {

  @Input('receivedData') dataCase;
  public classFloat = {
    black:null
  }
  constructor(){

      if(localStorage.getItem("theme")){ this.classFloat.black =true}
      else {this.classFloat.black = false}
 
  }

   ngOnInit(){

     console.log(this.dataCase)
   }


}
