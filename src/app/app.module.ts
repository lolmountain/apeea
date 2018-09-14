import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { baseURL } from '../shared/baseurl';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { QuiSommesNousPage } from '../pages/qui-sommes-nous/qui-sommes-nous';
import { AgendaPage } from '../pages/agenda/agenda';
import { ConnexionPageModule } from '../pages/connexion/connexion.module';
import { NotificationsPage } from '../pages/notifications/notifications';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { HttpClientModule } from '@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';
import { LoginProvider } from '../providers/login/login';
//import { RestProvider } from '../providers/rest/rest';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuiSommesNousPage,
    AgendaPage,
    NotificationsPage

    //ListPage
  ],
  imports: [
    ConnexionPageModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuiSommesNousPage,
    AgendaPage,
    NotificationsPage
    //ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL },
    AuthProvider,
    LoginProvider
    //RestProvider

  ]
})
export class AppModule {


}
