import { Component, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { TodosService } from 'src/app/srv/todos.service';
import { Todo } from 'src/app/model/todo';
import { OnInit , OnChanges, AfterViewChecked, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges, AfterViewChecked{

  @Input() title:string = '';

  srv: TodosService;
  todos : Todo[];
  carica: boolean = true;
  carica2: boolean = true;
  current:number=0;
  cdr: ChangeDetectorRef;


  constructor(srv:TodosService, cdr: ChangeDetectorRef){
    this.srv = srv;
    this.todos = [];
    this.cdr = cdr;
  }



  action1():void{
    console.log(this.title);
    this.srv.addTodo({title:this.title});
    this.title = '';
   // this.todos = this.srv.todoList();
  }
  action2(item:Todo):void{
    this.current = item.id;
    this.carica2=true;
    setTimeout(() => {
    this.srv.completeTodo(item.id);
    this.todos = [];
    this.carica2 = false;
    this.current = 0;
    },2000);
  }

  ngOnInit(): void {
    setTimeout(() => this.carica = false, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewChecked(): void {
    this.todos = this.srv.todoList();
    console.log("after view checked "+this.todos.length);
    console.table(this.todos);
    this.cdr.detectChanges();
  }

  isEmpty():boolean{
    return this.todos.filter(el => !el.completed).length == 0;
  }
}
