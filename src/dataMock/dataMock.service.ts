import { Injectable } from '@nestjs/common';
import { RealTimeValuationItem } from './constant';
import { realTimeValuationArr } from './data';

@Injectable()
export class DataMockService {
  getDataMock(): string {
    return 'hello dataMock';
  }
  getRealTimeValuation(): RealTimeValuationItem[] {
    return realTimeValuationArr;
  }
}