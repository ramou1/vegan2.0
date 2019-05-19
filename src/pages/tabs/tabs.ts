import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RecipesPage } from '../recipes/recipes';
import { EventsPage } from '../events/events';
import { MapPage } from '../map/map';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecipesPage;
  tab3Root = EventsPage; 
  tab4Root = MapPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
