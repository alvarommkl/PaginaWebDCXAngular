import { Component, Input } from '@angular/core';
import { GetJsonBannersService } from '../../services/get-json-banners.service';
import { Banner } from '../../interface/banner-data.interface';

@Component({
  selector: 'app-banner-img-text',
  templateUrl: './banner-img-text.component.html',
  styles: [
  
  ]
})
export class BannerImgTextComponent {

  
  
  @Input() id:number=0;
  banner:Banner=this.service.getBannerJSON();;    
  _img : string=this.banner.data[this.id].background_img
  _id:number=this.banner.data[this.id]._id    
  _url:String = '';
  
  
  constructor(private service : GetJsonBannersService) { 
  
  }

  
  temp(_id:number){
    this._url='url('
    return this._url.concat(this.banner.data[_id].background_img + ')');
  }
  
  comprobation(){
    if(this.id === this._id){
      return true
    }
    else{
      return false
    }
  }


}
