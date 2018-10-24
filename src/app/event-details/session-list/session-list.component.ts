import { Component, OnChanges, Input } from '@angular/core';
import { ISession } from '../../events-list/index';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: String;
  @Input() sortBy: String;
  visibleSessions: ISession[] = [];

  constructor() { }

  // this will be called when any of the @Inputs get a new vaule
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDsc);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter( session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
      return 1;
    } else if (s1.name === s2.name) {
      return 0;
    } else {
      return -1;
    }
  }

  sortByVotesDsc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }

}
