import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DataMockModule } from './dataMock/dataMock.module';

const customizedModuleArr = [DataMockModule];

@Module({
  imports: [...customizedModuleArr],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
