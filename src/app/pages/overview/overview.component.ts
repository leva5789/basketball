import { Component } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { Team } from './models/team.model';

const ELEMENT_DATA: Team[] = [
  {position: 1, name: 'Denver Nuggets', points: 9495, numberOfMatches: 82, wins: 53, losses: 29},
  {position: 2, name: 'Memphis Grizzlies', points: 9587, numberOfMatches: 82, wins: 51, losses: 31},
  {position: 3, name: 'Sacramento Kings', points: 9898, numberOfMatches: 82, wins: 48, losses: 34},
  {position: 4, name: 'Phoenix Suns', points: 9319, numberOfMatches: 82, wins: 45, losses: 37},
  {position: 5, name: 'Los Angeles Clippers', points: 9314, numberOfMatches: 82, wins: 44, losses: 38},
  {position: 6, name: 'Golden State Warriors', points: 9753, numberOfMatches: 82, wins: 44, losses: 38},
  {position: 7, name: 'Los Angeles Lakers', points: 9608, numberOfMatches: 82, wins: 43, losses: 39},
  {position: 8, name: 'Minnesota Timberwolves', points: 9494, numberOfMatches: 82, wins: 42, losses: 40},
  {position: 9, name: 'New Orleans Pelicans', points: 9378, numberOfMatches: 82, wins: 42, losses: 40},
  {position: 10, name: 'Oklahoma City Thunder', points: 9633, numberOfMatches: 82, wins: 40, losses: 42},
  {position: 11, name: 'Dallas Mavericks', points: 9366, numberOfMatches: 82, wins: 38, losses: 44},
  {position: 12, name: 'Utah Jazz', points: 9600, numberOfMatches: 82, wins: 37, losses: 45},
  {position: 13, name: 'Portland Trail Blazers', points: 9299, numberOfMatches: 82, wins: 33, losses: 49},
  {position: 14, name: 'Houston Rockets', points: 9081, numberOfMatches: 82, wins: 22, losses: 60},
  {position: 15, name: 'San Antonio Spurs', points: 9269, numberOfMatches: 82, wins: 22, losses: 60},
];
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  displayedColumns: string[] = ['position','name', 'points', 'numberOfMatches', 'wins', 'losses'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeleteClick(row: Team) {
    const filteredArray = this.dataSource.data.filter(el => el.name !== row.name);
    this.dataSource = new MatTableDataSource(filteredArray);
  }
}
