import { Component, OnInit } from '@angular/core';
import {ITodo} from '../interfaces/Itodo';
import {TodoService} from '../services/todo.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My-Trello-Clone';
  displayedColumns: string[] = ['Backlog', 'Working', 'Complete'];
  constructor(private TodoService: TodoService){}
  
  

  working = this.TodoService.getTodoItems("Working");
  backlog = this.TodoService.getTodoItems("Backlog");
  complete = this.TodoService.getTodoItems("Complete");
  dataSource = new MatTableDataSource<ITodo[]>([this.backlog, this.working, this.complete ]);
  ngOnInit(){
    

  }

}
