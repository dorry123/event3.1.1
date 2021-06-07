import { Component } from '@angular/core';
import { EventData } from '../../providers/event-data';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  styleUrls: ['./news.scss'],
})
export class NewsPage {
  news: any[] = [];

  constructor(public eventData: EventData) {}

  ionViewDidEnter() {
    this.eventData.getNews().subscribe((news: any[]) => {
      this.news = news;
    });
  }
}
