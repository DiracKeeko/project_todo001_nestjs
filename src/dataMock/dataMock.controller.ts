import { Controller, Get } from '@nestjs/common';
import { DataMockService } from './dataMock.service';

@Controller("/mock/fundOverview")
export class DataMockController {
  constructor(private readonly dataMockService: DataMockService) {}

  @Get("/fundBasicInfo") // http://localhost:6006/api/mock/fundOverview/fundBasicInfo
  getFundBasicInfo() {
    return this.dataMockService.getFundBasicInfo();
  }

  @Get("/realTimeValuation") // http://localhost:6006/api/mock/fundOverview/realTimeValuation
  getRealTimeValuationArr() {
    return this.dataMockService.getRealTimeValuation();
  }

  @Get("/performanceSummary")
  getPerformanceSummary() {
    return this.dataMockService.getPerformanceSummary();
  }

  @Get("/holdingAnalysis")
  getHoldingAnalysis() {
    return this.dataMockService.getHoldingAnalysis();
  }

  @Get("/") // http://localhost:6006/api/mock/fundOverview
  getDataMock(): string {
    return this.dataMockService.getDataMock();
  }
}