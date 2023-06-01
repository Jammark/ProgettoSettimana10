import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Task } from '../model/task';

type Json = {
  id:number;
  title:string;
  completed:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  static TODO_KEY: string = "todo_key";

  private todos: Todo[];

  constructor() {
    this.todos = [];
    localStorage.setItem(TodosService.TODO_KEY, JSON.stringify([]))
  }

  get getTodos(){
    return this.todos;
  }

  addTodo(item:Partial<Todo>):void{
    let list = this.jsonList();
     let id = list.length > 0 ?
     list.reduce((e1:Json,e2:Json, index:number) => Math.max(e1.id, e2.id) == e1.id ? e1 : e2).id + 1
     :1;
    list.push({...{
      id:id,
      title: '',
      completed: false
    } as Json, ...item});
    localStorage.setItem(TodosService.TODO_KEY, JSON.stringify(list));
  }

  completeTodo(id : number){

      let list = this.jsonList();
      let item = list.find(element => element.id == id);
      if(item){
        item.completed = true;
        localStorage.setItem(TodosService.TODO_KEY, JSON.stringify(list));
      }

  }

  jsonList():Json[]{
    let value : string | null = localStorage.getItem(TodosService.TODO_KEY);
    if(value){
      return JSON.parse(value) as Json[];
    }else{
      return [];
    }
  }

  todoList():Todo[]{

      let list: Json[] = this.jsonList();
      return list.map(element => new Task(element.id, element.title, element.completed));

  }
}
