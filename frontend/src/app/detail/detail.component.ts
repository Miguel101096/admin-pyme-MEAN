import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from 'src/models/product';
import { Global } from 'src/services/global';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProductService]
})
export class DetailComponent implements OnInit {
  public product: Product | undefined;
  public url: string;
  public confirm: boolean;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProduct(id);
    })
  }

  getProduct(id: string){
    this._productService.getProduct(id).subscribe(
      response => {this.product = response.product; console.log(id); console.log(typeof(id))},
      error => console.log(<any>error)
    )
  }

  setConfirm(confirm: boolean){
    this.confirm = confirm;
  }

  deleteProduct(id: string){
    this._productService.deleteProduct(id).subscribe(
      response => {
        if(response.product) {
          console.log(id)
          this._router.navigate(['/']);
        }
      }, error => console.log(<any>error)
    )
  }
}
