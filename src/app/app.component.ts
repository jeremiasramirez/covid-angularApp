import { Component } from '@angular/core';
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
export class AppComponent {

  public themeName ={
    menu: "menu--blue-dark",
    theme: "theme--blue-dark"
  }

   
  public switchs:boolean=false;
  constructor(public summary:Summary,public feature:Feature){
    
  }

  public activeTheme(){
    
      this.statusTheme()

    
    

  }
  public clearTheme(){
    localStorage.removeItem("theme")
  }
  public statusTheme(){
    let bodys=document.getElementById("body");
    let classNew = "themeActived"

    
    if (localStorage.getItem("theme")){
      this.themeName.menu="menu--black"
      this.themeName.theme= "theme--black"
      bodys.classList.add(classNew)
      localStorage.setItem("theme", "actived")


    }
    else{
      
   
      this.clearTheme()
      bodys.classList.remove(classNew)
      this.themeName.menu="menu--blue-dark"
      this.themeName.theme= "theme--blue-dark"

    }

  }
 
   

} 
