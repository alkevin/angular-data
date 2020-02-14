import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todopage',
    pathMatch: 'full'
  },
  {
    path: 'todopage',
    component: TodoComponent
  },
  { path: 'todopage/:id', component: TodoEditComponent },
  { path: '**', redirectTo: 'todopage' } // bad routes redirect to todopage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
