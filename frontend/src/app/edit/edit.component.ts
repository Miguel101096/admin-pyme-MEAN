import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { Global } from 'src/services/global';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public product: Product | undefined;
  public url: string;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  getProduct(id: string){
    this._productService.getProduct(id).subscribe(
      response => this.product = response.product,
      error => console.log(<any>error)
    )
  }
}
