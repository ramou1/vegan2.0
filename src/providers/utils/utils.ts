import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

  constructor(public http: HttpClient, public toastCtrl: ToastController) {
    console.log('Hello UtilsProvider Provider');
  }

  presentErrorToast(mensagem) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom',
      cssClass: 'errorCss'
    });
    toast.present();
  }

  presentSuccessToast(mensagem) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom',
      cssClass: 'successCss'
    });
    toast.present();
  }

}
