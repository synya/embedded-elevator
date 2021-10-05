import { Component, OnInit } from '@angular/core';
import * as BinaryParserEncoder from 'binary-parser-encoder';

import { ApiCoreRequest } from '../../model/api/core/api-core-request';
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

    const request = new ApiCoreRequest({
      commandId: 80000,
      processId: 70000,
      bodySize: 0,
    });

    const incoming = Buffer.from('803801007011010000000000', 'hex');

    console.log(request.unPack(incoming));

    console.log(request.pack().toString('hex'));
  }

}
