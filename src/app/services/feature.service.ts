import { Injectable } from "@angular/core"
import { Router } from '@angular/router';

@Injectable()

export class Feature {
 

    constructor(public router:Router){}


    public setRouting(data:string='', timing:number=100){

        setTimeout(()=>{
            this.router.navigate([data])
        },timing)

    }


}
