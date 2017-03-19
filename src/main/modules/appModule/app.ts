import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from '../../components/app/appComponent/app';
import { LoginFormComponent }  from '../../components/homePage/loginFormComponent/loginForm';
import { HomePageComponent }  from '../../components/homePage/homePageComponent/homePage';
import { HomePageNavBarComponent }  from '../../components/homePage/navBarComponent/navBar';
import { LeftNavComponent }  from '../../components/homePage/leftBarComponent/leftNav';

@NgModule({
  imports:      [ BrowserModule, MaterialModule, FormsModule ],
  declarations: [ AppComponent, LoginFormComponent ,HomePageComponent, HomePageNavBarComponent, LeftNavComponent ],
  exports:      [],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
