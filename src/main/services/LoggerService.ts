import { Injectable } from '@angular/core';
@Injectable()
export class Logger {
    log(...args: any[]) {
        console.log(arguments);
    }
}