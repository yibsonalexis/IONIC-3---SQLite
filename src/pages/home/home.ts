import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private ListUser : any;  
  private todo: FormGroup;

  constructor(public navCtrl: NavController, private database: DatabaseProvider, private formBuilder: FormBuilder) {

    this.todo = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      lastname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      identification: ['', Validators.required],
    });

  }
    CreateUser(){
      console.log(this.todo);
      
      this.database.CreateUser(this.todo.value.identification, this.todo.value.name, this.todo.value.lastname ).then( (data) => {
        console.log(data);
        this.GetAllUser();
      }, (error) => {
        console.log(error);
      })
    }

    GetAllUser(){
      this.database.GetAllUsers().then((data: any) => {
        console.log(data);
        this.ListUser = data;
      }, (error) => {
        console.log(error);
      })
    }

    DeleteUser(idUser){
      console.log(idUser);

    }

}
