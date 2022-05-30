import { Component } from '@angular/core';
import { Data } from '../../interface/data-json.interface';
import { GetJsonService } from '../../services/get-json.service';

@Component({
  selector: 'app-cards-blog',
  templateUrl: './cards-blog.component.html',
  styles: [` 

    img{max-width:150px}
  
  `
  ]
})
export class CardsBlogComponent {
_url : string = ''
  datos : Data = this.getJson.getJSONBlogPosts();
  constructor(private getJson : GetJsonService) { 
  }


stringConstruct(param : string){
  this._url = 'url('
  return this._url.concat(param + ')');
}

}
