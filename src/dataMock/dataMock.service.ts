import { Injectable } from '@nestjs/common';
import {
  UserInfo,
  FundBasicInfo,
  RealTimeValuationItem,
  PerformanceSummary,
  HoldingAnalysis
} from './constant';
import {
  userInfo,
  fundBasicInfo,
  realTimeValuationArr,
  performanceSummary,
  holdingAnalysis
} from './data';

@Injectable()
export class DataMockService {
  getDataMock(): string {
    return 'hello dataMock';
  }
  getUserInfo(): UserInfo {
    return userInfo;
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
