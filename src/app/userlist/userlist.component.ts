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

  constructor(private usersService: UsersService, ) { }
  ngOnInit(): void {
    this.getUpdatedUserList();

  }
  getUpdatedUserList() {
    this.usersService.getUsers().subscribe(listUsersResponse => {
      this.users = listUsersResponse.users;
    });
  }
  onSelect(user: UserForm): void {
    this.selectedUser = user;
  }
  deleteUser(user: UserForm) {
    this.selectedUser = user;
    let id = this.selectedUser.id;
    let userName = this.selectedUser.username
    this.usersService.deleteUser(id, userName).subscribe(res => { 
      if (res.status === 200) {
        alert(res.body?.data); this.getUpdatedUserList()
      } else {
        alert(`Failed to delete user. Reason: ${res.body?.error.message}`)
      }
    });

  }
  updateUser(user: UserForm) {
    this.selectedUser = user;
    let id = this.selectedUser.id;
    this.usersService.updateUser(id, this.selectedUser).subscribe
      (res => {
        if (res.status === 200) {
          alert(res.body?.data);
          this.getUpdatedUserList()
        } else {
          alert(`Failed to create user. Reason: ${res.body?.error.message}`)
        }
      });
  }
}

