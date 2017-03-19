import { Component, EventEmitter, Input, Output } from '@angular/core';


// TODO move menu list to a separate component

@Component({
    selector: 'home-page-nav-bar',
    templateUrl: './main/components/homePage/navBarComponent/navBar.html',
    styleUrls: ['./main/components/homePage/navBarComponent/navBar.css']
})
export class HomePageNavBarComponent {
    openSideNavBar = false;
    @Output() onMenuIconClick = new EventEmitter<boolean>();

    menuIconClick () {
        this.onMenuIconClick.emit(!this.openSideNavBar);
        this.openSideNavBar = !this.openSideNavBar;
    }
}
