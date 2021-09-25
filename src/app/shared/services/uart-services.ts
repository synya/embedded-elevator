import { Injectable } from '@angular/core';
import { UartPort } from '../model/uart-port';

// import * as SerialPort from 'serialport';


@Injectable({
  providedIn: 'root'
})
export class UartService {

  constructor() {
  }

  getUartPortsAvailable(): UartPort[] {
    // SerialPort.list().then((ports:any)=>{
    //   console.log(ports);
    // }).catch((err:any)=>{
    //   console.log(err);
    // });
    return [
      {name: 'PORT 1'},
      {name: 'PORT 2'},
    ];
  }

}
