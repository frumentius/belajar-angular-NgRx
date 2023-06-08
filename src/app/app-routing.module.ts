import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ShowOnlyComponent } from './show-only/show-only.component';
import { EditNameComponent } from './edit-name/edit-name.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'edit', component: EditNameComponent },
  { path: 'show', component: ShowOnlyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
