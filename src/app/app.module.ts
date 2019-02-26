import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPage } from '../pages/landing/landing';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { ModifyPage } from '../pages/modify/modify';
import { MyItemsPage } from '../pages/my-items/my-items';
import { ProfilePage } from '../pages/profile/profile';
import { UploadPage } from '../pages/upload/upload';
import { ViewPage } from '../pages/view/view';
import { PinsPage } from '../pages/pins/pins';

import { HttpModule } from '@angular/http';
import { MediaProvider } from '../providers/media/media';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    HomePage,
    LoginPage,
    RegisterPage,
    MenuPage,
    ModifyPage,
    MyItemsPage,
    ProfilePage,
    UploadPage,
    ViewPage,
    PinsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    HomePage,
    LoginPage,
    RegisterPage,
    MenuPage,
    ModifyPage,
    MyItemsPage,
    ProfilePage,
    UploadPage,
    ViewPage,
    PinsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpModule,
    MediaProvider,
    MediaProvider,
    PipesModule
  ]
})
export class AppModule {}
