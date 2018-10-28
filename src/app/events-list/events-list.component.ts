import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventListService } from './shared/events-list.service';
<<<<<<< HEAD
=======
// import { ToastrService } from '../common/toastr.service';
>>>>>>> master
import { IEvent } from './shared/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventListService: EventListService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.eventListService.getEvents().subscribe(events => {this.events = events}); we are now doing this on our resolver
    this.events = this.route.snapshot.data['events']; // this events matches the key of the object we set in the route obj

  }

  getStartTimeClass() {
    const time = this.events.map((event) => event.time);
    for (let i = 0; i <= time.length; i++) {
      const eventTime = time[i];
      if (eventTime === '8:00 am') {
        return { green: eventTime, bold: eventTime};
      }
    }
  }
}
