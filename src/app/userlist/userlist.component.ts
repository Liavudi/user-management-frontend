import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { UserForm } from '../userform';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  users: UserForm[] = []
  selectedUser?: UserForm;

  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(listUsersResponse => {
      this.users = listUsersResponse.users;
      console.log(this.users)
    });
  }
  onSelect(user: UserForm): void {
    this.selectedUser = user;
  }
  deleteUser(user: UserForm) {
    this.selectedUser = user;
    var id = this.selectedUser.id
    this.usersService.deleteUser(id).subscribe(res => { console.log(res); if (res.status === 200) { alert("User deleted successfully") } else { alert(`Failed to delete user. Reason: ${res.body?.error.message}`)}});

  }
  updateUser(user: UserForm) {
    this.selectedUser = user;
    let id = this.selectedUser.id
    this.usersService.updateUser(id, this.selectedUser).subscribe
      (res => {
        console.log(res); if (res.status === 200) {
          alert('User updated succesfully');
        } else {
          alert(`Failed to create user. Reason: ${res.body?.error.message}`)
        }
      });
  }
}
