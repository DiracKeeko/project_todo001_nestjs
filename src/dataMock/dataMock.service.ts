import { Injectable } from '@nestjs/common';

@Injectable()
export class DataMockService {
  getDataMock(): string {
    return 'hello dataMock';
  }
}