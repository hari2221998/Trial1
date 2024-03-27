import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // corrected property name to styleUrls
})
export class HomeComponent {
  registerValues: any=[];

  getData(value: { username: string, email: string, password: string }[]) {
    console.log('home component called');
    this.registerValues = value;
     console.log(value);
  }
}
