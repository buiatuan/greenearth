import {Component} from "@angular/core";

@Component({
  selector: "new-product",
  templateUrl: "./newproduct.component.html",
  styleUrls: ["./newproduct.component.css"],
})
export class NewProductComponent{
  list_product_new = [
    {
      img:  './assets/imgs/imgs_product/kimtien.png',
      name: 'Kim tiền',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/bangcanh.png',
      name: 'bàng cảnh',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/luoiho.png',
      name: 'lưỡi hổ',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/cau-tieu-tram.jpg',
      name: 'Cau Tiểu Châm',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/co-guong.jpg',
      name: 'Cỏ Gương',
      cost: 21000,
    },
    {
      img:  './assets/imgs/imgs_product/hong-mon.jpg',
      name: 'Hồng Môn',
      cost: 21000,
    },
  ];
}
