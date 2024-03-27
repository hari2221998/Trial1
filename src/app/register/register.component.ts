import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  users: { username: string, email: string, password: string }[] = [];
  // dummy:any[]=[];

  @Output() dataCarrier: EventEmitter<{ username: string, email: string, password: string }[]> = new EventEmitter();

  register(registerForm: NgForm) {
    this.users.push(registerForm.value);
    this.dataCarrier.emit(this.users);
     console.log(registerForm.value);
  }

}
