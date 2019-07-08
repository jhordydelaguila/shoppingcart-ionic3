import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { User } from '../../models/user';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  users: User[];

  constructor(public navCtrl: NavController, public userService: UserService) {
  }

  ionViewDidLoad() {
    this.userService.getUsers()
      .subscribe((data: User[]) => this.users = data)
  }

}
