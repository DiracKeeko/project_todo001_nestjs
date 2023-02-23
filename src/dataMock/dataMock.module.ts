import { Module } from '@nestjs/common';
import { DataMockController } from './dataMock.controller';
import { DataMockService } from './dataMock.service';

@Module({
  imports: [],
  controllers: [DataMockController],
  providers: [DataMockService]
})
export class DataMockModule {}
