import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElevatorComponent } from './elevator.component';
import { ElevatorDashBoardComponent } from './elevator-dash-board/elevator-dash-board.component';

const routes: Routes = [
  {
    path: '', component: ElevatorComponent, children: [
      {path: 'elevator-dash-board', component: ElevatorDashBoardComponent}
    ]
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
export class ElevatorRouterModule {
}
