import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsinfoPage } from '../newsinfo/newsinfo';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public msg = `这是一个新闻页面`;
  public list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    for (let i = 0; i < 15; i++) {
      this.list.push(`这是第${i}条数据`);
    }
  }

  goInfo(){
    this.navCtrl.push(NewsinfoPage);
  }
}
