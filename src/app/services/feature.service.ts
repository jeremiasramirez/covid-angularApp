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
    public change(name:string='Covid control'){
        let titles={mainTitle:"mainTitle", themeTitle:"titleTheme"}
        let doc=document.getElementById(titles.mainTitle).innerHTML = name;
        let doc2 =document.getElementById(titles.themeTitle).innerHTML = name;
    }


}
