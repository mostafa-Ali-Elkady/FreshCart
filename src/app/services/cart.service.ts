import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}
  cartNumber= new BehaviorSubject(0);
  cartId:string='';
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;
  headers: any = {
    token: localStorage.getItem("userToken"),
  };
  // Add Product To cart
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl + `cart`,
      { productId: productId },
      { headers: this.headers }
    );
  }
  // get The user cart
  getUserCart(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `cart`, {
      headers: this.headers,
    });
  }
  // remove cart item
  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart/${productId}`, {
      headers: this.headers,
    });
  }
  // Update count items
  updateCount(productId: string, countNum:number): Observable<any> {
    return this._HttpClient.put(
      this.baseUrl + `cart/${productId}`,
      {
        count: countNum,
      },
      { headers: this.headers }
    );
  }
  // empty cart
  emptyCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart`, {
      headers: this.headers,
    });
  }
}
