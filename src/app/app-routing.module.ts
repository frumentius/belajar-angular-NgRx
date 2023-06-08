import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ShowOnlyComponent } from './show-only/show-only.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'show', component: ShowOnlyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
