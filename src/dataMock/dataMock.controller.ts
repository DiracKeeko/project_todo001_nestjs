import { Controller, Get } from '@nestjs/common';
import { DataMockService } from './dataMock.service';

@Controller('/mock/fund/fundOverview')
export class DataMockController {
  constructor(private readonly dataMockService: DataMockService) {}

  @Get('/userInfo') // http://localhost:7158/api/mock/fund/fundOverview/userInfo
  getUserInfo() {
    return this.dataMockService.getUserInfo();
  }

  @Get('/fundBasicInfo') // http://localhost:7158/api/mock/fund/fundOverview/fundBasicInfo
  getFundBasicInfo() {
    return this.dataMockService.getFundBasicInfo();
  }

  @Get('/realTimeValuation')
  getRealTimeValuationArr() {
    return this.dataMockService.getRealTimeValuation();
  }

  @Get('/performanceSummary')
  getPerformanceSummary() {
    return this.dataMockService.getPerformanceSummary();
  }

  @Get('/holdingAnalysis')
  getHoldingAnalysis() {
    return this.dataMockService.getHoldingAnalysis();
  }

  @Get('/') // http://localhost:7158/api/mock/fund/fundOverview/
  getDataMock(): string {
    return this.dataMockService.getDataMock();
  }
}
