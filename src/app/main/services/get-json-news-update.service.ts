import { Injectable } from '@angular/core';
import * as _json from '../../../assets/data/newsUpdate.json'
import { NewsUpdate } from '../interface/news-update';


@Injectable({
  providedIn: 'root'
})
export class GetJsonNewsUpdateService {
  news_update_json :NewsUpdate = _json;
  constructor() { }

  getJsonNewUpdate(){
    return this.news_update_json;
  }
}
