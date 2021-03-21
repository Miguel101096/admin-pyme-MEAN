import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { Global } from 'src/services/global';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-tabla-crud',
  templateUrl: './tabla-crud.component.html',
  styleUrls: ['./tabla-crud.component.css'],
  providers: [ProductService]
})
export class TablaCrudComponent implements OnInit {
  public products: Product[] | undefined;
  public url: string;

  constructor(
    private _productService : ProductService,
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this._productService.getProducts().subscribe(
      response => {
        if (response.product) {
          this.products = response.product;
          console.log(this.products);
        }
      }, 
      error => {
        console.log(<any>error);
      }
    )
  }
}
