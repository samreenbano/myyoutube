import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  public videos:any;

  constructor(private youtubeService:YoutubeService) {
    this.youtubeService.getVideosForChanel()
    .subscribe(list => {
    console.log(list);
    this.videos = list.items;
  });
   }

  ngOnInit() {
  }

}
