import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogged = false;

  constructor( private authService: AuthService) { }

  onLogOut() {
    this.authService.logOutUser$();
  }
  ngOnInit() {
    /* this.isLogged = this.authService.getLogged(); */
    this.onCheckUser();
  }
  /*me subscribo al observable descrito arriba */
  public onCheckUser(): void {
    this.authService.isLogged.subscribe( value => this.isLogged = value);
  }

}
