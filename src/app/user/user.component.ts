import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public id: number

  public users: User[] = []


  constructor(public userService: UserService, public router: Router) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUser()
  }

  public getPicture(gender: string, age: number): string {
    return this.userService.getPicture(gender, age);
  }

  public remove(id: number): void {
    console.error(id);
    this.users = this.users.filter(user => user.id != id)
  }

  public goToViewPage(id: number): void {
    this.id = id
    this.viewById(this.id)
    this.router.navigate(["/view"])
  }

  public viewById(id: number) {
    console.log(id);
    return id;
  }








}
