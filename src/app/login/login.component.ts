import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.maxLength(25)]
    });
   }
   onSubmit() {
     console.log(this.loginForm.value);
     return this.authService.loginUser$(this.email.value, this.password.value).subscribe(
       data => {
         const token = data.accessToken;
         this.authService.setToken(token);
         this.router.navigate(['/home']);

       }
     );
   }
get email() {
  return this.loginForm.get('email');
}
get password() {
  return this.loginForm.get('password');
}
  ngOnInit() {
  }

}
