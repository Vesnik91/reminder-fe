import { Component, Input } from '@angular/core';

// TODO add all inputs ass array
// TODO add all outputs ass array
@Component({
    selector: 'left-nav',
    templateUrl: './main/components/homePage/leftBarComponent/leftNav.html',
    styleUrls: ['./main/components/homePage/leftBarComponent/leftNav.css']
})
export class LeftNavComponent {
    @Input() opened: boolean;
}
