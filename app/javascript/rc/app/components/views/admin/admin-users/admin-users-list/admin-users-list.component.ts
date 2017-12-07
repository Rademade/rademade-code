import { Component , OnInit } from '@angular/core';
import { UserService } from 'services';
import { User } from 'models';
import { AuthHttp } from 'angular2-jwt';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rc-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.css']
})
export class AdminUsersListComponent implements OnInit {

  private users: User[];

  constructor(
    public usersService: UserService,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.users = this.activeRoute.snapshot.data['users'];
  }

  updateUser(id: number, name: string, email: string) {
    this.usersService.update(new User({name: name, email: email}), id).subscribe(
      (error) => console.log(error)
    );
  }


  addUser(name: string, email: string, password: string) {
    this.usersService.create({name: name, email: email,password: password})
      .subscribe((user) => {
        this.users.push(user);
      });
  }

  destroyUser(id: string, index: number) {
    if (confirm("Press a button!") == true) {
      this.users.splice(index, 1);
      this.usersService.destroy(id).subscribe();
    } else {
      return false;
    }
  }

}
