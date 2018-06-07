import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventListService } from './shared/events-list.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[]
  constructor(private eventListService: EventListService) { }

  ngOnInit() {
    this.events = this.eventListService.getEvents();
  }

  getStartTimeClass() {
    let time = this.events.map((event) => {return event.time});
    for (var i = 0; i <= time.length; i++) {
      let eventTime = time[i];
      if (eventTime === '8:00 am') {
        return { green: eventTime, bold: eventTime};
      }
    }
  }
}
