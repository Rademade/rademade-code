import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rc-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.css']
})
export class AdminUsersListComponent implements OnInit {

  private users: Array<User>;

  constructor( public activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.data.subscribe(({users}) => {
      this.users = users;
    });
  }

  // onDestroy(id) {
  //   // this.users.delete(id).subscribe(() => {
  //   //   // this.router.navigate(['clients']);
  //   // })
  // }
}
