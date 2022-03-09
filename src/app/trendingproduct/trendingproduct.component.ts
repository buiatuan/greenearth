import {Component} from "@angular/core";

@Component({
  selector: "trending-product",
  templateUrl: "./trendingproduct.component.html",
  styleUrls: ["./trendingproduct.component.css"]
})
export class TrendingProductComponent{
  list_product_trending = [
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
    },
  ];
}
