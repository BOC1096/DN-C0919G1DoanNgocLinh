import { NgModule } from '@angular/core';
import {  Routes, RouterModule} from '@angular/router';
import { ListComputerComponent } from './components/computer/list-computer/list-computer.component';

const routes: Routes = [
{path: '', component: ListComputerComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
