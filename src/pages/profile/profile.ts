import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ProfileEditPage } from '../profile-edit/profile-edit';

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
  public user: any = this.api.user;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public modalCtrl: ModalController, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log("Usuário: ", this.user);
  }

  editarPerfil() {
    console.log("Editar perfil", this.user);
    
    this.navCtrl.push(ProfileEditPage, {
      dados: this.user
    });
  }


  sair() {
    console.log("Logout");
    this.platform.exitApp();
  }
}
