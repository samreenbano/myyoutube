import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public data = '';
  constructor(private http: HttpClient) { }
  getSearchUrl(value){
    this.data=value;
  }
  getVideosForChanel(): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDKj64Rez3560iRdS-wH9V2T8V-ipmCGmY&q=' +this.data +'&part=snippet&type=video&maxResults=20';
    console.log(url);
    return this.http.get(url);
  }
  getTrendingVideos(): Observable<any> {
    let url='https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=es&videoCategoryId=17&key=AIzaSyDKj64Rez3560iRdS-wH9V2T8V-ipmCGmY&q=&type=video&maxResults=20';
    console.log(url);
    return this.http.get(url);
  }


}


