import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

// Use Observables use this and map
import "rxjs/add/operator/map";

// to use Promises and .toPromise and then
import "rxjs/add/operator/toPromise";

// to handle error add this and catch block to http
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";

import { PassengerForComponent } from "./models/passenger.interface";

const PASSENGER_API: string = "/api/passengers";

// Always use Injectable for services which are injectible
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Observable<PassengerForComponent[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  //Use Promise instead of Observable
  getPassengersAsPromise(): Promise<PassengerForComponent[]> {
    return this.http
      .get(PASSENGER_API)
      .toPromise()
      .then((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  updatePassenger(
    passenger: PassengerForComponent
  ): Observable<PassengerForComponent> {
    // Add any httl request and options
    let headers = new Headers({ "Content-type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    //pass options as parameter while http call
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  removePassenger(
    passenger: PassengerForComponent
  ): Observable<PassengerForComponent> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPassenger(id: number): Observable<PassengerForComponent> {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
