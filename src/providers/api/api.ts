import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { config } from '../../config';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  public user: any = {
  iduser: 10, user: 'admin', password: '12345', email: "email@gmail.com", nome:'Ramon Oliveira', bio: 'Biografia teste', profile_picture: 'marty-avatar.png'}
  
  public eventos: any = [ 
    {
        id: 1,
        nome: "Evento X",
        local: "São Paulo",
        data: "16/08/2020",
        qtd_confirmados: 0,
        foto: "event.png",
        info: ""
      },
      {
        id: 2,
        nome: "Eventinho",
        local: "São José dos Campos",
        data: "16/10/2020",
        qtd_confirmados: 0,
        foto: "event.png",
        info: ""
      }
    ];

  public dados: any = {
  posts: [
    {
      id: 1,
      mes_descricao: "Novembro",
      ano: 2019,
      produtos: [
        { id: 3, vencimento: "2021-06-18T00:00:00.000Z", categoria: "Venda Milho", qtd: 2890, unidade: "kg", descricao: "Milho Marca X", valor_total: 5988, tipo: 0, tipo_descricao: "gasto" },
        { id: 4, vencimento: "2020-05-27T00:00:00.000Z", categoria: "Venda Soja", qtd: 3000, unidade: "kg", descricao: "Soja Integrada", valor_total: 3440, tipo: 0, tipo_descricao: "receita" }
      ]
    },
    {
      id: 2,
      mes_descricao: "Outubro",
      ano: 2019,
      produtos: [
        { id: 6, vencimento: "2020-07-21T00:00:00.000Z", categoria: "Venda Milho", qtd: 300, unidade: "kg", descricao: "Milho", valor_total: 1221, tipo: 1, tipo_descricao: "receita" }
      ]
    }
  ]
};

  constructor(public _http: HttpClient, private storage: Storage, public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  login() {
  }

  criarConta() {
  }

  getUsuario() {
  }

  getEventos() {   
  }

  getReceitasGeral() {
  }

  getReceitasUsuario(iduser) {   
  }


}
