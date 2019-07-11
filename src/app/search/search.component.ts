import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public videos:any;
  constructor(private youtubeService: YoutubeService) { 
    this.videos=[];
  }

  ngOnInit() { 
  }
    onClick(value)
    {
      this.youtubeService.getSearchUrl(value);
    //   this.youtubeService.getVideosForChanel()
    //   .subscribe(list => {
    //   console.log(list);
    //   this.videos = list.items;
    // });
    }
  }


