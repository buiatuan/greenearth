import {Component} from "@angular/core";

@Component({
  selector: "sale-product",
  templateUrl: "./saleproduct.component.html",
  styleUrls: ["./saleproduct.component.css"]
})
export class SaleProductComponent{
  list_product_sale = [
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
      new_cost: 19000,
    },
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
      new_cost: 19000,
    },
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
      new_cost: 19000,
    },
  ];
}
