import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';



@NgModule({

  imports: [
    BrowserModule,
    SharedModule, // Modulos Compartilhados
    TaskComponent,
    HomeComponent,
    AppComponent
  ]
})
export class AppModule { }
