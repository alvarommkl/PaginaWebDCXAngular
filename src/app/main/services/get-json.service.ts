
import { Injectable } from '@angular/core';


// import { HttpClient } from '@angular/common/http';
// private httpClient:HttpClient


import * as _json from '../../../assets/data/dataBlogPosts.json';
import { Data } from '../interface/data-json.interface';


@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  
  constructor() { }
  
  getJSONBlogPosts(): Data{
    
  return (_json) // aqui obtenemos el array de elementos de la propiedad Menu
  }
  
  // getJsonContent():<Array<Data>> {
  //   return (data :Data);
  // }

}
