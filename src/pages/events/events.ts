import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { EventDetailsPage } from '../event-details/event-details';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  eventos: any = this.api.eventos;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
    console.log("Eventos encontrados: ", this.eventos);
  }

  abrirEvento(evento) {    
    this.navCtrl.push(EventDetailsPage, {
      evento: evento
    });
  }

}
