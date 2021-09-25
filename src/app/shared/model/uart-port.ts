interface IUartPort {
  name: string;
}

export class UartPort {

  name: string;

  constructor(obj?: IUartPort) {
    this.name = obj && obj.name || '';
  }
}
