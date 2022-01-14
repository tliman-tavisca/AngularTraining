import { PassengerForComponent } from "./models/passenger.interface";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

// Always use Injectable for services which are injectible
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): PassengerForComponent[] {
    return [
      {
        id: 1,
        fullname: "Stephen",
        checkedin: true,
        checkedInDate: 14907400000,
        children: null,
      },
      {
        id: 2,
        fullname: "Bob",
        checkedin: false,
        children: [{ name: "child1", age: 5 }],
      },
      {
        id: 3,
        fullname: "Rod",
        checkedin: true,
        checkedInDate: 14907400000,
        children: [
          { name: "child1", age: 2 },
          { name: "child2", age: 3 },
        ],
      },
      {
        id: 4,
        fullname: "Test",
        checkedin: false,
        children: null,
      },
      {
        id: 5,
        fullname: "Neil",
        checkedin: true,
        checkedInDate: 14907400000,
        children: null,
      },
    ];
  }
}
