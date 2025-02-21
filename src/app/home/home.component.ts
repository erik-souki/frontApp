import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from "../components/task/task.component";
import { CreateTaskComponent } from "../components/create-task/create-task.component";

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  imports: [SharedModule, TaskComponent, CreateTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private dialog: MatDialog) { }

  abrirDialogCriarTarefa() {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '500px',
      panelClass: 'custom-dialog',
      maxWidth: '100vw',
      maxHeight: '100vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Nova tarefa:', result);
        // Aqui você pode implementar a lógica para salvar a tarefa
      }
    });
  }
}
