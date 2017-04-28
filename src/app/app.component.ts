import { Component } from '@angular/core';
import {Response} from "@angular/http";
//import {DataService} from "./DataService";

export class Event {
  category: string;
  time: string; //TODO
  date: string;
  outcome: string;
  lat: number;
  lng: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Robocop';
  events: Event[] = [];
  lat: number = 42.026281;
  lng: number = -93.646573;

  event : Event = {
    category : 'Theft',
    time : '2:02 PM',
    date: 	'04/27/17 ',
    outcome: 'Open',
    lat : 42.023914,
    lng :  -93.637733
  };

  event1 : Event = {
    category : 'Theft',
    time : '3:49 PM',
    date: '04/27/17 ',
    outcome: 'Open',
    lat : 42.011223,
    lng : -93.670474
  };

  event2 : Event = {
    category : 'Driving Violation',
    time : '9:27 AM',
    date: '04/27/17 ',
    outcome: 'Arrest',
    lat : 42.048788,
    lng : -93.645097
  };

  event3 : Event = {
    category : 'Public Intoxication',
    time : '12:28 AM',
    date: '04/27/17 ',
    outcome: 'Arrest',
    lat : 42.021443,
    lng : -93.650082
  };


  event4 : Event = {
    category : 'Drug Violation',
    time : '11:07 AM',
    date: '04/26/17 ',
    outcome: 'Open',
    lat : 42.029626,
    lng : -93.650947
  };

  event6 : Event = {
    category : 'Theft',
    time : '8:37 AM',
    date: '04/26/17 ',
    outcome: 'Open',
    lat : 42.022545,
    lng : -93.642390
  };

  event5 : Event = {
    category : 'Drug Violation',
    time : '1:16 AM',
    date: '04/26/17 ',
    outcome: 'Open',
    lat : 42.029626,
    lng : -93.650947
  };



  constructor(){
    this.events.push(this.event);
    this.events.push(this.event1);
    this.events.push(this.event2);
    this.events.push(this.event3);
    this.events.push(this.event4);
    this.events.push(this.event5);
    this.events.push(this.event6);
  }

  // getData(): void{
  //   this.dataService.getData().subscribe(
  //     res => this.processData(res)
  //   )
  // }

  //processData(res: Response) : void{
    // let body: {} = res.json();
    // let self = this;
    // this.events = [];
    // Object.keys(body).forEach(function(index) {
    //   console.log(body[index]);
    //   self.events[index] = <Event>{
    //     category: body[index].category,
    //     suspect: body[index].suspect,
    //     time: body[index].time,
    //     lat: body[index].lat,
    //     lon: body[index].lon
    //   };
    // });
 // }

}

