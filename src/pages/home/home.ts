import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private database : DatabaseProvider) {

  }
    CreateUser(){
      this.database.CreateUser(71627361263512, "Yibson Alexis", "Leudo" ).then( (data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      })
    }

    GetAllUser(){
      this.database.GetAllUsers().then((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      })
    }

}
