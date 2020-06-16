import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent  {

  @Input('receivedData') dataCase;

  constructor() {

   }
   ngOnInit(){
     console.log(this.dataCase)
   }


}
