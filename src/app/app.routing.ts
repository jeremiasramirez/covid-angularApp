import { Routes ,RouterModule} from "@angular/router"
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { InitComponent } from './init/init.component';



const routes:Routes = [
    
    {path: 'search', component: SearchComponent },
    {path: 'home', component: HomeComponent },
    {path: '', component: InitComponent },
    {path: '**', component: InitComponent },
     
] 


export const ROUTING = RouterModule.forRoot(routes)