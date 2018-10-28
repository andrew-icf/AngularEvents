import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events-list/shared/event.model';
import { EventListService } from '../events-list/shared/events-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: String = '';
  foundSessions: ISession[];
  constructor(private auth: AuthService, private eventService: EventListService) { }

  ngOnInit() {

  }

  searchSession(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }

}
