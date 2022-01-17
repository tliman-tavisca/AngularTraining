import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { API_TOKEN } from "./token";

@Injectable()
export class FoodService {
  // inject api from module providers
  constructor(private http: Http, @Inject(API_TOKEN) private api: string) {}
  // getFood(): Observable<any[]> {
  //   return this.http.get(this.api).map((response) => response.json());
  // }

  getDrinks(): Observable<any[]> {
    return this.http.get("/api/drinks").map((response) => response.json());
  }

  getPizzas(): Observable<any[]> {
    return this.http.get("/api/pizzas").map((response) => response.json());
  }

  getSides(): Observable<any[]> {
    return this.http.get("/api/sides").map((response) => response.json());
  }
}
