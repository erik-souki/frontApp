import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CreateTaskComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontApp';
}
