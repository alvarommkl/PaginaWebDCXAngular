import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PaginaPrincipalComponent } from './main/pages/pagina-principal/pagina-principal.component';
import { BlogPostsComponent } from './main/pages/blog-posts/blog-posts.component';
import { RiceExchangeComponent } from './main/pages/rice-exchange/rice-exchange.component';
import { FertilizerExchangeComponent } from './main/pages/fertilizer-exchange/fertilizer-exchange.component';
import { DcxPulseComponent } from './main/pages/dcx-pulse/dcx-pulse.component';
import { DcxGrainComponent } from './main/pages/dcx-grain/dcx-grain.component';
import { SocialMediaComponent } from './main/pages/social-media/social-media.component';
import { NewsAndUpdatesComponent } from './main/pages/news-and-updates/news-and-updates.component';
import { DcxFinanceComponent } from './main/pages/dcx-finance/dcx-finance.component';
import { DcxFreightComponent } from './main/pages/dcx-freight/dcx-freight.component';
import { DcxInsuranceComponent } from './main/pages/dcx-insurance/dcx-insurance.component';



const routes:Routes=[
    
    {
        path:'trade',
        children:[
            {path: 'rice_exchange', component:RiceExchangeComponent},
            {path : 'fertilizer_exchange',component:FertilizerExchangeComponent},
            {path : 'dcx_pulse',component:DcxPulseComponent},
            {path:'dcx_grain',component:DcxGrainComponent}
            
        ]
        
    },
    {
        path:'community',
        children:[
            {path:'social_media', component:SocialMediaComponent},
            {path:'news_and_updates',component:NewsAndUpdatesComponent},
            {path:'blog_posts',component:BlogPostsComponent}
        ]
    },
    {
        path:'services',
        children:[
            {path:'dcx_finance',component:DcxFinanceComponent},
            {path:'dcx_freight',component:DcxFreightComponent},
            {path:'dcx_insurance',component:DcxInsuranceComponent}
        ]
    },
    {
        path:'',
        component:PaginaPrincipalComponent,
        pathMatch: 'full'
    },
    
    {
        path: '**',
        redirectTo:''
    }
];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],

    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}