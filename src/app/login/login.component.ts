import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms'; // NgModel removed

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected to styleUrls
})
export class LoginComponent {
  @Input() userData: { username: string; email: string; password: string }[] = [];
  userName: string = '';
  passwd: string = '';


  login(loginForm: NgForm) {
    this.userName = loginForm.value.username; // Access username from loginForm.value
    this.passwd = loginForm.value.username;
    if (this.userData.length > 0) {
      for (var user of this.userData) {
        if (user.username === this.userName && user.password ===this.passwd) {
          console.log('successful');
          break;
        }
        else{
          console.log('failed');
          break;
        }
      }
    }
  }
}
