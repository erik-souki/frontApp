import { Component, Inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/task.model';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-task',
  imports: [SharedModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Chamar o serviço para obter as tarefas
    this.taskService.getTasks().pipe(
      catchError((error) => {
        console.error('Erro ao buscar tarefas:', error);
        return of([]); // Return an empty array to continue the stream
      })
    ).subscribe((data) => {
      this.tasks = data;
    });
  }

}
