import { Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [


  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}

];
