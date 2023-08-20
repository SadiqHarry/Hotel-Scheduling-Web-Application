import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpResponse,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private httpClient:HttpClient){}
  private baseURL:string='http://localhost:8080';

  private getUrl:string = this.baseURL + '/room/reservation/v1/';
  private postUrl:string = this.baseURL + '/room/reservation/v1';
  public submitted!:boolean;
  roomsearch! : FormGroup;
  rooms! : Room[];
  request!:ReserveRoomRequest;
  currentCheckInVal!:string;
  currentCheckOutVal!:string;

  english$!: Observable<string>;
  french$!: Observable<string>;
  timeConversions: string = ''; // Declare and initialize an empty string for timeConversions


    ngOnInit(){
      const englishLanguage = 'en-US';
      const frenchLanguage = 'fr-CA';

      const englishUrl = `${this.baseURL}/welcome?lang=${englishLanguage}`;
      const frenchUrl = `${this.baseURL}/welcome?lang=${frenchLanguage}`;

      this.english$ = this.httpClient.get(englishUrl, { responseType: 'text' });
      this.french$ = this.httpClient.get(frenchUrl, { responseType: 'text' });

      this.getTimeZone(); // Call the getTimeZone() method on initialization

      this.roomsearch= new FormGroup({
        checkin: new FormControl(' '),
        checkout: new FormControl(' ')
      });

 //     this.rooms=ROOMS;


    const roomsearchValueChanges$ = this.roomsearch.valueChanges;

    // subscribe to the stream
    roomsearchValueChanges$.subscribe(x => {
      this.currentCheckInVal = x.checkin;
      this.currentCheckOutVal = x.checkout;
    });
  }

  // Method to fetch time zone conversions
  getTimeZone() {
    const url = 'http://localhost:8080/api/time/convert'; // Update with the correct URL

    // Subscribe to the HTTP GET request using an object format
    this.httpClient.get(url, { responseType: 'text' }).subscribe({
      next: (response) => {
        this.timeConversions = response; // Assign the response to timeConversions
      },
      error: (error) => {
        console.error('An error occurred:', error); // Log errors to the console
      }
    });
  }



    onSubmit({value,valid}:{value:Roomsearch,valid:boolean}){
      const USD_TO_CAD_EXCHANGE_RATE = 1.36;
      const USD_TO_EUR_EXCHANGE_RATE = 0.92;

      this.getAll().subscribe(

        rooms => {console.log(Object.values(rooms)[0]);
          this.rooms=<Room[]>Object.values(rooms)[0];
          this.rooms.forEach((room) => {
            room.currencyCAD = (parseFloat(room.price) * USD_TO_CAD_EXCHANGE_RATE).toFixed(2);
            room.currencyEUR = (parseFloat(room.price) * USD_TO_EUR_EXCHANGE_RATE).toFixed(2);
          });
        });
    }
    reserveRoom(value:string){
      this.request = new ReserveRoomRequest(value, this.currentCheckInVal, this.currentCheckOutVal);

      this.createReservation(this.request);
    }
    createReservation(body:ReserveRoomRequest) {
      let bodyString = JSON.stringify(body); // Stringify payload
      let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
     // let options = new RequestOptions({headers: headers}); // Create a request option

     const options = {
      headers: new HttpHeaders().append('key', 'value'),

    }

      this.httpClient.post(this.postUrl, body, options)
        .subscribe(res => console.log(res));
    }

  /*mapRoom(response:HttpResponse<any>): Room[]{
    return response.body;
  }*/

    getAll(): Observable<any> {


       return this.httpClient.get(this.baseURL + '/room/reservation/v1?checkin='+ this.currentCheckInVal + '&checkout='+this.currentCheckOutVal, {responseType: 'json'});
    }

  }



export interface Roomsearch{
    checkin:string;
    checkout:string;
  }




export interface Room{
  id:string;
  roomNumber:string;
  price:string;
  links:string;
  currencyCAD:string;
  currencyEUR:string;

}
export class ReserveRoomRequest {
  roomId:string;
  checkin:string;
  checkout:string;

  constructor(roomId:string,
              checkin:string,
              checkout:string) {

    this.roomId = roomId;
    this.checkin = checkin;
    this.checkout = checkout;
  }
}

/*
var ROOMS: Room[]=[
  {
  "id": "13932123",
  "roomNumber" : "409",
  "price" :"20",
  "links" : ""
},
{
  "id": "139324444",
  "roomNumber" : "509",
  "price" :"30",
  "links" : ""
},
{
  "id": "139324888",
  "roomNumber" : "609",
  "price" :"40",
  "links" : ""
}
] */

