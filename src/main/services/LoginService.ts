import { Injectable } from '@angular/core';
import { loginTypes } from './../infoBeans/loginTypes';
@Injectable()
export class LoginService {
    getLoginTypes() { return loginTypes; }
}