import { Component, OnInit } from '@angular/core';
import { DailymotionService } from '../dailymotion.service';

import { Video } from '../../models/dailymotionResponse';

import { DataListModule } from 'primeng/datalist';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dailymotion',
  templateUrl: './dailymotion.component.html',
  styleUrls: ['./dailymotion.component.css']
})
export class DailymotionComponent implements OnInit {

  searchString: string;
  videoList;

  constructor(private dmService: DailymotionService) { }

  ngOnInit() {
  }

  public search() {
    console.log(this.searchString);
    this.videoList = null;
    this.dmService.listVideos(this.searchString).subscribe(response => this.videoList = response.list);
  }

  openVideo(video: Video) {
    window.open('http://www.dailymotion.com/video/' + video.id, '_blank');
  }
}
