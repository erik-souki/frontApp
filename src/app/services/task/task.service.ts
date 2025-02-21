import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "https://localhost:7251/api/TodoItems";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  createTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }
}
