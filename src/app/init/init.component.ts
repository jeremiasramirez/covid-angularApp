import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  public icon = {
    rotate:true
  }
 

  ngOnInit(): void {
    timer(2000).subscribe(()=>this.icon.rotate=false)
  }

}
