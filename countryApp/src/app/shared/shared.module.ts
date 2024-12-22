import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';



@NgModule({
    imports: [
        RouterModule,
    ],
    exports: [
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent,
        ContactPageComponent,
        SearchBoxComponent,
        LoadingSpinnerComponent,
    ],
    declarations: [
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent,
        ContactPageComponent,
        SearchBoxComponent,
        LoadingSpinnerComponent,
    ],
    providers: [],
})
export class SharedModule { }
