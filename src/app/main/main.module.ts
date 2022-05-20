import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';
import { StartTradingComponent } from './components/start-trading/start-trading.component';
import { OurSolutionsComponent } from './components/our-solutions/our-solutions.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { BlogPostsComponent } from './pages/blog-posts/blog-posts.component';
import { CardsBlogComponent } from './components/cards-blog/cards-blog.component';
import { BannerImgTextComponent } from './components/banner-img-text/banner-img-text.component';
import { RiceExchangeComponent } from './pages/rice-exchange/rice-exchange.component';
import { FertilizerExchangeComponent } from './pages/fertilizer-exchange/fertilizer-exchange.component';
import { DcxPulseComponent } from './pages/dcx-pulse/dcx-pulse.component';
import { DcxGrainComponent } from './pages/dcx-grain/dcx-grain.component';
import { SocialMediaComponent } from './pages/social-media/social-media.component';
import { NewsAndUpdatesComponent } from './pages/news-and-updates/news-and-updates.component';
import { NewsUpdateCardsComponent } from './components/news-update-cards/news-update-cards.component';
import { BannerImgRiceComponent } from './components/banner-img-rice/banner-img-rice.component';
import { DcxFinanceComponent } from './pages/dcx-finance/dcx-finance.component';
import { DcxFreightComponent } from './pages/dcx-freight/dcx-freight.component';
import { DcxInsuranceComponent } from './pages/dcx-insurance/dcx-insurance.component';



@NgModule({
  declarations: [
    VideoComponent,
    StartTradingComponent,
    OurSolutionsComponent,
    CarruselComponent,
    WhyChooseComponent,
    PaginaPrincipalComponent,
    BlogPostsComponent,
    CardsBlogComponent,
    BannerImgTextComponent,
    RiceExchangeComponent,
    FertilizerExchangeComponent,
    DcxPulseComponent,
    DcxGrainComponent,
    SocialMediaComponent,
    NewsAndUpdatesComponent,
    NewsUpdateCardsComponent,
    BannerImgRiceComponent,
    DcxFinanceComponent,
    DcxFreightComponent,
    DcxInsuranceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    

  ]
})
export class MainModule { }
