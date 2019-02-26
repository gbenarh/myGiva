import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Picture } from '../../interfaces/posting';
import { HttpClient } from '@angular/common/http';
import { ViewPage } from '../view/view';
import { UploadPage } from "../upload/upload";
import { Observable } from 'rxjs/Observable';
import { MediaProvider } from '../../providers/media/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  picArray: Observable<Picture[]>;

  constructor(public http: HttpClient, private mediaProvider: MediaProvider, public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.loadItems_GivaTag();
  }

  loadItems_GivaTag() {
    this.picArray = this.mediaProvider.getAllMedia();
  }

  viewImage(url: string) {
    //this.photoViewer.show(this.src + url);
  }

  goToPost() {
    this.navCtrl.push(UploadPage);
  }

}
