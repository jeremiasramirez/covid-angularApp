import { Injectable } from "@angular/core"
import { ajax } from "rxjs/ajax"
import { pluck, delay } from 'rxjs/operators'


@Injectable()

export class Summary {
 
    private globalCase(){
        return ajax.get('https://api.covid19api.com/summary').pipe(
            delay(500),
            pluck('response','Global')
          )
    } 
    public get(){
        return this.globalCase()
    }


}