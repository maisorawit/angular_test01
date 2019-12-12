import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router:Router){}

  public goToLogin(): void{
    this.router.navigate(["/login"])
  }
  
  public goToUserPage(): void{
    this.router.navigate(["/user"])
  }

  public goToViewPage():void{
    this.router.navigate(["/view"])
  }

}

