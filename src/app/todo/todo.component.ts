import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../../interfaces/Itodo'



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo:ITodo[];
  title;
  cDate;
  dDate;
  constructor() { }

  ngOnInit() {
    console.log(this.todo);
    this.todoView();
  }

  todoView(){
    this.title = this.todo[0].Title;
    this.cDate = this.todo[0].CreationDate.toDateString();
    if(this.todo[0].DueDate) this.dDate = this.todo[0].DueDate.toDateString();
  }
}
