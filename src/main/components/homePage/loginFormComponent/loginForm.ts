import { Component } from '@angular/core';

import { LoginService } from "../../../services/LoginService";
import { Logger } from "../../../services/LoggerService";
import { loginTypes } from "../../../infoBeans/loginTypes";
import { loginTypeLabels } from "../../../infoBeans/loginTypeLabels";

@Component({
  selector: 'login-form',
  templateUrl: './main/components/homePage/loginFormComponent/loginForm.html',
  styleUrls: ['./main/components/homePage/loginFormComponent/loginForm.css']
})
export class LoginFormComponent {

    loginTypes: Object = loginTypes;
    loginType: string = loginTypes.signUp;

    userName: string = '';
    email: string = '';
    password: string = '';

    loginFormTitle: string = this.loginType == loginTypes.signIn ?
        loginTypeLabels.signIn : loginTypeLabels.signUp;

    onSignInButtonClick: Function = function () {
        this.loginType = loginTypes.signIn;
        this.loginFormTitle = loginTypeLabels.signIn;
    };
    onSignUpButtonClick: Function = function () {
        this.loginType = loginTypes.signUp;
        this.loginFormTitle = loginTypeLabels.signUp;
    };

    constructor (loginService: LoginService, Logger: Logger) {

    }
}
