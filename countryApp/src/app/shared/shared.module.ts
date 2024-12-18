import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';



@NgModule({
    imports: [],
    exports: [
        HomePageComponent,
        AboutPageComponent,
    ],
    declarations: [
        HomePageComponent,
        AboutPageComponent,
    ],
    providers: [],
})
export class SharedModule { }
