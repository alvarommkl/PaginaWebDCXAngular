import { Injectable } from '@angular/core';
import * as _json from "../../../assets/data/banner-data.json"
import { Banner } from '../interface/banner-data.interface';
@Injectable({
  providedIn: 'root'
})
export class GetJsonBannersService {
  banner_json :Banner = _json;

  constructor() { }

  getBannerJSON(){
    return this.banner_json;
  }
}
