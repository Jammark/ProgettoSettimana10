import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { CompletatiComponent } from './components/completati/completati.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
