import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
   getAlluserData() {
    return this.http.get('https://fakestoreapi.com/products?limit=6');
  }
}
