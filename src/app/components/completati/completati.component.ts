import { Component , Input, AfterViewChecked, ChangeDetectorRef, OnInit} from '@angular/core';
import { TodosService } from 'src/app/srv/todos.service';
import { Todo } from 'src/app/model/todo';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
  providers: [HeaderComponent]
})
export class CompletatiComponent implements AfterViewChecked, OnInit{


  srv: TodosService;
  todos : Todo[];
  carica: boolean = true;
  cdr: ChangeDetectorRef;

  constructor(srv: TodosService,  cdr: ChangeDetectorRef){
    this.srv = srv;
    this.todos = [];
    this.cdr = cdr;
  }

  ngOnInit(): void {
    setTimeout(() => this.carica = false, 2000);
  }

  ngAfterViewChecked(): void {
    this.todos = this.srv.todoList();
    console.log("after view checked "+this.todos.length);
    console.table(this.todos);
    this.cdr.detectChanges();
  }
}
