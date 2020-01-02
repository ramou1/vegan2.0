import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';
import { EventsPage } from '../pages/events/events';
import { MapPage } from '../pages/map/map';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ApiProvider } from '../providers/api/api';
import { UtilsProvider } from '../providers/utils/utils';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { EventDetailsPage } from '../pages/event-details/event-details';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    RecipesPage,
    EventsPage,
    EventDetailsPage,
    MapPage,
    ProfilePage,
    ProfileEditPage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__vegan',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RecipesPage,
    EventsPage,
    EventDetailsPage,
    MapPage,
    ProfilePage,
    ProfileEditPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    UtilsProvider
  ]
})
export class AppModule {}
