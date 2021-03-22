import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { Global } from 'src/services/global';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public product: Product | undefined;
  public url: string;
  public saveProduct: any;
  public status: string | undefined;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        let id = params.id;
        this.getProduct(id);
      }
    )
  }

  getProduct(id: string){
    this._productService.getProduct(id).subscribe(
      response => this.product = response.product,
      error => console.log(<any>error)
    )
  }

  onSubmit(form:{reset: ()=>void;}){
    this._productService.updateProduct(this.product).subscribe(response=>{
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
