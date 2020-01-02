import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dados: any = this.api.dados;

  constructor(public navCtrl: NavController, public api: ApiProvider) {

  }

  ionViewDidEnter() {
    this.loadData();
  }

  loadData() {
    console.log("Dados da API: ", this.dados);
  }

}
