import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { User, LoginResponse } from '../../interfaces/posting';
import { MediaProvider } from './../../providers/media/media';
import { MenuPage } from './../menu/menu';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User = {};
  username: string;
  password: string;

  constructor(public mediaprovider: MediaProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginClicked(formSignIn) {
    this.mediaprovider.login(this.user).subscribe(
      (response: LoginResponse) => {
        console.log(response);
        localStorage.setItem("token", response.token);

        this.navCtrl.push(MenuPage);
        this.mediaprovider.token = response.token;
        this.mediaprovider.loggedIn = true;
        this.mediaprovider.user = response.user;
        // console.log("user.id: " + this.mediaprovider.user_id);
      },
      error => {
        console.log(error);
      }
    );
  }

  goRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }

}
