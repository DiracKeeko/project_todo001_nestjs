type UserInfo = {
  id: number;
  name: string;
  age: number;
  email: string;
  symbol: string;
  hobbies: string[];
};

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

type PerformanceSummary = {
  nav: {
    orderBookId: string;
    datetime: string;
    adjustedNetValue: number;
  }[];
  drawdownHistory: {
    date: string;
    value: number;
  }[];
  benchmarkName: string;
  benchmarkPrice: {
    orderBookId: string;
    date: string;
    close: number;
  }[];
  periodReturn: (
    | {
        name: string;
        fund: number;
        average: number;
        rank: string;
      }
    | {
        name: string;
        fund?: undefined;
        average: number;
        rank: string;
      }
  )[];
  quarterReturn: {
    name: string;
    fund: number;
    average: number;
    rank: string;
  }[];
  yearReturn: {
    name: string;
    fund: number;
    average: number;
    rank: string;
  }[];
  indicators: (
    | {
        returnD: number;
        returnA: number;
        excess: number;
        excessA: number;
        excessWin: number;
        posPeriod: number;
        posReturnRatio: number;
        maxRisePeriod: number;
        alphaA: number;
        beta: number;
        inNewHighRate: number;
        exNewHighRate: number;
        stdev: number;
        stdevA: number;
        downStdevAvg: number;
        mdd: number;
        maxDrop: number;
        maxDropPeriod: number;
        negReturnRatio: number;
        trackingError: number;
        vaR: number;
        sharpeA: number;
        infA: number;
        sorA: number;
        calmarA: number;
        period: string;
        recoveryDays?: undefined;
      }
    | {
        returnD: number;
        returnA: number;
        excess: number;
        excessA: number;
        excessWin: number;
        posPeriod: number;
        posReturnRatio: number;
        maxRisePeriod: number;
        alphaA: number;
        beta: number;
        inNewHighRate: number;
        exNewHighRate: number;
        stdev: number;
        stdevA: number;
        downStdevAvg: number;
        mdd: number;
        recoveryDays: number;
        maxDrop: number;
        maxDropPeriod: number;
        negReturnRatio: number;
        trackingError: number;
        vaR: number;
        sharpeA: number;
        infA: number;
        sorA: number;
        calmarA: number;
        period: string;
      }
    | {
        period: string;
        returnD?: undefined;
        returnA?: undefined;
        excess?: undefined;
        excessA?: undefined;
        excessWin?: undefined;
        posPeriod?: undefined;
        posReturnRatio?: undefined;
        maxRisePeriod?: undefined;
        alphaA?: undefined;
        beta?: undefined;
        inNewHighRate?: undefined;
        exNewHighRate?: undefined;
        stdev?: undefined;
        stdevA?: undefined;
        downStdevAvg?: undefined;
        mdd?: undefined;
        maxDrop?: undefined;
        maxDropPeriod?: undefined;
        negReturnRatio?: undefined;
        trackingError?: undefined;
        vaR?: undefined;
        sharpeA?: undefined;
        infA?: undefined;
        sorA?: undefined;
        calmarA?: undefined;
        recoveryDays?: undefined;
      }
  )[];
  mean: {
    returnD: number;
    returnA: number;
    excess: number;
    excessA: number;
    excessWin: number;
    posPeriod: number;
    posReturnRatio: number;
    maxRisePeriod: number;
    alphaA: number;
    beta: number;
    inNewHighRate: number;
    exNewHighRate: number;
    stdev: number;
    stdevA: number;
    downStdevAvg: number;
    mdd: number;
    recoveryDays: number;
    maxDrop: number;
    maxDropPeriod: number;
    negReturnRatio: number;
    trackingError: number;
    vaR: number;
    sharpeA: number;
    infA: number;
    sorA: number;
    calmarA: number;
    period: string;
  }[];
  rank: (
    | {
        count: number;
        returnD: number;
        returnA: number;
        excess: number;
        excessA: number;
        excessWin: number;
        posPeriod: number;
        posReturnRatio: number;
        maxRisePeriod: number;
        alphaA: number;
        beta: number;
        inNewHighRate: number;
        exNewHighRate: number;
        stdev: number;
        stdevA: number;
        downStdevAvg: number;
        mdd: number;
        maxDrop: number;
        maxDropPeriod: number;
        negReturnRatio: number;
        trackingError: number;
        vaR: number;
        sharpeA: number;
        infA: number;
        sorA: number;
        calmarA: number;
        period: string;
        recoveryDays?: undefined;
      }
    | {
        count: number;
        returnD: number;
        returnA: number;
        excess: number;
        excessA: number;
        excessWin: number;
        posPeriod: number;
        posReturnRatio: number;
        maxRisePeriod: number;
        alphaA: number;
        beta: number;
        inNewHighRate: number;
        exNewHighRate: number;
        stdev: number;
        stdevA: number;
        downStdevAvg: number;
        mdd: number;
        recoveryDays: number;
        maxDrop: number;
        maxDropPeriod: number;
        negReturnRatio: number;
        trackingError: number;
        vaR: number;
        sharpeA: number;
        infA: number;
        sorA: number;
        calmarA: number;
        period: string;
      }
    | {
        count: number;
        period: string;
        returnD?: undefined;
        returnA?: undefined;
        excess?: undefined;
        excessA?: undefined;
        excessWin?: undefined;
        posPeriod?: undefined;
        posReturnRatio?: undefined;
        maxRisePeriod?: undefined;
        alphaA?: undefined;
        beta?: undefined;
        inNewHighRate?: undefined;
        exNewHighRate?: undefined;
        stdev?: undefined;
        stdevA?: undefined;
        downStdevAvg?: undefined;
        mdd?: undefined;
        maxDrop?: undefined;
        maxDropPeriod?: undefined;
        negReturnRatio?: undefined;
        trackingError?: undefined;
        vaR?: undefined;
        sharpeA?: undefined;
        infA?: undefined;
        sorA?: undefined;
        calmarA?: undefined;
        recoveryDays?: undefined;
      }
  )[];
};

type HoldingAnalysis = {
  orderBookId: string;
  symbol: string;
  sizeHistory: {
    date: string;
    value: number;
  }[];
  assetAllocationHistory: (
    | {
        orderBookId: string;
        date: string;
        stock: number;
        bond: number;
        cash: number;
        other: number;
      }
    | {
        orderBookId: string;
        date: string;
        stock: number;
        cash: number;
        other: number;
        bond?: undefined;
      }
  )[];
  bondTypeHistory: {
    date: string;
    data: {
      bondType: string;
      weight: number;
    }[];
  }[];
  stockIndustryHistory: {
    date: string;
    data: {
      stockIndustry: string;
      weight: number;
    }[];
  }[];
  heavyweight: (
    | {
        orderBookId: string;
        date: string;
        bond: any[];
        stock: (
          | {
              stockId: string;
              symbol: string;
              weight: number;
              isHistory: boolean;
              change: number;
              latestPrice?: undefined;
            }
          | {
              stockId: string;
              symbol: string;
              weight: number;
              isHistory: boolean;
              change: number;
              latestPrice: number;
            }
        )[];
        quarter: string;
      }
    | {
        orderBookId: string;
        date: string;
        bond: {
          bondId: string;
          symbol: string;
          type: string;
          weight: number;
          change: number;
          issuer: string;
          issuerRating: string;
        }[];
        stock: {
          stockId: string;
          symbol: string;
          weight: number;
          isHistory: boolean;
          change: number;
        }[];
        quarter: string;
      }
  )[];
  holderStructure: {
    orderBookId: string;
    datetime: string;
    instl: number;
    instlWeight: number;
    retail: number;
    retailWeight: number;
  }[];
};

export type { UserInfo, FundBasicInfo, RealTimeValuationItem, PerformanceSummary, HoldingAnalysis };
