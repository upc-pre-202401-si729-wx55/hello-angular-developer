import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular-developer';
  firstName: string = 'Unknown';
  lastName: string = '';

  onDeveloperRegistered(developer: {firstName: string, lastName: string}) {
    this.firstName = developer.firstName;
    this.lastName = developer.lastName;
  }
}
