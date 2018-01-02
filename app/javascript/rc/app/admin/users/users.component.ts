import { Component , OnInit } from '@angular/core';
import { CurrentUserService, UserService } from 'services';
import { User } from 'models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[];
  private isAdmin: boolean;

  constructor(
    public usersService: UserService,
    private activeRoute: ActivatedRoute,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit() {
    this.users = this.activeRoute.snapshot.data['users'];
    this.isAdmin = this.currentUserService.getUser().is_admin;
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
