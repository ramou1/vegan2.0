import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ApiProvider } from '../../providers/api/api';
import { UtilsProvider } from '../../providers/utils/utils';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  public usuario: string;
  loading: Loading;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public utils: UtilsProvider) {
  }

  user: any = { usuario: '', senha: '' };


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    this.user.usuario = 'responsavel';
    this.user.senha = 'ikxr38';

  }

  hideShowPassword() {  
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }  

  fazerLogin() { 
    this.loading = this.loadingCtrl.create({
      content: 'Carregando...',
    }); 

    this.loading.present().then(() => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(TabsPage);
          });
        }).catch((error: any) => {
          this.loading.dismiss().then(() => {
            console.log("Erro no login: ",error);
            let alert = this.alertCtrl.create({
              title: 'Erro',
              message: '' + error.mensagem,
              buttons: ['Ok']
            });
            alert.present()
          });
        });
  }


}
