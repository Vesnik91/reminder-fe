import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from '../../components/app/appComponent/app';
import { LoginFormComponent }  from '../../components/homePage/loginFormComponent/loginForm';
import { HomePageComponent }  from '../../components/homePage/homePageComponent/homePage';
import { HomePageNavBarComponent }  from '../../components/homePage/navBarComponent/navBar';
import { LeftNavComponent }  from '../../components/homePage/leftBarComponent/leftNav';

import { Logger } from '../../services/LoggerService';
import { LoginService } from '../../services/LoginService';

@NgModule({
  imports:      [ BrowserModule, MaterialModule, FormsModule ],
  declarations: [ AppComponent,
    LoginFormComponent,
    HomePageComponent,
    HomePageNavBarComponent,
    LeftNavComponent
  ],
  exports:      [],
  providers:    [ Logger, LoginService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
