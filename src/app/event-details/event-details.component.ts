import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventListService } from '../events-list/shared/events-list.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:any;
  constructor(private eventService:EventListService,
              private route:ActivatedRoute
            ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
