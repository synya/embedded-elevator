import { Component, OnInit } from '@angular/core';
import { UartPort } from '../../model/uart-port';

import { UartService } from '../../services/uart-services';

@Component({
  selector: 'app-uart-port-selector',
  templateUrl: './uart-port-selector.component.html',
  styleUrls: ['./uart-port-selector.component.css']
})
export class UartPortSelectorComponent implements OnInit {

  uartPorts: UartPort[] = [];

  constructor(private uartService: UartService) {
  }

  ngOnInit(): void {
    this.uartPorts = this.uartService.getUartPortsAvailable();
  }

}
