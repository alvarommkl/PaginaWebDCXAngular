import { Component } from '@angular/core';
import { GetJsonService } from '../../main/services/get-json.service';
import { Data } from '../../main/interface/data-json.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
  
   .bg-white{
     background-color:white;
   }
   .spacer{
    flex: 1 1 auto;
   }
   .btn-expanded{
    width: 100%;
   }
  `
  ]
})
export class NavBarComponent {
  temp:boolean = false
  temporal : string = 'blogPosts';
  constructor() { }
  cambiar(){
    console.log(this.temp)
    this.temp=!(this.temp)
  }

  

}
