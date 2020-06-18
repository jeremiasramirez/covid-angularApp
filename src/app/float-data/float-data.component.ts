import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-float-data',
  templateUrl: './float-data.component.html',
  styleUrls: ['./float-data.component.css','../home/home.component.css']
})
export class FloatDataComponent  {

  @Input('receivedData') dataCase;
  public classFloat = {
    black:null,
    hide: true
  }
  constructor() {
    if(localStorage.getItem("theme")){ this.classFloat.black =true}
    else {this.classFloat.black = false}
   }

  ngOnInit(): void {
  }
  public hide(){
    this.classFloat.hide=false

}
}
