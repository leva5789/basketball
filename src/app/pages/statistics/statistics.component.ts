import { Component } from '@angular/core';
import { Player } from './models/player.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  public players: Player[] = [
    {
      name: 'Devin Booker',
      achievementNum: 36.9,
      achievementName: 'Points per game',
      img: 'https://www.pngarts.com/files/5/Devin-Booker-PNG-Pic.png',
      color: '#CCCCCC',
    },
    {
      name: 'Trae Young',
      achievementNum: 10.2,
      achievementName: 'Assists per game',
      img: 'https://media.discordapp.net/attachments/1077294524214292583/1104774250629435454/leva.png?width=918&height=663',
      color: '#CCCCCC',
    },
    {
      name: 'Anthony Davies',
      achievementNum: 6.4,
      achievementName: 'Blocks per game',
      img: 'https://b.fssta.com/uploads/application/nba/headshots/1790.png',
      color: '#CCCCCC',
    }
  ]
}
