import { Random } from 'mockjs';
import { UserInfo, FundBasicInfo, RealTimeValuationItem, PerformanceSummary, HoldingAnalysis } from './constant';

const userInfo: UserInfo = {
  id: Random.integer(100, 999),
  name: Random.cword(2, 3),
  age: Random.integer(15, 37),
  email: Random.email(),
  symbol: `symbol${Random.string(5)}`,
  hobbies: new Array(Random.integer(1, 3)).fill(null).map(() => Random.cword(2, 3))
};

const fundBasicInfo: FundBasicInfo = {
  'orderBookId': '005827.OF',
  'accNetValue': 2.2586,
  'amc': '易方达基金',
  'classifyFundType': '偏股混合型',
  'dailyReturn': 0.003510019105167128,
  'dailyReturnRank': '777/3661',
  'fundSubType': '偏股混合型',
  'fundType': 'Hybrid',
  'latestDate': '2023-03-03 00:00:00',
  'latestSize': 57074981815.95,
  'listedDate': '2018-09-05',
  'manager': '张坤',
  'managerId': '16E885',
  'benchmark': '沪深300指数收益率*45%+中证港股通综合指数收益率*35%+中债总指数收益率*20%',
  'object': '本基金在控制风险的前提下，追求超越业绩比较基准的投资回报。',
  'manageReturn': 1.258599999999983,
  'symbol': '易方达蓝筹精选',
  'totalMdd': 0.5454416640689225,
  'totalMddRank': '583/592',
  'totalReturn': 1.258599999999983,
  'totalReturnA': 0.20588249734221975,
  'totalReturnARank': '101/592',
  'totalReturnRank': '101/592',
  'unitNetValue': 2.2586,
  'y1InNewHighRate': 0.02880658436213992,
  'y1InNewHighRateRank': '1071/2871',
  'y1Return': -0.023392571453279665,
  'y1ReturnRank': '741/2871',
  'y1SharpeA': -0.003729646148269059,
  'y1SharpeARank': '571/2871',
  'y1TrackingError': 0.2123143919237621,
  'y1TrackingErrorRank': '2585/2871',
  'manageReturnRank': '101/592',
  'yearReturn': 0.04140538546661765,
  'yearReturnRank': '1769/3543',
  'latestQuarterReportTime': '2022-12-31 00:00:00',
  'turnoverRate': 1.0206578973541394,
  'dailyProfitRank': '-/3661',
  'weeklyYieldRank': '-/3661',
  'consigned': true,
  'label': [
    {
      'labelId': '000007.DZ',
      'labelName': '白酒'
    }
  ]
};

const realTimeValuationArr: RealTimeValuationItem[] = [
  {
    'targetTime': '202303030930',
    'estimatedNav': 2.2727,
    'estimatedChange': 0.0098
  },
  {
    'targetTime': '202303030931',
    'estimatedNav': 2.2804,
    'estimatedChange': 0.0132
  },
  {
    'targetTime': '202303030932',
    'estimatedNav': 2.2829,
    'estimatedChange': 0.0143
  },
  {
    'targetTime': '202303030933',
    'estimatedNav': 2.284,
    'estimatedChange': 0.0148
  },
  {
    'targetTime': '202303030934',
    'estimatedNav': 2.2822,
    'estimatedChange': 0.014
  },
  {
    'targetTime': '202303030935',
    'estimatedNav': 2.2786,
    'estimatedChange': 0.0124
  },
  {
    'targetTime': '202303030936',
    'estimatedNav': 2.2785,
    'estimatedChange': 0.0124
  },
  {
    'targetTime': '202303030937',
    'estimatedNav': 2.2758,
    'estimatedChange': 0.0111
  },
  {
    'targetTime': '202303030938',
    'estimatedNav': 2.2782,
    'estimatedChange': 0.0122
  },
  {
    'targetTime': '202303030939',
    'estimatedNav': 2.2761,
    'estimatedChange': 0.0113
  },
  {
    'targetTime': '202303030940',
    'estimatedNav': 2.2753,
    'estimatedChange': 0.0109
  },
  {
    'targetTime': '202303030941',
    'estimatedNav': 2.2768,
    'estimatedChange': 0.0116
  },
  {
    'targetTime': '202303030942',
    'estimatedNav': 2.2746,
    'estimatedChange': 0.0106
  },
  {
    'targetTime': '202303030943',
    'estimatedNav': 2.2756,
    'estimatedChange': 0.0111
  },
  {
    'targetTime': '202303030944',
    'estimatedNav': 2.2744,
    'estimatedChange': 0.0105
  },
  {
    'targetTime': '202303030945',
    'estimatedNav': 2.2726,
    'estimatedChange': 0.0097
  },
  {
    'targetTime': '202303030946',
    'estimatedNav': 2.2733,
    'estimatedChange': 0.01
  },
  {
    'targetTime': '202303030947',
    'estimatedNav': 2.2704,
    'estimatedChange': 0.0087
  },
  {
    'targetTime': '202303030948',
    'estimatedNav': 2.2687,
    'estimatedChange': 0.008
  },
  {
    'targetTime': '202303030949',
    'estimatedNav': 2.2643,
    'estimatedChange': 0.0061
  },
  {
    'targetTime': '202303030950',
    'estimatedNav': 2.2643,
    'estimatedChange': 0.0061
  },
  {
    'targetTime': '202303030951',
    'estimatedNav': 2.2632,
    'estimatedChange': 0.0055
  },
  {
    'targetTime': '202303030952',
    'estimatedNav': 2.2599,
    'estimatedChange': 0.0041
  },
  {
    'targetTime': '202303030953',
    'estimatedNav': 2.2601,
    'estimatedChange': 0.0042
  },
  {
    'targetTime': '202303030954',
    'estimatedNav': 2.2592,
    'estimatedChange': 0.0038
  },
  {
    'targetTime': '202303030955',
    'estimatedNav': 2.2601,
    'estimatedChange': 0.0042
  },
  {
    'targetTime': '202303030956',
    'estimatedNav': 2.2583,
    'estimatedChange': 0.0034
  },
  {
    'targetTime': '202303030957',
    'estimatedNav': 2.2589,
    'estimatedChange': 0.0036
  },
  {
    'targetTime': '202303030958',
    'estimatedNav': 2.2589,
    'estimatedChange': 0.0036
  },
  {
    'targetTime': '202303030959',
    'estimatedNav': 2.2601,
    'estimatedChange': 0.0042
  },
  {
    'targetTime': '202303031000',
    'estimatedNav': 2.262,
    'estimatedChange': 0.005
  },
  {
    'targetTime': '202303031001',
    'estimatedNav': 2.263,
    'estimatedChange': 0.0054
  },
  {
    'targetTime': '202303031002',
    'estimatedNav': 2.262,
    'estimatedChange': 0.005
  },
  {
    'targetTime': '202303031003',
    'estimatedNav': 2.2612,
    'estimatedChange': 0.0046
  },
  {
    'targetTime': '202303031004',
    'estimatedNav': 2.2602,
    'estimatedChange': 0.0042
  },
  {
    'targetTime': '202303031005',
    'estimatedNav': 2.2605,
    'estimatedChange': 0.0043
  },
  {
    'targetTime': '202303031006',
    'estimatedNav': 2.2562,
    'estimatedChange': 0.0024
  },
  {
    'targetTime': '202303031007',
    'estimatedNav': 2.2552,
    'estimatedChange': 0.002
  },
  {
    'targetTime': '202303031008',
    'estimatedNav': 2.2558,
    'estimatedChange': 0.0023
  },
  {
    'targetTime': '202303031009',
    'estimatedNav': 2.2556,
    'estimatedChange': 0.0022
  },
  {
    'targetTime': '202303031010',
    'estimatedNav': 2.2556,
    'estimatedChange': 0.0022
  },
  {
    'targetTime': '202303031011',
    'estimatedNav': 2.2542,
    'estimatedChange': 0.0016
  },
  {
    'targetTime': '202303031012',
    'estimatedNav': 2.2539,
    'estimatedChange': 0.0014
  },
  {
    'targetTime': '202303031013',
    'estimatedNav': 2.2545,
    'estimatedChange': 0.0017
  },
  {
    'targetTime': '202303031014',
    'estimatedNav': 2.2546,
    'estimatedChange': 0.0017
  },
  {
    'targetTime': '202303031015',
    'estimatedNav': 2.2528,
    'estimatedChange': 0.0009
  },
  {
    'targetTime': '202303031016',
    'estimatedNav': 2.2517,
    'estimatedChange': 0.0005
  },
  {
    'targetTime': '202303031017',
    'estimatedNav': 2.2521,
    'estimatedChange': 0.0006
  },
  {
    'targetTime': '202303031018',
    'estimatedNav': 2.2532,
    'estimatedChange': 0.0011
  },
  {
    'targetTime': '202303031019',
    'estimatedNav': 2.2531,
    'estimatedChange': 0.0011
  },
  {
    'targetTime': '202303031020',
    'estimatedNav': 2.2535,
    'estimatedChange': 0.0012
  },
  {
    'targetTime': '202303031021',
    'estimatedNav': 2.2509,
    'estimatedChange': 0.0001
  },
  {
    'targetTime': '202303031022',
    'estimatedNav': 2.2503,
    'estimatedChange': -0.0002
  },
  {
    'targetTime': '202303031023',
    'estimatedNav': 2.2493,
    'estimatedChange': -0.0006
  },
  {
    'targetTime': '202303031024',
    'estimatedNav': 2.2495,
    'estimatedChange': -0.0005
  },
  {
    'targetTime': '202303031025',
    'estimatedNav': 2.2498,
    'estimatedChange': -0.0004
  },
  {
    'targetTime': '202303031026',
    'estimatedNav': 2.249,
    'estimatedChange': -0.0008
  },
  {
    'targetTime': '202303031027',
    'estimatedNav': 2.2468,
    'estimatedChange': -0.0017
  },
  {
    'targetTime': '202303031028',
    'estimatedNav': 2.246,
    'estimatedChange': -0.0021
  },
  {
    'targetTime': '202303031029',
    'estimatedNav': 2.246,
    'estimatedChange': -0.0021
  },
  {
    'targetTime': '202303031030',
    'estimatedNav': 2.2464,
    'estimatedChange': -0.0019
  },
  {
    'targetTime': '202303031031',
    'estimatedNav': 2.2469,
    'estimatedChange': -0.0017
  },
  {
    'targetTime': '202303031032',
    'estimatedNav': 2.2471,
    'estimatedChange': -0.0016
  },
  {
    'targetTime': '202303031033',
    'estimatedNav': 2.2471,
    'estimatedChange': -0.0016
  },
  {
    'targetTime': '202303031034',
    'estimatedNav': 2.2476,
    'estimatedChange': -0.0014
  },
  {
    'targetTime': '202303031035',
    'estimatedNav': 2.2487,
    'estimatedChange': -0.0009
  },
  {
    'targetTime': '202303031036',
    'estimatedNav': 2.2509,
    'estimatedChange': 0.0001
  },
  {
    'targetTime': '202303031037',
    'estimatedNav': 2.2499,
    'estimatedChange': -0.0004
  },
  {
    'targetTime': '202303031038',
    'estimatedNav': 2.2497,
    'estimatedChange': -0.0005
  },
  {
    'targetTime': '202303031039',
    'estimatedNav': 2.2503,
    'estimatedChange': -0.0002
  },
  {
    'targetTime': '202303031040',
    'estimatedNav': 2.2508,
    'estimatedChange': 0
  },
  {
    'targetTime': '202303031041',
    'estimatedNav': 2.2504,
    'estimatedChange': -0.0001
  },
  {
    'targetTime': '202303031042',
    'estimatedNav': 2.2479,
    'estimatedChange': -0.0012
  },
  {
    'targetTime': '202303031043',
    'estimatedNav': 2.2467,
    'estimatedChange': -0.0018
  },
  {
    'targetTime': '202303031044',
    'estimatedNav': 2.2452,
    'estimatedChange': -0.0025
  },
  {
    'targetTime': '202303031045',
    'estimatedNav': 2.2459,
    'estimatedChange': -0.0022
  },
  {
    'targetTime': '202303031046',
    'estimatedNav': 2.2456,
    'estimatedChange': -0.0023
  },
  {
    'targetTime': '202303031047',
    'estimatedNav': 2.246,
    'estimatedChange': -0.0021
  },
  {
    'targetTime': '202303031048',
    'estimatedNav': 2.2461,
    'estimatedChange': -0.002
  },
  {
    'targetTime': '202303031049',
    'estimatedNav': 2.2453,
    'estimatedChange': -0.0024
  },
  {
    'targetTime': '202303031050',
    'estimatedNav': 2.2459,
    'estimatedChange': -0.0021
  },
  {
    'targetTime': '202303031051',
    'estimatedNav': 2.2473,
    'estimatedChange': -0.0015
  },
  {
    'targetTime': '202303031052',
    'estimatedNav': 2.2465,
    'estimatedChange': -0.0019
  },
  {
    'targetTime': '202303031053',
    'estimatedNav': 2.2472,
    'estimatedChange': -0.0015
  },
  {
    'targetTime': '202303031054',
    'estimatedNav': 2.2505,
    'estimatedChange': -0.0001
  },
  {
    'targetTime': '202303031055',
    'estimatedNav': 2.2515,
    'estimatedChange': 0.0004
  },
  {
    'targetTime': '202303031056',
    'estimatedNav': 2.2509,
    'estimatedChange': 0.0001
  },
  {
    'targetTime': '202303031057',
    'estimatedNav': 2.2524,
    'estimatedChange': 0.0008
  },
  {
    'targetTime': '202303031058',
    'estimatedNav': 2.2518,
    'estimatedChange': 0.0005
  },
  {
    'targetTime': '202303031059',
    'estimatedNav': 2.2514,
    'estimatedChange': 0.0003
  },
  {
    'targetTime': '202303031100',
    'estimatedNav': 2.2528,
    'estimatedChange': 0.001
  },
  {
    'targetTime': '202303031101',
    'estimatedNav': 2.2517,
    'estimatedChange': 0.0004
  },
  {
    'targetTime': '202303031102',
    'estimatedNav': 2.2508,
    'estimatedChange': 0
  },
  {
    'targetTime': '202303031103',
    'estimatedNav': 2.2508,
    'estimatedChange': 0
  },
  {
    'targetTime': '202303031104',
    'estimatedNav': 2.2508,
    'estimatedChange': 0
  },
  {
    'targetTime': '202303031105',
    'estimatedNav': 2.2511,
    'estimatedChange': 0.0002
  },
  {
    'targetTime': '202303031106',
    'estimatedNav': 2.2519,
    'estimatedChange': 0.0005
  },
  {
    'targetTime': '202303031107',
    'estimatedNav': 2.2529,
    'estimatedChange': 0.001
  },
  {
    'targetTime': '202303031108',
    'estimatedNav': 2.2516,
    'estimatedChange': 0.0004
  },
  {
    'targetTime': '202303031109',
    'estimatedNav': 2.2507,
    'estimatedChange': 0
  },
  {
    'targetTime': '202303031110',
    'estimatedNav': 2.2513,
    'estimatedChange': 0.0003
  },
  {
    'targetTime': '202303031111',
    'estimatedNav': 2.2544,
    'estimatedChange': 0.0017
  },
  {
    'targetTime': '202303031112',
    'estimatedNav': 2.2545,
    'estimatedChange': 0.0017
  },
  {
    'targetTime': '202303031113',
    'estimatedNav': 2.2566,
    'estimatedChange': 0.0026
  },
  {
    'targetTime': '202303031114',
    'estimatedNav': 2.257,
    'estimatedChange': 0.0028
  },
  {
    'targetTime': '202303031115',
    'estimatedNav': 2.258,
    'estimatedChange': 0.0033
  },
  {
    'targetTime': '202303031116',
    'estimatedNav': 2.2591,
    'estimatedChange': 0.0037
  },
  {
    'targetTime': '202303031117',
    'estimatedNav': 2.2612,
    'estimatedChange': 0.0047
  },
  {
    'targetTime': '202303031118',
    'estimatedNav': 2.2598,
    'estimatedChange': 0.004
  },
  {
    'targetTime': '202303031119',
    'estimatedNav': 2.2583,
    'estimatedChange': 0.0034
  },
  {
    'targetTime': '202303031120',
    'estimatedNav': 2.2587,
    'estimatedChange': 0.0036
  },
  {
    'targetTime': '202303031121',
    'estimatedNav': 2.2584,
    'estimatedChange': 0.0034
  },
  {
    'targetTime': '202303031122',
    'estimatedNav': 2.2555,
    'estimatedChange': 0.0021
  },
  {
    'targetTime': '202303031123',
    'estimatedNav': 2.2552,
    'estimatedChange': 0.002
  },
  {
    'targetTime': '202303031124',
    'estimatedNav': 2.2551,
    'estimatedChange': 0.002
  },
  {
    'targetTime': '202303031125',
    'estimatedNav': 2.2559,
    'estimatedChange': 0.0023
  },
  {
    'targetTime': '202303031126',
    'estimatedNav': 2.256,
    'estimatedChange': 0.0024
  },
  {
    'targetTime': '202303031127',
    'estimatedNav': 2.2566,
    'estimatedChange': 0.0026
  },
  {
    'targetTime': '202303031128',
    'estimatedNav': 2.257,
    'estimatedChange': 0.0028
  },
  {
    'targetTime': '202303031129',
    'estimatedNav': 2.2561,
    'estimatedChange': 0.0024
  },
  {
    'targetTime': '202303031130',
    'estimatedNav': 2.2565,
    'estimatedChange': 0.0026
  },
  {
    'targetTime': '202303031301',
    'estimatedNav': 2.2604,
    'estimatedChange': 0.0043
  },
  {
    'targetTime': '202303031302',
    'estimatedNav': 2.259,
    'estimatedChange': 0.0037
  },
  {
    'targetTime': '202303031303',
    'estimatedNav': 2.2596,
    'estimatedChange': 0.004
  },
  {
    'targetTime': '202303031304',
    'estimatedNav': 2.2581,
    'estimatedChange': 0.0033
  },
  {
    'targetTime': '202303031305',
    'estimatedNav': 2.2588,
    'estimatedChange': 0.0036
  },
  {
    'targetTime': '202303031306',
    'estimatedNav': 2.2579,
    'estimatedChange': 0.0032
  },
  {
    'targetTime': '202303031307',
    'estimatedNav': 2.2572,
    'estimatedChange': 0.0029
  },
  {
    'targetTime': '202303031308',
    'estimatedNav': 2.2564,
    'estimatedChange': 0.0025
  },
  {
    'targetTime': '202303031309',
    'estimatedNav': 2.2559,
    'estimatedChange': 0.0023
  },
  {
    'targetTime': '202303031310',
    'estimatedNav': 2.2585,
    'estimatedChange': 0.0035
  },
  {
    'targetTime': '202303031311',
    'estimatedNav': 2.2578,
    'estimatedChange': 0.0032
  },
  {
    'targetTime': '202303031312',
    'estimatedNav': 2.2573,
    'estimatedChange': 0.0029
  },
  {
    'targetTime': '202303031313',
    'estimatedNav': 2.2578,
    'estimatedChange': 0.0032
  },
  {
    'targetTime': '202303031314',
    'estimatedNav': 2.2576,
    'estimatedChange': 0.0031
  },
  {
    'targetTime': '202303031315',
    'estimatedNav': 2.2591,
    'estimatedChange': 0.0037
  },
  {
    'targetTime': '202303031316',
    'estimatedNav': 2.2588,
    'estimatedChange': 0.0036
  },
  {
    'targetTime': '202303031317',
    'estimatedNav': 2.2593,
    'estimatedChange': 0.0038
  },
  {
    'targetTime': '202303031318',
    'estimatedNav': 2.2563,
    'estimatedChange': 0.0025
  },
  {
    'targetTime': '202303031319',
    'estimatedNav': 2.2555,
    'estimatedChange': 0.0021
  },
  {
    'targetTime': '202303031320',
    'estimatedNav': 2.2549,
    'estimatedChange': 0.0019
  },
  {
    'targetTime': '202303031321',
    'estimatedNav': 2.2551,
    'estimatedChange': 0.002
  },
  {
    'targetTime': '202303031322',
    'estimatedNav': 2.2554,
    'estimatedChange': 0.0021
  },
  {
    'targetTime': '202303031323',
    'estimatedNav': 2.2566,
    'estimatedChange': 0.0026
  },
  {
    'targetTime': '202303031324',
    'estimatedNav': 2.2553,
    'estimatedChange': 0.0021
  },
  {
    'targetTime': '202303031325',
    'estimatedNav': 2.2546,
    'estimatedChange': 0.0017
  },
  {
    'targetTime': '202303031326',
    'estimatedNav': 2.2544,
    'estimatedChange': 0.0016
  },
  {
    'targetTime': '202303031327',
    'estimatedNav': 2.2537,
    'estimatedChange': 0.0013
  },
  {
    'targetTime': '202303031328',
    'estimatedNav': 2.2543,
    'estimatedChange': 0.0016
  },
  {
    'targetTime': '202303031329',
    'estimatedNav': 2.2548,
    'estimatedChange': 0.0018
  },
  {
    'targetTime': '202303031330',
    'estimatedNav': 2.2555,
    'estimatedChange': 0.0021
  },
  {
    'targetTime': '202303031331',
    'estimatedNav': 2.2563,
    'estimatedChange': 0.0025
  },
  {
    'targetTime': '202303031332',
    'estimatedNav': 2.2564,
    'estimatedChange': 0.0025
  },
  {
    'targetTime': '202303031333',
    'estimatedNav': 2.255,
    'estimatedChange': 0.0019
  },
  {
    'targetTime': '202303031334',
    'estimatedNav': 2.2536,
    'estimatedChange': 0.0013
  },
  {
    'targetTime': '202303031335',
    'estimatedNav': 2.2526,
    'estimatedChange': 0.0008
  },
  {
    'targetTime': '202303031336',
    'estimatedNav': 2.2538,
    'estimatedChange': 0.0014
  },
  {
    'targetTime': '202303031337',
    'estimatedNav': 2.2547,
    'estimatedChange': 0.0018
  },
  {
    'targetTime': '202303031338',
    'estimatedNav': 2.2569,
    'estimatedChange': 0.0027
  },
  {
    'targetTime': '202303031339',
    'estimatedNav': 2.257,
    'estimatedChange': 0.0028
  },
  {
    'targetTime': '202303031340',
    'estimatedNav': 2.2569,
    'estimatedChange': 0.0028
  },
  {
    'targetTime': '202303031341',
    'estimatedNav': 2.2556,
    'estimatedChange': 0.0022
  },
  {
    'targetTime': '202303031342',
    'estimatedNav': 2.2564,
    'estimatedChange': 0.0025
  },
  {
    'targetTime': '202303031343',
    'estimatedNav': 2.2575,
    'estimatedChange': 0.003
  },
  {
    'targetTime': '202303031344',
    'estimatedNav': 2.2581,
    'estimatedChange': 0.0033
  },
  {
    'targetTime': '202303031345',
    'estimatedNav': 2.2586,
    'estimatedChange': 0.0035
  },
  {
    'targetTime': '202303031346',
    'estimatedNav': 2.2595,
    'estimatedChange': 0.0039
  },
  {
    'targetTime': '202303031347',
    'estimatedNav': 2.2606,
    'estimatedChange': 0.0044
  },
  {
    'targetTime': '202303031348',
    'estimatedNav': 2.2612,
    'estimatedChange': 0.0047
  },
  {
    'targetTime': '202303031349',
    'estimatedNav': 2.2615,
    'estimatedChange': 0.0048
  },
  {
    'targetTime': '202303031350',
    'estimatedNav': 2.2633,
    'estimatedChange': 0.0056
  },
  {
    'targetTime': '202303031351',
    'estimatedNav': 2.2633,
    'estimatedChange': 0.0056
  },
  {
    'targetTime': '202303031352',
    'estimatedNav': 2.2625,
    'estimatedChange': 0.0053
  },
  {
    'targetTime': '202303031353',
    'estimatedNav': 2.261,
    'estimatedChange': 0.0046
  },
  {
    'targetTime': '202303031354',
    'estimatedNav': 2.2609,
    'estimatedChange': 0.0045
  },
  {
    'targetTime': '202303031355',
    'estimatedNav': 2.2619,
    'estimatedChange': 0.005
  },
  {
    'targetTime': '202303031356',
    'estimatedNav': 2.2605,
    'estimatedChange': 0.0044
  },
  {
    'targetTime': '202303031357',
    'estimatedNav': 2.2609,
    'estimatedChange': 0.0045
  },
  {
    'targetTime': '202303031358',
    'estimatedNav': 2.2604,
    'estimatedChange': 0.0043
  },
  {
    'targetTime': '202303031359',
    'estimatedNav': 2.2606,
    'estimatedChange': 0.0044
  },
  {
    'targetTime': '202303031400',
    'estimatedNav': 2.2612,
    'estimatedChange': 0.0047
  },
  {
    'targetTime': '202303031401',
    'estimatedNav': 2.2614,
    'estimatedChange': 0.0048
  },
  {
    'targetTime': '202303031402',
    'estimatedNav': 2.2629,
    'estimatedChange': 0.0054
  },
  {
    'targetTime': '202303031403',
    'estimatedNav': 2.2626,
    'estimatedChange': 0.0053
  },
  {
    'targetTime': '202303031404',
    'estimatedNav': 2.264,
    'estimatedChange': 0.0059
  },
  {
    'targetTime': '202303031405',
    'estimatedNav': 2.2661,
    'estimatedChange': 0.0068
  },
  {
    'targetTime': '202303031406',
    'estimatedNav': 2.2643,
    'estimatedChange': 0.006
  },
  {
    'targetTime': '202303031407',
    'estimatedNav': 2.2646,
    'estimatedChange': 0.0062
  },
  {
    'targetTime': '202303031408',
    'estimatedNav': 2.2646,
    'estimatedChange': 0.0062
  },
  {
    'targetTime': '202303031409',
    'estimatedNav': 2.263,
    'estimatedChange': 0.0055
  },
  {
    'targetTime': '202303031410',
    'estimatedNav': 2.2629,
    'estimatedChange': 0.0054
  },
  {
    'targetTime': '202303031411',
    'estimatedNav': 2.2624,
    'estimatedChange': 0.0052
  },
  {
    'targetTime': '202303031412',
    'estimatedNav': 2.2633,
    'estimatedChange': 0.0056
  },
  {
    'targetTime': '202303031413',
    'estimatedNav': 2.263,
    'estimatedChange': 0.0055
  },
  {
    'targetTime': '202303031414',
    'estimatedNav': 2.263,
    'estimatedChange': 0.0055
  },
  {
    'targetTime': '202303031415',
    'estimatedNav': 2.2629,
    'estimatedChange': 0.0054
  },
  {
    'targetTime': '202303031416',
    'estimatedNav': 2.2641,
    'estimatedChange': 0.006
  },
  {
    'targetTime': '202303031417',
    'estimatedNav': 2.265,
    'estimatedChange': 0.0063
  },
  {
    'targetTime': '202303031418',
    'estimatedNav': 2.2647,
    'estimatedChange': 0.0062
  },
  {
    'targetTime': '202303031419',
    'estimatedNav': 2.265,
    'estimatedChange': 0.0064
  },
  {
    'targetTime': '202303031420',
    'estimatedNav': 2.2632,
    'estimatedChange': 0.0055
  },
  {
    'targetTime': '202303031421',
    'estimatedNav': 2.2634,
    'estimatedChange': 0.0057
  },
  {
    'targetTime': '202303031422',
    'estimatedNav': 2.2629,
    'estimatedChange': 0.0054
  },
  {
    'targetTime': '202303031423',
    'estimatedNav': 2.2636,
    'estimatedChange': 0.0057
  },
  {
    'targetTime': '202303031424',
    'estimatedNav': 2.2642,
    'estimatedChange': 0.006
  },
  {
    'targetTime': '202303031425',
    'estimatedNav': 2.2653,
    'estimatedChange': 0.0065
  },
  {
    'targetTime': '202303031426',
    'estimatedNav': 2.2645,
    'estimatedChange': 0.0062
  },
  {
    'targetTime': '202303031427',
    'estimatedNav': 2.2647,
    'estimatedChange': 0.0062
  },
  {
    'targetTime': '202303031428',
    'estimatedNav': 2.2641,
    'estimatedChange': 0.0059
  },
  {
    'targetTime': '202303031429',
    'estimatedNav': 2.2652,
    'estimatedChange': 0.0064
  },
  {
    'targetTime': '202303031430',
    'estimatedNav': 2.2645,
    'estimatedChange': 0.0061
  },
  {
    'targetTime': '202303031431',
    'estimatedNav': 2.264,
    'estimatedChange': 0.0059
  },
  {
    'targetTime': '202303031432',
    'estimatedNav': 2.2651,
    'estimatedChange': 0.0064
  },
  {
    'targetTime': '202303031433',
    'estimatedNav': 2.2659,
    'estimatedChange': 0.0067
  },
  {
    'targetTime': '202303031434',
    'estimatedNav': 2.2652,
    'estimatedChange': 0.0064
  },
  {
    'targetTime': '202303031435',
    'estimatedNav': 2.2654,
    'estimatedChange': 0.0065
  },
  {
    'targetTime': '202303031436',
    'estimatedNav': 2.2648,
    'estimatedChange': 0.0062
  },
  {
    'targetTime': '202303031437',
    'estimatedNav': 2.2631,
    'estimatedChange': 0.0055
  },
  {
    'targetTime': '202303031438',
    'estimatedNav': 2.2625,
    'estimatedChange': 0.0052
  },
  {
    'targetTime': '202303031439',
    'estimatedNav': 2.2628,
    'estimatedChange': 0.0054
  },
  {
    'targetTime': '202303031440',
    'estimatedNav': 2.2626,
    'estimatedChange': 0.0053
  },
  {
    'targetTime': '202303031441',
    'estimatedNav': 2.2627,
    'estimatedChange': 0.0053
  },
  {
    'targetTime': '202303031442',
    'estimatedNav': 2.2625,
    'estimatedChange': 0.0052
  },
  {
    'targetTime': '202303031443',
    'estimatedNav': 2.2628,
    'estimatedChange': 0.0054
  },
  {
    'targetTime': '202303031444',
    'estimatedNav': 2.2634,
    'estimatedChange': 0.0056
  },
  {
    'targetTime': '202303031445',
    'estimatedNav': 2.2626,
    'estimatedChange': 0.0053
  },
  {
    'targetTime': '202303031446',
    'estimatedNav': 2.2627,
    'estimatedChange': 0.0053
  },
  {
    'targetTime': '202303031447',
    'estimatedNav': 2.2622,
    'estimatedChange': 0.0051
  },
  {
    'targetTime': '202303031448',
    'estimatedNav': 2.2623,
    'estimatedChange': 0.0052
  },
  {
    'targetTime': '202303031449',
    'estimatedNav': 2.2611,
    'estimatedChange': 0.0046
  },
  {
    'targetTime': '202303031450',
    'estimatedNav': 2.2613,
    'estimatedChange': 0.0047
  },
  {
    'targetTime': '202303031451',
    'estimatedNav': 2.2607,
    'estimatedChange': 0.0045
  },
  {
    'targetTime': '202303031452',
    'estimatedNav': 2.2607,
    'estimatedChange': 0.0044
  },
  {
    'targetTime': '202303031453',
    'estimatedNav': 2.261,
    'estimatedChange': 0.0046
  },
  {
    'targetTime': '202303031454',
    'estimatedNav': 2.2604,
    'estimatedChange': 0.0043
  },
  {
    'targetTime': '202303031455',
    'estimatedNav': 2.2609,
    'estimatedChange': 0.0045
  },
  {
    'targetTime': '202303031456',
    'estimatedNav': 2.2604,
    'estimatedChange': 0.0043
  },
  {
    'targetTime': '202303031457',
    'estimatedNav': 2.2609,
    'estimatedChange': 0.0045
  },
  {
    'targetTime': '202303031458',
    'estimatedNav': 2.2609,
    'estimatedChange': 0.0045
  },
  {
    'targetTime': '202303031459',
    'estimatedNav': 2.2609,
    'estimatedChange': 0.0045
  },
  {
    'targetTime': '202303031500',
    'estimatedNav': 2.2609,
    'estimatedChange': 0.0045
  }
];

const performanceSummary: PerformanceSummary = {
  'nav': [
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-05 00:00:00',
      'adjustedNetValue': 1
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-06 00:00:00',
      'adjustedNetValue': 1
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-07 00:00:00',
      'adjustedNetValue': 0.9986
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-10 00:00:00',
      'adjustedNetValue': 0.9986
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-11 00:00:00',
      'adjustedNetValue': 0.9986
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-12 00:00:00',
      'adjustedNetValue': 0.9986
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-13 00:00:00',
      'adjustedNetValue': 0.9986
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-14 00:00:00',
      'adjustedNetValue': 0.9985
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-17 00:00:00',
      'adjustedNetValue': 0.9985
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-18 00:00:00',
      'adjustedNetValue': 0.9985
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-19 00:00:00',
      'adjustedNetValue': 0.9985
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-20 00:00:00',
      'adjustedNetValue': 0.9985
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-21 00:00:00',
      'adjustedNetValue': 1.0143
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-25 00:00:00',
      'adjustedNetValue': 1.0143
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-26 00:00:00',
      'adjustedNetValue': 1.0143
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-27 00:00:00',
      'adjustedNetValue': 1.0143
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-09-28 00:00:00',
      'adjustedNetValue': 1.0192
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-08 00:00:00',
      'adjustedNetValue': 0.9972
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-09 00:00:00',
      'adjustedNetValue': 0.997
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-10 00:00:00',
      'adjustedNetValue': 0.9885
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-11 00:00:00',
      'adjustedNetValue': 0.9731
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-12 00:00:00',
      'adjustedNetValue': 0.9872
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-15 00:00:00',
      'adjustedNetValue': 0.982
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-16 00:00:00',
      'adjustedNetValue': 0.9793
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-17 00:00:00',
      'adjustedNetValue': 0.9793
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-18 00:00:00',
      'adjustedNetValue': 0.9706
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-19 00:00:00',
      'adjustedNetValue': 0.9855
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-22 00:00:00',
      'adjustedNetValue': 1.0084
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-23 00:00:00',
      'adjustedNetValue': 0.983
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-24 00:00:00',
      'adjustedNetValue': 0.9748
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-25 00:00:00',
      'adjustedNetValue': 0.9623
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-26 00:00:00',
      'adjustedNetValue': 0.9529
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-29 00:00:00',
      'adjustedNetValue': 0.9246
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-30 00:00:00',
      'adjustedNetValue': 0.9201
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-10-31 00:00:00',
      'adjustedNetValue': 0.9374
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-01 00:00:00',
      'adjustedNetValue': 0.9503
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-02 00:00:00',
      'adjustedNetValue': 0.9893
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-05 00:00:00',
      'adjustedNetValue': 0.9727
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-06 00:00:00',
      'adjustedNetValue': 0.9686
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-07 00:00:00',
      'adjustedNetValue': 0.9667
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-08 00:00:00',
      'adjustedNetValue': 0.9688
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-09 00:00:00',
      'adjustedNetValue': 0.9602
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-12 00:00:00',
      'adjustedNetValue': 0.9593
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-13 00:00:00',
      'adjustedNetValue': 0.9687
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-14 00:00:00',
      'adjustedNetValue': 0.9609
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-15 00:00:00',
      'adjustedNetValue': 0.9658
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-16 00:00:00',
      'adjustedNetValue': 0.967
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-19 00:00:00',
      'adjustedNetValue': 0.9748
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-20 00:00:00',
      'adjustedNetValue': 0.9599
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-21 00:00:00',
      'adjustedNetValue': 0.968
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-22 00:00:00',
      'adjustedNetValue': 0.9693
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-23 00:00:00',
      'adjustedNetValue': 0.9606
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-26 00:00:00',
      'adjustedNetValue': 0.9617
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-27 00:00:00',
      'adjustedNetValue': 0.9605
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-28 00:00:00',
      'adjustedNetValue': 0.9683
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-29 00:00:00',
      'adjustedNetValue': 0.9641
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-11-30 00:00:00',
      'adjustedNetValue': 0.9707
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-03 00:00:00',
      'adjustedNetValue': 0.9923
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-04 00:00:00',
      'adjustedNetValue': 0.9939
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-05 00:00:00',
      'adjustedNetValue': 0.9904
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-06 00:00:00',
      'adjustedNetValue': 0.9651
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-07 00:00:00',
      'adjustedNetValue': 0.9634
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-10 00:00:00',
      'adjustedNetValue': 0.9569
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-11 00:00:00',
      'adjustedNetValue': 0.963
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-12 00:00:00',
      'adjustedNetValue': 0.9678
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-13 00:00:00',
      'adjustedNetValue': 0.9788
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-14 00:00:00',
      'adjustedNetValue': 0.9688
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-17 00:00:00',
      'adjustedNetValue': 0.9642
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-18 00:00:00',
      'adjustedNetValue': 0.9591
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-19 00:00:00',
      'adjustedNetValue': 0.9514
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-20 00:00:00',
      'adjustedNetValue': 0.9479
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-21 00:00:00',
      'adjustedNetValue': 0.9404
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-24 00:00:00',
      'adjustedNetValue': 0.9404
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-25 00:00:00',
      'adjustedNetValue': 0.9404
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-26 00:00:00',
      'adjustedNetValue': 0.9404
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-27 00:00:00',
      'adjustedNetValue': 0.9404
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-28 00:00:00',
      'adjustedNetValue': 0.9404
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-02 00:00:00',
      'adjustedNetValue': 0.9306
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-03 00:00:00',
      'adjustedNetValue': 0.9199
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-04 00:00:00',
      'adjustedNetValue': 0.9268
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-07 00:00:00',
      'adjustedNetValue': 0.9315
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-08 00:00:00',
      'adjustedNetValue': 0.9332
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-09 00:00:00',
      'adjustedNetValue': 0.9473
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-10 00:00:00',
      'adjustedNetValue': 0.95
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-11 00:00:00',
      'adjustedNetValue': 0.9557
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-14 00:00:00',
      'adjustedNetValue': 0.9413
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-15 00:00:00',
      'adjustedNetValue': 0.9688
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-16 00:00:00',
      'adjustedNetValue': 0.9718
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-17 00:00:00',
      'adjustedNetValue': 0.9705
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-18 00:00:00',
      'adjustedNetValue': 0.9932
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-21 00:00:00',
      'adjustedNetValue': 0.9987
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-22 00:00:00',
      'adjustedNetValue': 0.9848
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-23 00:00:00',
      'adjustedNetValue': 0.9817
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-24 00:00:00',
      'adjustedNetValue': 0.9849
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-25 00:00:00',
      'adjustedNetValue': 0.9975
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-28 00:00:00',
      'adjustedNetValue': 0.9982
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-29 00:00:00',
      'adjustedNetValue': 1.0025
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-30 00:00:00',
      'adjustedNetValue': 0.9954
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-01-31 00:00:00',
      'adjustedNetValue': 0.9954
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-01 00:00:00',
      'adjustedNetValue': 0.9954
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-11 00:00:00',
      'adjustedNetValue': 1.0475
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-12 00:00:00',
      'adjustedNetValue': 1.0569
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-13 00:00:00',
      'adjustedNetValue': 1.0704
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-14 00:00:00',
      'adjustedNetValue': 1.0739
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-15 00:00:00',
      'adjustedNetValue': 1.0509
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-18 00:00:00',
      'adjustedNetValue': 1.0773
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-19 00:00:00',
      'adjustedNetValue': 1.0693
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-20 00:00:00',
      'adjustedNetValue': 1.0717
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-21 00:00:00',
      'adjustedNetValue': 1.072
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-22 00:00:00',
      'adjustedNetValue': 1.082
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-25 00:00:00',
      'adjustedNetValue': 1.1044
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-26 00:00:00',
      'adjustedNetValue': 1.0897
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-27 00:00:00',
      'adjustedNetValue': 1.0829
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-02-28 00:00:00',
      'adjustedNetValue': 1.0918
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-01 00:00:00',
      'adjustedNetValue': 1.1224
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-04 00:00:00',
      'adjustedNetValue': 1.137
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-05 00:00:00',
      'adjustedNetValue': 1.1393
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-06 00:00:00',
      'adjustedNetValue': 1.135
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-07 00:00:00',
      'adjustedNetValue': 1.1061
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-08 00:00:00',
      'adjustedNetValue': 1.0829
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-11 00:00:00',
      'adjustedNetValue': 1.1179
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-12 00:00:00',
      'adjustedNetValue': 1.1256
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-13 00:00:00',
      'adjustedNetValue': 1.1241
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-14 00:00:00',
      'adjustedNetValue': 1.1278
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-15 00:00:00',
      'adjustedNetValue': 1.1465
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-18 00:00:00',
      'adjustedNetValue': 1.1928
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-19 00:00:00',
      'adjustedNetValue': 1.185
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-20 00:00:00',
      'adjustedNetValue': 1.1787
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-21 00:00:00',
      'adjustedNetValue': 1.1708
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-22 00:00:00',
      'adjustedNetValue': 1.1796
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-25 00:00:00',
      'adjustedNetValue': 1.1498
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-26 00:00:00',
      'adjustedNetValue': 1.1532
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-27 00:00:00',
      'adjustedNetValue': 1.1692
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-28 00:00:00',
      'adjustedNetValue': 1.1752
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-03-29 00:00:00',
      'adjustedNetValue': 1.2046
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-01 00:00:00',
      'adjustedNetValue': 1.2167
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-02 00:00:00',
      'adjustedNetValue': 1.2087
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-03 00:00:00',
      'adjustedNetValue': 1.2203
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-04 00:00:00',
      'adjustedNetValue': 1.2293
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-08 00:00:00',
      'adjustedNetValue': 1.2458
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-09 00:00:00',
      'adjustedNetValue': 1.2637
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-10 00:00:00',
      'adjustedNetValue': 1.2725
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-11 00:00:00',
      'adjustedNetValue': 1.2405
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-12 00:00:00',
      'adjustedNetValue': 1.2388
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-15 00:00:00',
      'adjustedNetValue': 1.2262
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-16 00:00:00',
      'adjustedNetValue': 1.2462
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-17 00:00:00',
      'adjustedNetValue': 1.25
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-18 00:00:00',
      'adjustedNetValue': 1.2444
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-19 00:00:00',
      'adjustedNetValue': 1.2444
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-22 00:00:00',
      'adjustedNetValue': 1.2444
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-23 00:00:00',
      'adjustedNetValue': 1.2568
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-24 00:00:00',
      'adjustedNetValue': 1.2525
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-25 00:00:00',
      'adjustedNetValue': 1.2315
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-26 00:00:00',
      'adjustedNetValue': 1.2361
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-29 00:00:00',
      'adjustedNetValue': 1.2361
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-04-30 00:00:00',
      'adjustedNetValue': 1.2594
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-06 00:00:00',
      'adjustedNetValue': 1.1972
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-07 00:00:00',
      'adjustedNetValue': 1.217
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-08 00:00:00',
      'adjustedNetValue': 1.2076
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-09 00:00:00',
      'adjustedNetValue': 1.1682
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-10 00:00:00',
      'adjustedNetValue': 1.2182
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-13 00:00:00',
      'adjustedNetValue': 1.2182
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-14 00:00:00',
      'adjustedNetValue': 1.2013
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-15 00:00:00',
      'adjustedNetValue': 1.2493
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-16 00:00:00',
      'adjustedNetValue': 1.262
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-17 00:00:00',
      'adjustedNetValue': 1.2344
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-20 00:00:00',
      'adjustedNetValue': 1.2079
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-21 00:00:00',
      'adjustedNetValue': 1.2139
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-22 00:00:00',
      'adjustedNetValue': 1.2112
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-23 00:00:00',
      'adjustedNetValue': 1.1777
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-24 00:00:00',
      'adjustedNetValue': 1.1851
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-27 00:00:00',
      'adjustedNetValue': 1.1953
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-28 00:00:00',
      'adjustedNetValue': 1.2145
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-29 00:00:00',
      'adjustedNetValue': 1.211
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-30 00:00:00',
      'adjustedNetValue': 1.2035
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-05-31 00:00:00',
      'adjustedNetValue': 1.1967
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-03 00:00:00',
      'adjustedNetValue': 1.1987
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-04 00:00:00',
      'adjustedNetValue': 1.1788
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-05 00:00:00',
      'adjustedNetValue': 1.1679
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-06 00:00:00',
      'adjustedNetValue': 1.1605
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-10 00:00:00',
      'adjustedNetValue': 1.1923
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-11 00:00:00',
      'adjustedNetValue': 1.2294
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-12 00:00:00',
      'adjustedNetValue': 1.2129
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-13 00:00:00',
      'adjustedNetValue': 1.2088
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-14 00:00:00',
      'adjustedNetValue': 1.2027
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-17 00:00:00',
      'adjustedNetValue': 1.2034
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-18 00:00:00',
      'adjustedNetValue': 1.218
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-19 00:00:00',
      'adjustedNetValue': 1.2447
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-20 00:00:00',
      'adjustedNetValue': 1.2791
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-21 00:00:00',
      'adjustedNetValue': 1.2803
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-24 00:00:00',
      'adjustedNetValue': 1.2937
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-25 00:00:00',
      'adjustedNetValue': 1.2883
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-26 00:00:00',
      'adjustedNetValue': 1.2883
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-27 00:00:00',
      'adjustedNetValue': 1.3149
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-28 00:00:00',
      'adjustedNetValue': 1.3184
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-01 00:00:00',
      'adjustedNetValue': 1.3183
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-02 00:00:00',
      'adjustedNetValue': 1.3625
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-03 00:00:00',
      'adjustedNetValue': 1.3454
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-04 00:00:00',
      'adjustedNetValue': 1.3352
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-05 00:00:00',
      'adjustedNetValue': 1.362
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-08 00:00:00',
      'adjustedNetValue': 1.3402
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-09 00:00:00',
      'adjustedNetValue': 1.3354
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-10 00:00:00',
      'adjustedNetValue': 1.3471
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-11 00:00:00',
      'adjustedNetValue': 1.3405
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-12 00:00:00',
      'adjustedNetValue': 1.3469
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-15 00:00:00',
      'adjustedNetValue': 1.3476
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-16 00:00:00',
      'adjustedNetValue': 1.3368
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-17 00:00:00',
      'adjustedNetValue': 1.3376
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-18 00:00:00',
      'adjustedNetValue': 1.3244
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-19 00:00:00',
      'adjustedNetValue': 1.3346
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-22 00:00:00',
      'adjustedNetValue': 1.3297
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-23 00:00:00',
      'adjustedNetValue': 1.3241
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-24 00:00:00',
      'adjustedNetValue': 1.3249
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-25 00:00:00',
      'adjustedNetValue': 1.3393
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-26 00:00:00',
      'adjustedNetValue': 1.3386
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-29 00:00:00',
      'adjustedNetValue': 1.3463
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-30 00:00:00',
      'adjustedNetValue': 1.3432
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-07-31 00:00:00',
      'adjustedNetValue': 1.3432
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-01 00:00:00',
      'adjustedNetValue': 1.3232
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-02 00:00:00',
      'adjustedNetValue': 1.3003
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-05 00:00:00',
      'adjustedNetValue': 1.2746
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-06 00:00:00',
      'adjustedNetValue': 1.2825
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-07 00:00:00',
      'adjustedNetValue': 1.2834
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-08 00:00:00',
      'adjustedNetValue': 1.3014
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-09 00:00:00',
      'adjustedNetValue': 1.288
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-12 00:00:00',
      'adjustedNetValue': 1.3167
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-13 00:00:00',
      'adjustedNetValue': 1.3062
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-14 00:00:00',
      'adjustedNetValue': 1.3231
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-15 00:00:00',
      'adjustedNetValue': 1.3209
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-16 00:00:00',
      'adjustedNetValue': 1.3376
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-19 00:00:00',
      'adjustedNetValue': 1.3608
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-20 00:00:00',
      'adjustedNetValue': 1.3639
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-21 00:00:00',
      'adjustedNetValue': 1.3638
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-22 00:00:00',
      'adjustedNetValue': 1.3824
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-23 00:00:00',
      'adjustedNetValue': 1.4001
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-26 00:00:00',
      'adjustedNetValue': 1.3764
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-27 00:00:00',
      'adjustedNetValue': 1.3964
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-28 00:00:00',
      'adjustedNetValue': 1.3848
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-29 00:00:00',
      'adjustedNetValue': 1.4119
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-08-30 00:00:00',
      'adjustedNetValue': 1.4368
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-02 00:00:00',
      'adjustedNetValue': 1.451
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-03 00:00:00',
      'adjustedNetValue': 1.441
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-04 00:00:00',
      'adjustedNetValue': 1.4438
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-05 00:00:00',
      'adjustedNetValue': 1.4527
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-06 00:00:00',
      'adjustedNetValue': 1.4568
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-09 00:00:00',
      'adjustedNetValue': 1.4441
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-10 00:00:00',
      'adjustedNetValue': 1.43
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-11 00:00:00',
      'adjustedNetValue': 1.4
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-12 00:00:00',
      'adjustedNetValue': 1.4121
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-16 00:00:00',
      'adjustedNetValue': 1.4035
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-17 00:00:00',
      'adjustedNetValue': 1.4008
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-18 00:00:00',
      'adjustedNetValue': 1.4195
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-19 00:00:00',
      'adjustedNetValue': 1.4107
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-20 00:00:00',
      'adjustedNetValue': 1.4137
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-23 00:00:00',
      'adjustedNetValue': 1.3984
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-24 00:00:00',
      'adjustedNetValue': 1.416
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-25 00:00:00',
      'adjustedNetValue': 1.4
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-26 00:00:00',
      'adjustedNetValue': 1.3998
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-27 00:00:00',
      'adjustedNetValue': 1.3985
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-09-30 00:00:00',
      'adjustedNetValue': 1.3943
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-08 00:00:00',
      'adjustedNetValue': 1.4095
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-09 00:00:00',
      'adjustedNetValue': 1.3988
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-10 00:00:00',
      'adjustedNetValue': 1.418
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-11 00:00:00',
      'adjustedNetValue': 1.4294
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-14 00:00:00',
      'adjustedNetValue': 1.433
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-15 00:00:00',
      'adjustedNetValue': 1.4455
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-16 00:00:00',
      'adjustedNetValue': 1.4392
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-17 00:00:00',
      'adjustedNetValue': 1.4383
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-18 00:00:00',
      'adjustedNetValue': 1.4282
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-21 00:00:00',
      'adjustedNetValue': 1.4243
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-22 00:00:00',
      'adjustedNetValue': 1.4264
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-23 00:00:00',
      'adjustedNetValue': 1.411
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-24 00:00:00',
      'adjustedNetValue': 1.4006
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-25 00:00:00',
      'adjustedNetValue': 1.4227
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-28 00:00:00',
      'adjustedNetValue': 1.4407
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-29 00:00:00',
      'adjustedNetValue': 1.4447
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-30 00:00:00',
      'adjustedNetValue': 1.4393
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-10-31 00:00:00',
      'adjustedNetValue': 1.4511
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-01 00:00:00',
      'adjustedNetValue': 1.4572
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-04 00:00:00',
      'adjustedNetValue': 1.4688
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-05 00:00:00',
      'adjustedNetValue': 1.4655
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-06 00:00:00',
      'adjustedNetValue': 1.4573
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-07 00:00:00',
      'adjustedNetValue': 1.4662
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-08 00:00:00',
      'adjustedNetValue': 1.4634
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-11 00:00:00',
      'adjustedNetValue': 1.4402
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-12 00:00:00',
      'adjustedNetValue': 1.4444
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-13 00:00:00',
      'adjustedNetValue': 1.4485
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-14 00:00:00',
      'adjustedNetValue': 1.4479
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-15 00:00:00',
      'adjustedNetValue': 1.4404
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-18 00:00:00',
      'adjustedNetValue': 1.4434
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-19 00:00:00',
      'adjustedNetValue': 1.4696
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-20 00:00:00',
      'adjustedNetValue': 1.4666
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-21 00:00:00',
      'adjustedNetValue': 1.4556
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-22 00:00:00',
      'adjustedNetValue': 1.4394
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-25 00:00:00',
      'adjustedNetValue': 1.4321
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-26 00:00:00',
      'adjustedNetValue': 1.4386
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-27 00:00:00',
      'adjustedNetValue': 1.4344
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-28 00:00:00',
      'adjustedNetValue': 1.4307
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-11-29 00:00:00',
      'adjustedNetValue': 1.3894
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-02 00:00:00',
      'adjustedNetValue': 1.386
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-03 00:00:00',
      'adjustedNetValue': 1.3803
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-04 00:00:00',
      'adjustedNetValue': 1.3822
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-05 00:00:00',
      'adjustedNetValue': 1.3932
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-06 00:00:00',
      'adjustedNetValue': 1.4153
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-09 00:00:00',
      'adjustedNetValue': 1.3965
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-10 00:00:00',
      'adjustedNetValue': 1.3991
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-11 00:00:00',
      'adjustedNetValue': 1.4011
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-12 00:00:00',
      'adjustedNetValue': 1.407
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-13 00:00:00',
      'adjustedNetValue': 1.4293
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-16 00:00:00',
      'adjustedNetValue': 1.4225
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-17 00:00:00',
      'adjustedNetValue': 1.4512
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-18 00:00:00',
      'adjustedNetValue': 1.4513
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-19 00:00:00',
      'adjustedNetValue': 1.4452
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-20 00:00:00',
      'adjustedNetValue': 1.4449
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-23 00:00:00',
      'adjustedNetValue': 1.4496
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-24 00:00:00',
      'adjustedNetValue': 1.449
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-25 00:00:00',
      'adjustedNetValue': 1.4416
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-26 00:00:00',
      'adjustedNetValue': 1.4444
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-27 00:00:00',
      'adjustedNetValue': 1.459
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-30 00:00:00',
      'adjustedNetValue': 1.4686
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-31 00:00:00',
      'adjustedNetValue': 1.4691
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-02 00:00:00',
      'adjustedNetValue': 1.467
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-03 00:00:00',
      'adjustedNetValue': 1.459
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-06 00:00:00',
      'adjustedNetValue': 1.4325
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-07 00:00:00',
      'adjustedNetValue': 1.4496
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-08 00:00:00',
      'adjustedNetValue': 1.439
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-09 00:00:00',
      'adjustedNetValue': 1.4684
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-10 00:00:00',
      'adjustedNetValue': 1.4776
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-13 00:00:00',
      'adjustedNetValue': 1.502
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-14 00:00:00',
      'adjustedNetValue': 1.4832
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-15 00:00:00',
      'adjustedNetValue': 1.4854
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-16 00:00:00',
      'adjustedNetValue': 1.5018
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-17 00:00:00',
      'adjustedNetValue': 1.5112
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-20 00:00:00',
      'adjustedNetValue': 1.5152
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-21 00:00:00',
      'adjustedNetValue': 1.4874
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-22 00:00:00',
      'adjustedNetValue': 1.4964
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-01-23 00:00:00',
      'adjustedNetValue': 1.4567
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-03 00:00:00',
      'adjustedNetValue': 1.3896
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-04 00:00:00',
      'adjustedNetValue': 1.4192
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-05 00:00:00',
      'adjustedNetValue': 1.4438
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-06 00:00:00',
      'adjustedNetValue': 1.4771
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-07 00:00:00',
      'adjustedNetValue': 1.4771
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-10 00:00:00',
      'adjustedNetValue': 1.478
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-11 00:00:00',
      'adjustedNetValue': 1.5009
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-12 00:00:00',
      'adjustedNetValue': 1.5059
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-13 00:00:00',
      'adjustedNetValue': 1.5054
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-14 00:00:00',
      'adjustedNetValue': 1.5185
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-17 00:00:00',
      'adjustedNetValue': 1.5199
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-18 00:00:00',
      'adjustedNetValue': 1.5046
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-19 00:00:00',
      'adjustedNetValue': 1.5075
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-20 00:00:00',
      'adjustedNetValue': 1.5308
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-21 00:00:00',
      'adjustedNetValue': 1.5212
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-24 00:00:00',
      'adjustedNetValue': 1.4921
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-25 00:00:00',
      'adjustedNetValue': 1.4998
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-26 00:00:00',
      'adjustedNetValue': 1.479
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-27 00:00:00',
      'adjustedNetValue': 1.4931
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-02-28 00:00:00',
      'adjustedNetValue': 1.4546
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-02 00:00:00',
      'adjustedNetValue': 1.4773
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-03 00:00:00',
      'adjustedNetValue': 1.5001
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-04 00:00:00',
      'adjustedNetValue': 1.5064
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-05 00:00:00',
      'adjustedNetValue': 1.5576
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-06 00:00:00',
      'adjustedNetValue': 1.5357
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-09 00:00:00',
      'adjustedNetValue': 1.4821
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-10 00:00:00',
      'adjustedNetValue': 1.5045
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-11 00:00:00',
      'adjustedNetValue': 1.4998
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-12 00:00:00',
      'adjustedNetValue': 1.4537
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-13 00:00:00',
      'adjustedNetValue': 1.4456
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-16 00:00:00',
      'adjustedNetValue': 1.3715
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-17 00:00:00',
      'adjustedNetValue': 1.3789
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-18 00:00:00',
      'adjustedNetValue': 1.3366
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-19 00:00:00',
      'adjustedNetValue': 1.2966
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-20 00:00:00',
      'adjustedNetValue': 1.365
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-23 00:00:00',
      'adjustedNetValue': 1.324
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-24 00:00:00',
      'adjustedNetValue': 1.3795
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-25 00:00:00',
      'adjustedNetValue': 1.4329
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-26 00:00:00',
      'adjustedNetValue': 1.4378
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-27 00:00:00',
      'adjustedNetValue': 1.4333
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-30 00:00:00',
      'adjustedNetValue': 1.4116
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-03-31 00:00:00',
      'adjustedNetValue': 1.4326
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-01 00:00:00',
      'adjustedNetValue': 1.4279
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-02 00:00:00',
      'adjustedNetValue': 1.4547
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-03 00:00:00',
      'adjustedNetValue': 1.4625
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-07 00:00:00',
      'adjustedNetValue': 1.5059
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-08 00:00:00',
      'adjustedNetValue': 1.4921
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-09 00:00:00',
      'adjustedNetValue': 1.5128
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-10 00:00:00',
      'adjustedNetValue': 1.5125
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-13 00:00:00',
      'adjustedNetValue': 1.5089
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-14 00:00:00',
      'adjustedNetValue': 1.523
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-15 00:00:00',
      'adjustedNetValue': 1.521
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-16 00:00:00',
      'adjustedNetValue': 1.5273
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-17 00:00:00',
      'adjustedNetValue': 1.5422
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-20 00:00:00',
      'adjustedNetValue': 1.55
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-21 00:00:00',
      'adjustedNetValue': 1.5137
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-22 00:00:00',
      'adjustedNetValue': 1.5437
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-23 00:00:00',
      'adjustedNetValue': 1.5577
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-24 00:00:00',
      'adjustedNetValue': 1.5432
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-27 00:00:00',
      'adjustedNetValue': 1.5591
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-28 00:00:00',
      'adjustedNetValue': 1.5945
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-29 00:00:00',
      'adjustedNetValue': 1.5831
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-04-30 00:00:00',
      'adjustedNetValue': 1.5806
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-06 00:00:00',
      'adjustedNetValue': 1.5961
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-07 00:00:00',
      'adjustedNetValue': 1.6042
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-08 00:00:00',
      'adjustedNetValue': 1.6176
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-11 00:00:00',
      'adjustedNetValue': 1.6219
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-12 00:00:00',
      'adjustedNetValue': 1.6352
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-13 00:00:00',
      'adjustedNetValue': 1.6724
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-14 00:00:00',
      'adjustedNetValue': 1.6678
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-15 00:00:00',
      'adjustedNetValue': 1.6556
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-18 00:00:00',
      'adjustedNetValue': 1.6924
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-19 00:00:00',
      'adjustedNetValue': 1.7149
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-20 00:00:00',
      'adjustedNetValue': 1.7165
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-21 00:00:00',
      'adjustedNetValue': 1.7146
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-22 00:00:00',
      'adjustedNetValue': 1.6481
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-25 00:00:00',
      'adjustedNetValue': 1.6884
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-26 00:00:00',
      'adjustedNetValue': 1.7234
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-27 00:00:00',
      'adjustedNetValue': 1.7041
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-28 00:00:00',
      'adjustedNetValue': 1.6902
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-05-29 00:00:00',
      'adjustedNetValue': 1.7304
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-01 00:00:00',
      'adjustedNetValue': 1.795
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-02 00:00:00',
      'adjustedNetValue': 1.7845
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-03 00:00:00',
      'adjustedNetValue': 1.7987
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-04 00:00:00',
      'adjustedNetValue': 1.825
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-05 00:00:00',
      'adjustedNetValue': 1.8386
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-08 00:00:00',
      'adjustedNetValue': 1.8261
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-09 00:00:00',
      'adjustedNetValue': 1.8293
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-10 00:00:00',
      'adjustedNetValue': 1.8564
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-11 00:00:00',
      'adjustedNetValue': 1.8445
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-12 00:00:00',
      'adjustedNetValue': 1.8568
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-15 00:00:00',
      'adjustedNetValue': 1.8171
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-16 00:00:00',
      'adjustedNetValue': 1.8587
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-17 00:00:00',
      'adjustedNetValue': 1.8738
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-18 00:00:00',
      'adjustedNetValue': 1.8798
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-19 00:00:00',
      'adjustedNetValue': 1.915
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-22 00:00:00',
      'adjustedNetValue': 1.9118
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-23 00:00:00',
      'adjustedNetValue': 1.9628
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-24 00:00:00',
      'adjustedNetValue': 1.9547
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-29 00:00:00',
      'adjustedNetValue': 1.9514
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-30 00:00:00',
      'adjustedNetValue': 1.9677
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-01 00:00:00',
      'adjustedNetValue': 2.0074
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-02 00:00:00',
      'adjustedNetValue': 2.0719
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-03 00:00:00',
      'adjustedNetValue': 2.0915
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-06 00:00:00',
      'adjustedNetValue': 2.1211
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-07 00:00:00',
      'adjustedNetValue': 2.1461
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-08 00:00:00',
      'adjustedNetValue': 2.1695
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-09 00:00:00',
      'adjustedNetValue': 2.2215
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-10 00:00:00',
      'adjustedNetValue': 2.2159
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-13 00:00:00',
      'adjustedNetValue': 2.262
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-14 00:00:00',
      'adjustedNetValue': 2.2388
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-15 00:00:00',
      'adjustedNetValue': 2.2717
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-16 00:00:00',
      'adjustedNetValue': 2.1142
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-17 00:00:00',
      'adjustedNetValue': 2.1448
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-20 00:00:00',
      'adjustedNetValue': 2.1295
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-21 00:00:00',
      'adjustedNetValue': 2.2116
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-22 00:00:00',
      'adjustedNetValue': 2.2009
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-23 00:00:00',
      'adjustedNetValue': 2.2428
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-24 00:00:00',
      'adjustedNetValue': 2.14
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-27 00:00:00',
      'adjustedNetValue': 2.164
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-28 00:00:00',
      'adjustedNetValue': 2.2052
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-29 00:00:00',
      'adjustedNetValue': 2.2237
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-30 00:00:00',
      'adjustedNetValue': 2.229
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-07-31 00:00:00',
      'adjustedNetValue': 2.2271
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-03 00:00:00',
      'adjustedNetValue': 2.2422
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-04 00:00:00',
      'adjustedNetValue': 2.2584
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-05 00:00:00',
      'adjustedNetValue': 2.2724
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-06 00:00:00',
      'adjustedNetValue': 2.2326
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-07 00:00:00',
      'adjustedNetValue': 2.1984
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-10 00:00:00',
      'adjustedNetValue': 2.1857
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-11 00:00:00',
      'adjustedNetValue': 2.1998
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-12 00:00:00',
      'adjustedNetValue': 2.1676
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-13 00:00:00',
      'adjustedNetValue': 2.1656
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-14 00:00:00',
      'adjustedNetValue': 2.1985
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-17 00:00:00',
      'adjustedNetValue': 2.233
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-18 00:00:00',
      'adjustedNetValue': 2.2533
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-19 00:00:00',
      'adjustedNetValue': 2.2375
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-20 00:00:00',
      'adjustedNetValue': 2.2132
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-21 00:00:00',
      'adjustedNetValue': 2.2429
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-24 00:00:00',
      'adjustedNetValue': 2.3006
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-25 00:00:00',
      'adjustedNetValue': 2.3265
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-26 00:00:00',
      'adjustedNetValue': 2.3325
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-27 00:00:00',
      'adjustedNetValue': 2.3472
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-28 00:00:00',
      'adjustedNetValue': 2.3873
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-08-31 00:00:00',
      'adjustedNetValue': 2.3732
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-01 00:00:00',
      'adjustedNetValue': 2.3748
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-02 00:00:00',
      'adjustedNetValue': 2.3824
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-03 00:00:00',
      'adjustedNetValue': 2.3901
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-04 00:00:00',
      'adjustedNetValue': 2.3521
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-07 00:00:00',
      'adjustedNetValue': 2.3065
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-08 00:00:00',
      'adjustedNetValue': 2.2612
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-09 00:00:00',
      'adjustedNetValue': 2.2314
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-10 00:00:00',
      'adjustedNetValue': 2.2433
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-11 00:00:00',
      'adjustedNetValue': 2.288
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-14 00:00:00',
      'adjustedNetValue': 2.3052
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-15 00:00:00',
      'adjustedNetValue': 2.3122
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-16 00:00:00',
      'adjustedNetValue': 2.2924
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-17 00:00:00',
      'adjustedNetValue': 2.2474
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-18 00:00:00',
      'adjustedNetValue': 2.2653
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-21 00:00:00',
      'adjustedNetValue': 2.2352
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-22 00:00:00',
      'adjustedNetValue': 2.2221
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-23 00:00:00',
      'adjustedNetValue': 2.2343
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-24 00:00:00',
      'adjustedNetValue': 2.1948
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-25 00:00:00',
      'adjustedNetValue': 2.1915
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-28 00:00:00',
      'adjustedNetValue': 2.2155
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-29 00:00:00',
      'adjustedNetValue': 2.2092
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-09-30 00:00:00',
      'adjustedNetValue': 2.2292
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-09 00:00:00',
      'adjustedNetValue': 2.2796
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-12 00:00:00',
      'adjustedNetValue': 2.3497
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-13 00:00:00',
      'adjustedNetValue': 2.3773
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-14 00:00:00',
      'adjustedNetValue': 2.3752
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-15 00:00:00',
      'adjustedNetValue': 2.346
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-16 00:00:00',
      'adjustedNetValue': 2.3381
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-19 00:00:00',
      'adjustedNetValue': 2.3269
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-20 00:00:00',
      'adjustedNetValue': 2.369
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-21 00:00:00',
      'adjustedNetValue': 2.3784
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-22 00:00:00',
      'adjustedNetValue': 2.3954
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-23 00:00:00',
      'adjustedNetValue': 2.3584
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-26 00:00:00',
      'adjustedNetValue': 2.3612
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-27 00:00:00',
      'adjustedNetValue': 2.3894
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-28 00:00:00',
      'adjustedNetValue': 2.4535
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-29 00:00:00',
      'adjustedNetValue': 2.5053
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-10-30 00:00:00',
      'adjustedNetValue': 2.4487
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-02 00:00:00',
      'adjustedNetValue': 2.4773
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-03 00:00:00',
      'adjustedNetValue': 2.4973
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-04 00:00:00',
      'adjustedNetValue': 2.5153
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-05 00:00:00',
      'adjustedNetValue': 2.567
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-06 00:00:00',
      'adjustedNetValue': 2.5449
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-09 00:00:00',
      'adjustedNetValue': 2.5929
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-10 00:00:00',
      'adjustedNetValue': 2.5808
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-11 00:00:00',
      'adjustedNetValue': 2.5196
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-12 00:00:00',
      'adjustedNetValue': 2.5609
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-13 00:00:00',
      'adjustedNetValue': 2.5637
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-16 00:00:00',
      'adjustedNetValue': 2.6206
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-17 00:00:00',
      'adjustedNetValue': 2.5676
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-18 00:00:00',
      'adjustedNetValue': 2.5469
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-19 00:00:00',
      'adjustedNetValue': 2.5504
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-20 00:00:00',
      'adjustedNetValue': 2.598
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-23 00:00:00',
      'adjustedNetValue': 2.6103
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-24 00:00:00',
      'adjustedNetValue': 2.6263
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-25 00:00:00',
      'adjustedNetValue': 2.551
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-26 00:00:00',
      'adjustedNetValue': 2.5762
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-27 00:00:00',
      'adjustedNetValue': 2.5983
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-11-30 00:00:00',
      'adjustedNetValue': 2.5316
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-01 00:00:00',
      'adjustedNetValue': 2.5665
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-02 00:00:00',
      'adjustedNetValue': 2.541
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-03 00:00:00',
      'adjustedNetValue': 2.5726
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-04 00:00:00',
      'adjustedNetValue': 2.6321
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-07 00:00:00',
      'adjustedNetValue': 2.6132
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-08 00:00:00',
      'adjustedNetValue': 2.626
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-09 00:00:00',
      'adjustedNetValue': 2.6175
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-10 00:00:00',
      'adjustedNetValue': 2.6311
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-11 00:00:00',
      'adjustedNetValue': 2.6417
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-14 00:00:00',
      'adjustedNetValue': 2.6503
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-15 00:00:00',
      'adjustedNetValue': 2.631
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-16 00:00:00',
      'adjustedNetValue': 2.6661
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-17 00:00:00',
      'adjustedNetValue': 2.7125
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-18 00:00:00',
      'adjustedNetValue': 2.6947
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-21 00:00:00',
      'adjustedNetValue': 2.719
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-22 00:00:00',
      'adjustedNetValue': 2.7293
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-23 00:00:00',
      'adjustedNetValue': 2.744
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-24 00:00:00',
      'adjustedNetValue': 2.7299
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-25 00:00:00',
      'adjustedNetValue': 2.7329
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-28 00:00:00',
      'adjustedNetValue': 2.7401
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-29 00:00:00',
      'adjustedNetValue': 2.7537
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-30 00:00:00',
      'adjustedNetValue': 2.8212
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-31 00:00:00',
      'adjustedNetValue': 2.8661
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-04 00:00:00',
      'adjustedNetValue': 2.9202
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-05 00:00:00',
      'adjustedNetValue': 3.0144
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-06 00:00:00',
      'adjustedNetValue': 3.0452
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-07 00:00:00',
      'adjustedNetValue': 3.0491
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-08 00:00:00',
      'adjustedNetValue': 3.0306
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-11 00:00:00',
      'adjustedNetValue': 2.9898
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-12 00:00:00',
      'adjustedNetValue': 3.0335
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-13 00:00:00',
      'adjustedNetValue': 2.9997
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-14 00:00:00',
      'adjustedNetValue': 2.9985
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-15 00:00:00',
      'adjustedNetValue': 2.9819
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-18 00:00:00',
      'adjustedNetValue': 3.0143
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-19 00:00:00',
      'adjustedNetValue': 3.0303
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-20 00:00:00',
      'adjustedNetValue': 3.0868
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-21 00:00:00',
      'adjustedNetValue': 3.1302
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-22 00:00:00',
      'adjustedNetValue': 3.1652
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-25 00:00:00',
      'adjustedNetValue': 3.325
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-26 00:00:00',
      'adjustedNetValue': 3.2393
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-27 00:00:00',
      'adjustedNetValue': 3.1889
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-28 00:00:00',
      'adjustedNetValue': 3.1174
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-01-29 00:00:00',
      'adjustedNetValue': 3.1327
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-01 00:00:00',
      'adjustedNetValue': 3.203
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-02 00:00:00',
      'adjustedNetValue': 3.2692
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-03 00:00:00',
      'adjustedNetValue': 3.3092
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-04 00:00:00',
      'adjustedNetValue': 3.3084
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-05 00:00:00',
      'adjustedNetValue': 3.35
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-08 00:00:00',
      'adjustedNetValue': 3.3807
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-09 00:00:00',
      'adjustedNetValue': 3.4215
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-10 00:00:00',
      'adjustedNetValue': 3.5287
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-18 00:00:00',
      'adjustedNetValue': 3.461
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-19 00:00:00',
      'adjustedNetValue': 3.477
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-22 00:00:00',
      'adjustedNetValue': 3.3015
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-23 00:00:00',
      'adjustedNetValue': 3.2979
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-24 00:00:00',
      'adjustedNetValue': 3.1287
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-25 00:00:00',
      'adjustedNetValue': 3.1122
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-02-26 00:00:00',
      'adjustedNetValue': 2.9872
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-01 00:00:00',
      'adjustedNetValue': 3.0655
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-02 00:00:00',
      'adjustedNetValue': 3.0117
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-03 00:00:00',
      'adjustedNetValue': 3.0963
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-04 00:00:00',
      'adjustedNetValue': 2.9647
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-05 00:00:00',
      'adjustedNetValue': 2.957
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-08 00:00:00',
      'adjustedNetValue': 2.7872
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-09 00:00:00',
      'adjustedNetValue': 2.7353
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-10 00:00:00',
      'adjustedNetValue': 2.7899
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-11 00:00:00',
      'adjustedNetValue': 2.9122
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-12 00:00:00',
      'adjustedNetValue': 2.8839
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-15 00:00:00',
      'adjustedNetValue': 2.8028
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-16 00:00:00',
      'adjustedNetValue': 2.8573
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-17 00:00:00',
      'adjustedNetValue': 2.8582
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-18 00:00:00',
      'adjustedNetValue': 2.9218
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-19 00:00:00',
      'adjustedNetValue': 2.852
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-22 00:00:00',
      'adjustedNetValue': 2.8564
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-23 00:00:00',
      'adjustedNetValue': 2.8318
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-24 00:00:00',
      'adjustedNetValue': 2.7775
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-25 00:00:00',
      'adjustedNetValue': 2.7584
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-26 00:00:00',
      'adjustedNetValue': 2.8476
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-29 00:00:00',
      'adjustedNetValue': 2.8299
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-30 00:00:00',
      'adjustedNetValue': 2.8677
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-03-31 00:00:00',
      'adjustedNetValue': 2.8453
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-01 00:00:00',
      'adjustedNetValue': 2.9347
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-02 00:00:00',
      'adjustedNetValue': 2.9855
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-06 00:00:00',
      'adjustedNetValue': 2.9644
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-07 00:00:00',
      'adjustedNetValue': 2.8782
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-08 00:00:00',
      'adjustedNetValue': 2.901
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-09 00:00:00',
      'adjustedNetValue': 2.8442
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-12 00:00:00',
      'adjustedNetValue': 2.8004
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-13 00:00:00',
      'adjustedNetValue': 2.7903
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-14 00:00:00',
      'adjustedNetValue': 2.8208
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-15 00:00:00',
      'adjustedNetValue': 2.8078
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-16 00:00:00',
      'adjustedNetValue': 2.8464
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-19 00:00:00',
      'adjustedNetValue': 2.8982
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-20 00:00:00',
      'adjustedNetValue': 2.9181
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-21 00:00:00',
      'adjustedNetValue': 2.9122
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-22 00:00:00',
      'adjustedNetValue': 2.9193
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-23 00:00:00',
      'adjustedNetValue': 2.9844
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-26 00:00:00',
      'adjustedNetValue': 2.9613
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-27 00:00:00',
      'adjustedNetValue': 2.9863
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-28 00:00:00',
      'adjustedNetValue': 3.0005
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-29 00:00:00',
      'adjustedNetValue': 3.0175
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-04-30 00:00:00',
      'adjustedNetValue': 2.9722
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-06 00:00:00',
      'adjustedNetValue': 2.901
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-07 00:00:00',
      'adjustedNetValue': 2.8597
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-10 00:00:00',
      'adjustedNetValue': 2.8161
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-11 00:00:00',
      'adjustedNetValue': 2.8229
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-12 00:00:00',
      'adjustedNetValue': 2.856
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-13 00:00:00',
      'adjustedNetValue': 2.8333
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-14 00:00:00',
      'adjustedNetValue': 2.8662
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-17 00:00:00',
      'adjustedNetValue': 2.9318
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-18 00:00:00',
      'adjustedNetValue': 2.9482
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-19 00:00:00',
      'adjustedNetValue': 2.9345
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-20 00:00:00',
      'adjustedNetValue': 2.9665
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-21 00:00:00',
      'adjustedNetValue': 2.9538
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-24 00:00:00',
      'adjustedNetValue': 2.9813
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-25 00:00:00',
      'adjustedNetValue': 3.1056
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-26 00:00:00',
      'adjustedNetValue': 3.1078
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-27 00:00:00',
      'adjustedNetValue': 3.1016
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-28 00:00:00',
      'adjustedNetValue': 3.0805
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-05-31 00:00:00',
      'adjustedNetValue': 3.1313
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-01 00:00:00',
      'adjustedNetValue': 3.1733
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-02 00:00:00',
      'adjustedNetValue': 3.1438
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-03 00:00:00',
      'adjustedNetValue': 3.1219
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-04 00:00:00',
      'adjustedNetValue': 3.1411
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-07 00:00:00',
      'adjustedNetValue': 3.126
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-08 00:00:00',
      'adjustedNetValue': 3.049
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-09 00:00:00',
      'adjustedNetValue': 3.0587
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-10 00:00:00',
      'adjustedNetValue': 3.0916
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-11 00:00:00',
      'adjustedNetValue': 3.0421
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-15 00:00:00',
      'adjustedNetValue': 3.0088
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-16 00:00:00',
      'adjustedNetValue': 2.9664
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-17 00:00:00',
      'adjustedNetValue': 2.9786
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-18 00:00:00',
      'adjustedNetValue': 2.9668
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-21 00:00:00',
      'adjustedNetValue': 2.9584
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-22 00:00:00',
      'adjustedNetValue': 2.9605
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-23 00:00:00',
      'adjustedNetValue': 2.9518
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-24 00:00:00',
      'adjustedNetValue': 2.991
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-25 00:00:00',
      'adjustedNetValue': 3.0644
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-28 00:00:00',
      'adjustedNetValue': 3.0622
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-29 00:00:00',
      'adjustedNetValue': 3.0041
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-30 00:00:00',
      'adjustedNetValue': 3.0144
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-01 00:00:00',
      'adjustedNetValue': 3.0324
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-02 00:00:00',
      'adjustedNetValue': 2.9328
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-05 00:00:00',
      'adjustedNetValue': 2.8928
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-06 00:00:00',
      'adjustedNetValue': 2.9031
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-07 00:00:00',
      'adjustedNetValue': 2.9245
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-08 00:00:00',
      'adjustedNetValue': 2.8359
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-09 00:00:00',
      'adjustedNetValue': 2.8256
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-12 00:00:00',
      'adjustedNetValue': 2.8689
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-13 00:00:00',
      'adjustedNetValue': 2.9035
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-14 00:00:00',
      'adjustedNetValue': 2.8952
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-15 00:00:00',
      'adjustedNetValue': 2.9317
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-16 00:00:00',
      'adjustedNetValue': 2.9354
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-19 00:00:00',
      'adjustedNetValue': 2.9286
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-20 00:00:00',
      'adjustedNetValue': 2.9183
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-21 00:00:00',
      'adjustedNetValue': 2.9224
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-22 00:00:00',
      'adjustedNetValue': 2.9135
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-23 00:00:00',
      'adjustedNetValue': 2.861
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-26 00:00:00',
      'adjustedNetValue': 2.681
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-27 00:00:00',
      'adjustedNetValue': 2.5192
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-28 00:00:00',
      'adjustedNetValue': 2.5497
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-29 00:00:00',
      'adjustedNetValue': 2.5735
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-07-30 00:00:00',
      'adjustedNetValue': 2.4967
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-02 00:00:00',
      'adjustedNetValue': 2.5664
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-03 00:00:00',
      'adjustedNetValue': 2.5785
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-04 00:00:00',
      'adjustedNetValue': 2.5596
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-05 00:00:00',
      'adjustedNetValue': 2.5337
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-06 00:00:00',
      'adjustedNetValue': 2.5355
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-09 00:00:00',
      'adjustedNetValue': 2.5653
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-10 00:00:00',
      'adjustedNetValue': 2.6544
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-11 00:00:00',
      'adjustedNetValue': 2.635
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-12 00:00:00',
      'adjustedNetValue': 2.5897
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-13 00:00:00',
      'adjustedNetValue': 2.5887
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-16 00:00:00',
      'adjustedNetValue': 2.5718
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-17 00:00:00',
      'adjustedNetValue': 2.4887
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-18 00:00:00',
      'adjustedNetValue': 2.5224
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-19 00:00:00',
      'adjustedNetValue': 2.4838
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-20 00:00:00',
      'adjustedNetValue': 2.4039
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-23 00:00:00',
      'adjustedNetValue': 2.4548
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-24 00:00:00',
      'adjustedNetValue': 2.5038
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-25 00:00:00',
      'adjustedNetValue': 2.5281
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-26 00:00:00',
      'adjustedNetValue': 2.4635
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-27 00:00:00',
      'adjustedNetValue': 2.4561
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-30 00:00:00',
      'adjustedNetValue': 2.4472
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-08-31 00:00:00',
      'adjustedNetValue': 2.4386
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-01 00:00:00',
      'adjustedNetValue': 2.5119
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-02 00:00:00',
      'adjustedNetValue': 2.5006
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-03 00:00:00',
      'adjustedNetValue': 2.5057
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-06 00:00:00',
      'adjustedNetValue': 2.5506
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-07 00:00:00',
      'adjustedNetValue': 2.5704
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-08 00:00:00',
      'adjustedNetValue': 2.5484
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-09 00:00:00',
      'adjustedNetValue': 2.5097
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-10 00:00:00',
      'adjustedNetValue': 2.5779
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-13 00:00:00',
      'adjustedNetValue': 2.5646
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-14 00:00:00',
      'adjustedNetValue': 2.5284
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-15 00:00:00',
      'adjustedNetValue': 2.4799
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-16 00:00:00',
      'adjustedNetValue': 2.4737
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-17 00:00:00',
      'adjustedNetValue': 2.5144
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-22 00:00:00',
      'adjustedNetValue': 2.4377
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-23 00:00:00',
      'adjustedNetValue': 2.4349
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-24 00:00:00',
      'adjustedNetValue': 2.4606
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-27 00:00:00',
      'adjustedNetValue': 2.5602
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-28 00:00:00',
      'adjustedNetValue': 2.5693
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-29 00:00:00',
      'adjustedNetValue': 2.5753
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-09-30 00:00:00',
      'adjustedNetValue': 2.586
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-08 00:00:00',
      'adjustedNetValue': 2.6457
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-11 00:00:00',
      'adjustedNetValue': 2.6805
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-12 00:00:00',
      'adjustedNetValue': 2.6643
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-13 00:00:00',
      'adjustedNetValue': 2.7137
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-14 00:00:00',
      'adjustedNetValue': 2.7007
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-15 00:00:00',
      'adjustedNetValue': 2.7075
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-18 00:00:00',
      'adjustedNetValue': 2.6209
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-19 00:00:00',
      'adjustedNetValue': 2.6617
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-20 00:00:00',
      'adjustedNetValue': 2.6718
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-21 00:00:00',
      'adjustedNetValue': 2.6798
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-22 00:00:00',
      'adjustedNetValue': 2.7102
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-25 00:00:00',
      'adjustedNetValue': 2.6935
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-26 00:00:00',
      'adjustedNetValue': 2.6889
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-27 00:00:00',
      'adjustedNetValue': 2.6391
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-28 00:00:00',
      'adjustedNetValue': 2.6464
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-10-29 00:00:00',
      'adjustedNetValue': 2.6533
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-01 00:00:00',
      'adjustedNetValue': 2.6355
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-02 00:00:00',
      'adjustedNetValue': 2.5834
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-03 00:00:00',
      'adjustedNetValue': 2.5625
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-04 00:00:00',
      'adjustedNetValue': 2.6198
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-05 00:00:00',
      'adjustedNetValue': 2.6118
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-08 00:00:00',
      'adjustedNetValue': 2.5961
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-09 00:00:00',
      'adjustedNetValue': 2.5838
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-10 00:00:00',
      'adjustedNetValue': 2.5657
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-11 00:00:00',
      'adjustedNetValue': 2.5942
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-12 00:00:00',
      'adjustedNetValue': 2.5823
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-15 00:00:00',
      'adjustedNetValue': 2.591
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-16 00:00:00',
      'adjustedNetValue': 2.6246
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-17 00:00:00',
      'adjustedNetValue': 2.6088
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-18 00:00:00',
      'adjustedNetValue': 2.5837
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-19 00:00:00',
      'adjustedNetValue': 2.6069
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-22 00:00:00',
      'adjustedNetValue': 2.607
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-23 00:00:00',
      'adjustedNetValue': 2.5772
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-24 00:00:00',
      'adjustedNetValue': 2.6091
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-25 00:00:00',
      'adjustedNetValue': 2.6072
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-26 00:00:00',
      'adjustedNetValue': 2.5697
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-29 00:00:00',
      'adjustedNetValue': 2.569
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-11-30 00:00:00',
      'adjustedNetValue': 2.5324
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-01 00:00:00',
      'adjustedNetValue': 2.5464
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-02 00:00:00',
      'adjustedNetValue': 2.5563
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-03 00:00:00',
      'adjustedNetValue': 2.6033
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-06 00:00:00',
      'adjustedNetValue': 2.5949
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-07 00:00:00',
      'adjustedNetValue': 2.6248
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-08 00:00:00',
      'adjustedNetValue': 2.6859
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-09 00:00:00',
      'adjustedNetValue': 2.725
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-10 00:00:00',
      'adjustedNetValue': 2.7098
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-13 00:00:00',
      'adjustedNetValue': 2.7236
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-14 00:00:00',
      'adjustedNetValue': 2.7103
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-15 00:00:00',
      'adjustedNetValue': 2.6745
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-16 00:00:00',
      'adjustedNetValue': 2.6667
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-17 00:00:00',
      'adjustedNetValue': 2.6084
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-20 00:00:00',
      'adjustedNetValue': 2.5933
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-21 00:00:00',
      'adjustedNetValue': 2.602
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-22 00:00:00',
      'adjustedNetValue': 2.6015
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-23 00:00:00',
      'adjustedNetValue': 2.6359
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-24 00:00:00',
      'adjustedNetValue': 2.6507
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-27 00:00:00',
      'adjustedNetValue': 2.6277
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-28 00:00:00',
      'adjustedNetValue': 2.6368
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-29 00:00:00',
      'adjustedNetValue': 2.5579
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-30 00:00:00',
      'adjustedNetValue': 2.5766
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-31 00:00:00',
      'adjustedNetValue': 2.5825
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-04 00:00:00',
      'adjustedNetValue': 2.5671
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-05 00:00:00',
      'adjustedNetValue': 2.5407
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-06 00:00:00',
      'adjustedNetValue': 2.5057
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-07 00:00:00',
      'adjustedNetValue': 2.5122
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-10 00:00:00',
      'adjustedNetValue': 2.5297
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-11 00:00:00',
      'adjustedNetValue': 2.5136
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-12 00:00:00',
      'adjustedNetValue': 2.5441
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-13 00:00:00',
      'adjustedNetValue': 2.4896
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-14 00:00:00',
      'adjustedNetValue': 2.4697
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-17 00:00:00',
      'adjustedNetValue': 2.4732
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-18 00:00:00',
      'adjustedNetValue': 2.5006
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-19 00:00:00',
      'adjustedNetValue': 2.4989
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-20 00:00:00',
      'adjustedNetValue': 2.5711
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-21 00:00:00',
      'adjustedNetValue': 2.5895
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-24 00:00:00',
      'adjustedNetValue': 2.5631
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-25 00:00:00',
      'adjustedNetValue': 2.5214
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-26 00:00:00',
      'adjustedNetValue': 2.5267
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-27 00:00:00',
      'adjustedNetValue': 2.4843
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-01-28 00:00:00',
      'adjustedNetValue': 2.428
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-07 00:00:00',
      'adjustedNetValue': 2.4637
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-08 00:00:00',
      'adjustedNetValue': 2.4351
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-09 00:00:00',
      'adjustedNetValue': 2.4986
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-10 00:00:00',
      'adjustedNetValue': 2.4972
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-11 00:00:00',
      'adjustedNetValue': 2.4873
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-14 00:00:00',
      'adjustedNetValue': 2.4798
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-15 00:00:00',
      'adjustedNetValue': 2.4815
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-16 00:00:00',
      'adjustedNetValue': 2.5001
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-17 00:00:00',
      'adjustedNetValue': 2.4968
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-18 00:00:00',
      'adjustedNetValue': 2.4822
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-21 00:00:00',
      'adjustedNetValue': 2.4613
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-22 00:00:00',
      'adjustedNetValue': 2.411
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-23 00:00:00',
      'adjustedNetValue': 2.4256
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-24 00:00:00',
      'adjustedNetValue': 2.3466
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-25 00:00:00',
      'adjustedNetValue': 2.3567
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-02-28 00:00:00',
      'adjustedNetValue': 2.3495
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-01 00:00:00',
      'adjustedNetValue': 2.3765
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-02 00:00:00',
      'adjustedNetValue': 2.3486
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-03 00:00:00',
      'adjustedNetValue': 2.3127
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-04 00:00:00',
      'adjustedNetValue': 2.2681
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-07 00:00:00',
      'adjustedNetValue': 2.1686
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-08 00:00:00',
      'adjustedNetValue': 2.1526
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-09 00:00:00',
      'adjustedNetValue': 2.1424
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-10 00:00:00',
      'adjustedNetValue': 2.1894
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-11 00:00:00',
      'adjustedNetValue': 2.1806
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-14 00:00:00',
      'adjustedNetValue': 2.0638
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-15 00:00:00',
      'adjustedNetValue': 1.9552
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-16 00:00:00',
      'adjustedNetValue': 2.0986
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-17 00:00:00',
      'adjustedNetValue': 2.1824
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-18 00:00:00',
      'adjustedNetValue': 2.1795
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-21 00:00:00',
      'adjustedNetValue': 2.1477
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-22 00:00:00',
      'adjustedNetValue': 2.1669
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-23 00:00:00',
      'adjustedNetValue': 2.1866
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-24 00:00:00',
      'adjustedNetValue': 2.1451
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-25 00:00:00',
      'adjustedNetValue': 2.0873
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-28 00:00:00',
      'adjustedNetValue': 2.0716
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-29 00:00:00',
      'adjustedNetValue': 2.0753
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-30 00:00:00',
      'adjustedNetValue': 2.134
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-03-31 00:00:00',
      'adjustedNetValue': 2.1165
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-01 00:00:00',
      'adjustedNetValue': 2.1444
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-06 00:00:00',
      'adjustedNetValue': 2.1443
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-07 00:00:00',
      'adjustedNetValue': 2.1277
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-08 00:00:00',
      'adjustedNetValue': 2.1257
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-11 00:00:00',
      'adjustedNetValue': 2.0488
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-12 00:00:00',
      'adjustedNetValue': 2.1132
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-13 00:00:00',
      'adjustedNetValue': 2.1121
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-14 00:00:00',
      'adjustedNetValue': 2.162
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-15 00:00:00',
      'adjustedNetValue': 2.1656
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-18 00:00:00',
      'adjustedNetValue': 2.1442
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-19 00:00:00',
      'adjustedNetValue': 2.1073
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-20 00:00:00',
      'adjustedNetValue': 2.1093
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-21 00:00:00',
      'adjustedNetValue': 2.0785
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-22 00:00:00',
      'adjustedNetValue': 2.1052
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-25 00:00:00',
      'adjustedNetValue': 2.014
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-26 00:00:00',
      'adjustedNetValue': 2.049
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-27 00:00:00',
      'adjustedNetValue': 2.0847
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-28 00:00:00',
      'adjustedNetValue': 2.1204
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-04-29 00:00:00',
      'adjustedNetValue': 2.1952
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-05 00:00:00',
      'adjustedNetValue': 2.1575
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-06 00:00:00',
      'adjustedNetValue': 2.0776
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-09 00:00:00',
      'adjustedNetValue': 2.0531
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-10 00:00:00',
      'adjustedNetValue': 2.0661
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-11 00:00:00',
      'adjustedNetValue': 2.091
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-12 00:00:00',
      'adjustedNetValue': 2.0831
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-13 00:00:00',
      'adjustedNetValue': 2.1026
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-16 00:00:00',
      'adjustedNetValue': 2.0804
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-17 00:00:00',
      'adjustedNetValue': 2.1236
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-18 00:00:00',
      'adjustedNetValue': 2.1084
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-19 00:00:00',
      'adjustedNetValue': 2.0712
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-20 00:00:00',
      'adjustedNetValue': 2.1401
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-23 00:00:00',
      'adjustedNetValue': 2.1021
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-24 00:00:00',
      'adjustedNetValue': 2.06
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-25 00:00:00',
      'adjustedNetValue': 2.0534
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-26 00:00:00',
      'adjustedNetValue': 2.0519
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-27 00:00:00',
      'adjustedNetValue': 2.078
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-30 00:00:00',
      'adjustedNetValue': 2.1255
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-05-31 00:00:00',
      'adjustedNetValue': 2.1774
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-01 00:00:00',
      'adjustedNetValue': 2.1694
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-02 00:00:00',
      'adjustedNetValue': 2.1559
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-06 00:00:00',
      'adjustedNetValue': 2.1945
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-07 00:00:00',
      'adjustedNetValue': 2.2106
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-08 00:00:00',
      'adjustedNetValue': 2.2716
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-09 00:00:00',
      'adjustedNetValue': 2.2486
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-10 00:00:00',
      'adjustedNetValue': 2.2685
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-13 00:00:00',
      'adjustedNetValue': 2.2026
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-14 00:00:00',
      'adjustedNetValue': 2.2217
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-15 00:00:00',
      'adjustedNetValue': 2.2575
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-16 00:00:00',
      'adjustedNetValue': 2.2242
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-17 00:00:00',
      'adjustedNetValue': 2.2613
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-20 00:00:00',
      'adjustedNetValue': 2.2812
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-21 00:00:00',
      'adjustedNetValue': 2.295
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-22 00:00:00',
      'adjustedNetValue': 2.2564
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-23 00:00:00',
      'adjustedNetValue': 2.2758
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-24 00:00:00',
      'adjustedNetValue': 2.3259
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-27 00:00:00',
      'adjustedNetValue': 2.3765
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-28 00:00:00',
      'adjustedNetValue': 2.388
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-29 00:00:00',
      'adjustedNetValue': 2.3581
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-30 00:00:00',
      'adjustedNetValue': 2.3959
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-01 00:00:00',
      'adjustedNetValue': 2.3855
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-04 00:00:00',
      'adjustedNetValue': 2.3766
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-05 00:00:00',
      'adjustedNetValue': 2.3747
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-06 00:00:00',
      'adjustedNetValue': 2.3377
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-07 00:00:00',
      'adjustedNetValue': 2.3276
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-08 00:00:00',
      'adjustedNetValue': 2.3336
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-11 00:00:00',
      'adjustedNetValue': 2.2786
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-12 00:00:00',
      'adjustedNetValue': 2.265
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-13 00:00:00',
      'adjustedNetValue': 2.2627
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-14 00:00:00',
      'adjustedNetValue': 2.2566
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-15 00:00:00',
      'adjustedNetValue': 2.2363
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-18 00:00:00',
      'adjustedNetValue': 2.252
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-19 00:00:00',
      'adjustedNetValue': 2.251
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-20 00:00:00',
      'adjustedNetValue': 2.2742
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-21 00:00:00',
      'adjustedNetValue': 2.2493
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-22 00:00:00',
      'adjustedNetValue': 2.2499
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-25 00:00:00',
      'adjustedNetValue': 2.2479
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-26 00:00:00',
      'adjustedNetValue': 2.2747
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-27 00:00:00',
      'adjustedNetValue': 2.2473
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-28 00:00:00',
      'adjustedNetValue': 2.2338
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-07-29 00:00:00',
      'adjustedNetValue': 2.1696
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-01 00:00:00',
      'adjustedNetValue': 2.1772
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-02 00:00:00',
      'adjustedNetValue': 2.1361
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-03 00:00:00',
      'adjustedNetValue': 2.1425
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-04 00:00:00',
      'adjustedNetValue': 2.1806
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-05 00:00:00',
      'adjustedNetValue': 2.1832
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-08 00:00:00',
      'adjustedNetValue': 2.1631
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-09 00:00:00',
      'adjustedNetValue': 2.1513
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-10 00:00:00',
      'adjustedNetValue': 2.1136
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-11 00:00:00',
      'adjustedNetValue': 2.159
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-12 00:00:00',
      'adjustedNetValue': 2.1839
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-15 00:00:00',
      'adjustedNetValue': 2.1634
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-16 00:00:00',
      'adjustedNetValue': 2.1471
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-17 00:00:00',
      'adjustedNetValue': 2.16
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-18 00:00:00',
      'adjustedNetValue': 2.1396
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-19 00:00:00',
      'adjustedNetValue': 2.1439
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-22 00:00:00',
      'adjustedNetValue': 2.1473
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-23 00:00:00',
      'adjustedNetValue': 2.1287
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-24 00:00:00',
      'adjustedNetValue': 2.1066
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-25 00:00:00',
      'adjustedNetValue': 2.169
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-26 00:00:00',
      'adjustedNetValue': 2.1849
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-29 00:00:00',
      'adjustedNetValue': 2.1625
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-30 00:00:00',
      'adjustedNetValue': 2.1592
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-08-31 00:00:00',
      'adjustedNetValue': 2.1911
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-01 00:00:00',
      'adjustedNetValue': 2.1428
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-02 00:00:00',
      'adjustedNetValue': 2.1236
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-05 00:00:00',
      'adjustedNetValue': 2.0882
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-06 00:00:00',
      'adjustedNetValue': 2.0867
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-07 00:00:00',
      'adjustedNetValue': 2.0664
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-08 00:00:00',
      'adjustedNetValue': 2.0533
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-09 00:00:00',
      'adjustedNetValue': 2.0991
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-13 00:00:00',
      'adjustedNetValue': 2.0884
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-14 00:00:00',
      'adjustedNetValue': 2.0625
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-15 00:00:00',
      'adjustedNetValue': 2.0829
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-16 00:00:00',
      'adjustedNetValue': 2.037
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-19 00:00:00',
      'adjustedNetValue': 2.0328
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-20 00:00:00',
      'adjustedNetValue': 2.0516
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-21 00:00:00',
      'adjustedNetValue': 2.0268
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-22 00:00:00',
      'adjustedNetValue': 1.9979
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-23 00:00:00',
      'adjustedNetValue': 1.9922
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-26 00:00:00',
      'adjustedNetValue': 2.0228
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-27 00:00:00',
      'adjustedNetValue': 2.0703
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-28 00:00:00',
      'adjustedNetValue': 2.0547
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-29 00:00:00',
      'adjustedNetValue': 2.0459
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-09-30 00:00:00',
      'adjustedNetValue': 2.0313
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-10 00:00:00',
      'adjustedNetValue': 1.9734
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-11 00:00:00',
      'adjustedNetValue': 1.9525
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-12 00:00:00',
      'adjustedNetValue': 1.9432
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-13 00:00:00',
      'adjustedNetValue': 1.9054
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-14 00:00:00',
      'adjustedNetValue': 1.9442
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-17 00:00:00',
      'adjustedNetValue': 1.9324
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-18 00:00:00',
      'adjustedNetValue': 1.9412
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-19 00:00:00',
      'adjustedNetValue': 1.8772
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-20 00:00:00',
      'adjustedNetValue': 1.8493
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-21 00:00:00',
      'adjustedNetValue': 1.8302
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-24 00:00:00',
      'adjustedNetValue': 1.7056
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-25 00:00:00',
      'adjustedNetValue': 1.7073
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-26 00:00:00',
      'adjustedNetValue': 1.7227
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-27 00:00:00',
      'adjustedNetValue': 1.679
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-28 00:00:00',
      'adjustedNetValue': 1.6308
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-10-31 00:00:00',
      'adjustedNetValue': 1.604
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-01 00:00:00',
      'adjustedNetValue': 1.7143
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-02 00:00:00',
      'adjustedNetValue': 1.7541
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-03 00:00:00',
      'adjustedNetValue': 1.718
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-04 00:00:00',
      'adjustedNetValue': 1.8104
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-07 00:00:00',
      'adjustedNetValue': 1.8338
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-08 00:00:00',
      'adjustedNetValue': 1.8151
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-09 00:00:00',
      'adjustedNetValue': 1.7858
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-10 00:00:00',
      'adjustedNetValue': 1.785
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-11 00:00:00',
      'adjustedNetValue': 1.8973
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-14 00:00:00',
      'adjustedNetValue': 1.9056
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-15 00:00:00',
      'adjustedNetValue': 1.9668
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-16 00:00:00',
      'adjustedNetValue': 1.9661
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-17 00:00:00',
      'adjustedNetValue': 1.9464
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-18 00:00:00',
      'adjustedNetValue': 1.9528
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-21 00:00:00',
      'adjustedNetValue': 1.9068
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-22 00:00:00',
      'adjustedNetValue': 1.8934
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-23 00:00:00',
      'adjustedNetValue': 1.8849
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-24 00:00:00',
      'adjustedNetValue': 1.8771
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-25 00:00:00',
      'adjustedNetValue': 1.869
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-28 00:00:00',
      'adjustedNetValue': 1.8593
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-29 00:00:00',
      'adjustedNetValue': 1.9653
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-11-30 00:00:00',
      'adjustedNetValue': 1.981
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-01 00:00:00',
      'adjustedNetValue': 2.0195
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-02 00:00:00',
      'adjustedNetValue': 2.011
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-05 00:00:00',
      'adjustedNetValue': 2.0734
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-06 00:00:00',
      'adjustedNetValue': 2.0795
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-07 00:00:00',
      'adjustedNetValue': 2.0568
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-08 00:00:00',
      'adjustedNetValue': 2.0937
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-09 00:00:00',
      'adjustedNetValue': 2.1513
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-12 00:00:00',
      'adjustedNetValue': 2.1059
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-13 00:00:00',
      'adjustedNetValue': 2.1227
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-14 00:00:00',
      'adjustedNetValue': 2.1605
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-15 00:00:00',
      'adjustedNetValue': 2.132
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-16 00:00:00',
      'adjustedNetValue': 2.1473
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-19 00:00:00',
      'adjustedNetValue': 2.1296
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-20 00:00:00',
      'adjustedNetValue': 2.0723
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-21 00:00:00',
      'adjustedNetValue': 2.0885
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-22 00:00:00',
      'adjustedNetValue': 2.144
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-23 00:00:00',
      'adjustedNetValue': 2.1529
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-26 00:00:00',
      'adjustedNetValue': 2.1327
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-27 00:00:00',
      'adjustedNetValue': 2.1507
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-28 00:00:00',
      'adjustedNetValue': 2.1696
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-29 00:00:00',
      'adjustedNetValue': 2.1693
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-12-30 00:00:00',
      'adjustedNetValue': 2.1688
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-03 00:00:00',
      'adjustedNetValue': 2.1753
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-04 00:00:00',
      'adjustedNetValue': 2.2031
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-05 00:00:00',
      'adjustedNetValue': 2.2674
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-06 00:00:00',
      'adjustedNetValue': 2.2588
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-09 00:00:00',
      'adjustedNetValue': 2.2979
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-10 00:00:00',
      'adjustedNetValue': 2.2917
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-11 00:00:00',
      'adjustedNetValue': 2.2933
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-12 00:00:00',
      'adjustedNetValue': 2.2816
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-13 00:00:00',
      'adjustedNetValue': 2.3292
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-16 00:00:00',
      'adjustedNetValue': 2.3495
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-17 00:00:00',
      'adjustedNetValue': 2.3323
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-18 00:00:00',
      'adjustedNetValue': 2.3318
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-19 00:00:00',
      'adjustedNetValue': 2.3413
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-20 00:00:00',
      'adjustedNetValue': 2.3661
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-30 00:00:00',
      'adjustedNetValue': 2.3803
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-01-31 00:00:00',
      'adjustedNetValue': 2.323
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-01 00:00:00',
      'adjustedNetValue': 2.3379
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-02 00:00:00',
      'adjustedNetValue': 2.3262
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-03 00:00:00',
      'adjustedNetValue': 2.3042
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-06 00:00:00',
      'adjustedNetValue': 2.2466
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-07 00:00:00',
      'adjustedNetValue': 2.2562
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-08 00:00:00',
      'adjustedNetValue': 2.2443
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-09 00:00:00',
      'adjustedNetValue': 2.2864
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-10 00:00:00',
      'adjustedNetValue': 2.2638
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-13 00:00:00',
      'adjustedNetValue': 2.3088
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-14 00:00:00',
      'adjustedNetValue': 2.2859
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-15 00:00:00',
      'adjustedNetValue': 2.2687
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-16 00:00:00',
      'adjustedNetValue': 2.2737
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-17 00:00:00',
      'adjustedNetValue': 2.2525
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-20 00:00:00',
      'adjustedNetValue': 2.2923
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-21 00:00:00',
      'adjustedNetValue': 2.2581
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-22 00:00:00',
      'adjustedNetValue': 2.2358
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-23 00:00:00',
      'adjustedNetValue': 2.2306
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-24 00:00:00',
      'adjustedNetValue': 2.1924
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-27 00:00:00',
      'adjustedNetValue': 2.209
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-02-28 00:00:00',
      'adjustedNetValue': 2.2015
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-03-01 00:00:00',
      'adjustedNetValue': 2.2666
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-03-02 00:00:00',
      'adjustedNetValue': 2.2507
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2023-03-03 00:00:00',
      'adjustedNetValue': 2.2586
    }
  ],
  'drawdownHistory': [
    {
      'date': '2018-09-05 00:00:00',
      'value': 0
    },
    {
      'date': '2018-09-06 00:00:00',
      'value': 0
    },
    {
      'date': '2018-09-07 00:00:00',
      'value': -0.0013999999999999568
    },
    {
      'date': '2018-09-10 00:00:00',
      'value': -0.0013999999999999568
    },
    {
      'date': '2018-09-11 00:00:00',
      'value': -0.0013999999999999568
    },
    {
      'date': '2018-09-12 00:00:00',
      'value': -0.0013999999999999568
    },
    {
      'date': '2018-09-13 00:00:00',
      'value': -0.0013999999999999568
    },
    {
      'date': '2018-09-14 00:00:00',
      'value': -0.0014999999999999458
    },
    {
      'date': '2018-09-17 00:00:00',
      'value': -0.0014999999999999458
    },
    {
      'date': '2018-09-18 00:00:00',
      'value': -0.0014999999999999458
    },
    {
      'date': '2018-09-19 00:00:00',
      'value': -0.0014999999999999458
    },
    {
      'date': '2018-09-20 00:00:00',
      'value': -0.0014999999999999458
    },
    {
      'date': '2018-09-21 00:00:00',
      'value': 0
    },
    {
      'date': '2018-09-25 00:00:00',
      'value': 0
    },
    {
      'date': '2018-09-26 00:00:00',
      'value': 0
    },
    {
      'date': '2018-09-27 00:00:00',
      'value': 0
    },
    {
      'date': '2018-09-28 00:00:00',
      'value': 0
    },
    {
      'date': '2018-10-08 00:00:00',
      'value': -0.02158555729984314
    },
    {
      'date': '2018-10-09 00:00:00',
      'value': -0.0217817896389326
    },
    {
      'date': '2018-10-10 00:00:00',
      'value': -0.030121664050235534
    },
    {
      'date': '2018-10-11 00:00:00',
      'value': -0.045231554160125725
    },
    {
      'date': '2018-10-12 00:00:00',
      'value': -0.03139717425431725
    },
    {
      'date': '2018-10-15 00:00:00',
      'value': -0.036499215070643756
    },
    {
      'date': '2018-10-16 00:00:00',
      'value': -0.0391483516483518
    },
    {
      'date': '2018-10-17 00:00:00',
      'value': -0.0391483516483518
    },
    {
      'date': '2018-10-18 00:00:00',
      'value': -0.047684458398744196
    },
    {
      'date': '2018-10-19 00:00:00',
      'value': -0.033065149136577765
    },
    {
      'date': '2018-10-22 00:00:00',
      'value': -0.010596546310832164
    },
    {
      'date': '2018-10-23 00:00:00',
      'value': -0.03551805337519635
    },
    {
      'date': '2018-10-24 00:00:00',
      'value': -0.04356357927786509
    },
    {
      'date': '2018-10-25 00:00:00',
      'value': -0.05582810047095767
    },
    {
      'date': '2018-10-26 00:00:00',
      'value': -0.06505102040816339
    },
    {
      'date': '2018-10-29 00:00:00',
      'value': -0.09281789638932508
    },
    {
      'date': '2018-10-30 00:00:00',
      'value': -0.09723312401883837
    },
    {
      'date': '2018-10-31 00:00:00',
      'value': -0.0802590266875982
    },
    {
      'date': '2018-11-01 00:00:00',
      'value': -0.06760204081632659
    },
    {
      'date': '2018-11-02 00:00:00',
      'value': -0.029336734693877695
    },
    {
      'date': '2018-11-05 00:00:00',
      'value': -0.04562401883830464
    },
    {
      'date': '2018-11-06 00:00:00',
      'value': -0.049646781789639015
    },
    {
      'date': '2018-11-07 00:00:00',
      'value': -0.051510989010989106
    },
    {
      'date': '2018-11-08 00:00:00',
      'value': -0.04945054945054955
    },
    {
      'date': '2018-11-09 00:00:00',
      'value': -0.05788854003139722
    },
    {
      'date': '2018-11-12 00:00:00',
      'value': -0.0587715855572999
    },
    {
      'date': '2018-11-13 00:00:00',
      'value': -0.04954866562009429
    },
    {
      'date': '2018-11-14 00:00:00',
      'value': -0.057201726844584105
    },
    {
      'date': '2018-11-15 00:00:00',
      'value': -0.05239403453689179
    },
    {
      'date': '2018-11-16 00:00:00',
      'value': -0.051216640502354915
    },
    {
      'date': '2018-11-19 00:00:00',
      'value': -0.04356357927786509
    },
    {
      'date': '2018-11-20 00:00:00',
      'value': -0.05818288854003152
    },
    {
      'date': '2018-11-21 00:00:00',
      'value': -0.050235478806907506
    },
    {
      'date': '2018-11-22 00:00:00',
      'value': -0.048959968602825796
    },
    {
      'date': '2018-11-23 00:00:00',
      'value': -0.0574960753532183
    },
    {
      'date': '2018-11-26 00:00:00',
      'value': -0.05641679748822616
    },
    {
      'date': '2018-11-27 00:00:00',
      'value': -0.05759419152276303
    },
    {
      'date': '2018-11-28 00:00:00',
      'value': -0.049941130298273205
    },
    {
      'date': '2018-11-29 00:00:00',
      'value': -0.054062009419152415
    },
    {
      'date': '2018-11-30 00:00:00',
      'value': -0.04758634222919946
    },
    {
      'date': '2018-12-03 00:00:00',
      'value': -0.026393249607535463
    },
    {
      'date': '2018-12-04 00:00:00',
      'value': -0.024823390894819563
    },
    {
      'date': '2018-12-05 00:00:00',
      'value': -0.028257456828885554
    },
    {
      'date': '2018-12-06 00:00:00',
      'value': -0.053080847723705006
    },
    {
      'date': '2018-12-07 00:00:00',
      'value': -0.05474882260596553
    },
    {
      'date': '2018-12-10 00:00:00',
      'value': -0.06112637362637375
    },
    {
      'date': '2018-12-11 00:00:00',
      'value': -0.05514128728414456
    },
    {
      'date': '2018-12-12 00:00:00',
      'value': -0.05043171114599697
    },
    {
      'date': '2018-12-13 00:00:00',
      'value': -0.039638932496075446
    },
    {
      'date': '2018-12-14 00:00:00',
      'value': -0.04945054945054955
    },
    {
      'date': '2018-12-17 00:00:00',
      'value': -0.05396389324960769
    },
    {
      'date': '2018-12-18 00:00:00',
      'value': -0.05896781789638947
    },
    {
      'date': '2018-12-19 00:00:00',
      'value': -0.06652276295133445
    },
    {
      'date': '2018-12-20 00:00:00',
      'value': -0.06995682888540045
    },
    {
      'date': '2018-12-21 00:00:00',
      'value': -0.07731554160125596
    },
    {
      'date': '2018-12-24 00:00:00',
      'value': -0.07731554160125596
    },
    {
      'date': '2018-12-25 00:00:00',
      'value': -0.07731554160125596
    },
    {
      'date': '2018-12-26 00:00:00',
      'value': -0.07731554160125596
    },
    {
      'date': '2018-12-27 00:00:00',
      'value': -0.07731554160125596
    },
    {
      'date': '2018-12-28 00:00:00',
      'value': -0.07731554160125596
    },
    {
      'date': '2019-01-02 00:00:00',
      'value': -0.08693092621664061
    },
    {
      'date': '2019-01-03 00:00:00',
      'value': -0.09742935635792783
    },
    {
      'date': '2019-01-04 00:00:00',
      'value': -0.0906593406593408
    },
    {
      'date': '2019-01-07 00:00:00',
      'value': -0.08604788069073793
    },
    {
      'date': '2019-01-08 00:00:00',
      'value': -0.0843799058084773
    },
    {
      'date': '2019-01-09 00:00:00',
      'value': -0.07054552590266883
    },
    {
      'date': '2019-01-10 00:00:00',
      'value': -0.06789638932496089
    },
    {
      'date': '2019-01-11 00:00:00',
      'value': -0.06230376766091062
    },
    {
      'date': '2019-01-14 00:00:00',
      'value': -0.0764324960753533
    },
    {
      'date': '2019-01-15 00:00:00',
      'value': -0.04945054945054955
    },
    {
      'date': '2019-01-16 00:00:00',
      'value': -0.046507064364207325
    },
    {
      'date': '2019-01-17 00:00:00',
      'value': -0.047782574568288924
    },
    {
      'date': '2019-01-18 00:00:00',
      'value': -0.025510204081632782
    },
    {
      'date': '2019-01-21 00:00:00',
      'value': -0.02011381475667197
    },
    {
      'date': '2019-01-22 00:00:00',
      'value': -0.033751962323390984
    },
    {
      'date': '2019-01-23 00:00:00',
      'value': -0.036793563579277946
    },
    {
      'date': '2019-01-24 00:00:00',
      'value': -0.033653846153846256
    },
    {
      'date': '2019-01-25 00:00:00',
      'value': -0.02129120879120884
    },
    {
      'date': '2019-01-28 00:00:00',
      'value': -0.02060439560439573
    },
    {
      'date': '2019-01-29 00:00:00',
      'value': -0.0163854003139719
    },
    {
      'date': '2019-01-30 00:00:00',
      'value': -0.0233516483516485
    },
    {
      'date': '2019-01-31 00:00:00',
      'value': -0.0233516483516485
    },
    {
      'date': '2019-02-01 00:00:00',
      'value': -0.0233516483516485
    },
    {
      'date': '2019-02-11 00:00:00',
      'value': 0
    },
    {
      'date': '2019-02-12 00:00:00',
      'value': 0
    },
    {
      'date': '2019-02-13 00:00:00',
      'value': 0
    },
    {
      'date': '2019-02-14 00:00:00',
      'value': 0
    },
    {
      'date': '2019-02-15 00:00:00',
      'value': -0.02141726417729782
    },
    {
      'date': '2019-02-18 00:00:00',
      'value': 0
    },
    {
      'date': '2019-02-19 00:00:00',
      'value': -0.007425972338253047
    },
    {
      'date': '2019-02-20 00:00:00',
      'value': -0.005198180636776968
    },
    {
      'date': '2019-02-21 00:00:00',
      'value': -0.0049197066740925095
    },
    {
      'date': '2019-02-22 00:00:00',
      'value': 0
    },
    {
      'date': '2019-02-25 00:00:00',
      'value': 0
    },
    {
      'date': '2019-02-26 00:00:00',
      'value': -0.013310394784498513
    },
    {
      'date': '2019-02-27 00:00:00',
      'value': -0.01946758420862013
    },
    {
      'date': '2019-02-28 00:00:00',
      'value': -0.011408909815284267
    },
    {
      'date': '2019-03-01 00:00:00',
      'value': 0
    },
    {
      'date': '2019-03-04 00:00:00',
      'value': 0
    },
    {
      'date': '2019-03-05 00:00:00',
      'value': 0
    },
    {
      'date': '2019-03-06 00:00:00',
      'value': -0.0037742473448608535
    },
    {
      'date': '2019-03-07 00:00:00',
      'value': -0.02914070043008856
    },
    {
      'date': '2019-03-08 00:00:00',
      'value': -0.0495040814535241
    },
    {
      'date': '2019-03-11 00:00:00',
      'value': -0.01878346353023794
    },
    {
      'date': '2019-03-12 00:00:00',
      'value': -0.012024927587114936
    },
    {
      'date': '2019-03-13 00:00:00',
      'value': -0.013341525498112771
    },
    {
      'date': '2019-03-14 00:00:00',
      'value': -0.010093917317651246
    },
    {
      'date': '2019-03-15 00:00:00',
      'value': 0
    },
    {
      'date': '2019-03-18 00:00:00',
      'value': 0
    },
    {
      'date': '2019-03-19 00:00:00',
      'value': -0.006539235412474873
    },
    {
      'date': '2019-03-20 00:00:00',
      'value': -0.01182092555331992
    },
    {
      'date': '2019-03-21 00:00:00',
      'value': -0.01844399731723677
    },
    {
      'date': '2019-03-22 00:00:00',
      'value': -0.011066398390342135
    },
    {
      'date': '2019-03-25 00:00:00',
      'value': -0.03604963112005378
    },
    {
      'date': '2019-03-26 00:00:00',
      'value': -0.03319919517102622
    },
    {
      'date': '2019-03-27 00:00:00',
      'value': -0.01978537894030857
    },
    {
      'date': '2019-03-28 00:00:00',
      'value': -0.014755197853789452
    },
    {
      'date': '2019-03-29 00:00:00',
      'value': 0
    },
    {
      'date': '2019-04-01 00:00:00',
      'value': 0
    },
    {
      'date': '2019-04-02 00:00:00',
      'value': -0.0065751623243197055
    },
    {
      'date': '2019-04-03 00:00:00',
      'value': 0
    },
    {
      'date': '2019-04-04 00:00:00',
      'value': 0
    },
    {
      'date': '2019-04-08 00:00:00',
      'value': 0
    },
    {
      'date': '2019-04-09 00:00:00',
      'value': 0
    },
    {
      'date': '2019-04-10 00:00:00',
      'value': 0
    },
    {
      'date': '2019-04-11 00:00:00',
      'value': -0.025147347740668
    },
    {
      'date': '2019-04-12 00:00:00',
      'value': -0.026483300589391013
    },
    {
      'date': '2019-04-15 00:00:00',
      'value': -0.03638506876227898
    },
    {
      'date': '2019-04-16 00:00:00',
      'value': -0.020667976424361485
    },
    {
      'date': '2019-04-17 00:00:00',
      'value': -0.017681728880157142
    },
    {
      'date': '2019-04-18 00:00:00',
      'value': -0.02208251473477408
    },
    {
      'date': '2019-04-19 00:00:00',
      'value': -0.02208251473477408
    },
    {
      'date': '2019-04-22 00:00:00',
      'value': -0.02208251473477408
    },
    {
      'date': '2019-04-23 00:00:00',
      'value': -0.012337917485265264
    },
    {
      'date': '2019-04-24 00:00:00',
      'value': -0.015717092337917498
    },
    {
      'date': '2019-04-25 00:00:00',
      'value': -0.03222003929273079
    },
    {
      'date': '2019-04-26 00:00:00',
      'value': -0.028605108055009813
    },
    {
      'date': '2019-04-29 00:00:00',
      'value': -0.028605108055009813
    },
    {
      'date': '2019-04-30 00:00:00',
      'value': -0.010294695481335867
    },
    {
      'date': '2019-05-06 00:00:00',
      'value': -0.059174852652259274
    },
    {
      'date': '2019-05-07 00:00:00',
      'value': -0.04361493123772093
    },
    {
      'date': '2019-05-08 00:00:00',
      'value': -0.051001964636542205
    },
    {
      'date': '2019-05-09 00:00:00',
      'value': -0.08196463654223973
    },
    {
      'date': '2019-05-10 00:00:00',
      'value': -0.042671905697445986
    },
    {
      'date': '2019-05-13 00:00:00',
      'value': -0.042671905697445986
    },
    {
      'date': '2019-05-14 00:00:00',
      'value': -0.05595284872298619
    },
    {
      'date': '2019-05-15 00:00:00',
      'value': -0.018231827111984195
    },
    {
      'date': '2019-05-16 00:00:00',
      'value': -0.008251473477406644
    },
    {
      'date': '2019-05-17 00:00:00',
      'value': -0.029941060903732827
    },
    {
      'date': '2019-05-20 00:00:00',
      'value': -0.050766208251473474
    },
    {
      'date': '2019-05-21 00:00:00',
      'value': -0.046051080550098225
    },
    {
      'date': '2019-05-22 00:00:00',
      'value': -0.04817288801571702
    },
    {
      'date': '2019-05-23 00:00:00',
      'value': -0.07449901768172888
    },
    {
      'date': '2019-05-24 00:00:00',
      'value': -0.06868369351669935
    },
    {
      'date': '2019-05-27 00:00:00',
      'value': -0.06066797642436145
    },
    {
      'date': '2019-05-28 00:00:00',
      'value': -0.04557956777996075
    },
    {
      'date': '2019-05-29 00:00:00',
      'value': -0.04833005893909618
    },
    {
      'date': '2019-05-30 00:00:00',
      'value': -0.05422396856581529
    },
    {
      'date': '2019-05-31 00:00:00',
      'value': -0.05956777996070717
    },
    {
      'date': '2019-06-03 00:00:00',
      'value': -0.057996070726915414
    },
    {
      'date': '2019-06-04 00:00:00',
      'value': -0.07363457760314333
    },
    {
      'date': '2019-06-05 00:00:00',
      'value': -0.08220039292730848
    },
    {
      'date': '2019-06-06 00:00:00',
      'value': -0.08801571709233783
    },
    {
      'date': '2019-06-10 00:00:00',
      'value': -0.06302554027504916
    },
    {
      'date': '2019-06-11 00:00:00',
      'value': -0.03387033398821212
    },
    {
      'date': '2019-06-12 00:00:00',
      'value': -0.04683693516699401
    },
    {
      'date': '2019-06-13 00:00:00',
      'value': -0.05005893909626709
    },
    {
      'date': '2019-06-14 00:00:00',
      'value': -0.05485265225933192
    },
    {
      'date': '2019-06-17 00:00:00',
      'value': -0.05430255402750486
    },
    {
      'date': '2019-06-18 00:00:00',
      'value': -0.04282907662082514
    },
    {
      'date': '2019-06-19 00:00:00',
      'value': -0.021846758349705342
    },
    {
      'date': '2019-06-20 00:00:00',
      'value': 0
    },
    {
      'date': '2019-06-21 00:00:00',
      'value': 0
    },
    {
      'date': '2019-06-24 00:00:00',
      'value': 0
    },
    {
      'date': '2019-06-25 00:00:00',
      'value': -0.004174074360361808
    },
    {
      'date': '2019-06-26 00:00:00',
      'value': -0.004174074360361808
    },
    {
      'date': '2019-06-27 00:00:00',
      'value': 0
    },
    {
      'date': '2019-06-28 00:00:00',
      'value': 0
    },
    {
      'date': '2019-07-01 00:00:00',
      'value': -0.00007584951456309844
    },
    {
      'date': '2019-07-02 00:00:00',
      'value': 0
    },
    {
      'date': '2019-07-03 00:00:00',
      'value': -0.012550458715596414
    },
    {
      'date': '2019-07-04 00:00:00',
      'value': -0.020036697247706497
    },
    {
      'date': '2019-07-05 00:00:00',
      'value': -0.00036697247706417974
    },
    {
      'date': '2019-07-08 00:00:00',
      'value': -0.016366972477064208
    },
    {
      'date': '2019-07-09 00:00:00',
      'value': -0.019889908256880823
    },
    {
      'date': '2019-07-10 00:00:00',
      'value': -0.01130275229357804
    },
    {
      'date': '2019-07-11 00:00:00',
      'value': -0.0161467889908257
    },
    {
      'date': '2019-07-12 00:00:00',
      'value': -0.011449541284403713
    },
    {
      'date': '2019-07-15 00:00:00',
      'value': -0.01093577981651386
    },
    {
      'date': '2019-07-16 00:00:00',
      'value': -0.018862385321100957
    },
    {
      'date': '2019-07-17 00:00:00',
      'value': -0.01827522935779827
    },
    {
      'date': '2019-07-18 00:00:00',
      'value': -0.027963302752293594
    },
    {
      'date': '2019-07-19 00:00:00',
      'value': -0.020477064220183513
    },
    {
      'date': '2019-07-22 00:00:00',
      'value': -0.0240733944954128
    },
    {
      'date': '2019-07-23 00:00:00',
      'value': -0.0281834862385321
    },
    {
      'date': '2019-07-24 00:00:00',
      'value': -0.027596330275229414
    },
    {
      'date': '2019-07-25 00:00:00',
      'value': -0.017027522935779898
    },
    {
      'date': '2019-07-26 00:00:00',
      'value': -0.017541284403669748
    },
    {
      'date': '2019-07-29 00:00:00',
      'value': -0.011889908256880728
    },
    {
      'date': '2019-07-30 00:00:00',
      'value': -0.014165137614678969
    },
    {
      'date': '2019-07-31 00:00:00',
      'value': -0.014165137614678969
    },
    {
      'date': '2019-08-01 00:00:00',
      'value': -0.028844036697247787
    },
    {
      'date': '2019-08-02 00:00:00',
      'value': -0.04565137614678901
    },
    {
      'date': '2019-08-05 00:00:00',
      'value': -0.06451376146788997
    },
    {
      'date': '2019-08-06 00:00:00',
      'value': -0.05871559633027528
    },
    {
      'date': '2019-08-07 00:00:00',
      'value': -0.058055045871559595
    },
    {
      'date': '2019-08-08 00:00:00',
      'value': -0.04484403669724782
    },
    {
      'date': '2019-08-09 00:00:00',
      'value': -0.054678899082568816
    },
    {
      'date': '2019-08-12 00:00:00',
      'value': -0.033614678899082616
    },
    {
      'date': '2019-08-13 00:00:00',
      'value': -0.04132110091743121
    },
    {
      'date': '2019-08-14 00:00:00',
      'value': -0.028917431192660624
    },
    {
      'date': '2019-08-15 00:00:00',
      'value': -0.030532110091743177
    },
    {
      'date': '2019-08-16 00:00:00',
      'value': -0.01827522935779827
    },
    {
      'date': '2019-08-19 00:00:00',
      'value': -0.0012477064220183741
    },
    {
      'date': '2019-08-20 00:00:00',
      'value': 0
    },
    {
      'date': '2019-08-21 00:00:00',
      'value': -0.0000733191582960547
    },
    {
      'date': '2019-08-22 00:00:00',
      'value': 0
    },
    {
      'date': '2019-08-23 00:00:00',
      'value': 0
    },
    {
      'date': '2019-08-26 00:00:00',
      'value': -0.016927362331261932
    },
    {
      'date': '2019-08-27 00:00:00',
      'value': -0.0026426683808298086
    },
    {
      'date': '2019-08-28 00:00:00',
      'value': -0.010927790872080474
    },
    {
      'date': '2019-08-29 00:00:00',
      'value': 0
    },
    {
      'date': '2019-08-30 00:00:00',
      'value': 0
    },
    {
      'date': '2019-09-02 00:00:00',
      'value': 0
    },
    {
      'date': '2019-09-03 00:00:00',
      'value': -0.0068917987594762295
    },
    {
      'date': '2019-09-04 00:00:00',
      'value': -0.004962095106822946
    },
    {
      'date': '2019-09-05 00:00:00',
      'value': 0
    },
    {
      'date': '2019-09-06 00:00:00',
      'value': 0
    },
    {
      'date': '2019-09-09 00:00:00',
      'value': -0.008717737506864467
    },
    {
      'date': '2019-09-10 00:00:00',
      'value': -0.018396485447556395
    },
    {
      'date': '2019-09-11 00:00:00',
      'value': -0.038989566172432856
    },
    {
      'date': '2019-09-12 00:00:00',
      'value': -0.030683690280066022
    },
    {
      'date': '2019-09-16 00:00:00',
      'value': -0.0365870400878639
    },
    {
      'date': '2019-09-17 00:00:00',
      'value': -0.038440417353102725
    },
    {
      'date': '2019-09-18 00:00:00',
      'value': -0.025604063701263117
    },
    {
      'date': '2019-09-19 00:00:00',
      'value': -0.031644700713893484
    },
    {
      'date': '2019-09-20 00:00:00',
      'value': -0.029585392641405913
    },
    {
      'date': '2019-09-23 00:00:00',
      'value': -0.040087863811092805
    },
    {
      'date': '2019-09-24 00:00:00',
      'value': -0.028006589785832075
    },
    {
      'date': '2019-09-25 00:00:00',
      'value': -0.038989566172432856
    },
    {
      'date': '2019-09-26 00:00:00',
      'value': -0.03912685337726535
    },
    {
      'date': '2019-09-27 00:00:00',
      'value': -0.04001922020867656
    },
    {
      'date': '2019-09-30 00:00:00',
      'value': -0.04290225151015925
    },
    {
      'date': '2019-10-08 00:00:00',
      'value': -0.032468423942888604
    },
    {
      'date': '2019-10-09 00:00:00',
      'value': -0.039813289401427816
    },
    {
      'date': '2019-10-10 00:00:00',
      'value': -0.026633717737506977
    },
    {
      'date': '2019-10-11 00:00:00',
      'value': -0.01880834706205388
    },
    {
      'date': '2019-10-14 00:00:00',
      'value': -0.016337177375068672
    },
    {
      'date': '2019-10-15 00:00:00',
      'value': -0.007756727073036852
    },
    {
      'date': '2019-10-16 00:00:00',
      'value': -0.012081274025260887
    },
    {
      'date': '2019-10-17 00:00:00',
      'value': -0.012699066447007263
    },
    {
      'date': '2019-10-18 00:00:00',
      'value': -0.019632070291048995
    },
    {
      'date': '2019-10-21 00:00:00',
      'value': -0.022309170785282946
    },
    {
      'date': '2019-10-22 00:00:00',
      'value': -0.0208676551345416
    },
    {
      'date': '2019-10-23 00:00:00',
      'value': -0.031438769906644744
    },
    {
      'date': '2019-10-24 00:00:00',
      'value': -0.038577704557935216
    },
    {
      'date': '2019-10-25 00:00:00',
      'value': -0.0234074684239429
    },
    {
      'date': '2019-10-28 00:00:00',
      'value': -0.011051619989017025
    },
    {
      'date': '2019-10-29 00:00:00',
      'value': -0.00830587589236683
    },
    {
      'date': '2019-10-30 00:00:00',
      'value': -0.01201263042284464
    },
    {
      'date': '2019-10-31 00:00:00',
      'value': -0.00391268533772655
    },
    {
      'date': '2019-11-01 00:00:00',
      'value': 0
    },
    {
      'date': '2019-11-04 00:00:00',
      'value': 0
    },
    {
      'date': '2019-11-05 00:00:00',
      'value': -0.0022467320261438458
    },
    {
      'date': '2019-11-06 00:00:00',
      'value': -0.0078295206971678
    },
    {
      'date': '2019-11-07 00:00:00',
      'value': -0.0017701525054467304
    },
    {
      'date': '2019-11-08 00:00:00',
      'value': -0.0036764705882353426
    },
    {
      'date': '2019-11-11 00:00:00',
      'value': -0.019471677559912977
    },
    {
      'date': '2019-11-12 00:00:00',
      'value': -0.01661220043572998
    },
    {
      'date': '2019-11-13 00:00:00',
      'value': -0.013820806100218005
    },
    {
      'date': '2019-11-14 00:00:00',
      'value': -0.014229302832244103
    },
    {
      'date': '2019-11-15 00:00:00',
      'value': -0.019335511982570944
    },
    {
      'date': '2019-11-18 00:00:00',
      'value': -0.017293028322440146
    },
    {
      'date': '2019-11-19 00:00:00',
      'value': 0
    },
    {
      'date': '2019-11-20 00:00:00',
      'value': -0.002041371801850921
    },
    {
      'date': '2019-11-21 00:00:00',
      'value': -0.009526401741970612
    },
    {
      'date': '2019-11-22 00:00:00',
      'value': -0.020549809471965164
    },
    {
      'date': '2019-11-25 00:00:00',
      'value': -0.025517147523135608
    },
    {
      'date': '2019-11-26 00:00:00',
      'value': -0.021094175285791994
    },
    {
      'date': '2019-11-27 00:00:00',
      'value': -0.023952095808383315
    },
    {
      'date': '2019-11-28 00:00:00',
      'value': -0.02646978769733256
    },
    {
      'date': '2019-11-29 00:00:00',
      'value': -0.054572672836145926
    },
    {
      'date': '2019-12-02 00:00:00',
      'value': -0.05688622754491026
    },
    {
      'date': '2019-12-03 00:00:00',
      'value': -0.06076483396842674
    },
    {
      'date': '2019-12-04 00:00:00',
      'value': -0.059471965160587864
    },
    {
      'date': '2019-12-05 00:00:00',
      'value': -0.05198693522046817
    },
    {
      'date': '2019-12-06 00:00:00',
      'value': -0.03694882961350028
    },
    {
      'date': '2019-12-09 00:00:00',
      'value': -0.04974142623843219
    },
    {
      'date': '2019-12-10 00:00:00',
      'value': -0.04797223734349483
    },
    {
      'date': '2019-12-11 00:00:00',
      'value': -0.0466113228089276
    },
    {
      'date': '2019-12-12 00:00:00',
      'value': -0.04259662493195426
    },
    {
      'date': '2019-12-13 00:00:00',
      'value': -0.02742242787152967
    },
    {
      'date': '2019-12-16 00:00:00',
      'value': -0.03204953728905819
    },
    {
      'date': '2019-12-17 00:00:00',
      'value': -0.01252041371801849
    },
    {
      'date': '2019-12-18 00:00:00',
      'value': -0.012452367991290136
    },
    {
      'date': '2019-12-19 00:00:00',
      'value': -0.01660315732172018
    },
    {
      'date': '2019-12-20 00:00:00',
      'value': -0.016807294501905243
    },
    {
      'date': '2019-12-23 00:00:00',
      'value': -0.013609145345672303
    },
    {
      'date': '2019-12-24 00:00:00',
      'value': -0.014017419706042427
    },
    {
      'date': '2019-12-25 00:00:00',
      'value': -0.019052803483941224
    },
    {
      'date': '2019-12-26 00:00:00',
      'value': -0.01714752313554716
    },
    {
      'date': '2019-12-27 00:00:00',
      'value': -0.007212847033206276
    },
    {
      'date': '2019-12-30 00:00:00',
      'value': -0.0006804572672836907
    },
    {
      'date': '2019-12-31 00:00:00',
      'value': -0.00034022863364176984
    },
    {
      'date': '2020-01-02 00:00:00',
      'value': -0.0017691888949373541
    },
    {
      'date': '2020-01-03 00:00:00',
      'value': -0.007212847033206276
    },
    {
      'date': '2020-01-06 00:00:00',
      'value': -0.02524496461622204
    },
    {
      'date': '2020-01-07 00:00:00',
      'value': -0.013609145345672303
    },
    {
      'date': '2020-01-08 00:00:00',
      'value': -0.02082199237887858
    },
    {
      'date': '2020-01-09 00:00:00',
      'value': -0.0008165487207403986
    },
    {
      'date': '2020-01-10 00:00:00',
      'value': 0
    },
    {
      'date': '2020-01-13 00:00:00',
      'value': 0
    },
    {
      'date': '2020-01-14 00:00:00',
      'value': -0.012516644474034572
    },
    {
      'date': '2020-01-15 00:00:00',
      'value': -0.011051930758987982
    },
    {
      'date': '2020-01-16 00:00:00',
      'value': -0.00013315579227694938
    },
    {
      'date': '2020-01-17 00:00:00',
      'value': 0
    },
    {
      'date': '2020-01-20 00:00:00',
      'value': 0
    },
    {
      'date': '2020-01-21 00:00:00',
      'value': -0.01834741288278778
    },
    {
      'date': '2020-01-22 00:00:00',
      'value': -0.012407602956705484
    },
    {
      'date': '2020-01-23 00:00:00',
      'value': -0.03860876451953537
    },
    {
      'date': '2020-02-03 00:00:00',
      'value': -0.08289334741288289
    },
    {
      'date': '2020-02-04 00:00:00',
      'value': -0.06335797254487861
    },
    {
      'date': '2020-02-05 00:00:00',
      'value': -0.047122492080253514
    },
    {
      'date': '2020-02-06 00:00:00',
      'value': -0.025145195353748692
    },
    {
      'date': '2020-02-07 00:00:00',
      'value': -0.025145195353748692
    },
    {
      'date': '2020-02-10 00:00:00',
      'value': -0.024551214361140522
    },
    {
      'date': '2020-02-11 00:00:00',
      'value': -0.009437697993664335
    },
    {
      'date': '2020-02-12 00:00:00',
      'value': -0.006137803590285167
    },
    {
      'date': '2020-02-13 00:00:00',
      'value': -0.00646779303062304
    },
    {
      'date': '2020-02-14 00:00:00',
      'value': 0
    },
    {
      'date': '2020-02-17 00:00:00',
      'value': 0
    },
    {
      'date': '2020-02-18 00:00:00',
      'value': -0.010066451740246129
    },
    {
      'date': '2020-02-19 00:00:00',
      'value': -0.008158431475754962
    },
    {
      'date': '2020-02-20 00:00:00',
      'value': 0
    },
    {
      'date': '2020-02-21 00:00:00',
      'value': -0.006271230729030462
    },
    {
      'date': '2020-02-24 00:00:00',
      'value': -0.025280898876404466
    },
    {
      'date': '2020-02-25 00:00:00',
      'value': -0.02025084922916117
    },
    {
      'date': '2020-02-26 00:00:00',
      'value': -0.03383851580872736
    },
    {
      'date': '2020-02-27 00:00:00',
      'value': -0.02462764567546371
    },
    {
      'date': '2020-02-28 00:00:00',
      'value': -0.0497778939116802
    },
    {
      'date': '2020-03-02 00:00:00',
      'value': -0.03494904625032655
    },
    {
      'date': '2020-03-03 00:00:00',
      'value': -0.020054873268878986
    },
    {
      'date': '2020-03-04 00:00:00',
      'value': -0.01593937810295269
    },
    {
      'date': '2020-03-05 00:00:00',
      'value': 0
    },
    {
      'date': '2020-03-06 00:00:00',
      'value': -0.014060092449922977
    },
    {
      'date': '2020-03-09 00:00:00',
      'value': -0.04847200821777101
    },
    {
      'date': '2020-03-10 00:00:00',
      'value': -0.034090909090909186
    },
    {
      'date': '2020-03-11 00:00:00',
      'value': -0.03710837185413461
    },
    {
      'date': '2020-03-12 00:00:00',
      'value': -0.0667051874678994
    },
    {
      'date': '2020-03-13 00:00:00',
      'value': -0.07190549563430926
    },
    {
      'date': '2020-03-16 00:00:00',
      'value': -0.11947868515665135
    },
    {
      'date': '2020-03-17 00:00:00',
      'value': -0.11472778633795587
    },
    {
      'date': '2020-03-18 00:00:00',
      'value': -0.14188495120698516
    },
    {
      'date': '2020-03-19 00:00:00',
      'value': -0.1675654853620956
    },
    {
      'date': '2020-03-20 00:00:00',
      'value': -0.12365177195685677
    },
    {
      'date': '2020-03-23 00:00:00',
      'value': -0.1499743194658449
    },
    {
      'date': '2020-03-24 00:00:00',
      'value': -0.11434257832562926
    },
    {
      'date': '2020-03-25 00:00:00',
      'value': -0.08005906522855677
    },
    {
      'date': '2020-03-26 00:00:00',
      'value': -0.0769131997945558
    },
    {
      'date': '2020-03-27 00:00:00',
      'value': -0.07980225988700569
    },
    {
      'date': '2020-03-30 00:00:00',
      'value': -0.09373394966615313
    },
    {
      'date': '2020-03-31 00:00:00',
      'value': -0.08025166923472007
    },
    {
      'date': '2020-04-01 00:00:00',
      'value': -0.08326913199794565
    },
    {
      'date': '2020-04-02 00:00:00',
      'value': -0.06606317411402156
    },
    {
      'date': '2020-04-03 00:00:00',
      'value': -0.06105546995377515
    },
    {
      'date': '2020-04-07 00:00:00',
      'value': -0.033192090395480274
    },
    {
      'date': '2020-04-08 00:00:00',
      'value': -0.04205187467899339
    },
    {
      'date': '2020-04-09 00:00:00',
      'value': -0.028762198253723788
    },
    {
      'date': '2020-04-10 00:00:00',
      'value': -0.028954802259887093
    },
    {
      'date': '2020-04-13 00:00:00',
      'value': -0.031266050333847065
    },
    {
      'date': '2020-04-14 00:00:00',
      'value': -0.022213662044170638
    },
    {
      'date': '2020-04-15 00:00:00',
      'value': -0.02349768875192616
    },
    {
      'date': '2020-04-16 00:00:00',
      'value': -0.019453004622496144
    },
    {
      'date': '2020-04-17 00:00:00',
      'value': -0.009887005649717565
    },
    {
      'date': '2020-04-20 00:00:00',
      'value': -0.004879301489471013
    },
    {
      'date': '2020-04-21 00:00:00',
      'value': -0.028184386235233724
    },
    {
      'date': '2020-04-22 00:00:00',
      'value': -0.008923985618900888
    },
    {
      'date': '2020-04-23 00:00:00',
      'value': 0
    },
    {
      'date': '2020-04-24 00:00:00',
      'value': -0.009308596006933414
    },
    {
      'date': '2020-04-27 00:00:00',
      'value': 0
    },
    {
      'date': '2020-04-28 00:00:00',
      'value': 0
    },
    {
      'date': '2020-04-29 00:00:00',
      'value': -0.007149576669802494
    },
    {
      'date': '2020-04-30 00:00:00',
      'value': -0.008717466290373172
    },
    {
      'date': '2020-05-06 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-07 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-08 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-11 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-12 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-13 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-14 00:00:00',
      'value': -0.0027505381487683326
    },
    {
      'date': '2020-05-15 00:00:00',
      'value': -0.010045443673762346
    },
    {
      'date': '2020-05-18 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-19 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-20 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-21 00:00:00',
      'value': -0.001106903582872131
    },
    {
      'date': '2020-05-22 00:00:00',
      'value': -0.039848528983396456
    },
    {
      'date': '2020-05-25 00:00:00',
      'value': -0.016370521409845625
    },
    {
      'date': '2020-05-26 00:00:00',
      'value': 0
    },
    {
      'date': '2020-05-27 00:00:00',
      'value': -0.011198793083439768
    },
    {
      'date': '2020-05-28 00:00:00',
      'value': -0.01926424509690154
    },
    {
      'date': '2020-05-29 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-01 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-02 00:00:00',
      'value': -0.005849582172701925
    },
    {
      'date': '2020-06-03 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-04 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-05 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-08 00:00:00',
      'value': -0.00679865114761229
    },
    {
      'date': '2020-06-09 00:00:00',
      'value': -0.005058196453823608
    },
    {
      'date': '2020-06-10 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-11 00:00:00',
      'value': -0.006410256410256422
    },
    {
      'date': '2020-06-12 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-15 00:00:00',
      'value': -0.02138087031451964
    },
    {
      'date': '2020-06-16 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-17 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-18 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-19 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-22 00:00:00',
      'value': -0.00167101827676245
    },
    {
      'date': '2020-06-23 00:00:00',
      'value': 0
    },
    {
      'date': '2020-06-24 00:00:00',
      'value': -0.0041267576930915
    },
    {
      'date': '2020-06-29 00:00:00',
      'value': -0.005808029345832523
    },
    {
      'date': '2020-06-30 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-01 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-02 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-03 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-06 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-07 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-08 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-09 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-10 00:00:00',
      'value': -0.0025208192662614574
    },
    {
      'date': '2020-07-13 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-14 00:00:00',
      'value': -0.010256410256410305
    },
    {
      'date': '2020-07-15 00:00:00',
      'value': 0
    },
    {
      'date': '2020-07-16 00:00:00',
      'value': -0.06933133776466971
    },
    {
      'date': '2020-07-17 00:00:00',
      'value': -0.05586124928467668
    },
    {
      'date': '2020-07-20 00:00:00',
      'value': -0.0625962935246731
    },
    {
      'date': '2020-07-21 00:00:00',
      'value': -0.026455958093058177
    },
    {
      'date': '2020-07-22 00:00:00',
      'value': -0.03116608707135634
    },
    {
      'date': '2020-07-23 00:00:00',
      'value': -0.012721750231104525
    },
    {
      'date': '2020-07-24 00:00:00',
      'value': -0.05797420434036181
    },
    {
      'date': '2020-07-27 00:00:00',
      'value': -0.04740942906193595
    },
    {
      'date': '2020-07-28 00:00:00',
      'value': -0.029273231500638288
    },
    {
      'date': '2020-07-29 00:00:00',
      'value': -0.021129550556851714
    },
    {
      'date': '2020-07-30 00:00:00',
      'value': -0.018796496016199305
    },
    {
      'date': '2020-07-31 00:00:00',
      'value': -0.01963287405907469
    },
    {
      'date': '2020-08-03 00:00:00',
      'value': -0.012985869613065141
    },
    {
      'date': '2020-08-04 00:00:00',
      'value': -0.005854646300127697
    },
    {
      'date': '2020-08-05 00:00:00',
      'value': 0
    },
    {
      'date': '2020-08-06 00:00:00',
      'value': -0.017514522091181154
    },
    {
      'date': '2020-08-07 00:00:00',
      'value': -0.03256468931526152
    },
    {
      'date': '2020-08-10 00:00:00',
      'value': -0.03815349410315085
    },
    {
      'date': '2020-08-11 00:00:00',
      'value': -0.03194860059848618
    },
    {
      'date': '2020-08-12 00:00:00',
      'value': -0.04611864108431614
    },
    {
      'date': '2020-08-13 00:00:00',
      'value': -0.046998767822566546
    },
    {
      'date': '2020-08-14 00:00:00',
      'value': -0.03252068297834891
    },
    {
      'date': '2020-08-17 00:00:00',
      'value': -0.01733849674353111
    },
    {
      'date': '2020-08-18 00:00:00',
      'value': -0.00840521035029059
    },
    {
      'date': '2020-08-19 00:00:00',
      'value': -0.01535821158246804
    },
    {
      'date': '2020-08-20 00:00:00',
      'value': -0.026051751452209178
    },
    {
      'date': '2020-08-21 00:00:00',
      'value': -0.012981869389192078
    },
    {
      'date': '2020-08-24 00:00:00',
      'value': 0
    },
    {
      'date': '2020-08-25 00:00:00',
      'value': 0
    },
    {
      'date': '2020-08-26 00:00:00',
      'value': 0
    },
    {
      'date': '2020-08-27 00:00:00',
      'value': 0
    },
    {
      'date': '2020-08-28 00:00:00',
      'value': 0
    },
    {
      'date': '2020-08-31 00:00:00',
      'value': -0.005906253927030537
    },
    {
      'date': '2020-09-01 00:00:00',
      'value': -0.005236040715452677
    },
    {
      'date': '2020-09-02 00:00:00',
      'value': -0.0020525279604574733
    },
    {
      'date': '2020-09-03 00:00:00',
      'value': 0
    },
    {
      'date': '2020-09-04 00:00:00',
      'value': -0.015898916363332
    },
    {
      'date': '2020-09-07 00:00:00',
      'value': -0.034977615999330434
    },
    {
      'date': '2020-09-08 00:00:00',
      'value': -0.05393079787456583
    },
    {
      'date': '2020-09-09 00:00:00',
      'value': -0.06639889544370531
    },
    {
      'date': '2020-09-10 00:00:00',
      'value': -0.06142002426676701
    },
    {
      'date': '2020-09-11 00:00:00',
      'value': -0.04271787791305807
    },
    {
      'date': '2020-09-14 00:00:00',
      'value': -0.03552152629597078
    },
    {
      'date': '2020-09-15 00:00:00',
      'value': -0.032592778544830794
    },
    {
      'date': '2020-09-16 00:00:00',
      'value': -0.04087695075519839
    },
    {
      'date': '2020-09-17 00:00:00',
      'value': -0.05970461486967075
    },
    {
      'date': '2020-09-18 00:00:00',
      'value': -0.05221538847746957
    },
    {
      'date': '2020-09-21 00:00:00',
      'value': -0.06480900380737209
    },
    {
      'date': '2020-09-22 00:00:00',
      'value': -0.07028994602736276
    },
    {
      'date': '2020-09-23 00:00:00',
      'value': -0.06518555708966141
    },
    {
      'date': '2020-09-24 00:00:00',
      'value': -0.08171206225680935
    },
    {
      'date': '2020-09-25 00:00:00',
      'value': -0.08309275762520392
    },
    {
      'date': '2020-09-28 00:00:00',
      'value': -0.07305133676415207
    },
    {
      'date': '2020-09-29 00:00:00',
      'value': -0.07568720974017817
    },
    {
      'date': '2020-09-30 00:00:00',
      'value': -0.06731935902263496
    },
    {
      'date': '2020-10-09 00:00:00',
      'value': -0.04623237521442619
    },
    {
      'date': '2020-10-12 00:00:00',
      'value': -0.01690305844943726
    },
    {
      'date': '2020-10-13 00:00:00',
      'value': -0.005355424459227615
    },
    {
      'date': '2020-10-14 00:00:00',
      'value': -0.006234048784569647
    },
    {
      'date': '2020-10-15 00:00:00',
      'value': -0.018451110832182673
    },
    {
      'date': '2020-10-16 00:00:00',
      'value': -0.02175641186561234
    },
    {
      'date': '2020-10-19 00:00:00',
      'value': -0.026442408267436386
    },
    {
      'date': '2020-10-20 00:00:00',
      'value': -0.008828082507007938
    },
    {
      'date': '2020-10-21 00:00:00',
      'value': -0.004895192669762697
    },
    {
      'date': '2020-10-22 00:00:00',
      'value': 0
    },
    {
      'date': '2020-10-23 00:00:00',
      'value': -0.01544627202137427
    },
    {
      'date': '2020-10-26 00:00:00',
      'value': -0.014277364949486426
    },
    {
      'date': '2020-10-27 00:00:00',
      'value': -0.0025048008683308774
    },
    {
      'date': '2020-10-28 00:00:00',
      'value': 0
    },
    {
      'date': '2020-10-29 00:00:00',
      'value': 0
    },
    {
      'date': '2020-10-30 00:00:00',
      'value': -0.02259210473795553
    },
    {
      'date': '2020-11-02 00:00:00',
      'value': -0.011176306230790732
    },
    {
      'date': '2020-11-03 00:00:00',
      'value': -0.003193230351654495
    },
    {
      'date': '2020-11-04 00:00:00',
      'value': 0
    },
    {
      'date': '2020-11-05 00:00:00',
      'value': 0
    },
    {
      'date': '2020-11-06 00:00:00',
      'value': -0.008609271523178811
    },
    {
      'date': '2020-11-09 00:00:00',
      'value': 0
    },
    {
      'date': '2020-11-10 00:00:00',
      'value': -0.004666589532955463
    },
    {
      'date': '2020-11-11 00:00:00',
      'value': -0.028269505187242135
    },
    {
      'date': '2020-11-12 00:00:00',
      'value': -0.012341393806162993
    },
    {
      'date': '2020-11-13 00:00:00',
      'value': -0.01126152184812385
    },
    {
      'date': '2020-11-16 00:00:00',
      'value': 0
    },
    {
      'date': '2020-11-17 00:00:00',
      'value': -0.02022437609707698
    },
    {
      'date': '2020-11-18 00:00:00',
      'value': -0.028123330534992025
    },
    {
      'date': '2020-11-19 00:00:00',
      'value': -0.02678775852858134
    },
    {
      'date': '2020-11-20 00:00:00',
      'value': -0.008623979241395166
    },
    {
      'date': '2020-11-23 00:00:00',
      'value': -0.003930397618865899
    },
    {
      'date': '2020-11-24 00:00:00',
      'value': 0
    },
    {
      'date': '2020-11-25 00:00:00',
      'value': -0.028671515059208744
    },
    {
      'date': '2020-11-26 00:00:00',
      'value': -0.01907626699158513
    },
    {
      'date': '2020-11-27 00:00:00',
      'value': -0.010661386741804068
    },
    {
      'date': '2020-11-30 00:00:00',
      'value': -0.03605833301603016
    },
    {
      'date': '2020-12-01 00:00:00',
      'value': -0.02276967596999584
    },
    {
      'date': '2020-12-02 00:00:00',
      'value': -0.03247915318128171
    },
    {
      'date': '2020-12-03 00:00:00',
      'value': -0.020447016715531386
    },
    {
      'date': '2020-12-04 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-07 00:00:00',
      'value': -0.007180578245507358
    },
    {
      'date': '2020-12-08 00:00:00',
      'value': -0.0023175411268568803
    },
    {
      'date': '2020-12-09 00:00:00',
      'value': -0.00554690171346063
    },
    {
      'date': '2020-12-10 00:00:00',
      'value': -0.00037992477489452904
    },
    {
      'date': '2020-12-11 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-14 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-15 00:00:00',
      'value': -0.00728219446855085
    },
    {
      'date': '2020-12-16 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-17 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-18 00:00:00',
      'value': -0.0065622119815667524
    },
    {
      'date': '2020-12-21 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-22 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-23 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-24 00:00:00',
      'value': -0.005138483965014577
    },
    {
      'date': '2020-12-25 00:00:00',
      'value': -0.004045189504373299
    },
    {
      'date': '2020-12-28 00:00:00',
      'value': -0.0014212827988339053
    },
    {
      'date': '2020-12-29 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-30 00:00:00',
      'value': 0
    },
    {
      'date': '2020-12-31 00:00:00',
      'value': 0
    },
    {
      'date': '2021-01-04 00:00:00',
      'value': 0
    },
    {
      'date': '2021-01-05 00:00:00',
      'value': 0
    },
    {
      'date': '2021-01-06 00:00:00',
      'value': 0
    },
    {
      'date': '2021-01-07 00:00:00',
      'value': 0
    },
    {
      'date': '2021-01-08 00:00:00',
      'value': -0.00606736414023809
    },
    {
      'date': '2021-01-11 00:00:00',
      'value': -0.01944836181168225
    },
    {
      'date': '2021-01-12 00:00:00',
      'value': -0.005116263815552149
    },
    {
      'date': '2021-01-13 00:00:00',
      'value': -0.016201502082581854
    },
    {
      'date': '2021-01-14 00:00:00',
      'value': -0.01659506083762428
    },
    {
      'date': '2021-01-15 00:00:00',
      'value': -0.022039290282378454
    },
    {
      'date': '2021-01-18 00:00:00',
      'value': -0.011413203896231728
    },
    {
      'date': '2021-01-19 00:00:00',
      'value': -0.00616575382899877
    },
    {
      'date': '2021-01-20 00:00:00',
      'value': 0
    },
    {
      'date': '2021-01-21 00:00:00',
      'value': 0
    },
    {
      'date': '2021-01-22 00:00:00',
      'value': 0
    },
    {
      'date': '2021-01-25 00:00:00',
      'value': 0
    },
    {
      'date': '2021-01-26 00:00:00',
      'value': -0.025774436090225596
    },
    {
      'date': '2021-01-27 00:00:00',
      'value': -0.040932330827067764
    },
    {
      'date': '2021-01-28 00:00:00',
      'value': -0.06243609022556398
    },
    {
      'date': '2021-01-29 00:00:00',
      'value': -0.057834586466165516
    },
    {
      'date': '2021-02-01 00:00:00',
      'value': -0.036691729323308366
    },
    {
      'date': '2021-02-02 00:00:00',
      'value': -0.016781954887218065
    },
    {
      'date': '2021-02-03 00:00:00',
      'value': -0.004751879699248131
    },
    {
      'date': '2021-02-04 00:00:00',
      'value': -0.004992481203007637
    },
    {
      'date': '2021-02-05 00:00:00',
      'value': 0
    },
    {
      'date': '2021-02-08 00:00:00',
      'value': 0
    },
    {
      'date': '2021-02-09 00:00:00',
      'value': 0
    },
    {
      'date': '2021-02-10 00:00:00',
      'value': 0
    },
    {
      'date': '2021-02-18 00:00:00',
      'value': -0.019185535749709614
    },
    {
      'date': '2021-02-19 00:00:00',
      'value': -0.014651288009748718
    },
    {
      'date': '2021-02-22 00:00:00',
      'value': -0.06438631790744474
    },
    {
      'date': '2021-02-23 00:00:00',
      'value': -0.06540652364893595
    },
    {
      'date': '2021-02-24 00:00:00',
      'value': -0.1133561934990224
    },
    {
      'date': '2021-02-25 00:00:00',
      'value': -0.11803213648085699
    },
    {
      'date': '2021-02-26 00:00:00',
      'value': -0.15345594694930145
    },
    {
      'date': '2021-03-01 00:00:00',
      'value': -0.13126647207186784
    },
    {
      'date': '2021-03-02 00:00:00',
      'value': -0.14651288009748642
    },
    {
      'date': '2021-03-03 00:00:00',
      'value': -0.1225380451724432
    },
    {
      'date': '2021-03-04 00:00:00',
      'value': -0.15983223283362147
    },
    {
      'date': '2021-03-05 00:00:00',
      'value': -0.16201433955847772
    },
    {
      'date': '2021-03-08 00:00:00',
      'value': -0.21013404369881267
    },
    {
      'date': '2021-03-09 00:00:00',
      'value': -0.22484200980531074
    },
    {
      'date': '2021-03-10 00:00:00',
      'value': -0.20936888939269427
    },
    {
      'date': '2021-03-11 00:00:00',
      'value': -0.1747102332303682
    },
    {
      'date': '2021-03-12 00:00:00',
      'value': -0.18273018392042395
    },
    {
      'date': '2021-03-15 00:00:00',
      'value': -0.20571315215235078
    },
    {
      'date': '2021-03-16 00:00:00',
      'value': -0.190268370788109
    },
    {
      'date': '2021-03-17 00:00:00',
      'value': -0.19001331935273616
    },
    {
      'date': '2021-03-18 00:00:00',
      'value': -0.17198968458639158
    },
    {
      'date': '2021-03-19 00:00:00',
      'value': -0.19177034035197105
    },
    {
      'date': '2021-03-22 00:00:00',
      'value': -0.19052342222348181
    },
    {
      'date': '2021-03-23 00:00:00',
      'value': -0.1974948281236717
    },
    {
      'date': '2021-03-24 00:00:00',
      'value': -0.21288293139116396
    },
    {
      'date': '2021-03-25 00:00:00',
      'value': -0.21829568963074225
    },
    {
      'date': '2021-03-26 00:00:00',
      'value': -0.19301725848046028
    },
    {
      'date': '2021-03-29 00:00:00',
      'value': -0.19803327004279203
    },
    {
      'date': '2021-03-30 00:00:00',
      'value': -0.18732110975713437
    },
    {
      'date': '2021-03-31 00:00:00',
      'value': -0.19366905659307965
    },
    {
      'date': '2021-04-01 00:00:00',
      'value': -0.1683339473460482
    },
    {
      'date': '2021-04-02 00:00:00',
      'value': -0.15393771077167231
    },
    {
      'date': '2021-04-06 00:00:00',
      'value': -0.15991724997874576
    },
    {
      'date': '2021-04-07 00:00:00',
      'value': -0.18434550967778504
    },
    {
      'date': '2021-04-08 00:00:00',
      'value': -0.17788420664834084
    },
    {
      'date': '2021-04-09 00:00:00',
      'value': -0.193980786125202
    },
    {
      'date': '2021-04-12 00:00:00',
      'value': -0.20639328931334497
    },
    {
      'date': '2021-04-13 00:00:00',
      'value': -0.20925553319919526
    },
    {
      'date': '2021-04-14 00:00:00',
      'value': -0.2006121234448947
    },
    {
      'date': '2021-04-15 00:00:00',
      'value': -0.20429619973361302
    },
    {
      'date': '2021-04-16 00:00:00',
      'value': -0.19335732706095732
    },
    {
      'date': '2021-04-19 00:00:00',
      'value': -0.17867770000283392
    },
    {
      'date': '2021-04-20 00:00:00',
      'value': -0.1730382293762576
    },
    {
      'date': '2021-04-21 00:00:00',
      'value': -0.1747102332303682
    },
    {
      'date': '2021-04-22 00:00:00',
      'value': -0.17269816079576059
    },
    {
      'date': '2021-04-23 00:00:00',
      'value': -0.15424944030379464
    },
    {
      'date': '2021-04-26 00:00:00',
      'value': -0.16079576047836316
    },
    {
      'date': '2021-04-27 00:00:00',
      'value': -0.1537109983846743
    },
    {
      'date': '2021-04-28 00:00:00',
      'value': -0.14968685351545893
    },
    {
      'date': '2021-04-29 00:00:00',
      'value': -0.14486921529175054
    },
    {
      'date': '2021-04-30 00:00:00',
      'value': -0.15770680420551483
    },
    {
      'date': '2021-05-06 00:00:00',
      'value': -0.17788420664834084
    },
    {
      'date': '2021-05-07 00:00:00',
      'value': -0.1895882336271148
    },
    {
      'date': '2021-05-10 00:00:00',
      'value': -0.20194405871850826
    },
    {
      'date': '2021-05-11 00:00:00',
      'value': -0.20001700342902484
    },
    {
      'date': '2021-05-12 00:00:00',
      'value': -0.19063677841698085
    },
    {
      'date': '2021-05-13 00:00:00',
      'value': -0.19706974239805033
    },
    {
      'date': '2021-05-14 00:00:00',
      'value': -0.1877461954827557
    },
    {
      'date': '2021-05-17 00:00:00',
      'value': -0.16915577974891607
    },
    {
      'date': '2021-05-18 00:00:00',
      'value': -0.16450817581545618
    },
    {
      'date': '2021-05-19 00:00:00',
      'value': -0.1683906254427977
    },
    {
      'date': '2021-05-20 00:00:00',
      'value': -0.15932212996287592
    },
    {
      'date': '2021-05-21 00:00:00',
      'value': -0.1629211891064698
    },
    {
      'date': '2021-05-24 00:00:00',
      'value': -0.15512795080341205
    },
    {
      'date': '2021-05-25 00:00:00',
      'value': -0.11990251367359091
    },
    {
      'date': '2021-05-26 00:00:00',
      'value': -0.11927905460934622
    },
    {
      'date': '2021-05-27 00:00:00',
      'value': -0.12103607560858114
    },
    {
      'date': '2021-05-28 00:00:00',
      'value': -0.1270156148156546
    },
    {
      'date': '2021-05-31 00:00:00',
      'value': -0.11261937824127871
    },
    {
      'date': '2021-06-01 00:00:00',
      'value': -0.10071697792388142
    },
    {
      'date': '2021-06-02 00:00:00',
      'value': -0.10907699719443421
    },
    {
      'date': '2021-06-03 00:00:00',
      'value': -0.1152832487885057
    },
    {
      'date': '2021-06-04 00:00:00',
      'value': -0.10984215150055271
    },
    {
      'date': '2021-06-07 00:00:00',
      'value': -0.11412134780514077
    },
    {
      'date': '2021-06-08 00:00:00',
      'value': -0.13594241505370255
    },
    {
      'date': '2021-06-09 00:00:00',
      'value': -0.13319352736135126
    },
    {
      'date': '2021-06-10 00:00:00',
      'value': -0.12386998044605663
    },
    {
      'date': '2021-06-11 00:00:00',
      'value': -0.13789780939156066
    },
    {
      'date': '2021-06-15 00:00:00',
      'value': -0.1473347125003543
    },
    {
      'date': '2021-06-16 00:00:00',
      'value': -0.1593504690112506
    },
    {
      'date': '2021-06-17 00:00:00',
      'value': -0.15589310510953042
    },
    {
      'date': '2021-06-18 00:00:00',
      'value': -0.1592371128177516
    },
    {
      'date': '2021-06-21 00:00:00',
      'value': -0.16161759288123104
    },
    {
      'date': '2021-06-22 00:00:00',
      'value': -0.16102247286536117
    },
    {
      'date': '2021-06-23 00:00:00',
      'value': -0.16348797007396496
    },
    {
      'date': '2021-06-24 00:00:00',
      'value': -0.15237906311106075
    },
    {
      'date': '2021-06-25 00:00:00',
      'value': -0.13157820160399017
    },
    {
      'date': '2021-06-28 00:00:00',
      'value': -0.13220166066823485
    },
    {
      'date': '2021-06-29 00:00:00',
      'value': -0.14866664777396774
    },
    {
      'date': '2021-06-30 00:00:00',
      'value': -0.1457477257913679
    },
    {
      'date': '2021-07-01 00:00:00',
      'value': -0.14064669708391198
    },
    {
      'date': '2021-07-02 00:00:00',
      'value': -0.16887238926516857
    },
    {
      'date': '2021-07-05 00:00:00',
      'value': -0.1802080086150708
    },
    {
      'date': '2021-07-06 00:00:00',
      'value': -0.17728908663247098
    },
    {
      'date': '2021-07-07 00:00:00',
      'value': -0.1712245302802732
    },
    {
      'date': '2021-07-08 00:00:00',
      'value': -0.19633292714030665
    },
    {
      'date': '2021-07-09 00:00:00',
      'value': -0.19925184912290647
    },
    {
      'date': '2021-07-12 00:00:00',
      'value': -0.18698104117663733
    },
    {
      'date': '2021-07-13 00:00:00',
      'value': -0.17717573043897183
    },
    {
      'date': '2021-07-14 00:00:00',
      'value': -0.17952787145407662
    },
    {
      'date': '2021-07-15 00:00:00',
      'value': -0.16918411879729078
    },
    {
      'date': '2021-07-16 00:00:00',
      'value': -0.16813557400742488
    },
    {
      'date': '2021-07-19 00:00:00',
      'value': -0.1700626292969083
    },
    {
      'date': '2021-07-20 00:00:00',
      'value': -0.1729815512795081
    },
    {
      'date': '2021-07-21 00:00:00',
      'value': -0.17181965029614307
    },
    {
      'date': '2021-07-22 00:00:00',
      'value': -0.17434182560149636
    },
    {
      'date': '2021-07-23 00:00:00',
      'value': -0.18921982599824297
    },
    {
      'date': '2021-07-26 00:00:00',
      'value': -0.24023011307280304
    },
    {
      'date': '2021-07-27 00:00:00',
      'value': -0.28608269334315756
    },
    {
      'date': '2021-07-28 00:00:00',
      'value': -0.2774392835888571
    },
    {
      'date': '2021-07-29 00:00:00',
      'value': -0.27069459007566526
    },
    {
      'date': '2021-07-30 00:00:00',
      'value': -0.29245897922747754
    },
    {
      'date': '2021-08-02 00:00:00',
      'value': -0.272706662510273
    },
    {
      'date': '2021-08-03 00:00:00',
      'value': -0.2692776376569275
    },
    {
      'date': '2021-08-04 00:00:00',
      'value': -0.2746337177997563
    },
    {
      'date': '2021-08-05 00:00:00',
      'value': -0.281973531328818
    },
    {
      'date': '2021-08-06 00:00:00',
      'value': -0.28146342845807243
    },
    {
      'date': '2021-08-09 00:00:00',
      'value': -0.2730183920423952
    },
    {
      'date': '2021-08-10 00:00:00',
      'value': -0.24776829994048807
    },
    {
      'date': '2021-08-11 00:00:00',
      'value': -0.2532660753251907
    },
    {
      'date': '2021-08-12 00:00:00',
      'value': -0.2661036642389549
    },
    {
      'date': '2021-08-13 00:00:00',
      'value': -0.2663870547227025
    },
    {
      'date': '2021-08-16 00:00:00',
      'value': -0.2711763538980361
    },
    {
      'date': '2021-08-17 00:00:00',
      'value': -0.294726103097458
    },
    {
      'date': '2021-08-18 00:00:00',
      'value': -0.28517584379516536
    },
    {
      'date': '2021-08-19 00:00:00',
      'value': -0.29611471646782106
    },
    {
      'date': '2021-08-20 00:00:00',
      'value': -0.3187576161192507
    },
    {
      'date': '2021-08-23 00:00:00',
      'value': -0.3043330404965001
    },
    {
      'date': '2021-08-24 00:00:00',
      'value': -0.29044690679286994
    },
    {
      'date': '2021-08-25 00:00:00',
      'value': -0.2835605180378044
    },
    {
      'date': '2021-08-26 00:00:00',
      'value': -0.3018675432878965
    },
    {
      'date': '2021-08-27 00:00:00',
      'value': -0.3039646328676283
    },
    {
      'date': '2021-08-30 00:00:00',
      'value': -0.3064868081729816
    },
    {
      'date': '2021-08-31 00:00:00',
      'value': -0.3089239663332105
    },
    {
      'date': '2021-09-01 00:00:00',
      'value': -0.2881514438745148
    },
    {
      'date': '2021-09-02 00:00:00',
      'value': -0.29135375634086214
    },
    {
      'date': '2021-09-03 00:00:00',
      'value': -0.28990846487374955
    },
    {
      'date': '2021-09-06 00:00:00',
      'value': -0.27718423215348426
    },
    {
      'date': '2021-09-07 00:00:00',
      'value': -0.2715731005752828
    },
    {
      'date': '2021-09-08 00:00:00',
      'value': -0.27780769121772897
    },
    {
      'date': '2021-09-09 00:00:00',
      'value': -0.28877490293875935
    },
    {
      'date': '2021-09-10 00:00:00',
      'value': -0.269447671947176
    },
    {
      'date': '2021-09-13 00:00:00',
      'value': -0.2732167653810185
    },
    {
      'date': '2021-09-14 00:00:00',
      'value': -0.2834755008926801
    },
    {
      'date': '2021-09-15 00:00:00',
      'value': -0.29721993935443647
    },
    {
      'date': '2021-09-16 00:00:00',
      'value': -0.29897696035367133
    },
    {
      'date': '2021-09-17 00:00:00',
      'value': -0.28744296766514577
    },
    {
      'date': '2021-09-22 00:00:00',
      'value': -0.30917901776858336
    },
    {
      'date': '2021-09-23 00:00:00',
      'value': -0.30997251112307656
    },
    {
      'date': '2021-09-24 00:00:00',
      'value': -0.3026893756907644
    },
    {
      'date': '2021-09-27 00:00:00',
      'value': -0.2744636835095078
    },
    {
      'date': '2021-09-28 00:00:00',
      'value': -0.271884830107405
    },
    {
      'date': '2021-09-29 00:00:00',
      'value': -0.2701844872049197
    },
    {
      'date': '2021-09-30 00:00:00',
      'value': -0.26715220902882086
    },
    {
      'date': '2021-10-08 00:00:00',
      'value': -0.2502337971490917
    },
    {
      'date': '2021-10-11 00:00:00',
      'value': -0.24037180831467686
    },
    {
      'date': '2021-10-12 00:00:00',
      'value': -0.24496273415138725
    },
    {
      'date': '2021-10-13 00:00:00',
      'value': -0.23096324425425804
    },
    {
      'date': '2021-10-14 00:00:00',
      'value': -0.23464732054297624
    },
    {
      'date': '2021-10-15 00:00:00',
      'value': -0.23272026525349282
    },
    {
      'date': '2021-10-18 00:00:00',
      'value': -0.2572618811460312
    },
    {
      'date': '2021-10-19 00:00:00',
      'value': -0.24569954940913083
    },
    {
      'date': '2021-10-20 00:00:00',
      'value': -0.2428373055232805
    },
    {
      'date': '2021-10-21 00:00:00',
      'value': -0.24057018165330007
    },
    {
      'date': '2021-10-22 00:00:00',
      'value': -0.23195511094737445
    },
    {
      'date': '2021-10-25 00:00:00',
      'value': -0.23668773202595866
    },
    {
      'date': '2021-10-26 00:00:00',
      'value': -0.2379913282511974
    },
    {
      'date': '2021-10-27 00:00:00',
      'value': -0.25210417434182564
    },
    {
      'date': '2021-10-28 00:00:00',
      'value': -0.2500354238104685
    },
    {
      'date': '2021-10-29 00:00:00',
      'value': -0.2480800294726103
    },
    {
      'date': '2021-11-01 00:00:00',
      'value': -0.25312438008331684
    },
    {
      'date': '2021-11-02 00:00:00',
      'value': -0.26788902428656447
    },
    {
      'date': '2021-11-03 00:00:00',
      'value': -0.2738118853968884
    },
    {
      'date': '2021-11-04 00:00:00',
      'value': -0.25757361067815343
    },
    {
      'date': '2021-11-05 00:00:00',
      'value': -0.2598407345481339
    },
    {
      'date': '2021-11-08 00:00:00',
      'value': -0.2642899651429706
    },
    {
      'date': '2021-11-09 00:00:00',
      'value': -0.26777566809306547
    },
    {
      'date': '2021-11-10 00:00:00',
      'value': -0.2729050358488962
    },
    {
      'date': '2021-11-11 00:00:00',
      'value': -0.26482840706209093
    },
    {
      'date': '2021-11-12 00:00:00',
      'value': -0.2682007538186868
    },
    {
      'date': '2021-11-15 00:00:00',
      'value': -0.265735256610083
    },
    {
      'date': '2021-11-16 00:00:00',
      'value': -0.25621333635616517
    },
    {
      'date': '2021-11-17 00:00:00',
      'value': -0.26069090599937655
    },
    {
      'date': '2021-11-18 00:00:00',
      'value': -0.26780400714144026
    },
    {
      'date': '2021-11-19 00:00:00',
      'value': -0.26122934791849695
    },
    {
      'date': '2021-11-22 00:00:00',
      'value': -0.2612010088701221
    },
    {
      'date': '2021-11-23 00:00:00',
      'value': -0.26964604528579933
    },
    {
      'date': '2021-11-24 00:00:00',
      'value': -0.26060588885425223
    },
    {
      'date': '2021-11-25 00:00:00',
      'value': -0.2611443307733726
    },
    {
      'date': '2021-11-26 00:00:00',
      'value': -0.271771473913906
    },
    {
      'date': '2021-11-29 00:00:00',
      'value': -0.2719698472525293
    },
    {
      'date': '2021-11-30 00:00:00',
      'value': -0.28234193895768983
    },
    {
      'date': '2021-12-01 00:00:00',
      'value': -0.278374472185224
    },
    {
      'date': '2021-12-02 00:00:00',
      'value': -0.2755689063961233
    },
    {
      'date': '2021-12-03 00:00:00',
      'value': -0.26224955365998814
    },
    {
      'date': '2021-12-06 00:00:00',
      'value': -0.2646300337234676
    },
    {
      'date': '2021-12-07 00:00:00',
      'value': -0.2561566582594157
    },
    {
      'date': '2021-12-08 00:00:00',
      'value': -0.23884149970243998
    },
    {
      'date': '2021-12-09 00:00:00',
      'value': -0.22776093178791057
    },
    {
      'date': '2021-12-10 00:00:00',
      'value': -0.23206846714087345
    },
    {
      'date': '2021-12-13 00:00:00',
      'value': -0.22815767846515722
    },
    {
      'date': '2021-12-14 00:00:00',
      'value': -0.23192677189899963
    },
    {
      'date': '2021-12-15 00:00:00',
      'value': -0.24207215121716213
    },
    {
      'date': '2021-12-16 00:00:00',
      'value': -0.2442825969903931
    },
    {
      'date': '2021-12-17 00:00:00',
      'value': -0.26080426219287556
    },
    {
      'date': '2021-12-20 00:00:00',
      'value': -0.2650834584974636
    },
    {
      'date': '2021-12-21 00:00:00',
      'value': -0.26261796128886
    },
    {
      'date': '2021-12-22 00:00:00',
      'value': -0.2627596565307337
    },
    {
      'date': '2021-12-23 00:00:00',
      'value': -0.25301102388981783
    },
    {
      'date': '2021-12-24 00:00:00',
      'value': -0.24881684473035398
    },
    {
      'date': '2021-12-27 00:00:00',
      'value': -0.2553348258565478
    },
    {
      'date': '2021-12-28 00:00:00',
      'value': -0.25275597245444503
    },
    {
      'date': '2021-12-29 00:00:00',
      'value': -0.2751154816221271
    },
    {
      'date': '2021-12-30 00:00:00',
      'value': -0.26981607957604786
    },
    {
      'date': '2021-12-31 00:00:00',
      'value': -0.26814407572193727
    },
    {
      'date': '2022-01-04 00:00:00',
      'value': -0.27250828917164965
    },
    {
      'date': '2022-01-05 00:00:00',
      'value': -0.27998979794258505
    },
    {
      'date': '2022-01-06 00:00:00',
      'value': -0.28990846487374955
    },
    {
      'date': '2022-01-07 00:00:00',
      'value': -0.2880664267293905
    },
    {
      'date': '2022-01-10 00:00:00',
      'value': -0.28310709326380823
    },
    {
      'date': '2022-01-11 00:00:00',
      'value': -0.28766968005214394
    },
    {
      'date': '2022-01-12 00:00:00',
      'value': -0.2790262702978435
    },
    {
      'date': '2022-01-13 00:00:00',
      'value': -0.29447105166208526
    },
    {
      'date': '2022-01-14 00:00:00',
      'value': -0.3001105222886616
    },
    {
      'date': '2022-01-17 00:00:00',
      'value': -0.2991186555955452
    },
    {
      'date': '2022-01-18 00:00:00',
      'value': -0.29135375634086214
    },
    {
      'date': '2022-01-19 00:00:00',
      'value': -0.291835520163233
    },
    {
      'date': '2022-01-20 00:00:00',
      'value': -0.27137472723665945
    },
    {
      'date': '2022-01-21 00:00:00',
      'value': -0.26616034233570435
    },
    {
      'date': '2022-01-24 00:00:00',
      'value': -0.2736418511066399
    },
    {
      'date': '2022-01-25 00:00:00',
      'value': -0.285459234278913
    },
    {
      'date': '2022-01-26 00:00:00',
      'value': -0.2839572647150509
    },
    {
      'date': '2022-01-27 00:00:00',
      'value': -0.2959730212259472
    },
    {
      'date': '2022-01-28 00:00:00',
      'value': -0.3119279054609347
    },
    {
      'date': '2022-02-07 00:00:00',
      'value': -0.30181086519114697
    },
    {
      'date': '2022-02-08 00:00:00',
      'value': -0.3099158330263271
    },
    {
      'date': '2022-02-09 00:00:00',
      'value': -0.29192053730835715
    },
    {
      'date': '2022-02-10 00:00:00',
      'value': -0.29231728398560386
    },
    {
      'date': '2022-02-11 00:00:00',
      'value': -0.29512284977470465
    },
    {
      'date': '2022-02-14 00:00:00',
      'value': -0.29724827840281126
    },
    {
      'date': '2022-02-15 00:00:00',
      'value': -0.2967665145804404
    },
    {
      'date': '2022-02-16 00:00:00',
      'value': -0.2914954515827358
    },
    {
      'date': '2022-02-17 00:00:00',
      'value': -0.29243064017910286
    },
    {
      'date': '2022-02-18 00:00:00',
      'value': -0.2965681412418171
    },
    {
      'date': '2022-02-21 00:00:00',
      'value': -0.30249100235214105
    },
    {
      'date': '2022-02-22 00:00:00',
      'value': -0.3167455436846431
    },
    {
      'date': '2022-02-23 00:00:00',
      'value': -0.3126080426219287
    },
    {
      'date': '2022-02-24 00:00:00',
      'value': -0.3349958908379857
    },
    {
      'date': '2022-02-25 00:00:00',
      'value': -0.3321336469521354
    },
    {
      'date': '2022-02-28 00:00:00',
      'value': -0.3341740584351178
    },
    {
      'date': '2022-03-01 00:00:00',
      'value': -0.3265225153739338
    },
    {
      'date': '2022-03-02 00:00:00',
      'value': -0.3344291098704906
    },
    {
      'date': '2022-03-03 00:00:00',
      'value': -0.3446028282370278
    },
    {
      'date': '2022-03-04 00:00:00',
      'value': -0.35724204381216884
    },
    {
      'date': '2022-03-07 00:00:00',
      'value': -0.3854393969450506
    },
    {
      'date': '2022-03-08 00:00:00',
      'value': -0.3899736446850115
    },
    {
      'date': '2022-03-09 00:00:00',
      'value': -0.3928642276192366
    },
    {
      'date': '2022-03-10 00:00:00',
      'value': -0.37954487488310146
    },
    {
      'date': '2022-03-11 00:00:00',
      'value': -0.3820387111400799
    },
    {
      'date': '2022-03-14 00:00:00',
      'value': -0.41513871964179444
    },
    {
      'date': '2022-03-15 00:00:00',
      'value': -0.44591492617677897
    },
    {
      'date': '2022-03-16 00:00:00',
      'value': -0.4052767308073796
    },
    {
      'date': '2022-03-17 00:00:00',
      'value': -0.3815286082693344
    },
    {
      'date': '2022-03-18 00:00:00',
      'value': -0.38235044067220225
    },
    {
      'date': '2022-03-21 00:00:00',
      'value': -0.39136225805537456
    },
    {
      'date': '2022-03-22 00:00:00',
      'value': -0.38592116076742145
    },
    {
      'date': '2022-03-23 00:00:00',
      'value': -0.38033836823759465
    },
    {
      'date': '2022-03-24 00:00:00',
      'value': -0.3920990733131182
    },
    {
      'date': '2022-03-25 00:00:00',
      'value': -0.4084790432737269
    },
    {
      'date': '2022-03-28 00:00:00',
      'value': -0.4129282738685635
    },
    {
      'date': '2022-03-29 00:00:00',
      'value': -0.4118797290786976
    },
    {
      'date': '2022-03-30 00:00:00',
      'value': -0.3952447076827161
    },
    {
      'date': '2022-03-31 00:00:00',
      'value': -0.40020404114829833
    },
    {
      'date': '2022-04-01 00:00:00',
      'value': -0.39229744665174143
    },
    {
      'date': '2022-04-06 00:00:00',
      'value': -0.3923257857001163
    },
    {
      'date': '2022-04-07 00:00:00',
      'value': -0.3970300677303257
    },
    {
      'date': '2022-04-08 00:00:00',
      'value': -0.3975968486978207
    },
    {
      'date': '2022-04-11 00:00:00',
      'value': -0.4193895768980078
    },
    {
      'date': '2022-04-12 00:00:00',
      'value': -0.4011392297446652
    },
    {
      'date': '2022-04-13 00:00:00',
      'value': -0.40145095927678753
    },
    {
      'date': '2022-04-14 00:00:00',
      'value': -0.3873097741377845
    },
    {
      'date': '2022-04-15 00:00:00',
      'value': -0.3862895683962933
    },
    {
      'date': '2022-04-18 00:00:00',
      'value': -0.39235412474849096
    },
    {
      'date': '2022-04-19 00:00:00',
      'value': -0.4028112335987758
    },
    {
      'date': '2022-04-20 00:00:00',
      'value': -0.4022444526312806
    },
    {
      'date': '2022-04-21 00:00:00',
      'value': -0.4109728795307054
    },
    {
      'date': '2022-04-22 00:00:00',
      'value': -0.40340635361464566
    },
    {
      'date': '2022-04-25 00:00:00',
      'value': -0.4292515657324228
    },
    {
      'date': '2022-04-26 00:00:00',
      'value': -0.4193328988012583
    },
    {
      'date': '2022-04-27 00:00:00',
      'value': -0.40921585853147047
    },
    {
      'date': '2022-04-28 00:00:00',
      'value': -0.3990988182616828
    },
    {
      'date': '2022-04-29 00:00:00',
      'value': -0.37790121007736566
    },
    {
      'date': '2022-05-05 00:00:00',
      'value': -0.38858503131464844
    },
    {
      'date': '2022-05-06 00:00:00',
      'value': -0.41122793096607824
    },
    {
      'date': '2022-05-09 00:00:00',
      'value': -0.41817099781789324
    },
    {
      'date': '2022-05-10 00:00:00',
      'value': -0.41448692152917505
    },
    {
      'date': '2022-05-11 00:00:00',
      'value': -0.40743049848386087
    },
    {
      'date': '2022-05-12 00:00:00',
      'value': -0.40966928330546665
    },
    {
      'date': '2022-05-13 00:00:00',
      'value': -0.4041431688723893
    },
    {
      'date': '2022-05-16 00:00:00',
      'value': -0.41043443761158505
    },
    {
      'date': '2022-05-17 00:00:00',
      'value': -0.39819196871369056
    },
    {
      'date': '2022-05-18 00:00:00',
      'value': -0.40249950406665347
    },
    {
      'date': '2022-05-19 00:00:00',
      'value': -0.4130416300620625
    },
    {
      'date': '2022-05-20 00:00:00',
      'value': -0.393516025731856
    },
    {
      'date': '2022-05-23 00:00:00',
      'value': -0.40428486411426307
    },
    {
      'date': '2022-05-24 00:00:00',
      'value': -0.41621560348003517
    },
    {
      'date': '2022-05-25 00:00:00',
      'value': -0.4180859806727691
    },
    {
      'date': '2022-05-26 00:00:00',
      'value': -0.4185110663983904
    },
    {
      'date': '2022-05-27 00:00:00',
      'value': -0.41111457477257923
    },
    {
      'date': '2022-05-30 00:00:00',
      'value': -0.3976535267945702
    },
    {
      'date': '2022-05-31 00:00:00',
      'value': -0.3829455606880721
    },
    {
      'date': '2022-06-01 00:00:00',
      'value': -0.3852126845580526
    },
    {
      'date': '2022-06-02 00:00:00',
      'value': -0.38903845608864457
    },
    {
      'date': '2022-06-06 00:00:00',
      'value': -0.37809958341598887
    },
    {
      'date': '2022-06-07 00:00:00',
      'value': -0.37353699662765333
    },
    {
      'date': '2022-06-08 00:00:00',
      'value': -0.35625017711905244
    },
    {
      'date': '2022-06-09 00:00:00',
      'value': -0.3627681582452461
    },
    {
      'date': '2022-06-10 00:00:00',
      'value': -0.3571286876186698
    },
    {
      'date': '2022-06-13 00:00:00',
      'value': -0.37580412049763373
    },
    {
      'date': '2022-06-14 00:00:00',
      'value': -0.37039136225805547
    },
    {
      'date': '2022-06-15 00:00:00',
      'value': -0.36024598293989296
    },
    {
      'date': '2022-06-16 00:00:00',
      'value': -0.3696828860486865
    },
    {
      'date': '2022-06-17 00:00:00',
      'value': -0.35916909910165223
    },
    {
      'date': '2022-06-20 00:00:00',
      'value': -0.3535296284750758
    },
    {
      'date': '2022-06-21 00:00:00',
      'value': -0.3496188397993596
    },
    {
      'date': '2022-06-22 00:00:00',
      'value': -0.3605577124720152
    },
    {
      'date': '2022-06-23 00:00:00',
      'value': -0.3550599370873127
    },
    {
      'date': '2022-06-24 00:00:00',
      'value': -0.34086207385156014
    },
    {
      'date': '2022-06-27 00:00:00',
      'value': -0.3265225153739338
    },
    {
      'date': '2022-06-28 00:00:00',
      'value': -0.3232635248108369
    },
    {
      'date': '2022-06-29 00:00:00',
      'value': -0.33173690027488884
    },
    {
      'date': '2022-06-30 00:00:00',
      'value': -0.32102473998923114
    },
    {
      'date': '2022-07-01 00:00:00',
      'value': -0.3239720010202058
    },
    {
      'date': '2022-07-04 00:00:00',
      'value': -0.32649417632555905
    },
    {
      'date': '2022-07-05 00:00:00',
      'value': -0.32703261824467944
    },
    {
      'date': '2022-07-06 00:00:00',
      'value': -0.33751806614333896
    },
    {
      'date': '2022-07-07 00:00:00',
      'value': -0.3403803100291893
    },
    {
      'date': '2022-07-08 00:00:00',
      'value': -0.3386799671267039
    },
    {
      'date': '2022-07-11 00:00:00',
      'value': -0.3542664437328195
    },
    {
      'date': '2022-07-12 00:00:00',
      'value': -0.3581205543117862
    },
    {
      'date': '2022-07-13 00:00:00',
      'value': -0.3587723524244056
    },
    {
      'date': '2022-07-14 00:00:00',
      'value': -0.36050103437526565
    },
    {
      'date': '2022-07-15 00:00:00',
      'value': -0.3662538611953411
    },
    {
      'date': '2022-07-18 00:00:00',
      'value': -0.36180463060050455
    },
    {
      'date': '2022-07-19 00:00:00',
      'value': -0.36208802108425203
    },
    {
      'date': '2022-07-20 00:00:00',
      'value': -0.3555133618613087
    },
    {
      'date': '2022-07-21 00:00:00',
      'value': -0.3625697849066229
    },
    {
      'date': '2022-07-22 00:00:00',
      'value': -0.3623997506163744
    },
    {
      'date': '2022-07-25 00:00:00',
      'value': -0.36296653158386943
    },
    {
      'date': '2022-07-26 00:00:00',
      'value': -0.3553716666194349
    },
    {
      'date': '2022-07-27 00:00:00',
      'value': -0.36313656587411797
    },
    {
      'date': '2022-07-28 00:00:00',
      'value': -0.36696233740470996
    },
    {
      'date': '2022-07-29 00:00:00',
      'value': -0.38515600646130305
    },
    {
      'date': '2022-08-01 00:00:00',
      'value': -0.38300223878482165
    },
    {
      'date': '2022-08-02 00:00:00',
      'value': -0.3946495876668462
    },
    {
      'date': '2022-08-03 00:00:00',
      'value': -0.3928358885708618
    },
    {
      'date': '2022-08-04 00:00:00',
      'value': -0.3820387111400799
    },
    {
      'date': '2022-08-05 00:00:00',
      'value': -0.3813018958823364
    },
    {
      'date': '2022-08-08 00:00:00',
      'value': -0.3869980446056622
    },
    {
      'date': '2022-08-09 00:00:00',
      'value': -0.39034205231388336
    },
    {
      'date': '2022-08-10 00:00:00',
      'value': -0.4010258735511662
    },
    {
      'date': '2022-08-11 00:00:00',
      'value': -0.3881599455890272
    },
    {
      'date': '2022-08-12 00:00:00',
      'value': -0.38110352254371305
    },
    {
      'date': '2022-08-15 00:00:00',
      'value': -0.38691302746053785
    },
    {
      'date': '2022-08-16 00:00:00',
      'value': -0.39153229234562303
    },
    {
      'date': '2022-08-17 00:00:00',
      'value': -0.3878765551052796
    },
    {
      'date': '2022-08-18 00:00:00',
      'value': -0.3936577209737297
    },
    {
      'date': '2022-08-19 00:00:00',
      'value': -0.3924391418936153
    },
    {
      'date': '2022-08-22 00:00:00',
      'value': -0.39147561424887356
    },
    {
      'date': '2022-08-23 00:00:00',
      'value': -0.39674667724657814
    },
    {
      'date': '2022-08-24 00:00:00',
      'value': -0.4030096069373991
    },
    {
      'date': '2022-08-25 00:00:00',
      'value': -0.3853260407515516
    },
    {
      'date': '2022-08-26 00:00:00',
      'value': -0.3808201320599655
    },
    {
      'date': '2022-08-29 00:00:00',
      'value': -0.3871680788959107
    },
    {
      'date': '2022-08-30 00:00:00',
      'value': -0.3881032674922777
    },
    {
      'date': '2022-08-31 00:00:00',
      'value': -0.3790631110607306
    },
    {
      'date': '2022-09-01 00:00:00',
      'value': -0.3927508714257376
    },
    {
      'date': '2022-09-02 00:00:00',
      'value': -0.39819196871369056
    },
    {
      'date': '2022-09-05 00:00:00',
      'value': -0.40822399183835406
    },
    {
      'date': '2022-09-06 00:00:00',
      'value': -0.40864907756397545
    },
    {
      'date': '2022-09-07 00:00:00',
      'value': -0.4144019043840509
    },
    {
      'date': '2022-09-08 00:00:00',
      'value': -0.41811431972114377
    },
    {
      'date': '2022-09-09 00:00:00',
      'value': -0.40513503556550573
    },
    {
      'date': '2022-09-13 00:00:00',
      'value': -0.4081673137416046
    },
    {
      'date': '2022-09-14 00:00:00',
      'value': -0.4155071272706663
    },
    {
      'date': '2022-09-15 00:00:00',
      'value': -0.4097259614022162
    },
    {
      'date': '2022-09-16 00:00:00',
      'value': -0.42273358460622895
    },
    {
      'date': '2022-09-19 00:00:00',
      'value': -0.4239238246379687
    },
    {
      'date': '2022-09-20 00:00:00',
      'value': -0.41859608354351463
    },
    {
      'date': '2022-09-21 00:00:00',
      'value': -0.42562416754045396
    },
    {
      'date': '2022-09-22 00:00:00',
      'value': -0.4338141525207584
    },
    {
      'date': '2022-09-23 00:00:00',
      'value': -0.43542947827811945
    },
    {
      'date': '2022-09-26 00:00:00',
      'value': -0.4267577294754442
    },
    {
      'date': '2022-09-27 00:00:00',
      'value': -0.4132966814974353
    },
    {
      'date': '2022-09-28 00:00:00',
      'value': -0.41771757304389723
    },
    {
      'date': '2022-09-29 00:00:00',
      'value': -0.4202114093008757
    },
    {
      'date': '2022-09-30 00:00:00',
      'value': -0.42434891036359007
    },
    {
      'date': '2022-10-10 00:00:00',
      'value': -0.4407572193725735
    },
    {
      'date': '2022-10-11 00:00:00',
      'value': -0.4466800804828974
    },
    {
      'date': '2022-10-12 00:00:00',
      'value': -0.4493156119817497
    },
    {
      'date': '2022-10-13 00:00:00',
      'value': -0.46002777226740726
    },
    {
      'date': '2022-10-14 00:00:00',
      'value': -0.44903222149800215
    },
    {
      'date': '2022-10-17 00:00:00',
      'value': -0.45237622920622333
    },
    {
      'date': '2022-10-18 00:00:00',
      'value': -0.44988239294924476
    },
    {
      'date': '2022-10-19 00:00:00',
      'value': -0.46801938390908837
    },
    {
      'date': '2022-10-20 00:00:00',
      'value': -0.47592597840564516
    },
    {
      'date': '2022-10-21 00:00:00',
      'value': -0.4813387366452235
    },
    {
      'date': '2022-10-24 00:00:00',
      'value': -0.5166491909201689
    },
    {
      'date': '2022-10-25 00:00:00',
      'value': -0.5161674270977981
    },
    {
      'date': '2022-10-26 00:00:00',
      'value': -0.5118032136480858
    },
    {
      'date': '2022-10-27 00:00:00',
      'value': -0.5241873777878538
    },
    {
      'date': '2022-10-28 00:00:00',
      'value': -0.5378467991044861
    },
    {
      'date': '2022-10-31 00:00:00',
      'value': -0.5454416640689206
    },
    {
      'date': '2022-11-01 00:00:00',
      'value': -0.5141836937115652
    },
    {
      'date': '2022-11-02 00:00:00',
      'value': -0.5029047524584125
    },
    {
      'date': '2022-11-03 00:00:00',
      'value': -0.5131351489216992
    },
    {
      'date': '2022-11-04 00:00:00',
      'value': -0.48694986822342506
    },
    {
      'date': '2022-11-07 00:00:00',
      'value': -0.4803185309037323
    },
    {
      'date': '2022-11-08 00:00:00',
      'value': -0.4856179329498116
    },
    {
      'date': '2022-11-09 00:00:00',
      'value': -0.4939212741236149
    },
    {
      'date': '2022-11-10 00:00:00',
      'value': -0.49414798651061304
    },
    {
      'date': '2022-11-11 00:00:00',
      'value': -0.4623232351857625
    },
    {
      'date': '2022-11-14 00:00:00',
      'value': -0.4599710941706578
    },
    {
      'date': '2022-11-15 00:00:00',
      'value': -0.4426275965653073
    },
    {
      'date': '2022-11-16 00:00:00',
      'value': -0.44282596990393064
    },
    {
      'date': '2022-11-17 00:00:00',
      'value': -0.44840876243375755
    },
    {
      'date': '2022-11-18 00:00:00',
      'value': -0.4465950633377731
    },
    {
      'date': '2022-11-21 00:00:00',
      'value': -0.45963102559016067
    },
    {
      'date': '2022-11-22 00:00:00',
      'value': -0.463428458072378
    },
    {
      'date': '2022-11-23 00:00:00',
      'value': -0.4658372771842322
    },
    {
      'date': '2022-11-24 00:00:00',
      'value': -0.4680477229574631
    },
    {
      'date': '2022-11-25 00:00:00',
      'value': -0.4703431858758183
    },
    {
      'date': '2022-11-28 00:00:00',
      'value': -0.4730920735681696
    },
    {
      'date': '2022-11-29 00:00:00',
      'value': -0.4430526822909287
    },
    {
      'date': '2022-11-30 00:00:00',
      'value': -0.43860345169609205
    },
    {
      'date': '2022-12-01 00:00:00',
      'value': -0.4276929180718112
    },
    {
      'date': '2022-12-02 00:00:00',
      'value': -0.43010173718366534
    },
    {
      'date': '2022-12-05 00:00:00',
      'value': -0.41241817099781797
    },
    {
      'date': '2022-12-06 00:00:00',
      'value': -0.41068948904695785
    },
    {
      'date': '2022-12-07 00:00:00',
      'value': -0.41712245302802736
    },
    {
      'date': '2022-12-08 00:00:00',
      'value': -0.4066653441777425
    },
    {
      'date': '2022-12-09 00:00:00',
      'value': -0.39034205231388336
    },
    {
      'date': '2022-12-12 00:00:00',
      'value': -0.40320798027602234
    },
    {
      'date': '2022-12-13 00:00:00',
      'value': -0.3984470201490634
    },
    {
      'date': '2022-12-14 00:00:00',
      'value': -0.38773485986340583
    },
    {
      'date': '2022-12-15 00:00:00',
      'value': -0.3958114886502111
    },
    {
      'date': '2022-12-16 00:00:00',
      'value': -0.39147561424887356
    },
    {
      'date': '2022-12-19 00:00:00',
      'value': -0.3964916258112053
    },
    {
      'date': '2022-12-20 00:00:00',
      'value': -0.4127299005299403
    },
    {
      'date': '2022-12-21 00:00:00',
      'value': -0.4081389746932299
    },
    {
      'date': '2022-12-22 00:00:00',
      'value': -0.39241080284524044
    },
    {
      'date': '2022-12-23 00:00:00',
      'value': -0.3898886275398873
    },
    {
      'date': '2022-12-26 00:00:00',
      'value': -0.39561311531158794
    },
    {
      'date': '2022-12-27 00:00:00',
      'value': -0.39051208660413184
    },
    {
      'date': '2022-12-28 00:00:00',
      'value': -0.38515600646130305
    },
    {
      'date': '2022-12-29 00:00:00',
      'value': -0.38524102360642737
    },
    {
      'date': '2022-12-30 00:00:00',
      'value': -0.3853827188483011
    },
    {
      'date': '2023-01-03 00:00:00',
      'value': -0.383540680703942
    },
    {
      'date': '2023-01-04 00:00:00',
      'value': -0.37566242525575994
    },
    {
      'date': '2023-01-05 00:00:00',
      'value': -0.35744041715079217
    },
    {
      'date': '2023-01-06 00:00:00',
      'value': -0.3598775753110211
    },
    {
      'date': '2023-01-09 00:00:00',
      'value': -0.3487970073964917
    },
    {
      'date': '2023-01-10 00:00:00',
      'value': -0.35055402839572647
    },
    {
      'date': '2023-01-11 00:00:00',
      'value': -0.35010060362173046
    },
    {
      'date': '2023-01-12 00:00:00',
      'value': -0.3534162722815768
    },
    {
      'date': '2023-01-13 00:00:00',
      'value': -0.3399268852551931
    },
    {
      'date': '2023-01-16 00:00:00',
      'value': -0.3341740584351178
    },
    {
      'date': '2023-01-17 00:00:00',
      'value': -0.33904837475557575
    },
    {
      'date': '2023-01-18 00:00:00',
      'value': -0.33919006999744955
    },
    {
      'date': '2023-01-19 00:00:00',
      'value': -0.33649786040184776
    },
    {
      'date': '2023-01-20 00:00:00',
      'value': -0.3294697764049084
    },
    {
      'date': '2023-01-30 00:00:00',
      'value': -0.32544563153569306
    },
    {
      'date': '2023-01-31 00:00:00',
      'value': -0.341683906254428
    },
    {
      'date': '2023-02-01 00:00:00',
      'value': -0.3374613880465895
    },
    {
      'date': '2023-02-02 00:00:00',
      'value': -0.3407770567064358
    },
    {
      'date': '2023-02-03 00:00:00',
      'value': -0.3470116473488821
    },
    {
      'date': '2023-02-06 00:00:00',
      'value': -0.3633349392127413
    },
    {
      'date': '2023-02-07 00:00:00',
      'value': -0.36061439056876465
    },
    {
      'date': '2023-02-08 00:00:00',
      'value': -0.36398673732536063
    },
    {
      'date': '2023-02-09 00:00:00',
      'value': -0.35205599795958853
    },
    {
      'date': '2023-02-10 00:00:00',
      'value': -0.35846062289228336
    },
    {
      'date': '2023-02-13 00:00:00',
      'value': -0.3457080511236432
    },
    {
      'date': '2023-02-14 00:00:00',
      'value': -0.3521976932014624
    },
    {
      'date': '2023-02-15 00:00:00',
      'value': -0.3570720095219203
    },
    {
      'date': '2023-02-16 00:00:00',
      'value': -0.35565505710318257
    },
    {
      'date': '2023-02-17 00:00:00',
      'value': -0.3616629353586307
    },
    {
      'date': '2023-02-20 00:00:00',
      'value': -0.350383994105478
    },
    {
      'date': '2023-02-21 00:00:00',
      'value': -0.3600759486496443
    },
    {
      'date': '2023-02-22 00:00:00',
      'value': -0.36639555643721494
    },
    {
      'date': '2023-02-23 00:00:00',
      'value': -0.3678691869527022
    },
    {
      'date': '2023-02-24 00:00:00',
      'value': -0.37869470343185874
    },
    {
      'date': '2023-02-27 00:00:00',
      'value': -0.37399042140164934
    },
    {
      'date': '2023-02-28 00:00:00',
      'value': -0.3761158500297561
    },
    {
      'date': '2023-03-01 00:00:00',
      'value': -0.3576671295377902
    },
    {
      'date': '2023-03-02 00:00:00',
      'value': -0.36217303822937624
    },
    {
      'date': '2023-03-03 00:00:00',
      'value': -0.35993425340777063
    }
  ],
  'benchmarkName': '沪深300',
  'benchmarkPrice': [
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-05 00:00:00',
      'close': 3298.1412
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-06 00:00:00',
      'close': 3262.8808
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-07 00:00:00',
      'close': 3277.6438
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-10 00:00:00',
      'close': 3230.0681
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-11 00:00:00',
      'close': 3224.2116
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-12 00:00:00',
      'close': 3202.0248
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-13 00:00:00',
      'close': 3236.5662
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-14 00:00:00',
      'close': 3242.0902
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-17 00:00:00',
      'close': 3204.9224
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-18 00:00:00',
      'close': 3269.4319
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-19 00:00:00',
      'close': 3312.4823
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-20 00:00:00',
      'close': 3310.1258
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-21 00:00:00',
      'close': 3410.4856
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-25 00:00:00',
      'close': 3379.8043
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-26 00:00:00',
      'close': 3417.2413
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-27 00:00:00',
      'close': 3403.5902
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-09-28 00:00:00',
      'close': 3438.8649
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-08 00:00:00',
      'close': 3290.8988
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-09 00:00:00',
      'close': 3288.6906
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-10 00:00:00',
      'close': 3281.5978
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-11 00:00:00',
      'close': 3124.1139
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-12 00:00:00',
      'close': 3170.7262
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-15 00:00:00',
      'close': 3126.4516
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-16 00:00:00',
      'close': 3100.9738
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-17 00:00:00',
      'close': 3118.2463
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-18 00:00:00',
      'close': 3044.3918
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-19 00:00:00',
      'close': 3134.9455
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-22 00:00:00',
      'close': 3270.2732
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-23 00:00:00',
      'close': 3183.4257
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-24 00:00:00',
      'close': 3188.2018
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-25 00:00:00',
      'close': 3194.3084
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-26 00:00:00',
      'close': 3173.635
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-29 00:00:00',
      'close': 3076.8889
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-30 00:00:00',
      'close': 3110.2605
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-10-31 00:00:00',
      'close': 3153.8234
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-01 00:00:00',
      'close': 3177.0338
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-02 00:00:00',
      'close': 3290.2455
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-05 00:00:00',
      'close': 3262.8351
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-06 00:00:00',
      'close': 3243.1504
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-07 00:00:00',
      'close': 3221.9101
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-08 00:00:00',
      'close': 3212.7737
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-09 00:00:00',
      'close': 3167.4442
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-12 00:00:00',
      'close': 3205.1407
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-13 00:00:00',
      'close': 3237.3823
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-14 00:00:00',
      'close': 3204.9427
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-15 00:00:00',
      'close': 3242.3715
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-16 00:00:00',
      'close': 3257.6735
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-19 00:00:00',
      'close': 3294.6031
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-20 00:00:00',
      'close': 3218.4076
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-21 00:00:00',
      'close': 3226.4918
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-22 00:00:00',
      'close': 3214.4273
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-23 00:00:00',
      'close': 3143.4752
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-26 00:00:00',
      'close': 3141.2434
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-27 00:00:00',
      'close': 3137.2413
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-28 00:00:00',
      'close': 3178.9326
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-29 00:00:00',
      'close': 3137.6542
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-11-30 00:00:00',
      'close': 3172.69
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-03 00:00:00',
      'close': 3260.9502
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-04 00:00:00',
      'close': 3267.7095
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-05 00:00:00',
      'close': 3252.0041
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-06 00:00:00',
      'close': 3181.673
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-07 00:00:00',
      'close': 3181.5646
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-10 00:00:00',
      'close': 3144.7631
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-11 00:00:00',
      'close': 3159.8158
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-12 00:00:00',
      'close': 3170.6092
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-13 00:00:00',
      'close': 3219.6924
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-14 00:00:00',
      'close': 3165.9109
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-17 00:00:00',
      'close': 3161.1966
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-18 00:00:00',
      'close': 3128.4265
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-19 00:00:00',
      'close': 3091.1255
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-20 00:00:00',
      'close': 3067.4169
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-21 00:00:00',
      'close': 3029.3951
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-24 00:00:00',
      'close': 3038.1981
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-25 00:00:00',
      'close': 3017.2815
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-26 00:00:00',
      'close': 3002.0327
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-27 00:00:00',
      'close': 2990.5057
    },
    {
      'orderBookId': '000300.SH',
      'date': '2018-12-28 00:00:00',
      'close': 3010.6536
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-02 00:00:00',
      'close': 2969.5353
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-03 00:00:00',
      'close': 2964.8421
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-04 00:00:00',
      'close': 3035.8741
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-07 00:00:00',
      'close': 3054.303
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-08 00:00:00',
      'close': 3047.7035
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-09 00:00:00',
      'close': 3078.4759
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-10 00:00:00',
      'close': 3072.6864
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-11 00:00:00',
      'close': 3094.7782
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-14 00:00:00',
      'close': 3067.7845
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-15 00:00:00',
      'close': 3127.9904
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-16 00:00:00',
      'close': 3128.6517
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-17 00:00:00',
      'close': 3111.4168
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-18 00:00:00',
      'close': 3168.1739
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-21 00:00:00',
      'close': 3185.6364
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-22 00:00:00',
      'close': 3143.3171
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-23 00:00:00',
      'close': 3141.0532
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-24 00:00:00',
      'close': 3158.7817
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-25 00:00:00',
      'close': 3184.4696
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-28 00:00:00',
      'close': 3183.7777
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-29 00:00:00',
      'close': 3193.9698
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-30 00:00:00',
      'close': 3168.4829
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-01-31 00:00:00',
      'close': 3201.6331
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-01 00:00:00',
      'close': 3247.3971
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-11 00:00:00',
      'close': 3306.4725
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-12 00:00:00',
      'close': 3330.3353
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-13 00:00:00',
      'close': 3397.0276
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-14 00:00:00',
      'close': 3402.1403
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-15 00:00:00',
      'close': 3338.7047
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-18 00:00:00',
      'close': 3445.7448
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-19 00:00:00',
      'close': 3439.6078
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-20 00:00:00',
      'close': 3451.9273
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-21 00:00:00',
      'close': 3442.7056
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-22 00:00:00',
      'close': 3520.1182
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-25 00:00:00',
      'close': 3729.4831
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-26 00:00:00',
      'close': 3684.6935
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-27 00:00:00',
      'close': 3678.3921
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-02-28 00:00:00',
      'close': 3669.3703
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-01 00:00:00',
      'close': 3749.7143
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-04 00:00:00',
      'close': 3794.104
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-05 00:00:00',
      'close': 3816.0132
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-06 00:00:00',
      'close': 3848.0903
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-07 00:00:00',
      'close': 3808.8497
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-08 00:00:00',
      'close': 3657.579
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-11 00:00:00',
      'close': 3729.9546
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-12 00:00:00',
      'close': 3755.3519
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-13 00:00:00',
      'close': 3724.1941
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-14 00:00:00',
      'close': 3698.4858
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-15 00:00:00',
      'close': 3745.005
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-18 00:00:00',
      'close': 3851.7479
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-19 00:00:00',
      'close': 3833.9626
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-20 00:00:00',
      'close': 3835.4397
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-21 00:00:00',
      'close': 3836.8913
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-22 00:00:00',
      'close': 3833.8013
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-25 00:00:00',
      'close': 3742.8252
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-26 00:00:00',
      'close': 3700.4388
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-27 00:00:00',
      'close': 3743.3878
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-28 00:00:00',
      'close': 3728.3953
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-03-29 00:00:00',
      'close': 3872.3412
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-01 00:00:00',
      'close': 3973.928
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-02 00:00:00',
      'close': 3971.2852
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-03 00:00:00',
      'close': 4022.1566
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-04 00:00:00',
      'close': 4062.2309
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-08 00:00:00',
      'close': 4057.2286
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-09 00:00:00',
      'close': 4075.4301
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-10 00:00:00',
      'close': 4085.847
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-11 00:00:00',
      'close': 3997.5778
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-12 00:00:00',
      'close': 3988.6168
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-15 00:00:00',
      'close': 3975.5244
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-16 00:00:00',
      'close': 4085.7891
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-17 00:00:00',
      'close': 4087.2398
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-18 00:00:00',
      'close': 4072.0753
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-19 00:00:00',
      'close': 4120.6078
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-22 00:00:00',
      'close': 4025.6109
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-23 00:00:00',
      'close': 4019.0053
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-24 00:00:00',
      'close': 4030.0887
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-25 00:00:00',
      'close': 3941.816
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-26 00:00:00',
      'close': 3889.2748
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-29 00:00:00',
      'close': 3900.3339
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-04-30 00:00:00',
      'close': 3913.211
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-06 00:00:00',
      'close': 3684.6168
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-07 00:00:00',
      'close': 3720.6684
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-08 00:00:00',
      'close': 3667.4574
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-09 00:00:00',
      'close': 3599.7001
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-10 00:00:00',
      'close': 3730.4513
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-13 00:00:00',
      'close': 3668.7255
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-14 00:00:00',
      'close': 3645.1503
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-15 00:00:00',
      'close': 3727.0923
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-16 00:00:00',
      'close': 3743.9635
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-17 00:00:00',
      'close': 3648.7609
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-20 00:00:00',
      'close': 3617.7924
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-21 00:00:00',
      'close': 3666.7762
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-22 00:00:00',
      'close': 3649.3796
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-23 00:00:00',
      'close': 3583.9646
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-24 00:00:00',
      'close': 3593.9139
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-27 00:00:00',
      'close': 3637.1971
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-28 00:00:00',
      'close': 3672.2605
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-29 00:00:00',
      'close': 3663.909
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-30 00:00:00',
      'close': 3641.1833
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-05-31 00:00:00',
      'close': 3629.7893
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-03 00:00:00',
      'close': 3632.0127
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-04 00:00:00',
      'close': 3598.4666
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-05 00:00:00',
      'close': 3597.105
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-06 00:00:00',
      'close': 3564.6778
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-10 00:00:00',
      'close': 3610.7435
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-11 00:00:00',
      'close': 3719.2759
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-12 00:00:00',
      'close': 3691.0957
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-13 00:00:00',
      'close': 3685.3933
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-14 00:00:00',
      'close': 3654.8799
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-17 00:00:00',
      'close': 3654.8248
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-18 00:00:00',
      'close': 3667.6185
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-19 00:00:00',
      'close': 3715.9381
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-20 00:00:00',
      'close': 3828.5183
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-21 00:00:00',
      'close': 3833.9383
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-24 00:00:00',
      'close': 3841.2659
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-25 00:00:00',
      'close': 3801.3098
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-26 00:00:00',
      'close': 3794.331
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-27 00:00:00',
      'close': 3834.8172
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-06-28 00:00:00',
      'close': 3825.5873
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-01 00:00:00',
      'close': 3935.8116
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-02 00:00:00',
      'close': 3937.1691
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-03 00:00:00',
      'close': 3893.5341
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-04 00:00:00',
      'close': 3873.1019
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-05 00:00:00',
      'close': 3893.2025
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-08 00:00:00',
      'close': 3802.7897
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-09 00:00:00',
      'close': 3793.1297
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-10 00:00:00',
      'close': 3786.739
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-11 00:00:00',
      'close': 3785.221
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-12 00:00:00',
      'close': 3808.7311
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-15 00:00:00',
      'close': 3824.1878
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-16 00:00:00',
      'close': 3806.8449
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-17 00:00:00',
      'close': 3804.6384
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-18 00:00:00',
      'close': 3768.4019
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-19 00:00:00',
      'close': 3807.9551
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-22 00:00:00',
      'close': 3781.6832
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-23 00:00:00',
      'close': 3789.9135
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-24 00:00:00',
      'close': 3819.8325
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-25 00:00:00',
      'close': 3851.0665
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-26 00:00:00',
      'close': 3858.5688
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-29 00:00:00',
      'close': 3854.2704
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-30 00:00:00',
      'close': 3870.3176
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-07-31 00:00:00',
      'close': 3835.3589
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-01 00:00:00',
      'close': 3803.4694
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-02 00:00:00',
      'close': 3747.4379
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-05 00:00:00',
      'close': 3675.6884
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-06 00:00:00',
      'close': 3636.3289
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-07 00:00:00',
      'close': 3621.431
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-08 00:00:00',
      'close': 3669.2936
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-09 00:00:00',
      'close': 3633.5296
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-12 00:00:00',
      'close': 3699.1047
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-13 00:00:00',
      'close': 3665.7515
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-14 00:00:00',
      'close': 3682.4015
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-15 00:00:00',
      'close': 3694.0006
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-16 00:00:00',
      'close': 3710.5386
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-19 00:00:00',
      'close': 3791.0946
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-20 00:00:00',
      'close': 3787.7324
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-21 00:00:00',
      'close': 3781.7579
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-22 00:00:00',
      'close': 3793.5061
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-23 00:00:00',
      'close': 3820.8638
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-26 00:00:00',
      'close': 3765.9105
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-27 00:00:00',
      'close': 3816.9459
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-28 00:00:00',
      'close': 3802.5844
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-29 00:00:00',
      'close': 3790.1867
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-08-30 00:00:00',
      'close': 3799.5863
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-02 00:00:00',
      'close': 3848.3198
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-03 00:00:00',
      'close': 3853.6106
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-04 00:00:00',
      'close': 3886.0012
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-05 00:00:00',
      'close': 3925.323
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-06 00:00:00',
      'close': 3948.5075
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-09 00:00:00',
      'close': 3972.9484
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-10 00:00:00',
      'close': 3959.265
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-11 00:00:00',
      'close': 3930.0999
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-12 00:00:00',
      'close': 3972.3799
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-16 00:00:00',
      'close': 3957.7154
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-17 00:00:00',
      'close': 3891.2208
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-18 00:00:00',
      'close': 3910.0837
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-19 00:00:00',
      'close': 3924.3823
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-20 00:00:00',
      'close': 3935.6511
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-23 00:00:00',
      'close': 3890.6616
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-24 00:00:00',
      'close': 3901.0758
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-25 00:00:00',
      'close': 3870.9837
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-26 00:00:00',
      'close': 3841.1388
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-27 00:00:00',
      'close': 3852.6534
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-09-30 00:00:00',
      'close': 3814.5282
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-08 00:00:00',
      'close': 3837.6791
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-09 00:00:00',
      'close': 3843.2392
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-10 00:00:00',
      'close': 3874.6391
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-11 00:00:00',
      'close': 3911.7253
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-14 00:00:00',
      'close': 3953.2411
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-15 00:00:00',
      'close': 3936.2498
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-16 00:00:00',
      'close': 3922.6854
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-17 00:00:00',
      'close': 3925.2216
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-18 00:00:00',
      'close': 3869.3777
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-21 00:00:00',
      'close': 3880.8398
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-22 00:00:00',
      'close': 3895.8809
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-23 00:00:00',
      'close': 3871.0848
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-24 00:00:00',
      'close': 3870.6678
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-25 00:00:00',
      'close': 3896.7923
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-28 00:00:00',
      'close': 3926.585
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-29 00:00:00',
      'close': 3910.226
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-30 00:00:00',
      'close': 3891.2255
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-10-31 00:00:00',
      'close': 3886.7519
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-01 00:00:00',
      'close': 3952.3872
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-04 00:00:00',
      'close': 3978.1216
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-05 00:00:00',
      'close': 4002.8128
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-06 00:00:00',
      'close': 3984.8816
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-07 00:00:00',
      'close': 3991.8749
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-08 00:00:00',
      'close': 3973.0107
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-11 00:00:00',
      'close': 3902.9783
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-12 00:00:00',
      'close': 3903.6888
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-13 00:00:00',
      'close': 3899.9815
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-14 00:00:00',
      'close': 3905.857
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-15 00:00:00',
      'close': 3877.0892
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-18 00:00:00',
      'close': 3907.9291
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-19 00:00:00',
      'close': 3947.0392
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-20 00:00:00',
      'close': 3907.8641
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-21 00:00:00',
      'close': 3889.598
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-22 00:00:00',
      'close': 3849.9948
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-25 00:00:00',
      'close': 3878.2061
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-26 00:00:00',
      'close': 3891.6533
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-27 00:00:00',
      'close': 3875.6186
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-28 00:00:00',
      'close': 3862.3029
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-11-29 00:00:00',
      'close': 3828.6706
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-02 00:00:00',
      'close': 3836.0589
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-03 00:00:00',
      'close': 3851.0873
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-04 00:00:00',
      'close': 3849.819
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-05 00:00:00',
      'close': 3879.3638
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-06 00:00:00',
      'close': 3902.3853
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-09 00:00:00',
      'close': 3895.4468
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-10 00:00:00',
      'close': 3900.3843
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-11 00:00:00',
      'close': 3902.7492
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-12 00:00:00',
      'close': 3891.0242
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-13 00:00:00',
      'close': 3968.2211
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-16 00:00:00',
      'close': 3987.5464
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-17 00:00:00',
      'close': 4041.7996
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-18 00:00:00',
      'close': 4032.7826
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-19 00:00:00',
      'close': 4027.1495
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-20 00:00:00',
      'close': 4017.2527
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-23 00:00:00',
      'close': 3967.0962
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-24 00:00:00',
      'close': 3992.9581
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-25 00:00:00',
      'close': 3990.8671
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-26 00:00:00',
      'close': 4025.9879
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-27 00:00:00',
      'close': 4022.0278
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-30 00:00:00',
      'close': 4081.6334
    },
    {
      'orderBookId': '000300.SH',
      'date': '2019-12-31 00:00:00',
      'close': 4096.5821
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-02 00:00:00',
      'close': 4152.2408
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-03 00:00:00',
      'close': 4144.9649
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-06 00:00:00',
      'close': 4129.2954
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-07 00:00:00',
      'close': 4160.2274
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-08 00:00:00',
      'close': 4112.3172
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-09 00:00:00',
      'close': 4164.3697
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-10 00:00:00',
      'close': 4163.1849
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-13 00:00:00',
      'close': 4203.9883
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-14 00:00:00',
      'close': 4189.8862
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-15 00:00:00',
      'close': 4166.7344
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-16 00:00:00',
      'close': 4149.0434
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-17 00:00:00',
      'close': 4154.853
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-20 00:00:00',
      'close': 4185.8304
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-21 00:00:00',
      'close': 4114.3085
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-22 00:00:00',
      'close': 4131.9311
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-01-23 00:00:00',
      'close': 4003.9013
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-03 00:00:00',
      'close': 3688.3578
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-04 00:00:00',
      'close': 3785.6376
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-05 00:00:00',
      'close': 3828.5272
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-06 00:00:00',
      'close': 3899.7751
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-07 00:00:00',
      'close': 3899.8693
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-10 00:00:00',
      'close': 3916.0052
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-11 00:00:00',
      'close': 3952.4643
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-12 00:00:00',
      'close': 3984.4325
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-13 00:00:00',
      'close': 3959.9188
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-14 00:00:00',
      'close': 3987.7342
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-17 00:00:00',
      'close': 4077.4241
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-18 00:00:00',
      'close': 4057.5108
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-19 00:00:00',
      'close': 4051.3107
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-20 00:00:00',
      'close': 4144.6561
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-21 00:00:00',
      'close': 4149.4903
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-24 00:00:00',
      'close': 4132.8388
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-25 00:00:00',
      'close': 4123.8543
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-26 00:00:00',
      'close': 4073.0152
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-27 00:00:00',
      'close': 4084.8759
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-02-28 00:00:00',
      'close': 3940.0488
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-02 00:00:00',
      'close': 4069.6662
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-03 00:00:00',
      'close': 4091.3615
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-04 00:00:00',
      'close': 4115.0524
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-05 00:00:00',
      'close': 4206.7251
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-06 00:00:00',
      'close': 4138.5072
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-09 00:00:00',
      'close': 3997.1325
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-10 00:00:00',
      'close': 4082.7315
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-11 00:00:00',
      'close': 4028.4289
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-12 00:00:00',
      'close': 3950.9111
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-13 00:00:00',
      'close': 3895.3128
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-16 00:00:00',
      'close': 3727.8398
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-17 00:00:00',
      'close': 3709.6822
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-18 00:00:00',
      'close': 3636.2565
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-19 00:00:00',
      'close': 3589.0926
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-20 00:00:00',
      'close': 3653.2239
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-23 00:00:00',
      'close': 3530.3058
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-24 00:00:00',
      'close': 3625.1146
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-25 00:00:00',
      'close': 3722.5181
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-26 00:00:00',
      'close': 3698.0472
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-27 00:00:00',
      'close': 3710.0605
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-30 00:00:00',
      'close': 3674.1108
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-03-31 00:00:00',
      'close': 3686.1551
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-01 00:00:00',
      'close': 3675.0758
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-02 00:00:00',
      'close': 3734.5306
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-03 00:00:00',
      'close': 3713.2183
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-07 00:00:00',
      'close': 3798.0214
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-08 00:00:00',
      'close': 3780.3445
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-09 00:00:00',
      'close': 3792.8105
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-10 00:00:00',
      'close': 3769.1782
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-13 00:00:00',
      'close': 3753.2566
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-14 00:00:00',
      'close': 3825.6991
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-15 00:00:00',
      'close': 3797.3623
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-16 00:00:00',
      'close': 3802.3806
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-17 00:00:00',
      'close': 3839.4871
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-20 00:00:00',
      'close': 3853.4551
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-21 00:00:00',
      'close': 3808.0474
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-22 00:00:00',
      'close': 3839.3834
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-23 00:00:00',
      'close': 3829.7525
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-24 00:00:00',
      'close': 3796.9721
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-27 00:00:00',
      'close': 3822.769
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-28 00:00:00',
      'close': 3849.1465
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-29 00:00:00',
      'close': 3867.032
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-04-30 00:00:00',
      'close': 3912.5772
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-06 00:00:00',
      'close': 3936.2539
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-07 00:00:00',
      'close': 3924.8946
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-08 00:00:00',
      'close': 3963.6217
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-11 00:00:00',
      'close': 3960.1803
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-12 00:00:00',
      'close': 3960.2378
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-13 00:00:00',
      'close': 3968.2529
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-14 00:00:00',
      'close': 3925.2177
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-15 00:00:00',
      'close': 3912.8159
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-18 00:00:00',
      'close': 3922.9117
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-19 00:00:00',
      'close': 3956.2495
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-20 00:00:00',
      'close': 3935.222
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-21 00:00:00',
      'close': 3913.7949
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-22 00:00:00',
      'close': 3824.064
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-25 00:00:00',
      'close': 3829.3245
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-26 00:00:00',
      'close': 3872.7701
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-27 00:00:00',
      'close': 3845.6135
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-28 00:00:00',
      'close': 3856.6324
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-05-29 00:00:00',
      'close': 3867.0232
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-01 00:00:00',
      'close': 3971.3402
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-02 00:00:00',
      'close': 3983.5677
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-03 00:00:00',
      'close': 3983.6477
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-04 00:00:00',
      'close': 3982.1851
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-05 00:00:00',
      'close': 4001.2509
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-08 00:00:00',
      'close': 4021.9549
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-09 00:00:00',
      'close': 4047.0293
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-10 00:00:00',
      'close': 4039.7051
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-11 00:00:00',
      'close': 3995.8846
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-12 00:00:00',
      'close': 4003.0829
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-15 00:00:00',
      'close': 3954.9883
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-16 00:00:00',
      'close': 4014.5702
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-17 00:00:00',
      'close': 4017.5941
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-18 00:00:00',
      'close': 4044.3842
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-19 00:00:00',
      'close': 4098.7095
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-22 00:00:00',
      'close': 4102.0459
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-23 00:00:00',
      'close': 4121.7944
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-24 00:00:00',
      'close': 4138.9895
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-29 00:00:00',
      'close': 4109.7164
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-06-30 00:00:00',
      'close': 4163.9637
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-01 00:00:00',
      'close': 4247.7835
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-02 00:00:00',
      'close': 4335.8445
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-03 00:00:00',
      'close': 4419.5955
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-06 00:00:00',
      'close': 4670.0949
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-07 00:00:00',
      'close': 4698.1264
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-08 00:00:00',
      'close': 4774.0042
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-09 00:00:00',
      'close': 4840.7712
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-10 00:00:00',
      'close': 4753.1333
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-13 00:00:00',
      'close': 4852.9612
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-14 00:00:00',
      'close': 4806.6902
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-15 00:00:00',
      'close': 4744.4687
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-16 00:00:00',
      'close': 4516.2532
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-17 00:00:00',
      'close': 4544.7007
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-20 00:00:00',
      'close': 4680.3046
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-21 00:00:00',
      'close': 4691.0425
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-22 00:00:00',
      'close': 4714.4454
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-23 00:00:00',
      'close': 4712.4357
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-24 00:00:00',
      'close': 4505.5906
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-27 00:00:00',
      'close': 4528.45
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-28 00:00:00',
      'close': 4568.2576
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-29 00:00:00',
      'close': 4679.008
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-30 00:00:00',
      'close': 4656.1506
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-07-31 00:00:00',
      'close': 4695.0462
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-03 00:00:00',
      'close': 4771.3108
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-04 00:00:00',
      'close': 4775.8024
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-05 00:00:00',
      'close': 4777.1089
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-06 00:00:00',
      'close': 4762.7642
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-07 00:00:00',
      'close': 4707.9262
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-10 00:00:00',
      'close': 4724.8697
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-11 00:00:00',
      'close': 4681.7837
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-12 00:00:00',
      'close': 4647.6446
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-13 00:00:00',
      'close': 4635.7126
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-14 00:00:00',
      'close': 4704.6288
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-17 00:00:00',
      'close': 4815.2261
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-18 00:00:00',
      'close': 4812.7564
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-19 00:00:00',
      'close': 4740.6784
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-20 00:00:00',
      'close': 4679.1544
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-21 00:00:00',
      'close': 4718.8431
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-24 00:00:00',
      'close': 4755.8491
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-25 00:00:00',
      'close': 4761.9507
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-26 00:00:00',
      'close': 4706.1302
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-27 00:00:00',
      'close': 4731.3451
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-28 00:00:00',
      'close': 4844.2652
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-08-31 00:00:00',
      'close': 4816.2153
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-01 00:00:00',
      'close': 4842.1223
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-02 00:00:00',
      'close': 4843.887
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-03 00:00:00',
      'close': 4817.0952
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-04 00:00:00',
      'close': 4770.219
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-07 00:00:00',
      'close': 4669.3677
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-08 00:00:00',
      'close': 4694.3894
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-09 00:00:00',
      'close': 4584.5887
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-10 00:00:00',
      'close': 4581.9775
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-11 00:00:00',
      'close': 4627.2826
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-14 00:00:00',
      'close': 4651.0507
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-15 00:00:00',
      'close': 4688.4826
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-16 00:00:00',
      'close': 4657.3584
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-17 00:00:00',
      'close': 4632.7142
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-18 00:00:00',
      'close': 4737.0887
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-21 00:00:00',
      'close': 4691.4281
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-22 00:00:00',
      'close': 4635.7608
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-23 00:00:00',
      'close': 4652.3273
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-24 00:00:00',
      'close': 4563.0657
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-25 00:00:00',
      'close': 4570.0216
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-28 00:00:00',
      'close': 4581.9085
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-29 00:00:00',
      'close': 4591.7993
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-09-30 00:00:00',
      'close': 4587.3953
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-09 00:00:00',
      'close': 4681.1412
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-12 00:00:00',
      'close': 4823.1578
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-13 00:00:00',
      'close': 4839.201
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-14 00:00:00',
      'close': 4807.1021
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-15 00:00:00',
      'close': 4798.7361
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-16 00:00:00',
      'close': 4791.676
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-19 00:00:00',
      'close': 4755.4879
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-20 00:00:00',
      'close': 4793.4672
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-21 00:00:00',
      'close': 4792.8284
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-22 00:00:00',
      'close': 4777.9845
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-23 00:00:00',
      'close': 4718.4881
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-26 00:00:00',
      'close': 4691.2359
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-27 00:00:00',
      'close': 4699.2792
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-28 00:00:00',
      'close': 4737.2718
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-29 00:00:00',
      'close': 4772.9198
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-10-30 00:00:00',
      'close': 4695.3338
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-02 00:00:00',
      'close': 4720.8313
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-03 00:00:00',
      'close': 4777.5608
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-04 00:00:00',
      'close': 4813.6564
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-05 00:00:00',
      'close': 4885.1118
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-06 00:00:00',
      'close': 4885.7178
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-09 00:00:00',
      'close': 4981.3497
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-10 00:00:00',
      'close': 4953.8756
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-11 00:00:00',
      'close': 4904.8981
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-12 00:00:00',
      'close': 4908.463
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-13 00:00:00',
      'close': 4856.8513
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-16 00:00:00',
      'close': 4904.1716
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-17 00:00:00',
      'close': 4894.786
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-18 00:00:00',
      'close': 4891.6716
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-19 00:00:00',
      'close': 4927.9891
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-20 00:00:00',
      'close': 4943.2882
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-23 00:00:00',
      'close': 5005.0273
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-24 00:00:00',
      'close': 4974.2855
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-25 00:00:00',
      'close': 4910.7
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-26 00:00:00',
      'close': 4919.5912
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-27 00:00:00',
      'close': 4980.765
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-11-30 00:00:00',
      'close': 4960.2519
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-01 00:00:00',
      'close': 5067.0983
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-02 00:00:00',
      'close': 5067.1447
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-03 00:00:00',
      'close': 5057.0603
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-04 00:00:00',
      'close': 5065.9163
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-07 00:00:00',
      'close': 5022.2351
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-08 00:00:00',
      'close': 5009.8786
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-09 00:00:00',
      'close': 4942.6986
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-10 00:00:00',
      'close': 4940.5249
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-11 00:00:00',
      'close': 4889.6292
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-14 00:00:00',
      'close': 4934.8352
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-15 00:00:00',
      'close': 4945.1
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-16 00:00:00',
      'close': 4953.867
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-17 00:00:00',
      'close': 5017.4784
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-18 00:00:00',
      'close': 4999.9678
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-21 00:00:00',
      'close': 5046.8396
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-22 00:00:00',
      'close': 4964.7727
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-23 00:00:00',
      'close': 5007.1235
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-24 00:00:00',
      'close': 5000.0154
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-25 00:00:00',
      'close': 5042.0137
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-28 00:00:00',
      'close': 5064.4147
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-29 00:00:00',
      'close': 5042.9361
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-30 00:00:00',
      'close': 5113.7105
    },
    {
      'orderBookId': '000300.SH',
      'date': '2020-12-31 00:00:00',
      'close': 5211.2885
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-04 00:00:00',
      'close': 5267.7181
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-05 00:00:00',
      'close': 5368.5049
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-06 00:00:00',
      'close': 5417.6677
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-07 00:00:00',
      'close': 5513.6568
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-08 00:00:00',
      'close': 5495.4306
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-11 00:00:00',
      'close': 5441.1583
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-12 00:00:00',
      'close': 5596.3525
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-13 00:00:00',
      'close': 5577.9711
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-14 00:00:00',
      'close': 5470.4563
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-15 00:00:00',
      'close': 5458.0812
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-18 00:00:00',
      'close': 5518.5205
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-19 00:00:00',
      'close': 5437.5234
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-20 00:00:00',
      'close': 5476.4336
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-21 00:00:00',
      'close': 5564.9693
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-22 00:00:00',
      'close': 5569.776
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-25 00:00:00',
      'close': 5625.9232
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-26 00:00:00',
      'close': 5512.9678
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-27 00:00:00',
      'close': 5528.0034
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-28 00:00:00',
      'close': 5377.1427
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-01-29 00:00:00',
      'close': 5351.9646
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-01 00:00:00',
      'close': 5417.6484
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-02 00:00:00',
      'close': 5501.0915
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-03 00:00:00',
      'close': 5485.2008
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-04 00:00:00',
      'close': 5473.9475
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-05 00:00:00',
      'close': 5483.414
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-08 00:00:00',
      'close': 5564.5618
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-09 00:00:00',
      'close': 5686.2502
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-10 00:00:00',
      'close': 5807.7191
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-18 00:00:00',
      'close': 5768.3814
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-19 00:00:00',
      'close': 5778.842
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-22 00:00:00',
      'close': 5597.3327
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-23 00:00:00',
      'close': 5579.6681
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-24 00:00:00',
      'close': 5437.5683
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-25 00:00:00',
      'close': 5469.5584
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-02-26 00:00:00',
      'close': 5336.7609
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-01 00:00:00',
      'close': 5418.7837
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-02 00:00:00',
      'close': 5349.6301
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-03 00:00:00',
      'close': 5452.2125
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-04 00:00:00',
      'close': 5280.7058
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-05 00:00:00',
      'close': 5262.7958
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-08 00:00:00',
      'close': 5080.0246
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-09 00:00:00',
      'close': 4970.9994
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-10 00:00:00',
      'close': 5003.6121
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-11 00:00:00',
      'close': 5128.2156
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-12 00:00:00',
      'close': 5146.3786
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-15 00:00:00',
      'close': 5035.5441
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-16 00:00:00',
      'close': 5079.3624
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-17 00:00:00',
      'close': 5100.8581
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-18 00:00:00',
      'close': 5141.7681
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-19 00:00:00',
      'close': 5007.0907
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-22 00:00:00',
      'close': 5057.152
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-23 00:00:00',
      'close': 5009.2459
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-24 00:00:00',
      'close': 4928.6853
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-25 00:00:00',
      'close': 4926.3469
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-26 00:00:00',
      'close': 5037.9899
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-29 00:00:00',
      'close': 5046.8773
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-30 00:00:00',
      'close': 5094.7291
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-03-31 00:00:00',
      'close': 5048.3607
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-01 00:00:00',
      'close': 5110.7768
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-02 00:00:00',
      'close': 5161.5569
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-06 00:00:00',
      'close': 5140.3418
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-07 00:00:00',
      'close': 5103.7428
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-08 00:00:00',
      'close': 5112.2086
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-09 00:00:00',
      'close': 5035.3374
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-12 00:00:00',
      'close': 4947.7459
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-13 00:00:00',
      'close': 4939.6438
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-14 00:00:00',
      'close': 4980.6279
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-15 00:00:00',
      'close': 4948.9741
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-16 00:00:00',
      'close': 4966.1811
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-19 00:00:00',
      'close': 5087.0165
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-20 00:00:00',
      'close': 5083.3654
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-21 00:00:00',
      'close': 5098.7449
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-22 00:00:00',
      'close': 5089.2435
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-23 00:00:00',
      'close': 5135.4534
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-26 00:00:00',
      'close': 5077.2372
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-27 00:00:00',
      'close': 5090.5195
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-28 00:00:00',
      'close': 5119.2421
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-29 00:00:00',
      'close': 5164.1692
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-04-30 00:00:00',
      'close': 5123.489
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-06 00:00:00',
      'close': 5061.1244
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-07 00:00:00',
      'close': 4996.0527
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-10 00:00:00',
      'close': 4992.422
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-11 00:00:00',
      'close': 5023.0595
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-12 00:00:00',
      'close': 5044.5481
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-13 00:00:00',
      'close': 4992.9738
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-14 00:00:00',
      'close': 5110.5901
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-17 00:00:00',
      'close': 5184.9853
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-18 00:00:00',
      'close': 5187.6013
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-19 00:00:00',
      'close': 5172.272
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-20 00:00:00',
      'close': 5186.412
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-21 00:00:00',
      'close': 5134.1483
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-24 00:00:00',
      'close': 5155.5875
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-25 00:00:00',
      'close': 5318.478
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-26 00:00:00',
      'close': 5320.5927
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-27 00:00:00',
      'close': 5338.2329
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-28 00:00:00',
      'close': 5321.0886
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-05-31 00:00:00',
      'close': 5331.5696
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-01 00:00:00',
      'close': 5341.6798
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-02 00:00:00',
      'close': 5289.9736
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-03 00:00:00',
      'close': 5255.2855
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-04 00:00:00',
      'close': 5282.2772
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-07 00:00:00',
      'close': 5277.6271
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-08 00:00:00',
      'close': 5232.1165
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-09 00:00:00',
      'close': 5236.4493
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-10 00:00:00',
      'close': 5271.4661
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-11 00:00:00',
      'close': 5224.703
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-15 00:00:00',
      'close': 5166.5597
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-16 00:00:00',
      'close': 5080.4909
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-17 00:00:00',
      'close': 5101.8924
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-18 00:00:00',
      'close': 5102.4657
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-21 00:00:00',
      'close': 5090.3854
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-22 00:00:00',
      'close': 5122.1583
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-23 00:00:00',
      'close': 5147.3938
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-24 00:00:00',
      'close': 5155.9738
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-25 00:00:00',
      'close': 5239.9684
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-28 00:00:00',
      'close': 5251.7604
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-29 00:00:00',
      'close': 5190.5445
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-06-30 00:00:00',
      'close': 5224.041
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-01 00:00:00',
      'close': 5229.6642
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-02 00:00:00',
      'close': 5081.1172
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-05 00:00:00',
      'close': 5085.7924
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-06 00:00:00',
      'close': 5083.1043
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-07 00:00:00',
      'close': 5140.4899
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-08 00:00:00',
      'close': 5088.2566
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-09 00:00:00',
      'close': 5069.4361
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-12 00:00:00',
      'close': 5132.7088
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-13 00:00:00',
      'close': 5142.0991
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-14 00:00:00',
      'close': 5083.0849
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-15 00:00:00',
      'close': 5151.4626
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-16 00:00:00',
      'close': 5094.7727
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-19 00:00:00',
      'close': 5113.4945
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-20 00:00:00',
      'close': 5108.9941
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-21 00:00:00',
      'close': 5144.0428
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-22 00:00:00',
      'close': 5151.7517
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-23 00:00:00',
      'close': 5089.2282
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-26 00:00:00',
      'close': 4925.299
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-27 00:00:00',
      'close': 4751.313
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-28 00:00:00',
      'close': 4760.4826
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-29 00:00:00',
      'close': 4850.2746
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-07-30 00:00:00',
      'close': 4811.1695
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-02 00:00:00',
      'close': 4933.736
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-03 00:00:00',
      'close': 4934.4583
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-04 00:00:00',
      'close': 4978.8479
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-05 00:00:00',
      'close': 4948.6703
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-06 00:00:00',
      'close': 4921.5647
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-09 00:00:00',
      'close': 4985.5627
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-10 00:00:00',
      'close': 5043.148
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-11 00:00:00',
      'close': 5015.3406
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-12 00:00:00',
      'close': 4973.3509
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-13 00:00:00',
      'close': 4945.9829
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-16 00:00:00',
      'close': 4941.0676
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-17 00:00:00',
      'close': 4837.4034
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-18 00:00:00',
      'close': 4894.2384
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-19 00:00:00',
      'close': 4862.1394
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-20 00:00:00',
      'close': 4769.2678
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-23 00:00:00',
      'close': 4835.8782
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-24 00:00:00',
      'close': 4888.3902
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-25 00:00:00',
      'close': 4898.1572
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-26 00:00:00',
      'close': 4801.6094
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-27 00:00:00',
      'close': 4827.0433
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-30 00:00:00',
      'close': 4813.2703
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-08-31 00:00:00',
      'close': 4805.6099
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-01 00:00:00',
      'close': 4869.4587
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-02 00:00:00',
      'close': 4869.4113
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-03 00:00:00',
      'close': 4843.0624
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-06 00:00:00',
      'close': 4933.7262
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-07 00:00:00',
      'close': 4992.8294
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-08 00:00:00',
      'close': 4972.1324
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-09 00:00:00',
      'close': 4970.0133
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-10 00:00:00',
      'close': 5013.5219
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-13 00:00:00',
      'close': 4991.6598
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-14 00:00:00',
      'close': 4917.1617
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-15 00:00:00',
      'close': 4867.3187
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-16 00:00:00',
      'close': 4807.6978
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-17 00:00:00',
      'close': 4855.9402
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-22 00:00:00',
      'close': 4821.7675
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-23 00:00:00',
      'close': 4853.1957
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-24 00:00:00',
      'close': 4849.4277
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-27 00:00:00',
      'close': 4877.3698
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-28 00:00:00',
      'close': 4883.828
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-29 00:00:00',
      'close': 4833.9281
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-09-30 00:00:00',
      'close': 4866.3826
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-08 00:00:00',
      'close': 4929.9409
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-11 00:00:00',
      'close': 4936.1918
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-12 00:00:00',
      'close': 4883.8369
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-13 00:00:00',
      'close': 4940.1089
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-14 00:00:00',
      'close': 4913.6123
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-15 00:00:00',
      'close': 4932.1084
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-18 00:00:00',
      'close': 4874.7753
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-19 00:00:00',
      'close': 4922.7232
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-20 00:00:00',
      'close': 4910.1846
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-21 00:00:00',
      'close': 4928.0156
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-22 00:00:00',
      'close': 4959.7254
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-25 00:00:00',
      'close': 4979.5235
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-26 00:00:00',
      'close': 4963.0984
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-27 00:00:00',
      'close': 4898.1644
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-28 00:00:00',
      'close': 4864.138
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-10-29 00:00:00',
      'close': 4908.7701
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-01 00:00:00',
      'close': 4890.6851
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-02 00:00:00',
      'close': 4839.8457
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-03 00:00:00',
      'close': 4821.1119
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-04 00:00:00',
      'close': 4868.7419
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-05 00:00:00',
      'close': 4842.3458
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-08 00:00:00',
      'close': 4848.1795
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-09 00:00:00',
      'close': 4846.7444
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-10 00:00:00',
      'close': 4821.1925
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-11 00:00:00',
      'close': 4898.6529
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-12 00:00:00',
      'close': 4888.3749
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-15 00:00:00',
      'close': 4882.3777
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-16 00:00:00',
      'close': 4883.3206
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-17 00:00:00',
      'close': 4885.7544
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-18 00:00:00',
      'close': 4837.6185
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-19 00:00:00',
      'close': 4890.0575
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-22 00:00:00',
      'close': 4912.399
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-23 00:00:00',
      'close': 4913.3457
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-24 00:00:00',
      'close': 4916.6579
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-25 00:00:00',
      'close': 4896.4416
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-26 00:00:00',
      'close': 4860.1265
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-29 00:00:00',
      'close': 4851.423
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-11-30 00:00:00',
      'close': 4832.026
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-01 00:00:00',
      'close': 4843.851
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-02 00:00:00',
      'close': 4856.163
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-03 00:00:00',
      'close': 4901.0175
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-06 00:00:00',
      'close': 4892.6209
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-07 00:00:00',
      'close': 4922.1015
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-08 00:00:00',
      'close': 4995.9298
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-09 00:00:00',
      'close': 5078.6901
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-10 00:00:00',
      'close': 5055.1172
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-13 00:00:00',
      'close': 5083.8007
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-14 00:00:00',
      'close': 5049.6953
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-15 00:00:00',
      'close': 5005.8991
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-16 00:00:00',
      'close': 5034.7321
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-17 00:00:00',
      'close': 4954.7599
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-20 00:00:00',
      'close': 4880.4178
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-21 00:00:00',
      'close': 4913.4853
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-22 00:00:00',
      'close': 4914.4544
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-23 00:00:00',
      'close': 4948.7389
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-24 00:00:00',
      'close': 4921.3449
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-27 00:00:00',
      'close': 4919.3238
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-28 00:00:00',
      'close': 4955.9644
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-29 00:00:00',
      'close': 4883.4804
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-30 00:00:00',
      'close': 4921.5109
    },
    {
      'orderBookId': '000300.SH',
      'date': '2021-12-31 00:00:00',
      'close': 4940.3733
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-04 00:00:00',
      'close': 4917.7653
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-05 00:00:00',
      'close': 4868.1202
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-06 00:00:00',
      'close': 4818.2318
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-07 00:00:00',
      'close': 4822.3689
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-10 00:00:00',
      'close': 4844.0451
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-11 00:00:00',
      'close': 4797.7735
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-12 00:00:00',
      'close': 4845.5787
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-13 00:00:00',
      'close': 4765.9191
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-14 00:00:00',
      'close': 4726.7317
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-17 00:00:00',
      'close': 4767.2762
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-18 00:00:00',
      'close': 4813.3472
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-19 00:00:00',
      'close': 4780.3784
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-20 00:00:00',
      'close': 4823.5091
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-21 00:00:00',
      'close': 4779.3142
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-24 00:00:00',
      'close': 4786.7377
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-25 00:00:00',
      'close': 4678.4511
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-26 00:00:00',
      'close': 4712.3109
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-27 00:00:00',
      'close': 4619.8765
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-01-28 00:00:00',
      'close': 4563.772
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-07 00:00:00',
      'close': 4634.0899
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-08 00:00:00',
      'close': 4608.7729
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-09 00:00:00',
      'close': 4652.0609
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-10 00:00:00',
      'close': 4639.8625
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-11 00:00:00',
      'close': 4601.3953
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-14 00:00:00',
      'close': 4551.6878
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-15 00:00:00',
      'close': 4600.1025
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-16 00:00:00',
      'close': 4617.9893
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-17 00:00:00',
      'close': 4629.1649
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-18 00:00:00',
      'close': 4651.2358
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-21 00:00:00',
      'close': 4634.3141
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-22 00:00:00',
      'close': 4574.1527
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-23 00:00:00',
      'close': 4623.0465
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-24 00:00:00',
      'close': 4529.3189
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-25 00:00:00',
      'close': 4573.4247
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-02-28 00:00:00',
      'close': 4581.6459
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-01 00:00:00',
      'close': 4619.6862
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-02 00:00:00',
      'close': 4578.6007
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-03 00:00:00',
      'close': 4551.6283
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-04 00:00:00',
      'close': 4496.4301
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-07 00:00:00',
      'close': 4352.7775
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-08 00:00:00',
      'close': 4265.391
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-09 00:00:00',
      'close': 4226.3463
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-10 00:00:00',
      'close': 4292.8374
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-11 00:00:00',
      'close': 4306.5217
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-14 00:00:00',
      'close': 4174.7577
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-15 00:00:00',
      'close': 3983.812
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-16 00:00:00',
      'close': 4156.081
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-17 00:00:00',
      'close': 4237.6956
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-18 00:00:00',
      'close': 4265.9017
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-21 00:00:00',
      'close': 4258.7459
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-22 00:00:00',
      'close': 4255.295
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-23 00:00:00',
      'close': 4276.5174
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-24 00:00:00',
      'close': 4251.3061
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-25 00:00:00',
      'close': 4174.5742
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-28 00:00:00',
      'close': 4148.4663
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-29 00:00:00',
      'close': 4134.1441
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-30 00:00:00',
      'close': 4254.0989
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-03-31 00:00:00',
      'close': 4222.5968
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-01 00:00:00',
      'close': 4276.158
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-06 00:00:00',
      'close': 4263.8411
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-07 00:00:00',
      'close': 4209.0998
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-08 00:00:00',
      'close': 4230.7669
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-11 00:00:00',
      'close': 4100.0703
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-12 00:00:00',
      'close': 4179.9727
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-13 00:00:00',
      'close': 4139.737
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-14 00:00:00',
      'close': 4191.5684
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-15 00:00:00',
      'close': 4188.7472
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-18 00:00:00',
      'close': 4166.3844
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-19 00:00:00',
      'close': 4134.9017
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-20 00:00:00',
      'close': 4070.7889
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-21 00:00:00',
      'close': 3995.83
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-22 00:00:00',
      'close': 4013.2498
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-25 00:00:00',
      'close': 3814.9127
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-26 00:00:00',
      'close': 3784.1198
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-27 00:00:00',
      'close': 3895.5361
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-28 00:00:00',
      'close': 3921.1073
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-04-29 00:00:00',
      'close': 4016.241
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-05 00:00:00',
      'close': 4010.2102
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-06 00:00:00',
      'close': 3908.815
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-09 00:00:00',
      'close': 3877.4364
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-10 00:00:00',
      'close': 3919.8684
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-11 00:00:00',
      'close': 3976.4231
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-12 00:00:00',
      'close': 3958.74
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-13 00:00:00',
      'close': 3988.6002
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-16 00:00:00',
      'close': 3956.5378
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-17 00:00:00',
      'close': 4005.8934
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-18 00:00:00',
      'close': 3991.9069
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-19 00:00:00',
      'close': 3999.5984
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-20 00:00:00',
      'close': 4077.5998
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-23 00:00:00',
      'close': 4053.9823
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-24 00:00:00',
      'close': 3959.1541
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-25 00:00:00',
      'close': 3983.1784
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-26 00:00:00',
      'close': 3993.0446
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-27 00:00:00',
      'close': 4001.2988
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-30 00:00:00',
      'close': 4029.0179
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-05-31 00:00:00',
      'close': 4091.5176
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-01 00:00:00',
      'close': 4083.1772
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-02 00:00:00',
      'close': 4089.5682
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-06 00:00:00',
      'close': 4166.085
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-07 00:00:00',
      'close': 4179.1285
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-08 00:00:00',
      'close': 4219.8122
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-09 00:00:00',
      'close': 4175.6747
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-10 00:00:00',
      'close': 4238.9936
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-13 00:00:00',
      'close': 4189.3527
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-14 00:00:00',
      'close': 4222.3114
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-15 00:00:00',
      'close': 4278.2178
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-16 00:00:00',
      'close': 4250.0614
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-17 00:00:00',
      'close': 4309.0444
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-20 00:00:00',
      'close': 4330.4328
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-21 00:00:00',
      'close': 4325.5657
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-22 00:00:00',
      'close': 4270.6227
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-23 00:00:00',
      'close': 4343.8781
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-24 00:00:00',
      'close': 4394.7723
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-27 00:00:00',
      'close': 4444.2639
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-28 00:00:00',
      'close': 4490.5166
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-29 00:00:00',
      'close': 4421.357
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-06-30 00:00:00',
      'close': 4485.0108
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-01 00:00:00',
      'close': 4466.7179
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-04 00:00:00',
      'close': 4496.0303
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-05 00:00:00',
      'close': 4489.5383
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-06 00:00:00',
      'close': 4423.9698
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-07 00:00:00',
      'close': 4443.4736
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-08 00:00:00',
      'close': 4428.781
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-11 00:00:00',
      'close': 4354.6167
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-12 00:00:00',
      'close': 4313.6184
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-13 00:00:00',
      'close': 4321.4617
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-14 00:00:00',
      'close': 4322.0742
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-15 00:00:00',
      'close': 4248.5273
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-18 00:00:00',
      'close': 4292.5858
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-19 00:00:00',
      'close': 4269.3401
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-20 00:00:00',
      'close': 4283.8027
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-21 00:00:00',
      'close': 4236.0578
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-22 00:00:00',
      'close': 4238.2341
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-25 00:00:00',
      'close': 4212.6441
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-26 00:00:00',
      'close': 4245.9758
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-27 00:00:00',
      'close': 4225.0357
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-28 00:00:00',
      'close': 4225.6733
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-07-29 00:00:00',
      'close': 4170.1019
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-01 00:00:00',
      'close': 4188.6784
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-02 00:00:00',
      'close': 4107.024
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-03 00:00:00',
      'close': 4066.9754
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-04 00:00:00',
      'close': 4101.5367
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-05 00:00:00',
      'close': 4156.9111
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-08 00:00:00',
      'close': 4148.0746
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-09 00:00:00',
      'close': 4156.2907
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-10 00:00:00',
      'close': 4109.7373
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-11 00:00:00',
      'close': 4193.5428
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-12 00:00:00',
      'close': 4191.152
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-15 00:00:00',
      'close': 4185.6794
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-16 00:00:00',
      'close': 4177.837
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-17 00:00:00',
      'close': 4216.9586
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-18 00:00:00',
      'close': 4180.0996
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-19 00:00:00',
      'close': 4151.0738
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-22 00:00:00',
      'close': 4181.3965
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-23 00:00:00',
      'close': 4161.0823
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-24 00:00:00',
      'close': 4082.4195
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-25 00:00:00',
      'close': 4116.2396
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-26 00:00:00',
      'close': 4107.5455
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-29 00:00:00',
      'close': 4089.5205
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-30 00:00:00',
      'close': 4075.7937
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-08-31 00:00:00',
      'close': 4078.8402
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-01 00:00:00',
      'close': 4043.7395
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-02 00:00:00',
      'close': 4023.6131
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-05 00:00:00',
      'close': 4015.4264
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-06 00:00:00',
      'close': 4052.2802
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-07 00:00:00',
      'close': 4054.983
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-08 00:00:00',
      'close': 4037.6839
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-09 00:00:00',
      'close': 4093.7874
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-13 00:00:00',
      'close': 4111.1145
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-14 00:00:00',
      'close': 4065.359
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-15 00:00:00',
      'close': 4027.1186
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-16 00:00:00',
      'close': 3932.6826
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-19 00:00:00',
      'close': 3928.0001
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-20 00:00:00',
      'close': 3932.8361
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-21 00:00:00',
      'close': 3903.7348
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-22 00:00:00',
      'close': 3869.344
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-23 00:00:00',
      'close': 3856.0212
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-26 00:00:00',
      'close': 3836.6773
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-27 00:00:00',
      'close': 3892.295
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-28 00:00:00',
      'close': 3828.7098
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-29 00:00:00',
      'close': 3827.1434
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-09-30 00:00:00',
      'close': 3804.8853
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-10 00:00:00',
      'close': 3720.9365
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-11 00:00:00',
      'close': 3727.6867
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-12 00:00:00',
      'close': 3784.3064
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-13 00:00:00',
      'close': 3752.6729
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-14 00:00:00',
      'close': 3842.4698
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-17 00:00:00',
      'close': 3846.4119
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-18 00:00:00',
      'close': 3838.2667
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-19 00:00:00',
      'close': 3776.5335
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-20 00:00:00',
      'close': 3754.9269
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-21 00:00:00',
      'close': 3742.8929
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-24 00:00:00',
      'close': 3633.3733
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-25 00:00:00',
      'close': 3627.4542
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-26 00:00:00',
      'close': 3656.9027
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-27 00:00:00',
      'close': 3631.1448
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-28 00:00:00',
      'close': 3541.3295
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-10-31 00:00:00',
      'close': 3508.7034
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-01 00:00:00',
      'close': 3634.1732
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-02 00:00:00',
      'close': 3677.8051
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-03 00:00:00',
      'close': 3647.8966
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-04 00:00:00',
      'close': 3767.1746
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-07 00:00:00',
      'close': 3775.2971
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-08 00:00:00',
      'close': 3749.3251
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-09 00:00:00',
      'close': 3714.2704
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-10 00:00:00',
      'close': 3685.6885
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-11 00:00:00',
      'close': 3788.4387
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-14 00:00:00',
      'close': 3794.0171
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-15 00:00:00',
      'close': 3865.9726
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-16 00:00:00',
      'close': 3834.3899
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-17 00:00:00',
      'close': 3818.664
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-18 00:00:00',
      'close': 3801.5686
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-21 00:00:00',
      'close': 3769.1269
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-22 00:00:00',
      'close': 3769.5727
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-23 00:00:00',
      'close': 3773.5287
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-24 00:00:00',
      'close': 3756.8082
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-25 00:00:00',
      'close': 3775.7764
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-28 00:00:00',
      'close': 3733.2424
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-29 00:00:00',
      'close': 3848.4224
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-11-30 00:00:00',
      'close': 3853.0365
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-01 00:00:00',
      'close': 3894.7687
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-02 00:00:00',
      'close': 3870.9478
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-05 00:00:00',
      'close': 3946.8759
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-06 00:00:00',
      'close': 3968.1979
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-07 00:00:00',
      'close': 3958.4409
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-08 00:00:00',
      'close': 3959.1798
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-09 00:00:00',
      'close': 3998.2442
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-12 00:00:00',
      'close': 3953.4433
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-13 00:00:00',
      'close': 3945.6813
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-14 00:00:00',
      'close': 3954.8857
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-15 00:00:00',
      'close': 3951.9885
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-16 00:00:00',
      'close': 3954.227
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-19 00:00:00',
      'close': 3893.2207
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-20 00:00:00',
      'close': 3829.0173
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-21 00:00:00',
      'close': 3830.5384
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-22 00:00:00',
      'close': 3836.028
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-23 00:00:00',
      'close': 3828.2188
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-26 00:00:00',
      'close': 3843.4887
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-27 00:00:00',
      'close': 3887.854
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-28 00:00:00',
      'close': 3871.2644
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-29 00:00:00',
      'close': 3856.7007
    },
    {
      'orderBookId': '000300.SH',
      'date': '2022-12-30 00:00:00',
      'close': 3871.6338
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-03 00:00:00',
      'close': 3887.8992
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-04 00:00:00',
      'close': 3892.9477
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-05 00:00:00',
      'close': 3968.5782
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-06 00:00:00',
      'close': 3980.8888
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-09 00:00:00',
      'close': 4013.1196
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-10 00:00:00',
      'close': 4017.4737
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-11 00:00:00',
      'close': 4010.0309
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-12 00:00:00',
      'close': 4017.8692
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-13 00:00:00',
      'close': 4074.3772
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-16 00:00:00',
      'close': 4137.9643
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-17 00:00:00',
      'close': 4137.2422
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-18 00:00:00',
      'close': 4130.3143
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-19 00:00:00',
      'close': 4156.0077
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-20 00:00:00',
      'close': 4181.5267
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-30 00:00:00',
      'close': 4201.345
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-01-31 00:00:00',
      'close': 4156.8578
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-01 00:00:00',
      'close': 4195.9332
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-02 00:00:00',
      'close': 4181.1493
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-03 00:00:00',
      'close': 4141.6319
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-06 00:00:00',
      'close': 4086.8779
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-07 00:00:00',
      'close': 4094.2335
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-08 00:00:00',
      'close': 4076.1411
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-09 00:00:00',
      'close': 4130.8565
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-10 00:00:00',
      'close': 4106.3097
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-13 00:00:00',
      'close': 4143.574
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-14 00:00:00',
      'close': 4145.2902
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-15 00:00:00',
      'close': 4123.6893
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-16 00:00:00',
      'close': 4093.4876
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-17 00:00:00',
      'close': 4034.507
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-20 00:00:00',
      'close': 4133.4896
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-21 00:00:00',
      'close': 4144.3536
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-22 00:00:00',
      'close': 4106.9506
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-23 00:00:00',
      'close': 4103.6463
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-24 00:00:00',
      'close': 4061.0457
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-27 00:00:00',
      'close': 4043.8444
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-02-28 00:00:00',
      'close': 4069.4587
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-03-01 00:00:00',
      'close': 4126.9415
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-03-02 00:00:00',
      'close': 4117.7377
    },
    {
      'orderBookId': '000300.SH',
      'date': '2023-03-03 00:00:00',
      'close': 4130.5513
    }
  ],
  'periodReturn': [
    {
      'name': '近一周',
      'fund': 0.030195219850392307,
      'average': 0.0033967739004121126,
      'rank': '132/3621'
    },
    {
      'name': '近一月',
      'fund': -0.019789948789167178,
      'average': -0.022625186288281102,
      'rank': '1690/3589'
    },
    {
      'name': '近一季',
      'fund': 0.12312282446544098,
      'average': 0.022059037559641757,
      'rank': '65/3496'
    },
    {
      'name': '近半年',
      'fund': 0.06357129402900741,
      'average': -0.0177721484518733,
      'rank': '518/3306'
    },
    {
      'name': '近一年',
      'fund': -0.023392571453279665,
      'average': -0.07969646303480352,
      'rank': '741/2871'
    },
    {
      'name': '近三年',
      'fund': 0.5056329578028116,
      'average': 0.2970960284013877,
      'rank': '188/945'
    },
    {
      'name': '近五年',
      'average': 0.6394860889955647,
      'rank': '-/545'
    },
    {
      'name': '成立以来',
      'fund': 1.258599999999983,
      'average': 0.8670708258214519,
      'rank': '101/592'
    }
  ],
  'quarterReturn': [
    {
      'name': '本季度以来',
      'fund': 0.04140538546661765,
      'average': 0.04132088638712051,
      'rank': '1771/3562'
    },
    {
      'name': '2022Q4',
      'fund': 0.06769064146113357,
      'average': -0.004382361599367715,
      'rank': '449/3394'
    },
    {
      'name': '2022Q3',
      'fund': -0.15217663508493662,
      'average': -0.12045997853663229,
      'rank': '2409/3185'
    },
    {
      'name': '2022Q2',
      'fund': 0.13201039451925345,
      'average': 0.08259776085039322,
      'rank': '555/3019'
    },
    {
      'name': '2022Q1',
      'fund': -0.1804453049370769,
      'average': -0.16381929899648362,
      'rank': '1547/2696'
    },
    {
      'name': '2021Q4',
      'fund': -0.0013534416086620205,
      'average': 0.0185139291756427,
      'rank': '1564/2385'
    },
    {
      'name': '2021Q3',
      'fund': -0.14211783439490477,
      'average': -0.030237600755186764,
      'rank': '1914/2076'
    },
    {
      'name': '2021Q2',
      'fund': 0.059431342916389296,
      'average': 0.12553506848506882,
      'rank': '1394/1878'
    },
    {
      'name': '2021Q1',
      'fund': -0.007257248525871507,
      'average': -0.036747639550515014,
      'rank': '455/1567'
    },
    {
      'name': '2020Q4',
      'fund': 0.28570787726538516,
      'average': 0.14484119549369429,
      'rank': '58/1369'
    },
    {
      'name': '2020Q3',
      'fund': 0.13289627483864397,
      'average': 0.11015847589742338,
      'rank': '409/1156'
    },
    {
      'name': '2020Q2',
      'fund': 0.3735166829540686,
      'average': 0.24014220245272225,
      'rank': '72/1039'
    },
    {
      'name': '2020Q1',
      'fund': -0.0248451432850042,
      'average': -0.008110559087302653,
      'rank': '537/935'
    },
    {
      'name': '2019Q4',
      'fund': 0.053646991321809834,
      'average': 0.09370352586175955,
      'rank': '735/866'
    },
    {
      'name': '2019Q3',
      'fund': 0.057569781553398425,
      'average': 0.06765678587782342,
      'rank': '424/827'
    },
    {
      'name': '2019Q2',
      'fund': 0.09447119375726332,
      'average': -0.015793297208518933,
      'rank': '12/747'
    },
    {
      'name': '2019Q1',
      'fund': 0.28094427903020125,
      'average': 0.25750231557332015,
      'rank': '255/682'
    },
    {
      'name': '2018Q4',
      'fund': -0.07731554160125675,
      'average': -0.10287411536267317,
      'rank': '146/644'
    }
  ],
  'yearReturn': [
    {
      'name': '今年以来',
      'fund': 0.04140538546661765,
      'average': 0.04161715867937776,
      'rank': '1769/3543'
    },
    {
      'name': '2022年度',
      'fund': -0.1601936108422075,
      'average': -0.21038574104440058,
      'rank': '676/2655'
    },
    {
      'name': '2021年度',
      'fund': -0.09894979240082402,
      'average': 0.07875968253790464,
      'rank': '1366/1551'
    },
    {
      'name': '2020年度',
      'fund': 0.9509223334014021,
      'average': 0.5898670751345011,
      'rank': '45/924'
    },
    {
      'name': '2019年度',
      'fund': 0.5622075712462775,
      'average': 0.4470093742426016,
      'rank': '162/675'
    }
  ],
  'indicators': [
    {
      'returnD': 0.030195219850392307,
      'returnA': 3.4256444482594057,
      'excess': 0.026679144582898662,
      'excessA': 2.730241970134512,
      'excessWin': 0.6,
      'posPeriod': 3,
      'posReturnRatio': 0.6,
      'maxRisePeriod': 1,
      'alphaA': 1.204169935352268,
      'beta': 1.799488456113337,
      'inNewHighRate': 0.2,
      'exNewHighRate': 0,
      'stdev': 0.01433436519383346,
      'stdevA': 0.22664621412577365,
      'downStdevAvg': 0.020234798265882183,
      'mdd': 0.007014912203299865,
      'maxDrop': -0.007014912203299972,
      'maxDropPeriod': 1,
      'negReturnRatio': 0.4,
      'trackingError': 0.17165764423865232,
      'vaR': -0.007014912203299972,
      'sharpeA': 6.5941671824164505,
      'infA': 7.766556165959466,
      'sorA': 73.861147744603,
      'calmarA': 485.8139844795572,
      'period': '近一周'
    },
    {
      'returnD': -0.019789948789167178,
      'returnA': -0.22108620779709953,
      'excess': 0.0030853534118318038,
      'excessA': 0.03925856793175342,
      'excessWin': 0.45,
      'posPeriod': 8,
      'posReturnRatio': 0.4,
      'maxRisePeriod': 1,
      'alphaA': 0.16636933022840697,
      'beta': 1.3744841782749107,
      'inNewHighRate': 0.15,
      'exNewHighRate': 0,
      'stdev': 0.013920548457343017,
      'stdevA': 0.2201031970197361,
      'downStdevAvg': 0.07609556951794824,
      'mdd': 0.0504158004158005,
      'maxDrop': -0.024997830049474867,
      'maxDropPeriod': 4,
      'negReturnRatio': 0.6,
      'trackingError': 0.14241389317758948,
      'vaR': -0.024997830049474867,
      'sharpeA': -1.1070431974880581,
      'infA': 0.38376325605046213,
      'sorA': -3.2021148886582327,
      'calmarA': -4.722452204140335,
      'period': '近一月'
    },
    {
      'returnD': 0.12312282446544098,
      'returnA': 0.6355913373929136,
      'excess': 0.10012821016922047,
      'excessA': 0.49832908091288797,
      'excessWin': 0.4745762711864407,
      'posPeriod': 31,
      'posReturnRatio': 0.5254237288135594,
      'maxRisePeriod': 3,
      'alphaA': 0.40607222991234143,
      'beta': 1.0906194224973962,
      'inNewHighRate': 0.22033898305084745,
      'exNewHighRate': 0,
      'stdev': 0.01396874775830268,
      'stdevA': 0.22086529488303844,
      'downStdevAvg': 0.08026383589812833,
      'mdd': 0.0789396294584712,
      'maxDrop': -0.0269064613072878,
      'maxDropPeriod': 4,
      'negReturnRatio': 0.4745762711864407,
      'trackingError': 0.18209650512683243,
      'vaR': -0.024072595891274307,
      'sharpeA': 2.245921520934581,
      'infA': 2.271042262252871,
      'sorA': 6.180301071277501,
      'calmarA': 7.79142670940032,
      'period': '近一季'
    },
    {
      'returnD': 0.06357129402900741,
      'returnA': 0.1394857893646848,
      'excess': 0.08126716012812285,
      'excessA': 0.18002708734921136,
      'excessWin': 0.4406779661016949,
      'posPeriod': 51,
      'posReturnRatio': 0.4322033898305085,
      'maxRisePeriod': 3,
      'alphaA': 0.21363612474400878,
      'beta': 1.2872081871065675,
      'inNewHighRate': 0.1016949152542373,
      'exNewHighRate': 0,
      'stdev': 0.01913631631324799,
      'stdevA': 0.3025717278764992,
      'downStdevAvg': 0.1271065689086306,
      'mdd': 0.2446788472405348,
      'recoveryDays': 29,
      'maxDrop': -0.06807999125778608,
      'maxDropPeriod': 7,
      'negReturnRatio': 0.5677966101694916,
      'trackingError': 0.23144133986366344,
      'vaR': -0.025367156208277564,
      'sharpeA': 0.52647048843795,
      'infA': 0.8706806459621268,
      'sorA': 1.253247756813454,
      'calmarA': 0.502752039058652,
      'period': '近半年'
    },
    {
      'returnD': -0.023392571453279665,
      'returnA': -0.02405826070820849,
      'excess': 0.05527239419834851,
      'excessA': 0.056909084575706315,
      'excessWin': 0.48148148148148145,
      'posPeriod': 107,
      'posReturnRatio': 0.4403292181069959,
      'maxRisePeriod': 4,
      'alphaA': 0.0973577482030688,
      'beta': 1.123996515771718,
      'inNewHighRate': 0.02880658436213992,
      'exNewHighRate': 0,
      'stdev': 0.018860467588679517,
      'stdevA': 0.2982101765800551,
      'downStdevAvg': 0.13556260176355867,
      'mdd': 0.33052297675195125,
      'maxDrop': -0.06807999125778608,
      'maxDropPeriod': 7,
      'negReturnRatio': 0.5596707818930041,
      'trackingError': 0.2123143919237621,
      'vaR': -0.02694513076313454,
      'sharpeA': -0.003729646148269059,
      'infA': 0.40739011156346455,
      'sorA': -0.008204544225178039,
      'calmarA': -0.13654802807275862,
      'period': '近一年'
    },
    {
      'returnD': 0.5056329578028116,
      'returnA': 0.15065783182113512,
      'excess': 0.24930762977316556,
      'excessA': 0.07932284412497426,
      'excessWin': 0.5061728395061729,
      'posPeriod': 370,
      'posReturnRatio': 0.5075445816186557,
      'maxRisePeriod': 9,
      'alphaA': 0.07759227854579459,
      'beta': 1.0664177444747722,
      'inNewHighRate': 0.10150891632373114,
      'exNewHighRate': 0.10150891632373114,
      'stdev': 0.017646722720500652,
      'stdevA': 0.2790191851711249,
      'downStdevAvg': 0.1344692646177013,
      'mdd': 0.5454416640689208,
      'maxDrop': -0.06933133776466971,
      'maxDropPeriod': 7,
      'negReturnRatio': 0.4924554183813443,
      'trackingError': 0.189571608560461,
      'vaR': -0.02870756402620611,
      'sharpeA': 0.5613171740407786,
      'infA': 0.435266857577868,
      'sorA': 1.1647296171687018,
      'calmarA': 0.23413655434474387,
      'period': '近三年'
    },
    {
      'period': '近五年'
    },
    {
      'returnD': 1.258599999999983,
      'returnA': 0.20588249734221975,
      'excess': 0.4557698142803903,
      'excessA': 0.09012260901524005,
      'excessWin': 0.5064338235294118,
      'posPeriod': 546,
      'posReturnRatio': 0.5018382352941176,
      'maxRisePeriod': 9,
      'alphaA': 0.06905680208093168,
      'beta': 0.9740981645993604,
      'inNewHighRate': 0.109375,
      'exNewHighRate': 0.109375,
      'stdev': 0.016267318439070748,
      'stdevA': 0.25720888845359285,
      'downStdevAvg': 0.12250778401375796,
      'mdd': 0.5454416640689225,
      'maxDrop': -0.06933133776466971,
      'maxDropPeriod': 7,
      'negReturnRatio': 0.4724264705882353,
      'trackingError': 0.17407042871906267,
      'vaR': -0.025462555066079195,
      'sharpeA': 0.715133008532058,
      'infA': 0.3791545044088964,
      'sorA': 1.5021936078906017,
      'calmarA': 0.3092438815251976,
      'period': '成立以来'
    },
    {
      'returnD': 0.04140538546661765,
      'returnA': 0.29702264675689505,
      'excess': -0.001334249699724177,
      'excessA': -0.008522073111550399,
      'excessWin': 0.41025641025641024,
      'posPeriod': 19,
      'posReturnRatio': 0.48717948717948717,
      'maxRisePeriod': 3,
      'alphaA': -0.08236137742714472,
      'beta': 1.3433381822928636,
      'inNewHighRate': 0.1794871794871795,
      'exNewHighRate': 0,
      'stdev': 0.01306442019670964,
      'stdevA': 0.20656662065553738,
      'downStdevAvg': 0.07525428443130087,
      'mdd': 0.07893962945847159,
      'maxDrop': -0.024997830049474867,
      'maxDropPeriod': 4,
      'negReturnRatio': 0.5128205128205128,
      'trackingError': 0.13919038327755973,
      'vaR': -0.024072595891274307,
      'sharpeA': 1.270855853265586,
      'infA': 0.04156596629045325,
      'sorA': 3.4884482377877952,
      'calmarA': 3.5273746363782155,
      'period': '今年以来'
    }
  ],
  'mean': [
    {
      'returnD': 0.0033967739004121126,
      'returnA': 0.5547360329346819,
      'excess': -0.00011930136708153013,
      'excessA': 0.3070080810211204,
      'excessWin': 0.48202154101077394,
      'posPeriod': 2,
      'posReturnRatio': 0.48809721071527323,
      'maxRisePeriod': 1,
      'alphaA': -0.0034609163040181714,
      'beta': 0.9832438038967338,
      'inNewHighRate': 0.3692902513118004,
      'exNewHighRate': 0.010273405136702567,
      'stdev': 0.007848923671773707,
      'stdevA': 0.12417096371466688,
      'downStdevAvg': 0.0316100319116547,
      'mdd': 0.010572856737449713,
      'recoveryDays': 1,
      'maxDrop': -0.008370706739057834,
      'maxDropPeriod': 1,
      'negReturnRatio': 0.4770505385252704,
      'trackingError': 0.08914177496192907,
      'vaR': -0.008370706739057834,
      'sharpeA': 0.8845359724776868,
      'infA': -0.45666665876542956,
      'sorA': 33.77322827399428,
      'calmarA': 171.31927869583728,
      'period': '近一周'
    },
    {
      'returnD': -0.022625186288281102,
      'returnA': -0.19693706082776855,
      'excess': 0.00025011591271787966,
      'excessA': 0.06918021978359462,
      'excessWin': 0.493452215101701,
      'posPeriod': 7,
      'posReturnRatio': 0.38623572025633746,
      'maxRisePeriod': 2,
      'alphaA': -0.0020132227338540173,
      'beta': 0.9857146692496821,
      'inNewHighRate': 0.14035943159654607,
      'exNewHighRate': 0.011799944274171057,
      'stdev': 0.009831061295168642,
      'stdevA': 0.1554427275472895,
      'downStdevAvg': 0.06281837166285266,
      'mdd': 0.043358586492248254,
      'recoveryDays': 3,
      'maxDrop': -0.018204852776937355,
      'maxDropPeriod': 3,
      'negReturnRatio': 0.5821955976595139,
      'trackingError': 0.09335591398618104,
      'vaR': -0.018204852776937355,
      'sharpeA': -1.917224495601794,
      'infA': 0.1842999178435349,
      'sorA': 10.374849710211771,
      'calmarA': -2.426469247102669,
      'period': '近一月'
    },
    {
      'returnD': 0.022059037559641757,
      'returnA': 0.11468448478796552,
      'excess': -0.000935576736578749,
      'excessA': 0.012976808088447415,
      'excessWin': 0.48460710545708396,
      'posPeriod': 27,
      'posReturnRatio': 0.4739896443392956,
      'maxRisePeriod': 5,
      'alphaA': -0.0005528052625753672,
      'beta': 0.992587564328518,
      'inNewHighRate': 0.1464433929333272,
      'exNewHighRate': 0.013439087771011929,
      'stdev': 0.010358424933149497,
      'stdevA': 0.16378107880314943,
      'downStdevAvg': 0.06226438701104597,
      'mdd': 0.07082336159462191,
      'recoveryDays': 13,
      'maxDrop': -0.022165243868803603,
      'maxDropPeriod': 5,
      'negReturnRatio': 0.49687293953379985,
      'trackingError': 0.11611641233107083,
      'vaR': -0.016124891544105308,
      'sharpeA': 0.5740214437484491,
      'infA': 0.027068457819940064,
      'sorA': 1.6873186890329108,
      'calmarA': 2.2149863898693076,
      'period': '近一季'
    },
    {
      'returnD': -0.0177721484518733,
      'returnA': -0.029621778896319527,
      'excess': -0.00007628235275786834,
      'excessA': 0.007511679536997988,
      'excessWin': 0.48348662421688454,
      'posPeriod': 53,
      'posReturnRatio': 0.45486378131184474,
      'maxRisePeriod': 5,
      'alphaA': 0.0028661430700905625,
      'beta': 0.9923359209206674,
      'inNewHighRate': 0.0537722886995385,
      'exNewHighRate': 0.005247264859987501,
      'stdev': 0.01301359534794148,
      'stdevA': 0.20576300923633242,
      'downStdevAvg': 0.0879952688619567,
      'mdd': 0.153518545291785,
      'recoveryDays': 35,
      'maxDrop': -0.03814513574392727,
      'maxDropPeriod': 6,
      'negReturnRatio': 0.517969382837569,
      'trackingError': 0.1359161625040494,
      'vaR': -0.020344155517251827,
      'sharpeA': -0.17726518975525438,
      'infA': -0.006010494316727014,
      'sorA': -0.2888391487825236,
      'calmarA': -0.08977496818103618,
      'period': '近半年'
    },
    {
      'returnD': -0.07969646303480352,
      'returnA': -0.08177361683921132,
      'excess': -0.0010314973831755901,
      'excessA': -0.0009485982120099124,
      'excessWin': 0.48539460161426995,
      'posPeriod': 114,
      'posReturnRatio': 0.470718251050307,
      'maxRisePeriod': 6,
      'alphaA': 0.004053640296397247,
      'beta': 0.9883068040077261,
      'inNewHighRate': 0.027404741325558517,
      'exNewHighRate': 0.005059822003202169,
      'stdev': 0.01474834659415727,
      'stdevA': 0.2331918347956193,
      'downStdevAvg': 0.1082436035952797,
      'mdd': 0.23478284824476714,
      'recoveryDays': 51,
      'maxDrop': -0.0525265152103621,
      'maxDropPeriod': 6,
      'negReturnRatio': 0.5036056606937827,
      'trackingError': 0.1409821164721279,
      'vaR': -0.023770857098877968,
      'sharpeA': -0.36096065978771236,
      'infA': 0.013998694285118162,
      'sorA': -0.7603291303755358,
      'calmarA': -0.41027966832753476,
      'period': '近一年'
    },
    {
      'returnD': 0.2970960284013877,
      'returnA': 0.08754234084395429,
      'excess': 0.04077070037174143,
      'excessA': 0.005352117631300949,
      'excessWin': 0.4915844710083395,
      'posPeriod': 373,
      'posReturnRatio': 0.5118310942727949,
      'maxRisePeriod': 9,
      'alphaA': 0.01193444571397575,
      'beta': 1.0289856746739097,
      'inNewHighRate': 0.06754051719758156,
      'exNewHighRate': 0.05508887292152033,
      'stdev': 0.015170851913798519,
      'stdevA': 0.23987223046363854,
      'downStdevAvg': 0.11149604280020962,
      'mdd': 0.38225481337263484,
      'recoveryDays': 101,
      'maxDrop': -0.06037772438608881,
      'maxDropPeriod': 7,
      'negReturnRatio': 0.47501179407901006,
      'trackingError': 0.13487834109208668,
      'vaR': -0.02452402496189842,
      'sharpeA': 0.3744554954251681,
      'infA': 0.09320079739436313,
      'sorA': 0.8123311518605401,
      'calmarA': 0.2069558122573264,
      'period': '近三年'
    },
    {
      'returnD': 0.6394860889955647,
      'returnA': 0.10070654941096556,
      'excess': 0.07765169058321457,
      'excessA': 0.0012309960638424349,
      'excessWin': 0.4918699739494839,
      'posPeriod': 615,
      'posReturnRatio': 0.5062332464982823,
      'maxRisePeriod': 9,
      'alphaA': 0.009797880420432477,
      'beta': 1.0233294241431485,
      'inNewHighRate': 0.06126779174689472,
      'exNewHighRate': 0.037766451466757264,
      'stdev': 0.014700608004535513,
      'stdevA': 0.2324370214181757,
      'downStdevAvg': 0.10957931766308285,
      'mdd': 0.38271131892997584,
      'recoveryDays': 219,
      'maxDrop': -0.07139716527337278,
      'maxDropPeriod': 8,
      'negReturnRatio': 0.47800958960999745,
      'trackingError': 0.12063520134711359,
      'vaR': -0.023055357002006126,
      'sharpeA': 0.35462791776520514,
      'infA': 0.07665220524662987,
      'sorA': 0.759730501690797,
      'calmarA': 0.17645030352248356,
      'period': '近五年'
    },
    {
      'returnD': 0.8670708258214519,
      'returnA': 0.14768287105133593,
      'excess': 0.06424064010185865,
      'excessA': -0.00017987257607125822,
      'excessWin': 0.49155250149046104,
      'posPeriod': 559,
      'posReturnRatio': 0.5141655902225749,
      'maxRisePeriod': 9,
      'alphaA': 0.010655467894748808,
      'beta': 1.022448472764662,
      'inNewHighRate': 0.07975053408187595,
      'exNewHighRate': 0.04450889308426071,
      'stdev': 0.014816752084157123,
      'stdevA': 0.2342734205599166,
      'downStdevAvg': 0.11120062471673148,
      'mdd': 0.37476253376540586,
      'recoveryDays': 112,
      'maxDrop': -0.07154427785784123,
      'maxDropPeriod': 7,
      'negReturnRatio': 0.4705214750596185,
      'trackingError': 0.12340509395885567,
      'vaR': -0.02317633852279581,
      'sharpeA': 0.5584765879783606,
      'infA': 0.09453759694991547,
      'sorA': 1.1822387140818054,
      'calmarA': 0.32369391431568906,
      'period': '成立以来'
    },
    {
      'returnD': 0.04161715867937776,
      'returnA': 0.3291545418016098,
      'excess': -0.0011224764869640304,
      'excessA': 0.01815157653652348,
      'excessWin': 0.48305434334223685,
      'posPeriod': 19,
      'posReturnRatio': 0.5008286473146754,
      'maxRisePeriod': 4,
      'alphaA': -0.0022569674368515726,
      'beta': 0.98972317486965,
      'inNewHighRate': 0.23467726177294676,
      'exNewHighRate': 0.01910592935148401,
      'stdev': 0.009961274662785775,
      'stdevA': 0.1575015816646434,
      'downStdevAvg': 0.05535073931479924,
      'mdd': 0.05125851810830697,
      'recoveryDays': 4,
      'maxDrop': -0.019007888773461098,
      'maxDropPeriod': 4,
      'negReturnRatio': 0.47075128277499395,
      'trackingError': 0.10557127694553868,
      'vaR': -0.014999767165426265,
      'sharpeA': 1.7215488022369054,
      'infA': 0.0036416791040433036,
      'sorA': 5.5781043940724855,
      'calmarA': 9.524997492258853,
      'period': '今年以来'
    }
  ],
  'rank': [
    {
      'count': 3621,
      'returnD': 132,
      'returnA': 132,
      'excess': 132,
      'excessA': 132,
      'excessWin': 606,
      'posPeriod': 327,
      'posReturnRatio': 327,
      'maxRisePeriod': 2557,
      'alphaA': 133,
      'beta': 311,
      'inNewHighRate': 2656,
      'exNewHighRate': 114,
      'stdev': 3423,
      'stdevA': 3421,
      'downStdevAvg': 1518,
      'mdd': 1236,
      'maxDrop': 1590,
      'maxDropPeriod': 1,
      'negReturnRatio': 475,
      'trackingError': 3373,
      'vaR': 1590,
      'sharpeA': 506,
      'infA': 580,
      'sorA': 328,
      'calmarA': 215,
      'period': '近一周'
    },
    {
      'count': 3589,
      'returnD': 1690,
      'returnA': 1690,
      'excess': 1690,
      'excessA': 1690,
      'excessWin': 1932,
      'posPeriod': 1132,
      'posReturnRatio': 1132,
      'maxRisePeriod': 3241,
      'alphaA': 1181,
      'beta': 223,
      'inNewHighRate': 1033,
      'exNewHighRate': 269,
      'stdev': 3372,
      'stdevA': 3372,
      'downStdevAvg': 2675,
      'mdd': 2474,
      'maxDrop': 3091,
      'maxDropPeriod': 1327,
      'negReturnRatio': 1359,
      'trackingError': 3230,
      'vaR': 3091,
      'sharpeA': 1309,
      'infA': 1741,
      'sorA': 1372,
      'calmarA': 1314,
      'period': '近一月'
    },
    {
      'count': 3496,
      'returnD': 65,
      'returnA': 65,
      'excess': 65,
      'excessA': 65,
      'excessWin': 1779,
      'posPeriod': 501,
      'posReturnRatio': 501,
      'maxRisePeriod': 2980,
      'alphaA': 72,
      'beta': 1171,
      'inNewHighRate': 326,
      'exNewHighRate': 375,
      'stdev': 3099,
      'stdevA': 3099,
      'downStdevAvg': 2919,
      'mdd': 2366,
      'maxDrop': 2712,
      'maxDropPeriod': 266,
      'negReturnRatio': 781,
      'trackingError': 3130,
      'vaR': 3238,
      'sharpeA': 314,
      'infA': 360,
      'sorA': 327,
      'calmarA': 357,
      'period': '近一季'
    },
    {
      'count': 3306,
      'returnD': 518,
      'returnA': 518,
      'excess': 518,
      'excessA': 518,
      'excessWin': 2721,
      'posPeriod': 2621,
      'posReturnRatio': 2621,
      'maxRisePeriod': 3116,
      'alphaA': 353,
      'beta': 412,
      'inNewHighRate': 549,
      'exNewHighRate': 268,
      'stdev': 3142,
      'stdevA': 3142,
      'downStdevAvg': 3077,
      'mdd': 3120,
      'recoveryDays': 681,
      'maxDrop': 3183,
      'maxDropPeriod': 1996,
      'negReturnRatio': 2917,
      'trackingError': 3121,
      'vaR': 2743,
      'sharpeA': 675,
      'infA': 863,
      'sorA': 717,
      'calmarA': 809,
      'period': '近半年'
    },
    {
      'count': 2871,
      'returnD': 741,
      'returnA': 741,
      'excess': 741,
      'excessA': 741,
      'excessWin': 1543,
      'posPeriod': 2570,
      'posReturnRatio': 2570,
      'maxRisePeriod': 2671,
      'alphaA': 448,
      'beta': 814,
      'inNewHighRate': 1071,
      'exNewHighRate': 406,
      'stdev': 2564,
      'stdevA': 2564,
      'downStdevAvg': 2580,
      'mdd': 2739,
      'maxDrop': 2611,
      'maxDropPeriod': 1512,
      'negReturnRatio': 2787,
      'trackingError': 2585,
      'vaR': 2134,
      'sharpeA': 571,
      'infA': 839,
      'sorA': 570,
      'calmarA': 594,
      'period': '近一年'
    },
    {
      'count': 945,
      'returnD': 188,
      'returnA': 188,
      'excess': 188,
      'excessA': 188,
      'excessWin': 214,
      'posPeriod': 637,
      'posReturnRatio': 637,
      'maxRisePeriod': 355,
      'alphaA': 171,
      'beta': 411,
      'inNewHighRate': 39,
      'exNewHighRate': 28,
      'stdev': 766,
      'stdevA': 766,
      'downStdevAvg': 843,
      'mdd': 919,
      'maxDrop': 800,
      'maxDropPeriod': 111,
      'negReturnRatio': 788,
      'trackingError': 831,
      'vaR': 764,
      'sharpeA': 241,
      'infA': 239,
      'sorA': 259,
      'calmarA': 354,
      'period': '近三年'
    },
    {
      'count': 545,
      'period': '近五年'
    },
    {
      'count': 592,
      'returnD': 101,
      'returnA': 101,
      'excess': 101,
      'excessA': 101,
      'excessWin': 116,
      'posPeriod': 495,
      'posReturnRatio': 495,
      'maxRisePeriod': 241,
      'alphaA': 82,
      'beta': 384,
      'inNewHighRate': 35,
      'exNewHighRate': 7,
      'stdev': 443,
      'stdevA': 443,
      'downStdevAvg': 455,
      'mdd': 583,
      'maxDrop': 225,
      'maxDropPeriod': 45,
      'negReturnRatio': 258,
      'trackingError': 534,
      'vaR': 434,
      'sharpeA': 161,
      'infA': 168,
      'sorA': 164,
      'calmarA': 285,
      'period': '成立以来'
    },
    {
      'count': 3543,
      'returnD': 1769,
      'returnA': 1769,
      'excess': 1769,
      'excessA': 1769,
      'excessWin': 2762,
      'posPeriod': 1931,
      'posReturnRatio': 1931,
      'maxRisePeriod': 2557,
      'alphaA': 2252,
      'beta': 234,
      'inNewHighRate': 2343,
      'exNewHighRate': 410,
      'stdev': 3118,
      'stdevA': 3118,
      'downStdevAvg': 3043,
      'mdd': 3072,
      'maxDrop': 2980,
      'maxDropPeriod': 925,
      'negReturnRatio': 2165,
      'trackingError': 2808,
      'vaR': 3366,
      'sharpeA': 2138,
      'infA': 1729,
      'sorA': 2124,
      'calmarA': 2230,
      'period': '今年以来'
    }
  ]
};

const holdingAnalysis: HoldingAnalysis = {
  'orderBookId': '005827.OF',
  'symbol': '易方达蓝筹精选',
  'sizeHistory': [
    {
      'date': '2018-12-31 00:00:00',
      'value': 2160542033.68
    },
    {
      'date': '2019-03-31 00:00:00',
      'value': 2205822937.36
    },
    {
      'date': '2019-06-30 00:00:00',
      'value': 2441548574.65
    },
    {
      'date': '2019-09-30 00:00:00',
      'value': 6717470287.48
    },
    {
      'date': '2019-12-31 00:00:00',
      'value': 8423519967.57
    },
    {
      'date': '2020-03-31 00:00:00',
      'value': 9333958175.02
    },
    {
      'date': '2020-06-30 00:00:00',
      'value': 18218506217.23
    },
    {
      'date': '2020-09-30 00:00:00',
      'value': 33937688244.49
    },
    {
      'date': '2020-12-31 00:00:00',
      'value': 67700745571.2
    },
    {
      'date': '2021-03-31 00:00:00',
      'value': 88015706252.31
    },
    {
      'date': '2021-06-30 00:00:00',
      'value': 89888873779.67
    },
    {
      'date': '2021-09-30 00:00:00',
      'value': 69846800436.51
    },
    {
      'date': '2021-12-31 00:00:00',
      'value': 67622505261.17
    },
    {
      'date': '2022-03-31 00:00:00',
      'value': 55271761689.37
    },
    {
      'date': '2022-06-30 00:00:00',
      'value': 62778736536.61
    },
    {
      'date': '2022-09-30 00:00:00',
      'value': 53230852282.42
    },
    {
      'date': '2022-12-31 00:00:00',
      'value': 57074981815.95
    }
  ],
  'assetAllocationHistory': [
    {
      'orderBookId': '005827.OF',
      'date': '2018-12-31 00:00:00',
      'stock': 0.7045220000000001,
      'bond': 0.000278,
      'cash': 0.11651199999999999,
      'other': 0.00047646485648186667
    },
    {
      'orderBookId': '005827.OF',
      'date': '2019-03-31 00:00:00',
      'stock': 0.926369,
      'cash': 0.097193,
      'other': 0.044817700788948554
    },
    {
      'orderBookId': '005827.OF',
      'date': '2019-06-30 00:00:00',
      'stock': 0.9307500000000001,
      'bond': 0.037014,
      'cash': 0.04746,
      'other': 0.01991765183167459
    },
    {
      'orderBookId': '005827.OF',
      'date': '2019-09-30 00:00:00',
      'stock': 0.900895,
      'bond': 0.013434999999999999,
      'cash': 0.0703,
      'other': 0.002377574583361704
    },
    {
      'orderBookId': '005827.OF',
      'date': '2019-12-31 00:00:00',
      'stock': 0.9311820000000001,
      'bond': 0.010714999999999999,
      'cash': 0.076121,
      'other': 0.0073237765788543305
    },
    {
      'orderBookId': '005827.OF',
      'date': '2020-03-31 00:00:00',
      'stock': 0.945438,
      'cash': 0.063244,
      'other': 0.005749342626541576
    },
    {
      'orderBookId': '005827.OF',
      'date': '2020-06-30 00:00:00',
      'stock': 0.9253990000000001,
      'cash': 0.062191,
      'other': 0.029531261428073434
    },
    {
      'orderBookId': '005827.OF',
      'date': '2020-09-30 00:00:00',
      'stock': 0.9430540000000001,
      'cash': 0.056733000000000006,
      'other': 0.0036912907725922695
    },
    {
      'orderBookId': '005827.OF',
      'date': '2020-12-31 00:00:00',
      'stock': 0.9409040000000001,
      'cash': 0.076305,
      'other': 0.015377021430216693
    },
    {
      'orderBookId': '005827.OF',
      'date': '2021-03-31 00:00:00',
      'stock': 0.9439879999999999,
      'cash': 0.060611,
      'other': 0.0037907192710988392
    },
    {
      'orderBookId': '005827.OF',
      'date': '2021-06-30 00:00:00',
      'stock': 0.9229689999999999,
      'cash': 0.095277,
      'other': 0.005347911822082844
    },
    {
      'orderBookId': '005827.OF',
      'date': '2021-09-30 00:00:00',
      'stock': 0.9240600000000001,
      'bond': 0.000032,
      'cash': 0.07976899999999999,
      'other': 0.003744323922149042
    },
    {
      'orderBookId': '005827.OF',
      'date': '2021-12-31 00:00:00',
      'stock': 0.945444,
      'cash': 0.057849000000000005,
      'other': 0.00006600151699134866
    },
    {
      'orderBookId': '005827.OF',
      'date': '2022-03-31 00:00:00',
      'stock': 0.939735,
      'cash': 0.06521099999999999,
      'other': 0.0010363202186662365
    },
    {
      'orderBookId': '005827.OF',
      'date': '2022-06-30 00:00:00',
      'stock': 0.941048,
      'cash': 0.064316,
      'other': 0.010009001643630893
    },
    {
      'orderBookId': '005827.OF',
      'date': '2022-09-30 00:00:00',
      'stock': 0.9432689999999999,
      'cash': 0.056631999999999995,
      'other': 0.003335476906287213
    },
    {
      'orderBookId': '005827.OF',
      'date': '2022-12-31 00:00:00',
      'stock': 0.946953,
      'cash': 0.053913,
      'other': 0.0025468201200438954
    }
  ],
  'bondTypeHistory': [
    {
      'date': '2018-12-31 00:00:00',
      'data': [
        {
          'bondType': '可转换债券',
          'weight': 0.000278
        }
      ]
    },
    {
      'date': '2019-06-30 00:00:00',
      'data': [
        {
          'bondType': '金融债券',
          'weight': 0.037014
        }
      ]
    },
    {
      'date': '2019-09-30 00:00:00',
      'data': [
        {
          'bondType': '金融债券',
          'weight': 0.013435
        }
      ]
    },
    {
      'date': '2019-12-31 00:00:00',
      'data': [
        {
          'bondType': '金融债券',
          'weight': 0.010715
        }
      ]
    },
    {
      'date': '2021-09-30 00:00:00',
      'data': [
        {
          'bondType': '可转换债券',
          'weight': 0.000032
        }
      ]
    }
  ],
  'stockIndustryHistory': [
    {
      'date': '2018-12-31 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.26269999999999993
        },
        {
          'stockIndustry': '港股',
          'weight': 0.259
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.0854
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.052500000000000005
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0.0446
        },
        {
          'stockIndustry': '制造',
          'weight': 0.0001
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.0001
        },
        {
          'stockIndustry': '周期',
          'weight': 0
        }
      ]
    },
    {
      'date': '2019-03-31 00:00:00',
      'data': [
        {
          'stockIndustry': '港股',
          'weight': 0.36110000000000003
        },
        {
          'stockIndustry': '消费',
          'weight': 0.2802
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.0632
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0.0564
        }
      ]
    },
    {
      'date': '2019-06-30 00:00:00',
      'data': [
        {
          'stockIndustry': '港股',
          'weight': 0.38910000000000006
        },
        {
          'stockIndustry': '消费',
          'weight': 0.36069999999999997
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0.1245
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.0562
        },
        {
          'stockIndustry': '周期',
          'weight': 0.0001
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0
        },
        {
          'stockIndustry': '制造',
          'weight': 0
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0
        }
      ]
    },
    {
      'date': '2019-09-30 00:00:00',
      'data': [
        {
          'stockIndustry': '港股',
          'weight': 0.41230000000000006
        },
        {
          'stockIndustry': '消费',
          'weight': 0.276
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.0541
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0.051100000000000007
        }
      ]
    },
    {
      'date': '2019-12-31 00:00:00',
      'data': [
        {
          'stockIndustry': '港股',
          'weight': 0.44570000000000004
        },
        {
          'stockIndustry': '消费',
          'weight': 0.3458
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.08009999999999999
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0.056100000000000004
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.0031
        },
        {
          'stockIndustry': '制造',
          'weight': 0
        }
      ]
    },
    {
      'date': '2020-03-31 00:00:00',
      'data': [
        {
          'stockIndustry': '港股',
          'weight': 0.41600000000000004
        },
        {
          'stockIndustry': '消费',
          'weight': 0.2891
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.0775
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0.0426
        }
      ]
    },
    {
      'date': '2020-06-30 00:00:00',
      'data': [
        {
          'stockIndustry': '港股',
          'weight': 0.38439999999999996
        },
        {
          'stockIndustry': '消费',
          'weight': 0.38259999999999994
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.1151
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.0361
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0.0062
        },
        {
          'stockIndustry': '制造',
          'weight': 0.0007000000000000001
        },
        {
          'stockIndustry': '周期',
          'weight': 0.0001
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0
        }
      ]
    },
    {
      'date': '2020-09-30 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.3827
        },
        {
          'stockIndustry': '港股',
          'weight': 0.2868
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.048499999999999995
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.042699999999999995
        }
      ]
    },
    {
      'date': '2020-12-31 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.41090000000000004
        },
        {
          'stockIndustry': '港股',
          'weight': 0.3952
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.0645
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.05109999999999999
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.0175
        },
        {
          'stockIndustry': '周期',
          'weight': 0.0013
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0
        },
        {
          'stockIndustry': '制造',
          'weight': 0
        }
      ]
    },
    {
      'date': '2021-03-31 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.3221
        },
        {
          'stockIndustry': '港股',
          'weight': 0.31970000000000004
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.09809999999999999
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.0572
        }
      ]
    },
    {
      'date': '2021-06-30 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.3929
        },
        {
          'stockIndustry': '港股',
          'weight': 0.33759999999999996
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.09129999999999999
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.06470000000000001
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.03620000000000001
        },
        {
          'stockIndustry': '周期',
          'weight': 0.0002
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0.0001
        },
        {
          'stockIndustry': '制造',
          'weight': 0
        }
      ]
    },
    {
      'date': '2021-09-30 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.4486
        },
        {
          'stockIndustry': '港股',
          'weight': 0.2002
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.13440000000000002
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.09759999999999999
        }
      ]
    },
    {
      'date': '2021-12-31 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.4512
        },
        {
          'stockIndustry': '港股',
          'weight': 0.258
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.1313
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.1043
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.0005
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0
        },
        {
          'stockIndustry': '制造',
          'weight': 0
        },
        {
          'stockIndustry': '周期',
          'weight': 0
        }
      ]
    },
    {
      'date': '2022-03-31 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.44620000000000004
        },
        {
          'stockIndustry': '港股',
          'weight': 0.2372
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.0974
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.0935
        }
      ]
    },
    {
      'date': '2022-06-30 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.46799999999999997
        },
        {
          'stockIndustry': '港股',
          'weight': 0.3476
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.07730000000000001
        },
        {
          'stockIndustry': '医药生物',
          'weight': 0.034499999999999996
        },
        {
          'stockIndustry': 'TMT',
          'weight': 0.0139
        },
        {
          'stockIndustry': '公用事业',
          'weight': 0
        },
        {
          'stockIndustry': '制造',
          'weight': 0
        },
        {
          'stockIndustry': '周期',
          'weight': 0
        }
      ]
    },
    {
      'date': '2022-09-30 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.4683
        },
        {
          'stockIndustry': '港股',
          'weight': 0.26760000000000006
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.0727
        }
      ]
    },
    {
      'date': '2022-12-31 00:00:00',
      'data': [
        {
          'stockIndustry': '消费',
          'weight': 0.4354
        },
        {
          'stockIndustry': '港股',
          'weight': 0.2938
        },
        {
          'stockIndustry': '金融地产',
          'weight': 0.0751
        }
      ]
    }
  ],
  'heavyweight': [
    {
      'orderBookId': '005827.OF',
      'date': '2022-12-31 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.09880000000000001,
          'isHistory': true,
          'change': 0.008300000000000002
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.09720000000000001,
          'isHistory': true,
          'change': -0.001999999999999988,
          'latestPrice': 206.24
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.0934,
          'isHistory': true,
          'change': -0.005199999999999996,
          'latestPrice': 172.41
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.0917,
          'isHistory': true,
          'change': -0.007499999999999993,
          'latestPrice': 1828
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0901,
          'isHistory': true,
          'change': -0.009299999999999989,
          'latestPrice': 254.96
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.0823,
          'isHistory': true,
          'change': 0.01079999999999999
        },
        {
          'stockId': '600036.SH',
          'symbol': '招商银行',
          'weight': 0.0751,
          'isHistory': true,
          'change': 0.0023999999999999994,
          'latestPrice': 38.25
        },
        {
          'stockId': '600887.SH',
          'symbol': '伊利股份',
          'weight': 0.063,
          'isHistory': true,
          'change': -0.008900000000000005,
          'latestPrice': 31.14
        },
        {
          'stockId': '3690.HK',
          'symbol': '美团-W',
          'weight': 0.0602,
          'isHistory': true,
          'change': -0.001700000000000007
        },
        {
          'stockId': '2269.HK',
          'symbol': '药明生物',
          'weight': 0.0525,
          'isHistory': true,
          'change': 0.008799999999999995
        }
      ],
      'quarter': '2022Q4'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2022-09-30 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.09939999999999999,
          'isHistory': true,
          'change': 0.0004999999999999866
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.0992,
          'isHistory': true,
          'change': -0.00019999999999999185
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.0992,
          'isHistory': true,
          'change': 0.0007999999999999952
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.0986,
          'isHistory': true,
          'change': -0.0006000000000000033
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.09050000000000001,
          'isHistory': true,
          'change': 0.0031000000000000055
        },
        {
          'stockId': '600036.SH',
          'symbol': '招商银行',
          'weight': 0.0727,
          'isHistory': true,
          'change': -0.004600000000000007
        },
        {
          'stockId': '600887.SH',
          'symbol': '伊利股份',
          'weight': 0.0719,
          'isHistory': true,
          'change': -0.00010000000000000286
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.07150000000000001,
          'isHistory': true,
          'change': -0.015299999999999994
        },
        {
          'stockId': '3690.HK',
          'symbol': '美团-W',
          'weight': 0.061900000000000004,
          'isHistory': true,
          'change': 0.003700000000000002
        },
        {
          'stockId': '2269.HK',
          'symbol': '药明生物',
          'weight': 0.0437,
          'isHistory': true,
          'change': 0.017300000000000003
        }
      ],
      'quarter': '2022Q3'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2022-06-30 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.09939999999999999,
          'isHistory': true,
          'change': 0.008599999999999983
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.0992,
          'isHistory': true,
          'change': 0.010099999999999998
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0989,
          'isHistory': true,
          'change': 0.008099999999999996
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.0984,
          'isHistory': true,
          'change': 0.0002999999999999947
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.0874,
          'isHistory': true,
          'change': -0.0092
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.0868,
          'isHistory': true,
          'change': -0.003599999999999992
        },
        {
          'stockId': '600036.SH',
          'symbol': '招商银行',
          'weight': 0.07730000000000001,
          'isHistory': true,
          'change': -0.020099999999999993
        },
        {
          'stockId': '600887.SH',
          'symbol': '伊利股份',
          'weight': 0.07200000000000001,
          'isHistory': true,
          'change': -0.005399999999999988
        },
        {
          'stockId': '3690.HK',
          'symbol': '美团-W',
          'weight': 0.0582,
          'isHistory': true,
          'change': 0.008000000000000007
        },
        {
          'stockId': '2269.HK',
          'symbol': '药明生物',
          'weight': 0.0264,
          'isHistory': false,
          'change': 0.0264
        }
      ],
      'quarter': '2022Q2'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2022-03-31 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.0981,
          'isHistory': true,
          'change': 0.0011000000000000176
        },
        {
          'stockId': '600036.SH',
          'symbol': '招商银行',
          'weight': 0.0974,
          'isHistory': true,
          'change': 0.014600000000000002
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.0966,
          'isHistory': true,
          'change': -0.004599999999999993
        },
        {
          'stockId': '002415.SZ',
          'symbol': '海康威视',
          'weight': 0.0935,
          'isHistory': true,
          'change': -0.004799999999999999
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0908,
          'isHistory': true,
          'change': -0.006799999999999987
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.0908,
          'isHistory': true,
          'change': -0.002699999999999994
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.0904,
          'isHistory': true,
          'change': -0.0009000000000000119
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.0891,
          'isHistory': true,
          'change': -0.002699999999999994
        },
        {
          'stockId': '600887.SH',
          'symbol': '伊利股份',
          'weight': 0.0774,
          'isHistory': true,
          'change': 0.0063
        },
        {
          'stockId': '3690.HK',
          'symbol': '美团-W',
          'weight': 0.050199999999999995,
          'isHistory': false,
          'change': 0.0049999999999999975
        }
      ],
      'quarter': '2022Q1'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2021-12-31 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.1012,
          'isHistory': true,
          'change': 0.007500000000000007
        },
        {
          'stockId': '002415.SZ',
          'symbol': '海康威视',
          'weight': 0.0983,
          'isHistory': true,
          'change': 0.0007000000000000062
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.09759999999999999,
          'isHistory': true,
          'change': -0.001700000000000007
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.09699999999999999,
          'isHistory': true,
          'change': -0.0020000000000000157
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.0935,
          'isHistory': true,
          'change': -0.004799999999999999
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.09179999999999999,
          'isHistory': true,
          'change': -0.0030000000000000165
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.0913,
          'isHistory': true,
          'change': -0.003599999999999992
        },
        {
          'stockId': '600036.SH',
          'symbol': '招商银行',
          'weight': 0.0828,
          'isHistory': true,
          'change': -0.0003000000000000086
        },
        {
          'stockId': '600887.SH',
          'symbol': '伊利股份',
          'weight': 0.0711,
          'isHistory': true,
          'change': 0.013899999999999996
        },
        {
          'stockId': '000001.SZ',
          'symbol': '平安银行',
          'weight': 0.0458,
          'isHistory': true,
          'change': -0.005499999999999998
        }
      ],
      'quarter': '2021Q4'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2021-09-30 00:00:00',
      'bond': [
        {
          'bondId': '127046.SZ',
          'symbol': '百润转债',
          'type': '可转债',
          'weight': 0,
          'change': 0,
          'issuer': '上海百润投资控股集团股份有限公司',
          'issuerRating': 'AA'
        }
      ],
      'stock': [
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0993,
          'isHistory': true,
          'change': 0.0021999999999999936
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.099,
          'isHistory': true,
          'change': 0.0015000000000000013
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.0983,
          'isHistory': true,
          'change': -0.0005000000000000143
        },
        {
          'stockId': '002415.SZ',
          'symbol': '海康威视',
          'weight': 0.09759999999999999,
          'isHistory': true,
          'change': 0.03299999999999999
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.0949,
          'isHistory': true,
          'change': -0.004100000000000006
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.09480000000000001,
          'isHistory': true,
          'change': -0.001999999999999988
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.09369999999999999,
          'isHistory': true,
          'change': -0.004100000000000006
        },
        {
          'stockId': '600036.SH',
          'symbol': '招商银行',
          'weight': 0.08310000000000001,
          'isHistory': true,
          'change': 0.015000000000000013
        },
        {
          'stockId': '600887.SH',
          'symbol': '伊利股份',
          'weight': 0.0572,
          'isHistory': false,
          'change': 0.0572
        },
        {
          'stockId': '000001.SZ',
          'symbol': '平安银行',
          'weight': 0.0513,
          'isHistory': false,
          'change': 0.0281
        }
      ],
      'quarter': '2021Q3'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2021-06-30 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.099,
          'isHistory': true,
          'change': -0.0013999999999999846
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.09880000000000001,
          'isHistory': true,
          'change': -0.0016999999999999932
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.0978,
          'isHistory': true,
          'change': 0.003500000000000003
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.0975,
          'isHistory': true,
          'change': -0.0010999999999999899
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0971,
          'isHistory': true,
          'change': 0.020900000000000002
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.0968,
          'isHistory': true,
          'change': 0.05
        },
        {
          'stockId': '3690.HK',
          'symbol': '美团-W',
          'weight': 0.083,
          'isHistory': true,
          'change': -0.013499999999999998
        },
        {
          'stockId': '600036.SH',
          'symbol': '招商银行',
          'weight': 0.0681,
          'isHistory': true,
          'change': 0.0025000000000000022
        },
        {
          'stockId': '002415.SZ',
          'symbol': '海康威视',
          'weight': 0.0646,
          'isHistory': true,
          'change': 0.007400000000000004
        },
        {
          'stockId': '3968.HK',
          'symbol': '招商银行',
          'weight': 0.030699999999999998,
          'isHistory': false,
          'change': 0.002199999999999997
        }
      ],
      'quarter': '2021Q2'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2021-03-31 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.1005,
          'isHistory': true,
          'change': 0.0063
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.10039999999999999,
          'isHistory': true,
          'change': 0.006399999999999989
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.0986,
          'isHistory': true,
          'change': 0.0021999999999999936
        },
        {
          'stockId': '3690.HK',
          'symbol': '美团-W',
          'weight': 0.0965,
          'isHistory': true,
          'change': 0.0006000000000000033
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.0943,
          'isHistory': true,
          'change': -0.0005000000000000143
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0762,
          'isHistory': true,
          'change': -0.016299999999999995
        },
        {
          'stockId': '600036.SH',
          'symbol': '招商银行',
          'weight': 0.06559999999999999,
          'isHistory': false,
          'change': 0.04809999999999999
        },
        {
          'stockId': '002415.SZ',
          'symbol': '海康威视',
          'weight': 0.0572,
          'isHistory': true,
          'change': 0.007000000000000006
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.046799999999999994,
          'isHistory': true,
          'change': -0.048000000000000015
        },
        {
          'stockId': '000001.SZ',
          'symbol': '平安银行',
          'weight': 0.0325,
          'isHistory': false,
          'change': 0.0325
        }
      ],
      'quarter': '2021Q1'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2020-12-31 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.0964,
          'isHistory': true,
          'change': 0.0012000000000000066
        },
        {
          'stockId': '3690.HK',
          'symbol': '美团-W',
          'weight': 0.0959,
          'isHistory': true,
          'change': 0.042699999999999995
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.09480000000000001,
          'isHistory': true,
          'change': -0.0003999999999999837
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.09480000000000001,
          'isHistory': true,
          'change': -0.0002999999999999947
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.0942,
          'isHistory': true,
          'change': -0.0005000000000000004
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.094,
          'isHistory': true,
          'change': -0.000800000000000009
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0925,
          'isHistory': true,
          'change': -0.005099999999999993
        },
        {
          'stockId': '002415.SZ',
          'symbol': '海康威视',
          'weight': 0.050199999999999995,
          'isHistory': true,
          'change': 0.0075
        },
        {
          'stockId': '300015.SZ',
          'symbol': '爱尔眼科',
          'weight': 0.0354,
          'isHistory': true,
          'change': -0.013099999999999994
        },
        {
          'stockId': '1579.HK',
          'symbol': '颐海国际',
          'weight': 0.030699999999999998,
          'isHistory': false,
          'change': 0.030699999999999998
        }
      ],
      'quarter': '2020Q4'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2020-09-30 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.09759999999999999,
          'isHistory': true,
          'change': 0.0032999999999999974
        },
        {
          'stockId': '002304.SZ',
          'symbol': '洋河股份',
          'weight': 0.09519999999999999,
          'isHistory': false,
          'change': 0.05879999999999999
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.09519999999999999,
          'isHistory': true,
          'change': 0.0007000000000000062
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.0951,
          'isHistory': true,
          'change': -0.0006000000000000033
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.09480000000000001,
          'isHistory': true,
          'change': -0.0013999999999999846
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.0947,
          'isHistory': true,
          'change': -0.00010000000000000286
        },
        {
          'stockId': '3690.HK',
          'symbol': '美团-W',
          'weight': 0.053200000000000004,
          'isHistory': true,
          'change': -0.0187
        },
        {
          'stockId': '300015.SZ',
          'symbol': '爱尔眼科',
          'weight': 0.048499999999999995,
          'isHistory': true,
          'change': 0.009099999999999997
        },
        {
          'stockId': '1177.HK',
          'symbol': '中国生物制药',
          'weight': 0.0437,
          'isHistory': true,
          'change': -0.018499999999999996
        },
        {
          'stockId': '002415.SZ',
          'symbol': '海康威视',
          'weight': 0.042699999999999995,
          'isHistory': false,
          'change': 0.042699999999999995
        }
      ],
      'quarter': '2020Q3'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2020-06-30 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.0962,
          'isHistory': true,
          'change': 0.010900000000000007
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.09570000000000001,
          'isHistory': true,
          'change': -0.0031000000000000055
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.09480000000000001,
          'isHistory': true,
          'change': -0.0005999999999999756
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.09449999999999999,
          'isHistory': true,
          'change': -0.0037000000000000227
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0943,
          'isHistory': true,
          'change': -0.0012000000000000066
        },
        {
          'stockId': '3690.HK',
          'symbol': '美团-W',
          'weight': 0.0719,
          'isHistory': false,
          'change': 0.0719
        },
        {
          'stockId': '1177.HK',
          'symbol': '中国生物制药',
          'weight': 0.0622,
          'isHistory': true,
          'change': -0.028500000000000004
        },
        {
          'stockId': '2269.HK',
          'symbol': '药明生物',
          'weight': 0.0405,
          'isHistory': true,
          'change': -0.0313
        },
        {
          'stockId': '600161.SH',
          'symbol': '天坛生物',
          'weight': 0.0398,
          'isHistory': false,
          'change': 0.0398
        },
        {
          'stockId': '300015.SZ',
          'symbol': '爱尔眼科',
          'weight': 0.0394,
          'isHistory': false,
          'change': 0.0394
        }
      ],
      'quarter': '2020Q2'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2020-03-31 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.09880000000000001,
          'isHistory': true,
          'change': -0.0016999999999999932
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.09820000000000001,
          'isHistory': true,
          'change': 0.0009000000000000119
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0955,
          'isHistory': true,
          'change': -0.004100000000000006
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.09539999999999998,
          'isHistory': true,
          'change': -0.0023000000000000104
        },
        {
          'stockId': '1177.HK',
          'symbol': '中国生物制药',
          'weight': 0.0907,
          'isHistory': true,
          'change': -0.007199999999999984
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.08529999999999999,
          'isHistory': true,
          'change': 0.0005999999999999756
        },
        {
          'stockId': '002007.SZ',
          'symbol': '华兰生物',
          'weight': 0.0775,
          'isHistory': true,
          'change': 0.021200000000000004
        },
        {
          'stockId': '2269.HK',
          'symbol': '药明生物',
          'weight': 0.0718,
          'isHistory': true,
          'change': -0.0015999999999999903
        },
        {
          'stockId': '1093.HK',
          'symbol': '石药集团',
          'weight': 0.0694,
          'isHistory': true,
          'change': -0.0040999999999999925
        },
        {
          'stockId': '600009.SH',
          'symbol': '上海机场',
          'weight': 0.0426,
          'isHistory': true,
          'change': -0.013500000000000005
        }
      ],
      'quarter': '2020Q1'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2019-12-31 00:00:00',
      'bond': [
        {
          'bondId': '170205.IB',
          'symbol': '17国开05',
          'type': '金融债',
          'weight': 0.006,
          'change': -0.0014999999999999996,
          'issuer': '国家开发银行',
          'issuerRating': 'A+'
        },
        {
          'bondId': '190402.IB',
          'symbol': '19农发02',
          'type': '金融债',
          'weight': 0.0048,
          'change': -0.0011000000000000003,
          'issuer': '中国农业发展银行',
          'issuerRating': 'A1'
        }
      ],
      'stock': [
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.1005,
          'isHistory': true,
          'change': 0.011700000000000002
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.09960000000000001,
          'isHistory': true,
          'change': 0.009900000000000006
        },
        {
          'stockId': '1177.HK',
          'symbol': '中国生物制药',
          'weight': 0.09789999999999999,
          'isHistory': true,
          'change': 0.004899999999999974
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.0977,
          'isHistory': true,
          'change': 0.005099999999999993
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.0973,
          'isHistory': true,
          'change': 0.003600000000000006
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.08470000000000001,
          'isHistory': true,
          'change': -0.0007999999999999952
        },
        {
          'stockId': '1093.HK',
          'symbol': '石药集团',
          'weight': 0.0735,
          'isHistory': false,
          'change': 0.0735
        },
        {
          'stockId': '2269.HK',
          'symbol': '药明生物',
          'weight': 0.07339999999999999,
          'isHistory': true,
          'change': 0.003899999999999987
        },
        {
          'stockId': '002007.SZ',
          'symbol': '华兰生物',
          'weight': 0.056299999999999996,
          'isHistory': true,
          'change': 0.0021999999999999936
        },
        {
          'stockId': '600009.SH',
          'symbol': '上海机场',
          'weight': 0.056100000000000004,
          'isHistory': true,
          'change': 0.0049999999999999975
        }
      ],
      'quarter': '2019Q4'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2019-09-30 00:00:00',
      'bond': [
        {
          'bondId': '170205.IB',
          'symbol': '17国开05',
          'type': '金融债',
          'weight': 0.0075,
          'change': -0.0132,
          'issuer': '国家开发银行',
          'issuerRating': 'AAA'
        },
        {
          'bondId': '190402.IB',
          'symbol': '19农发02',
          'type': '金融债',
          'weight': 0.0059,
          'change': -0.010499999999999999,
          'issuer': '中国农业发展银行',
          'issuerRating': 'A+'
        }
      ],
      'stock': [
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.09369999999999999,
          'isHistory': true,
          'change': -0.0050000000000000044
        },
        {
          'stockId': '1177.HK',
          'symbol': '中国生物制药',
          'weight': 0.09300000000000001,
          'isHistory': true,
          'change': -0.007299999999999987
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.0926,
          'isHistory': true,
          'change': -0.006400000000000003
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0897,
          'isHistory': true,
          'change': -0.012299999999999991
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.0888,
          'isHistory': true,
          'change': -0.003699999999999995
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.0855,
          'isHistory': true,
          'change': -0.004699999999999996
        },
        {
          'stockId': '1169.HK',
          'symbol': '海尔电器(退市)',
          'weight': 0.0755,
          'isHistory': true,
          'change': -0.007000000000000006
        },
        {
          'stockId': '2269.HK',
          'symbol': '药明生物',
          'weight': 0.0695,
          'isHistory': false,
          'change': 0.0695
        },
        {
          'stockId': '002007.SZ',
          'symbol': '华兰生物',
          'weight': 0.0541,
          'isHistory': true,
          'change': -0.0020999999999999977
        },
        {
          'stockId': '600009.SH',
          'symbol': '上海机场',
          'weight': 0.051100000000000007,
          'isHistory': true,
          'change': -0.0175
        }
      ],
      'quarter': '2019Q3'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2019-06-30 00:00:00',
      'bond': [
        {
          'bondId': '170205.IB',
          'symbol': '17国开05',
          'type': '金融债',
          'weight': 0.0207,
          'change': 0.0207,
          'issuer': '国家开发银行',
          'issuerRating': 'AAA'
        },
        {
          'bondId': '190402.IB',
          'symbol': '19农发02',
          'type': '金融债',
          'weight': 0.016399999999999998,
          'change': 0.016399999999999998,
          'issuer': '中国农业发展银行',
          'issuerRating': 'A+'
        }
      ],
      'stock': [
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.102,
          'isHistory': true,
          'change': 0.012999999999999984
        },
        {
          'stockId': '1177.HK',
          'symbol': '中国生物制药',
          'weight': 0.1003,
          'isHistory': true,
          'change': 0.0348
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.099,
          'isHistory': true,
          'change': 0.0030000000000000027
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.0987,
          'isHistory': true,
          'change': 0.003500000000000003
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.0925,
          'isHistory': true,
          'change': 0.004100000000000006
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.0902,
          'isHistory': true,
          'change': 0.0063
        },
        {
          'stockId': '1169.HK',
          'symbol': '海尔电器(退市)',
          'weight': 0.0825,
          'isHistory': true,
          'change': 0.004100000000000006
        },
        {
          'stockId': '600009.SH',
          'symbol': '上海机场',
          'weight': 0.06860000000000001,
          'isHistory': true,
          'change': 0.01220000000000001
        },
        {
          'stockId': '002007.SZ',
          'symbol': '华兰生物',
          'weight': 0.0562,
          'isHistory': true,
          'change': -0.007000000000000006
        },
        {
          'stockId': '600004.SH',
          'symbol': '白云机场',
          'weight': 0.0559,
          'isHistory': false,
          'change': 0.0559
        }
      ],
      'quarter': '2019Q2'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2019-03-31 00:00:00',
      'bond': [],
      'stock': [
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.096,
          'isHistory': true,
          'change': 0.001799999999999996
        },
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.09519999999999999,
          'isHistory': true,
          'change': -0.0059000000000000025
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.08900000000000001,
          'isHistory': true,
          'change': 0.03820000000000001
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.08839999999999999,
          'isHistory': true,
          'change': 0.019599999999999992
        },
        {
          'stockId': '0388.HK',
          'symbol': '香港交易所',
          'weight': 0.0839,
          'isHistory': false,
          'change': 0.0839
        },
        {
          'stockId': '1169.HK',
          'symbol': '海尔电器(退市)',
          'weight': 0.0784,
          'isHistory': true,
          'change': 0.0354
        },
        {
          'stockId': '1177.HK',
          'symbol': '中国生物制药',
          'weight': 0.0655,
          'isHistory': false,
          'change': 0.0529
        },
        {
          'stockId': '002007.SZ',
          'symbol': '华兰生物',
          'weight': 0.0632,
          'isHistory': true,
          'change': 0.014600000000000002
        },
        {
          'stockId': '600009.SH',
          'symbol': '上海机场',
          'weight': 0.0564,
          'isHistory': true,
          'change': 0.011799999999999998
        },
        {
          'stockId': '0696.HK',
          'symbol': '中国民航信息网络',
          'weight': 0.0449,
          'isHistory': false,
          'change': 0.0368
        }
      ],
      'quarter': '2019Q1'
    },
    {
      'orderBookId': '005827.OF',
      'date': '2018-12-31 00:00:00',
      'bond': [
        {
          'bondId': '110049.SH',
          'symbol': '海尔转债(退市)',
          'type': '可转债',
          'weight': 0.0003,
          'change': 0.0003,
          'issuer': '海尔智家股份有限公司',
          'issuerRating': 'AAA'
        }
      ],
      'stock': [
        {
          'stockId': '600519.SH',
          'symbol': '贵州茅台',
          'weight': 0.1011,
          'isHistory': false,
          'change': 0.1011
        },
        {
          'stockId': '000858.SZ',
          'symbol': '五粮液',
          'weight': 0.0942,
          'isHistory': false,
          'change': 0.0942
        },
        {
          'stockId': '0700.HK',
          'symbol': '腾讯控股',
          'weight': 0.0688,
          'isHistory': false,
          'change': 0.0688
        },
        {
          'stockId': '002415.SZ',
          'symbol': '海康威视',
          'weight': 0.0608,
          'isHistory': false,
          'change': 0.0608
        },
        {
          'stockId': '000568.SZ',
          'symbol': '泸州老窖',
          'weight': 0.0508,
          'isHistory': false,
          'change': 0.0508
        },
        {
          'stockId': '002007.SZ',
          'symbol': '华兰生物',
          'weight': 0.048600000000000004,
          'isHistory': false,
          'change': 0.048600000000000004
        },
        {
          'stockId': '600009.SH',
          'symbol': '上海机场',
          'weight': 0.0446,
          'isHistory': false,
          'change': 0.0446
        },
        {
          'stockId': '1169.HK',
          'symbol': '海尔电器(退市)',
          'weight': 0.043,
          'isHistory': false,
          'change': 0.043
        },
        {
          'stockId': '0694.HK',
          'symbol': '北京首都机场股份',
          'weight': 0.0415,
          'isHistory': false,
          'change': 0.0415
        },
        {
          'stockId': '1530.HK',
          'symbol': '三生制药',
          'weight': 0.0407,
          'isHistory': false,
          'change': 0.0407
        }
      ],
      'quarter': '2018Q4'
    }
  ],
  'holderStructure': [
    {
      'orderBookId': '005827.OF',
      'datetime': '2018-12-31 00:00:00',
      'instl': 48692684.99,
      'instlWeight': 2.13,
      'retail': 2232485225.84,
      'retailWeight': 97.87
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-06-30 00:00:00',
      'instl': 113865238.38,
      'instlWeight': 6.15,
      'retail': 1738168720.38,
      'retailWeight': 93.85
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2019-12-31 00:00:00',
      'instl': 892174137.28,
      'instlWeight': 15.56,
      'retail': 4841702474.31,
      'retailWeight': 84.44
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-06-30 00:00:00',
      'instl': 4141246516.05,
      'instlWeight': 44.73,
      'retail': 5117582913.55,
      'retailWeight': 55.27
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2020-12-31 00:00:00',
      'instl': 5451613489.77,
      'instlWeight': 23.08,
      'retail': 18169998486.34,
      'retailWeight': 76.92
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-06-30 00:00:00',
      'instl': 3027223849.42,
      'instlWeight': 10.15,
      'retail': 26792203640.95,
      'retailWeight': 89.85
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2021-12-31 00:00:00',
      'instl': 728875846.54,
      'instlWeight': 2.78,
      'retail': 25456255064.44,
      'retailWeight': 97.22
    },
    {
      'orderBookId': '005827.OF',
      'datetime': '2022-06-30 00:00:00',
      'instl': 477999903.17,
      'instlWeight': 1.82,
      'retail': 25724615232.07,
      'retailWeight': 98.18
    }
  ]
};

export { userInfo, fundBasicInfo, realTimeValuationArr, performanceSummary, holdingAnalysis };
