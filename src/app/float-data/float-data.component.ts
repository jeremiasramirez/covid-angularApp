import { Component,Input, ViewChild} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-float-data',
  templateUrl: './float-data.component.html',
  styleUrls: ['./float-data.component.css','../home/home.component.css']
})
export class FloatDataComponent  {

  @Input('receivedData') dataCase;
  @ViewChild("allData") alldata;
  public classFloat = {
    black:null,
    hide: true
  }
 

  ngOnInit(): void {
      if(localStorage.getItem("theme")){ this.classFloat.black =true}
      else {this.classFloat.black = false}
  }
  public hide( ){
      
    this.alldata.nativeElement.style.opacity="0"
    timer(500).subscribe(()=>this.classFloat.hide=false)
    
    
  }
 
}
