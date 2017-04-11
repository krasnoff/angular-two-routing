import {GlobalsService} from './globals.service';
import { Component } from '@angular/core';

@Component({
  providers: [GlobalsService]
})
export class Base {
    constructor(public globalsService:GlobalsService) {

    }
}
