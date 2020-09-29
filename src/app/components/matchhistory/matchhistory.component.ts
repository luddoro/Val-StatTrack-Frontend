import { Component, OnInit } from '@angular/core';


export interface MatchHistoryTable {
  wl: string;
  queue: string;
  kda: number;
}

const ELEMENT_DATA: MatchHistoryTable[] = [
  { wl: 'W', queue: 'solo/duo', kda: 1.0079 },
  { wl: 'L', queue: 'normal/draft', kda: 4.0026 },
  { wl: 'W', queue: 'aram', kda: 6.941 },
  { wl: 'W', queue: 'normal', kda: 9.0122 },
  { wl: 'W', queue: 'normal', kda: 10.811 },
  { wl: 'W', queue: 'normal', kda: 12.0107 },
  { wl: 'L', queue: 'normal', kda: 14.0067 },
  { wl: 'L', queue: 'normal', kda: 15.9994 },
  { wl: 'L', queue: 'normal', kda: 18.9984 },
  { wl: 'L', queue: 'normal', kda: 20.1797 },
];


/**
 * @title Table dynamically changing the columns displayed
 */
@Component({
  selector: 'app-matchhistory',
  templateUrl: './matchhistory.component.html',
  styleUrls: ['./matchhistory.component.scss']
})
export class MatchhistoryComponent implements OnInit {


  displayedColumns: string[] = ['wl', 'queue', 'kda'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
