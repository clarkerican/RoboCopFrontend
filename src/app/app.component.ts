import { Component } from '@angular/core';
import {Response} from "@angular/http";
import {DataService} from "./DataService";
import {DataService} from "./DataService";

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



  constructor(private dataService : DataService){

  }

  getData(): void{
    this.dataService.getData().subscribe(
      res => this.processData(res)
    )
  }

  processData(res: Response) : void{
    let body: {} = res.json();
    let self = this;
    this.events = [];
    Object.keys(body).forEach(function(index) {
      console.log(body[index]);
      self.events[index] = <Event>{
        category: body[index].category,
        outcome: body[index].outcome,
        time: body[index].time,
        date: body[index].date,
        lat: body[index].lat,
        lng: body[index].lng
      };
    });
 }

}

