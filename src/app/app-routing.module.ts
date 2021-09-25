import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { ElevatorModule } from './elevator/elevator.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'elevator-dash-board', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ElevatorModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
