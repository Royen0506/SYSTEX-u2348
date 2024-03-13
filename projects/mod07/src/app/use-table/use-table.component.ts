import { Component, OnInit } from '@angular/core';
import { MeetingRoom, meetingRooms } from '../service/meeting-room';

@Component({
  selector: 'app-use-table',
  templateUrl: './use-table.component.html',
  styles: [],
})
export class UseTableComponent implements OnInit {
  roomDataSource: MeetingRoom[] = meetingRooms;
  displaySequence: string[] = ['id', 'name', 'size', 'projector', 'tv'];
  constructor() {}
  ngOnInit(): void {}

  RowClick(row: any) {
    console.log(row);
  }
}
