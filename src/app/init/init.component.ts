import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Feature} from '../services/feature.service'

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
  providers: [
    Feature
  ]
})
export class InitComponent implements OnInit {
  public icon = {
    rotate:true
  }
  public time = new Date()
  constructor(public feature:Feature){

  }

  ngOnInit(): void {
    timer(2000).subscribe(()=>this.icon.rotate=false)
  }
  public redirectToHome(data:string){
    this.feature.setRouting(data,500);
  }
}
