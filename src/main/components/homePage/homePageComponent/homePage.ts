import { Component  } from '@angular/core';

// TODO main content component
// TODO footer?
// TODO right nav?
// TODO find a way to use a relative passes
// TODO Research if it is possible to bootstrap home page first than main app component after login

declare const __moduleName: string;

@Component({
    selector: 'home-page',
    templateUrl: './main/components/homePage/homePageComponent/homePage.html',
    styleUrls: ['./main/components/homePage/homePageComponent/homePage.css']
})
export class HomePageComponent {
    openSideNavBar = false;

    onMenuIconClick (bool: boolean) {
        this.openSideNavBar = bool;
    }

}
