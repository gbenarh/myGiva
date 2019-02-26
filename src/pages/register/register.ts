import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../interfaces/posting";
import { MediaProvider } from "../../providers/media/media";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: User = { username: null };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }

  signUp() {
    console.log(this.user);

    this.mediaProvider.register(this.user).subscribe(
      response => {
        console.log(response);
        this.navCtrl.pop().catch();
      },
      error => {
        console.log(error);
      }
    );
  }

  goLoginPage() {
    this.navCtrl.pop().catch();
  }

}
