import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import {GlobalsService} from '../globals.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  providers: [GlobalsService]
})
export class Page1Component extends Base implements OnInit {

  constructor(public globalsService:GlobalsService) { 
    super(globalsService);
  }

  ngOnInit() {
  }

}
