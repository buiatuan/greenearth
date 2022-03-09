import {Component} from "@angular/core";

@Component({
  selector: "luoi-ho",
  templateUrl: "./luoi_ho.component.html",
  styleUrls: ["./luoi_ho.component.css"]
})
export class LuoiHoComponent{
  product_luoi_ho = {
    img:  './assets/imgs/imgs_product/luoiho.png',
    name: 'Lưỡi Hổ',
    cost: 21000,
    desc: ' Thân dạng dẹt, mọng nước, thân rất mềm, Thân cây có 2 màu xanh và màu vàng dọc từ gốc đến ngọn. Hoa nở thành từng cụm, mọc từ phần gốc lên và có quả hình tròn.',
    origin: 'Lưỡi hổ có tên khoa học là Sansevieria Trifasciata, là loài thực vật có hoa, họ măng tây.',

  }
}
