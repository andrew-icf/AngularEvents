import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../../events-list/index';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];
  constructor() { }

  ngOnInit() {
  }

}
