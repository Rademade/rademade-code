import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '@shared/models/user.model';
import { CurrentUserService } from '@shared/services/current-user.service';
import { UserApiService } from '@shared/services/api/user.api.service';

@Component({
  selector: 'rc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: UserModel[];
  private isAdmin: boolean;

  constructor(
    public usersService: UserApiService,
    private activeRoute: ActivatedRoute,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit() {
    this.users = this.activeRoute.snapshot.data['users'];
    this.isAdmin = this.currentUserService.getUser().is_admin;
    console.log(this.currentUserService.getUser());
  }

  updateUser(id: number, name: string, email: string) {
    this.usersService.update(new UserModel({name: name, email: email}), id).subscribe(
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
