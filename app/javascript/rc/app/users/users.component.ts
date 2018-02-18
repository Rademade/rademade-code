import { Component , OnInit } from '@angular/core';
import { UserModel } from 'models';
import { AuthService } from '@shared/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserApiService } from '@shared/services/api/user.api.service';

@Component({
  selector: 'rc-users',
  templateUrl: './users.component.html',
  styleUrls: ['.//users.component.css']
})
export class UsersComponent implements OnInit {

  private users: UserModel[];
  private usersForm: FormGroup;
  private currentIndex: number;
  private currentId: number;
  private editMode: boolean = false;
  private toggleFormState: boolean = false;

  constructor(
    public usersService: UserApiService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.getUsers();

    this.usersForm = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });

  };

  getUsers() {
    this.usersService.index().subscribe((users) => {
      this.users = users;
    });
  }

  updateUser() {
    this.usersService.update(this.usersForm.value, this.currentId).subscribe(
      () => {
        this.getUsers();
        this.editMode = false;
      }
    );
    this.usersForm.reset();
    this.toggleForm();
  }

  editUser(id: number, index: number) {
    this.currentIndex = index;
    this.currentId = id;
    this.editMode = true;
    this.toggleForm();
    this.usersForm.patchValue(this.users[this.currentIndex]);
  }

  addUser() {
    this.usersService.create(this.usersForm.value).subscribe((user) => {
      this.users.push(user);
    });
    this.usersForm.reset();
    this.toggleForm();
  }

  destroyUser(id: string, index: number) {
    if (confirm("Press a button!") == true) {
      this.users.splice(index, 1);
      this.usersService.destroy(id).subscribe();
    } else {
      return false;
    }
  }

  toggleForm() {
    this.toggleFormState = !this.toggleFormState;
  }

  cancelForm() {
    this.editMode = false;
  }

}
