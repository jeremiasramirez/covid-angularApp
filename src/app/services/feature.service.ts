import { Injectable } from "@angular/core"
import { Router } from '@angular/router';
 
@Injectable()

export class Feature {
 
    constructor(public router:Router){}
    public setRouting(data:string=''){
        this.router.navigate([data])
    }

}