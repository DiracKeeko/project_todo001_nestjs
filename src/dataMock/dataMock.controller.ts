import { Controller, Get } from '@nestjs/common';
import { DataMockService } from './dataMock.service';

@Controller()
export class DataMockController {
  constructor(private readonly dataMockService: DataMockService) {}

  @Get("/mock") // http://localhost:3000/mock
  getDataMock(): string {
    return this.dataMockService.getDataMock();
  }
}