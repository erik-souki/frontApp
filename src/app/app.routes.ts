import { Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [


  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}

];
