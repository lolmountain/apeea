import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { QuiSommesNousPage } from '../pages/qui-sommes-nous/qui-sommes-nous';
import { AgendaPage } from '../pages/agenda/agenda';
import { ConnexionPage } from '../pages/connexion/connexion';
import { NotificationsPage } from '../pages/notifications/notifications';
import * as firebase from 'firebase';
//import { ListPage } from '../pages/list/list';

const config = {
  apiKey: 'AIzaSyBnQHc58Pv0lRmjUwZURnVHlcQHbs8MDHE',
  authDomain: 'bookshelves-74100.firebaseapp.com',
  databaseURL: 'https://bookshelves-74100.firebaseio.com',
  projectId: 'bookshelves-74100',
  storageBucket: 'gs://bookshelves-74100.appspot.com',
  messagingSenderId: '777772429503'
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon:'home', component: HomePage },
      //{ title: 'List', icon: 'list', component: ListPage },
      { title: 'Qui sommes nous?', icon: 'information-circle', component: QuiSommesNousPage },
      { title: 'Agenda', icon: 'calendar', component: AgendaPage },
      { title: 'Connexion', icon: 'log-in', component: ConnexionPage },
      { title: 'Notifications', icon: 'notifications', component: NotificationsPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
