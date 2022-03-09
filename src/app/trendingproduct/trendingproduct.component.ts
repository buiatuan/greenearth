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
      img:  './assets/imgs/imgs_product/hong-mon.jpg',
      name: 'Hồng Môn',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/cau-tieu-tram.jpg',
      name: 'Cau Tiểu Châm',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/sendapreta.jpg',
      name: 'Sen Đá Preta',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/trau-ba-nam.jpg',
      name: 'Trầu Bà Nam',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/de-vuong.jpg',
      name: 'Đế Vương',
      cost: 21000,
    },
  ];
}
