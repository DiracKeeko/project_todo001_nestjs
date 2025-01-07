import { Controller, Get } from '@nestjs/common';
import { FundService } from './fund.service';

@Controller('/mock/fund/fundOverview')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get('/userInfo') // http://localhost:7158/api/mock/fund/fundOverview/userInfo
  getUserInfo() {
    return this.fundService.getUserInfo();
  }

  @Get('/fundBasicInfo') // http://localhost:7158/api/mock/fund/fundOverview/fundBasicInfo
  getFundBasicInfo() {
    return this.fundService.getFundBasicInfo();
  }

  @Get('/realTimeValuation')
  getRealTimeValuationArr() {
    return this.fundService.getRealTimeValuation();
  }

  @Get('/performanceSummary')
  getPerformanceSummary() {
    return this.fundService.getPerformanceSummary();
  }

  @Get('/holdingAnalysis')
  getHoldingAnalysis() {
    return this.fundService.getHoldingAnalysis();
  }

  @Get('/') // http://localhost:7158/api/mock/fund/fundOverview/
  getDataMock(): string {
    return this.fundService.getDataMock();
  }
}
