import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';

import { MediaProvider } from '../../providers/media/media';
import { PinsPage } from './../pins/pins';
import { UploadPage } from './../upload/upload';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homeRoot = HomePage;
  pinsRoot = PinsPage;
  profileRoot = ProfilePage;
  uploadRoot = UploadPage;
  loginRoot = LoginPage;

  constructor(
    public app: App, public mediaProvider: MediaProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  tabChanged(evt) {
    if (evt.tabTitle === 'Login') {
      this.navCtrl.push(LoginPage);
    }
  }

}
