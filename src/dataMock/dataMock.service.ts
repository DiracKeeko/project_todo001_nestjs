import { Injectable } from '@nestjs/common';
import { FundBasicInfo, RealTimeValuationItem } from './constant';
import { fundBasicInfo, realTimeValuationArr } from './data';

@Injectable()
export class DataMockService {
  getDataMock(): string {
    return 'hello dataMock';
  }
  getFundBasicInfo(): FundBasicInfo {
    return fundBasicInfo;
  }
  getRealTimeValuation(): RealTimeValuationItem[] {
    return realTimeValuationArr;
  }
}