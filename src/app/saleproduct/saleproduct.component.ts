import {Component} from "@angular/core";

@Component({
  selector: "sale-product",
  templateUrl: "./saleproduct.component.html",
  styleUrls: ["./saleproduct.component.css"]
})
export class SaleProductComponent{
  list_product_sale = [
    {
      img:  './assets/imgs/imgs_product/co-guong.jpg',
      name: 'Cỏ Gương',
      cost: 21000,
      new_cost: 19000,
    },
    {
      img:  './assets/imgs/imgs_product/hong-mon.jpg',
      name: 'Hồng Môn',
      cost: 21000,
      new_cost: 19000,
    },
    {
      img:  './assets/imgs/imgs_product/de-vuong.jpg',
      name: 'Đế Vương',
      cost: 21000,
      new_cost: 19000,
    },
  ];
}
