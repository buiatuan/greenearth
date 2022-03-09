import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {ListProductComponent} from "./list-product/listproduct.component";
import {NewProductComponent} from "./newproduct/newproduct.component";
import {TrendingProductComponent} from "./trendingproduct/trendingproduct.component";
import {SaleProductComponent} from "./saleproduct/saleproduct.component";
import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "./search/search.component";
import {LienHeComponent} from "./lienhe/lienhe.component";
import {ThueCayCanhComponent} from "./thuecaycanh/thuecaycanh.component";
import {HDChamCayComponent} from "./hdchamcay/hdchamcay.component";

const appRoutes: Routes =[
  {path:"",component:HomeComponent},
  {path:"list-product",component:ListProductComponent},
  {path:"new-product",component:NewProductComponent},
  {path:"trending-product",component:TrendingProductComponent},
  {path:"sale-product",component:SaleProductComponent},
  {path:"search-product",component:SearchComponent},
  {path:"lienhe",component:LienHeComponent},
  {path:"thuecaycanh",component:ThueCayCanhComponent},
  {path:"hdchamcay",component:HDChamCayComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListProductComponent,
    NewProductComponent,
    TrendingProductComponent,
    SaleProductComponent,
    SearchComponent,
    LienHeComponent,
    ThueCayCanhComponent,
    HDChamCayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
