import { Component } from '@angular/core';
import { Data } from '../../interface/data-json.interface';
import { GetJsonService } from '../../services/get-json.service';

@Component({
  selector: 'app-cards-blog',
  templateUrl: './cards-blog.component.html',
  styles: [
  ]
})
export class CardsBlogComponent {

  datos : Data = this.getJson.getJSONBlogPosts();
  constructor(private getJson : GetJsonService) { 
  }




}
