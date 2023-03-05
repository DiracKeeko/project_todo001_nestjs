import { Injectable } from '@nestjs/common';
import { FundBasicInfo, RealTimeValuationItem, PerformanceSummary } from './constant';
import { fundBasicInfo, realTimeValuationArr, performanceSummary } from './data';

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
  getPerformanceSummary(): PerformanceSummary {
    return performanceSummary;
  }
}