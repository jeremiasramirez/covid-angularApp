import { Component  } from '@angular/core';
import { Feature  } from '../services/feature.service';
import { Summary  } from '../services/summary.service';
import { typeAllCases } from '../services/typeCases.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css','../explore/explore.component.css'],
  providers: [
    Feature,
    Summary
  ]
})
export class SearchComponent   {
 
  public searched : typeAllCases[] = []
  public searchedFinded :any= []

  public spinner = {
    off:true
  }

  constructor(public feature:Feature,public summary:Summary) {
    this.feature.change("Search")
    

    this.getAllData()

    

   }

  public getAllData(){

    this.summary.getAll().subscribe( (resp) =>{

      this.searched =  resp;

    }, (err)=>{return err}, ()=>{ this.spinner.off=false; } )

  }


  public search(name:string=null){
   
 

    if (name!=null){
      name = name.toLowerCase()
      this.spinner.off=true
      timer(800).subscribe(()=>this.spinner.off=false)
      
      for(let i=0;i<this.searched.length; i+=1){
        this.searched[i].Country = this.searched[i].Country.toLowerCase()

        if (this.searched[i].Country.substring(0,4)  == name.substring(0,4) ){
          this.searchedFinded.unshift( this.searched[i])
          
        }

      }
       

     
      
    }
     
  }

  

}
