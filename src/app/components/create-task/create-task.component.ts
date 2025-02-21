import { TaskService } from './../../services/task/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';


@Component({
  selector: 'app-create-task',
  imports: [FormsModule, ReactiveFormsModule,SharedModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit{
  taskForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateTaskComponent>,
    private taskService: TaskService
  ) { }
  fecharFormulario(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  limparFormulario() {
    throw new Error('Method not implemented.');
    }
    onSubmit(): void {
      if (this.taskForm.valid) {
        const formData = this.taskForm.value;

        // Chamada ao serviço para criar a tarefa
        this.taskService.createTask(formData).subscribe(
          (response) => {
            console.log('Tarefa cadastrada com sucesso:', response);

            // Fecha o diálogo e retorna os dados para o componente pai, se necessário
            this.dialogRef.close(response);
          },
          (error) => {
            console.error('Erro ao cadastrar a tarefa:', error);
          }
        );
      }

  }





}
