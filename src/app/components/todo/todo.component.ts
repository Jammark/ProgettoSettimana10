import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TodosService } from 'src/app/srv/todos.service';
import { Todo } from 'src/app/model/todo';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  @Input() title:string = '';

  srv: TodosService;
  todos : Todo[];


  constructor(srv:TodosService){
    this.srv = srv;
    this.todos = [];
  }



  action1():void{
    this.srv.addTodo({title:this.title});
    this.title = '';
  }
  action2(item:Todo):void{

  }

  ngOnInit(): void {
    this.todos = this.srv.todoList();
  }
}
