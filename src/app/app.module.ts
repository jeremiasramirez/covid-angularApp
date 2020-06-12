import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { ROUTING } from './app.routing';
import { HomeComponent } from './home/home.component'
import { InitComponent } from './init/init.component';
import { ExploreComponent } from './explore/explore.component';

//material
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule} from '@angular/material/card';
import { MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    
    AppComponent,
    SearchComponent,
    HomeComponent,
    ExploreComponent,
    InitComponent

  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ROUTING,
    MatButtonModule,
    MatCardModule,
    MatRippleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
