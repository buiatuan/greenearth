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
import {IntroduceComponent} from "./introduce/introduce.component";
import {KienTrucXanhComponent} from "./kientrucxanh/kientrucxanh.component";
import {YeuCayComponent} from "./yeucay/yeucay.component";
import {LienHeComponent} from "./lienhe/lienhe.component";
import {HDChamCayComponent} from "./hdchamcay/hdchamcay.component";
import {ThueCayCanhComponent} from "./thuecaycanh/thuecaycanh.component";
import {ButtomComponent} from "./buttom/buttom.component";
import {LuoiHoComponent} from "./luoi-ho/luoi_ho.component";

const appRoutes: Routes =[
  {path:"",component:HomeComponent},
  {path:"list-product",component:ListProductComponent},
  {path:"new-product",component:NewProductComponent},
  {path:"trending-product",component:TrendingProductComponent},
  {path:"sale-product",component:SaleProductComponent},
  {path:"search-product",component:SearchComponent},
  {path:"introduce",component:IntroduceComponent},
  {path:"kien-truc-xanh",component:KienTrucXanhComponent},
  {path:"yeu-cay",component:YeuCayComponent},
  {path:"thue-cay-canh",component:ThueCayCanhComponent},
  {path:"lien-he",component:LienHeComponent},
  {path:"HD-cham-cay",component:HDChamCayComponent},
  {path:"luoi-ho",component:LuoiHoComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent, ButtomComponent, HomeComponent,
    ListProductComponent,
    NewProductComponent,
    TrendingProductComponent,
    SaleProductComponent,
    SearchComponent,
    IntroduceComponent,
    KienTrucXanhComponent,
    YeuCayComponent,
    LienHeComponent,
    HDChamCayComponent,
    ThueCayCanhComponent,
    LuoiHoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
