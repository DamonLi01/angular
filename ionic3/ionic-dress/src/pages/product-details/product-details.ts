import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemeableBrowser } from 'ionic-native';
/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  selectedItem: any;
  imgs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = this.navParams.get('item');
    if (this.selectedItem.SmallImages) {
      this.imgs = this.selectedItem.SmallImages;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }
  goBuy() {
    /*
      statusbar：状态栏的颜色；
      toolbar：工具栏配置；
      titll：标题的配置；
      backButton：返回按钮配置；
    */
    let options = {
      statusbar: {
        color: '#f8285c'
      },
      toolbar: {
        height: 44,
        color: '#f8285c'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      backButtonCanClose: true
    };
    new ThemeableBrowser(this.selectedItem.ClickUrl, '_blank', options);
  }

}
