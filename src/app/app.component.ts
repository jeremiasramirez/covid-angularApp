import { Component , OnInit} from '@angular/core';
import { Summary } from "./services/summary.service";
import { Feature } from "./services/feature.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Summary,
    Feature
  ]
})
export class AppComponent implements OnInit {
  public showTheme={
    show:true
  }
  public themeName ={
    menu: "menu--blue-dark",
    theme: "theme--blue-dark"
  }
  public bodys=document.getElementById("body");
  public classNew = "themeActived"
   
 
  constructor(public summary:Summary,public feature:Feature){
    
    this.validateTheme()
  }
  ngOnInit(){
    this.feature.change("Covid control")
  }



  public validateTheme(){
 
    if (localStorage.getItem("theme")){
      this.themeName.menu="menu--black"
      this.themeName.theme= "theme--black"
      this.bodys.classList.add(this.classNew)
    }
    else{
     
      this.themeName.menu="menu--blue-dark"
      this.themeName.theme= "theme--blue-dark"
      this.bodys.classList.remove(this.classNew)
    }

  }
  public activeTheme(){
    
      
    if(this.showTheme.show){
      this.showTheme.show=false
    }
    else{
      this.showTheme.show=true
    }
    
    

  }
  public clearTheme(){
    localStorage.removeItem("theme")
    this.validateTheme()
    this.showTheme.show=true
  }
   
 
  public darkTheme(){
 


    if (!localStorage.getItem("theme")){
      localStorage.setItem("theme", "actived")
      this.themeName.menu="menu--black"
      this.themeName.theme= "theme--black"
      this.bodys.classList.add(this.classNew)
      this.validateTheme()
      this.showTheme.show=true
     


    }

  }
 
   

} 
