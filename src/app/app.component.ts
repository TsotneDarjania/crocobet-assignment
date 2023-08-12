import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  showDetails(userId: number): void {
    // Implement your logic here, e.g., navigate to the user details page
    // You can use Angular's Router to navigate
    console.log('Showing details for user with ID:', userId);
  }
}
