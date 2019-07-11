import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-trendingvideos',
  templateUrl: './trendingvideos.component.html',
  styleUrls: ['./trendingvideos.component.css']
})
export class TrendingvideosComponent implements OnInit {
  public trendingvideos='';

  constructor(private youtubeservice: YoutubeService) { }

  ngOnInit() {
    this.youtubeservice.getTrendingVideos()
    .subscribe(list1 => {
      console.log(list1);
      this.trendingvideos = list1.items;
    });
  }

}
