import { Component, OnInit } from '@angular/core';
import { GetJsonNewsUpdateService } from '../../services/get-json-news-update.service';
import { NewsUpdate } from '../../interface/news-update';

@Component({
  selector: 'app-news-update-cards',
  templateUrl: './news-update-cards.component.html',
  styles: [
  ]
})
export class NewsUpdateCardsComponent implements OnInit {
  constructor(private service:GetJsonNewsUpdateService) { }
  
  ngOnInit(): void {
  }
  
  news_update:NewsUpdate = this.service.getJsonNewUpdate();
  mostrar = true


  cambiar(){
    this.mostrar = !this.mostrar;
  }

}
