import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ElevatorDashBoardComponent } from './elevator-dash-board.component';
import { ElevatorDashBoardRouterModule } from './elevator-dash-board-router.module';
import { SharedModule } from '../shared/shared.module';
import { UartPortSelectorComponent } from '../shared/components/uart-port-selector/uart-port-selector.component';



@NgModule({
  declarations: [
    ElevatorDashBoardComponent,
    UartPortSelectorComponent
  ],
  imports: [
    CommonModule,
    ElevatorDashBoardRouterModule,
    SharedModule
  ]
})
export class ElevatorDashBoardModule { }
