import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormsModule) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.maxLength(25)]
    });
   }
get email() {
  return this.loginForm.get('email');
}
get password() {
  return this.password.get('password');
}
  ngOnInit() {
  }

}
