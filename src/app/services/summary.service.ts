import { Injectable } from "@angular/core"
import { ajax } from "rxjs/ajax"
import { pluck, delay } from 'rxjs/operators'


@Injectable()

export class Summary {
    public linkAPiCovid : string = 'https://api.covid19api.com/summary';


    private globalCase(){

        return ajax.get(this.linkAPiCovid).pipe(
            delay(500),
            pluck('response','Global'))

    }

    private allCase(){

        return ajax.get(this.linkAPiCovid).pipe(
            delay(700),
            pluck('response','Countries'))

    }

    public get(){
        return this.globalCase()
    }

    public getAll(){
        return this.allCase()
    }


}
