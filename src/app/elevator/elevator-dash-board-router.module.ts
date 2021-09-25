import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElevatorDashBoardComponent } from './elevator-dash-board.component';

const routes: Routes = [
  {
    path: 'elevator-dash-board', component: ElevatorDashBoardComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ElevatorDashBoardRouterModule {
}
