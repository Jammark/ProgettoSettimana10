import {Todo} from './todo';
export class Task implements Todo{
  id:number;
  completed:boolean;
  title:string;

  constructor(_id:number, _title:string, _completed:boolean){
    this.id = _id;
    this.title = _title;
    this.completed = _completed;
  }
}
