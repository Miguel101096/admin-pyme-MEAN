import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product} from '../models/product';
import { Global} from './global';
@Injectable()
export class ProductService {
    public url: string;
    constructor(
        private _http:HttpClient,
    ){
        this.url = Global.url;
    }
    getProducts():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url,{headers:headers});
    }
    saveProduct(product: Product):Observable<any>{
        let params = JSON.stringify(product);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url + 'save', params, {headers:headers});
    }
    getProduct(id: string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+id,{headers:headers});
    }
    deleteProduct(id: string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+id,{headers:headers});
    }
    updateProduct(product: any):Observable<any>{
        let params=JSON.stringify(product);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'update/'+product._id,params,{headers:headers});
    }
}