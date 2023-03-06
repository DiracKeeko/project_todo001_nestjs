import { Injectable } from '@nestjs/common';
import { FundBasicInfo, RealTimeValuationItem, PerformanceSummary, HoldingAnalysis } from './constant';
import { fundBasicInfo, realTimeValuationArr, performanceSummary, holdingAnalysis } from './data';

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
  getHoldingAnalysis(): HoldingAnalysis {
    return holdingAnalysis;
  }
}