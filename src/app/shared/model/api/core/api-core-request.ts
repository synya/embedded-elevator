import * as BinaryParserEncoder from 'binary-parser-encoder';

interface IRequest {
  commandId: number;
  processId: number;
  bodySize: number;
}

export class ApiCoreRequest {

  data: IRequest = null;

  parser = new BinaryParserEncoder.Parser()
    .uint32le('commandId')
    .uint32le('processId')
    .uint32le('bodySize');

  size: number = this.parser.sizeOf();

  constructor(obj: IRequest) {
    console.log(obj);
    if (obj) {
      this.data = obj;
    }
  }

  pack(): Buffer {
    return this.data ? this.parser.encode(this.data) : [];
  }

  unPack(binaryData: Buffer): IRequest {
    console.log(binaryData);
    console.log(binaryData.length);
    return (binaryData && binaryData.length === this.parser.sizeOf()) ? this.parser.parse(binaryData) : null;
  }
}
