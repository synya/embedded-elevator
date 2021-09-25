import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ElevatorComponent } from './elevator.component';
import { ElevatorDashBoardComponent } from './elevator-dash-board/elevator-dash-board.component';
import { ElevatorRouterModule } from './elevator-router.module';
import { SharedModule } from '../shared/shared.module';
import { UartPortSelectorComponent } from '../shared/components/uart-port-selector/uart-port-selector.component';



@NgModule({
  declarations: [
    ElevatorComponent,
    ElevatorDashBoardComponent,
    UartPortSelectorComponent
  ],
  imports: [
    CommonModule,
    ElevatorRouterModule,
    SharedModule
  ]
})
export class ElevatorModule { }
