import { Injectable, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Video } from '../models/dailymotionResponse';
import { DailymotionResponse } from '../models/dailymotionResponse';

@Injectable()
export class DailymotionService {

  listVideosMessage = new EventEmitter<String>();
  apiResponse;

  constructor(private httpClient: HttpClient) { }


  listVideos(searchString): Observable<DailymotionResponse> {
    console.log('callng service');
    return this.httpClient.get<DailymotionResponse>('https://api.dailymotion.com/videos?search=' + searchString);
    //  .map((response: Response) => response.json())
    //  .subscribe(
    //  (data) => {
    //    this.apiResponse = data; // .json();
    //    this.listVideosMessage.emit(this.apiResponse);
    //  });
  }
}
