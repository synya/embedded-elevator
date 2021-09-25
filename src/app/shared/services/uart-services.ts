import { ElectronService } from '../../core/services';
import { Injectable } from '@angular/core';

import { UartPort } from '../model/uart-port';

@Injectable({
  providedIn: 'root'
})
export class UartService {

  constructor(private electron: ElectronService) {
  }

  getUartPortsAvailable(): UartPort[] {
    const uartPorts: UartPort[] = [];
    this.electron.serialPort.list().then((ports: any) => {
      ports.forEach(p => {uartPorts.push(new UartPort({name: p['path']}));});
    }).catch((err: any) => {
      console.log(err);
    });
    return uartPorts;
  }

}
