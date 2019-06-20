import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  users: any[] = [];

  constructor(public navCtrl: NavController, public userService: UserService) {
  }

  ionViewDidLoad() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
