import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  images = ['advance-card-bttf.png', 'advance-card-bttf.png', 'advance-card-bttf.png', 'advance-card-bttf.png'];
  public condutor: any = { foto: "marty-avatar.png", nome: "Ramon Oliveira", empresa: "Matrix Transportes", descricao: "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editarPerfil() {
    console.log("Editar perfil");
    
    // this.navCtrl.push(PerfilEditPage);
  }

  sair() {
    console.log("Logout");
    this.platform.exitApp();
  }
}
