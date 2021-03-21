import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { Global } from 'src/services/global';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [ProductService]
})
export class CreateProductComponent implements OnInit {
  public product: Product;
  public url: string;
  public status: string | undefined;
  public saveProduct: any;

  constructor(
    private _productService: ProductService,
  ) { 
    this.product = new Product('','','',0,'','','');
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form:{reset: ()=>void;}){
    this._productService.saveProduct(this.product).subscribe(response=>{
      if(response.product){
        this.saveProduct = response.product;
        this.status='success';
        form.reset();
      }else{
        this.status='failed';
      }
    }, error=>{
      console.log(<any>error);
    }
    )
  }

}
