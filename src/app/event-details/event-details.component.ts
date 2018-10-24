import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventListService } from '../events-list/shared/events-list.service';
import { IEvent } from '../events-list/shared/event.model';
import { ISession } from '../events-list/index';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: Boolean;
  filterBy: String = 'all';
  sortBy: String = 'votes';

  constructor(private eventService: EventListService,
              private route: ActivatedRoute
            ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
