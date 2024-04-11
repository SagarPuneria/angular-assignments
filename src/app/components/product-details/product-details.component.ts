import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  public productDetails: IProductDetails;
  constructor(private activateRoute: ActivatedRoute) {
    this.productDetails = {} as IProductDetails;
  }

  ngOnInit(): void {

    // observable way(Asynchronous execution)
    this.activateRoute.paramMap.subscribe((params: any) => {
      console.log('observable way this.activateRoute.paramMap', params);
      this.productDetails.productId = params.get('id');
      this.productDetails.productName = params.get('name');
      this.productDetails.productImage = params.get('image');
      this.productDetails.productDescription = params.get('description');
      this.productDetails.productPrice = params.get('price');
    });

    /* 
    // observable way(Asynchronous execution)
    this.activateRoute.queryParamMap.subscribe((queryParams: any) => {
      console.log('observable way this.activateRoute.queryParamMap', queryParams);
      this.productDetails.productId = queryParams.get('productId');
      this.productDetails.productName = queryParams.get('productName');
      this.productDetails.productDescription = queryParams.get('productDescription');
      this.productDetails.productImage = queryParams.get('productImage');
      this.productDetails.productPrice = queryParams.get('productPrice');
    }); */
  }
}
