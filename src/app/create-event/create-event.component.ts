import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventListService } from '../events-list/shared/events-list.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent;
  isDirty: Boolean = true;
  constructor(private router: Router,
              private eventlistService: EventListService) { }

  saveEvent(formValues) {
    this.eventlistService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  ngOnInit() {

  }

}
