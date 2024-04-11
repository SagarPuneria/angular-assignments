import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private activateRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    console.log('non observable way this.activateRoute.snapshot.params:', this.activateRoute.snapshot.queryParams)
  }
}
