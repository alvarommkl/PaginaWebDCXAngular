import { Component } from '@angular/core';
import { GetJsonService } from '../../main/services/get-json.service';
import { Data } from '../../main/interface/data-json.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent {
  
  temporal : string = 'blogPosts';
  constructor() { }


  

}
