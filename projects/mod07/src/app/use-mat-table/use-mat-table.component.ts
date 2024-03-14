import { Component, OnInit, ViewChild } from '@angular/core';
import { MeetingRoom, meetingRooms } from '../service/meeting-room';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-use-mat-table',
  templateUrl: './use-mat-table.component.html',
  styles: [],
})
export class UseMatTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  roomDataSource!: MatTableDataSource<MeetingRoom>;
  displaySequence: string[] = ['id', 'name', 'size', 'projector', 'tv'];
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.roomDataSource = new MatTableDataSource(meetingRooms);
  }

  ngAfterViewInit(): void {
    this.roomDataSource.paginator = this.paginator;
    this.roomDataSource.sort = this.sort;
  }

  RowClick(row: any) {
    console.log(row);
  }
  getTotalSize() {
    return meetingRooms
      .map((r) => r.size)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }
}
