import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FundModule } from './modules/fof/fund/fund.module';

const customizedModuleArr = [FundModule];

@Module({
  imports: customizedModuleArr,
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
