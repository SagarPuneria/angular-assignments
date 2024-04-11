import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductDetails } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  public productDetails: IProductDetails[];

  constructor(public router: Router, public route: ActivatedRoute) {
    this.productDetails = [
      {
        "productId": 1,
        "productName": "nokia 105",
        "productDescription": "compact mobile for travel purposes",
        "productPrice": 999,
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg"
      },
      {
        "productId": 2,
        "productName": "samsung galaxy m51",
        "productDescription": "M51 is ready for any task at hand with an octa-core processor",
        "productImage": "https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-8gb-sm-m515fzbeins-sm-m---fzbdins-301211753?scl=1&fmt=png-alpha",
        "productPrice": 1999
      },
      {
        "productId": 3,
        "productName": "oppo f19",
        "productDescription": "6.43 Inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/712PBW8cGBL._SX679_.jpg",
        "productPrice": 8999
      },
      {
        "productId": 4,
        "productName": "one plus nord",
        "productDescription": "64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/61HjItaMQdS._SL1500_.jpg",
        "productPrice": 6999
      },
      {
        "productId": 5,
        "productName": "huawei p40 pro",
        "productDescription": "Ultra Vision Leica Quad Camera: 50 MP Ultra Vision Sensor, 40 MP Ultra Wide Cine Camera",
        "productImage": "https://images-eu.ssl-images-amazon.com/images/I/41wcndTcMKL._SX300_SY300_QL70_FMwebp_.jpg",
        "productPrice": 7999
      },
      {
        "productId": 6,
        "productName": "Mi 10i 5G",
        "productDescription": "Midnight Black, 8GB RAM, 128GB Storage",
        "productImage": "https://images-na.ssl-images-amazon.com/images/I/71%2BKJpeI2rL._SL1500_.jpg",
        "productPrice": 7499
      },
      {
        "productId": 7,
        "productName": "TECNO Spark 7T",
        "productDescription": "Magnet Black, 4GB RAM,64GB Storage",
        "productImage": "https://images-eu.ssl-images-amazon.com/images/I/41VXcaQy5sS._SX300_SY300_QL70_FMwebp_.jpg",
        "productPrice": 3499
      }
    ];
  }

  public navigateToProductDetails(product: IProductDetails) {
    this.router.navigate(['product-details', product.productId,
      product.productName, product.productImage, product.productDescription, product.productPrice], { skipLocationChange: true });
    /* 
    // query params are optional
    // /user?age=23
    this.router.navigate(['product-details'], {
      queryParams: {
        productId: product.productId,
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
        productImage: product.productImage
      }, skipLocationChange: true
    }); */
  }
}
