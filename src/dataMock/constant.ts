type FundBasicInfo = {
  orderBookId: string;
  accNetValue: number;
  amc: string;
  classifyFundType: string;
  dailyReturn: number;
  dailyReturnRank: string;
  fundSubType: string;
  fundType: string;
  latestDate: string;
  latestSize: number;
  listedDate: string;
  manager: string;
  managerId: string;
  benchmark: string;
  object: string;
  manageReturn: number;
  symbol: string;
  totalMdd: number;
  totalMddRank: string;
  totalReturn: number;
  totalReturnA: number;
  totalReturnARank: string;
  totalReturnRank: string;
  unitNetValue: number;
  y1InNewHighRate: number;
  y1InNewHighRateRank: string;
  y1Return: number;
  y1ReturnRank: string;
  y1SharpeA: number;
  y1SharpeARank: string;
  y1TrackingError: number;
  y1TrackingErrorRank: string;
  manageReturnRank: string;
  yearReturn: number;
  yearReturnRank: string;
  latestQuarterReportTime: string;
  turnoverRate: number;
  dailyProfitRank: string;
  weeklyYieldRank: string;
  consigned: boolean;
  label: {
    labelId: string;
    labelName: string;
  }[];
};

type RealTimeValuationItem = {
  targetTime: string;
  estimatedNav: number;
  estimatedChange: number;
};

export type { FundBasicInfo, RealTimeValuationItem };
