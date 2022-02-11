import {
  ApyVisionPosition,
  ApyVisionUniPosition,
} from 'elements/earn/portfolio/v3/externalHoldings/externalHoldings';

export const mockedUniPositions: ApyVisionUniPosition[] = [
  {
    nft_id: 23079,
    pool_provider_name: 'uniswapv3_matic',
    pool_address: '0x88f3c15523544835ff6c738ddb30995339ad57d6',
    pool_name: 'WMATIC/USDC',
    user_address: '0x006cc1b89e9b68e08eec14a514d17b47b363acce',
    token0_name: 'WMATIC',
    token1_name: 'USDC',
    token0_id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    token1_id: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    lower_tick: -287760,
    upper_tick: -259680,
    liquidity: 70165978164752,
    nft_position_snapshot_count: 4,
    fee: 0.3,
    lower_tick_vs_token0: 0.3186888066806005,
    upper_tick_vs_token0: 5.282077199650783,
    lower_tick_vs_token1: 0.189319459410043,
    upper_tick_vs_token1: 3.137857305,
    current_day_data: {
      date: '2022-02-11',
      timestamp: 1644578037,
      hodl_value: 95.42614057656849,
      all_token0_value: 88.04008378338189,
      all_token1_value: 99.86592091272753,
      position_usd_value_at_block: 95.04667052148454,
      token0_pending_fees: 0.3065613856584912,
      token0_collected_fees: 0.3128929803020377,
      token1_pending_fees: 0.545727,
      token1_collected_fees: 0.466869,
      collected_fees_usd: 0.9634398823486404,
      pending_fees_usd: 1.1167405277887064,
      fee_apys: {
        apy_7d: 0,
        apy_14d: 0,
        apy_30d: 0,
        apy_60d: 0,
        apy_90d: 0,
        apy_inception: 31.678552969449363,
      },
      token0_amount: 17.74520784065054,
      token1_amount: 62.373205,
      token0_amount_if_exit: 20.94788503439604,
      token1_amount_if_exit: 56.0283,
      token0_price_usd: 1.8626400926593354,
      token1_price_usd: 1,
      roi_vs_hodl: null,
      roi_vs_all_token0: null,
      roi_vs_all_token1: null,
      initial_capital_usd: 99.86592091272753,
    },
  },
  {
    nft_id: 33964,
    pool_provider_name: 'uniswapv3_arbitrum',
    pool_address: '0x468b88941e7cc0b88c1869d68ab6b570bcef62ff',
    pool_name: 'WETH/LINK',
    user_address: '0x006cc1b89e9b68e08eec14a514d17b47b363acce',
    token0_name: 'WETH',
    token1_name: 'LINK',
    token0_id: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    token1_id: '0xf97f4df75117a78c1a5a0dbb814af92458539fb4',
    lower_tick: 44400,
    upper_tick: 58260,
    liquidity: 393608290141687360,
    nft_position_snapshot_count: 1,
    fee: 0.3,
    lower_tick_vs_token0: 84.75612497990107,
    upper_tick_vs_token0: 338.9012338710255,
    lower_tick_vs_token1: 0.0029507121841302196,
    upper_tick_vs_token1: 0.011798557334200193,
    current_day_data: {
      date: '2022-02-11',
      timestamp: 1644578040,
      hodl_value: 53.83953408676257,
      all_token0_value: 54.77762680681666,
      all_token1_value: 52.89936274116186,
      position_usd_value_at_block: 53.808737327313665,
      token0_pending_fees: 0.00000515398963219,
      token0_collected_fees: 0,
      token1_pending_fees: 0.001205859094950578,
      token1_collected_fees: 0,
      collected_fees_usd: 0,
      pending_fees_usd: 0.03719581992328547,
      fee_apys: {
        apy_7d: 0,
        apy_14d: 0,
        apy_30d: 0,
        apy_60d: 0,
        apy_90d: 0,
        apy_inception: 8.177206884636188,
      },
      token0_amount: 0.008856561444142584,
      token1_amount: 1.5,
      token0_amount_if_exit: 0.00829336341470942,
      token1_amount_if_exit: 1.5972438013404446,
      token0_price_usd: 3095.9107614523923,
      token1_price_usd: 17.613606801584798,
      roi_vs_hodl: null,
      roi_vs_all_token0: null,
      roi_vs_all_token1: null,
      initial_capital_usd: 55.34275318999802,
    },
  },
];

export const mockedNonUniPositions: ApyVisionPosition = {
  address: '0x006cc1b89e9b68e08eec14a514d17b47b363acce',
  totalFeeUsd: 247.39293077295486,
  totalValueUsd: 23391878726.035645,
  netGainUsd: 23391875680.47562,
  netGainPct: 99.99998698026755,
  chainId: 1,
  searchCountMonthly: 0,
  isProMember: false,
  userPools: [
    {
      poolProviderKey: 'balancerv2_eth',
      networkId: 1,
      lastSyncBlock: 13616352,
      name: 'DAI/USDC/USDT',
      address: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42',
      totalLpTokens: 139489905.49350178,
      ownedLpTokensPct: 0.00007154392205477475,
      mintBurntLedgerLpTokens: 99.79654926054988,
      currentOwnedLpTokens: 99.79654926054988,
      lpTokenUsdPrice: 1.005402331895329,
      totalValueUsdViaLpTokens: 100.33568334166391,
      totalValueUsd: 100.43163435942891,
      impLossPct: -0.00007166916938805556,
      initialCapitalValueUsd: 100.3346052593505,
      totalFeeUsd: 10.4000156933762,
      hasPartialSessions: false,
      tokens: [
        {
          tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
          tokenName: 'DAI',
          tokenStartingBalance: 30.73924968298704,
          tokenCurrentBalance: 39.51920063722607,
          tokenCurrentPrice: 1.0009234,
          tokenUsdGain: 8.788058360950174,
          weight: 0.3333333333333333,
          averageWeightedExecutedPrice: 1.001961526463502,
        },
        {
          tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          tokenName: 'USDC',
          tokenStartingBalance: 34.456885489257,
          tokenCurrentBalance: 40.823664786286436,
          tokenCurrentPrice: 1.0004888,
          tokenUsdGain: 6.369891378749827,
          weight: 0.3333333333333333,
          averageWeightedExecutedPrice: 0.9994532625608001,
        },
        {
          tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          tokenName: 'USDT',
          tokenStartingBalance: 34.811440922942424,
          tokenCurrentBalance: 19.996474618651604,
          tokenCurrentPrice: 1.0017927,
          tokenUsdGain: -14.841525094384522,
          weight: 0.3333333333333333,
          averageWeightedExecutedPrice: 0.9999941266527301,
        },
      ],
      netGainUsd: 0.31642464531547887,
      netGainPct: 0.3140751776672719,
    },
    {
      poolProviderKey: 'oneinch_eth',
      networkId: 1,
      lastSyncBlock: 13616352,
      name: '1INCH/ICHI',
      address: '0x1dce26f543e591c27717e25294aebbf59ad9f3a5',
      totalLpTokens: 40435.618876870736,
      ownedLpTokensPct: 0.16816856496512322,
      mintBurntLedgerLpTokens: 68,
      currentOwnedLpTokens: 68,
      lpTokenUsdPrice: 13.246678565814499,
      totalValueUsdViaLpTokens: 900.7741424753859,
      totalValueUsd: 897.8307152472244,
      impLossPct: -26.999225631020273,
      initialCapitalValueUsd: 1017.4056129958796,
      totalFeeUsd: 138.24827987166304,
      hasPartialSessions: false,
      tokens: [
        {
          tokenAddress: '0x111111111117dc0aa78b770fa6a738034120c302',
          tokenName: '1INCH',
          tokenStartingBalance: 101.51616600334091,
          tokenCurrentBalance: 247.4776458943968,
          tokenCurrentPrice: 1.806269,
          tokenUsdGain: 263.6456963213376,
          weight: 0.5,
          averageWeightedExecutedPrice: 4.906311612462001,
        },
        {
          tokenAddress: '0x903bef1736cddf2a537176cf3c64579c3867a881',
          tokenName: 'ICHI',
          tokenStartingBalance: 59.776694429051815,
          tokenCurrentBalance: 26.504485712078395,
          tokenCurrentPrice: 17.009178,
          tokenUsdGain: -565.9329205201525,
          weight: 0.5,
          averageWeightedExecutedPrice: 8.687928863270631,
        },
      ],
      netGainUsd: -302.2872241988148,
      netGainPct: -25.188126455167158,
    },
    {
      poolProviderKey: 'balancer_eth',
      networkId: 1,
      lastSyncBlock: 13616352,
      name: 'WBTC/REN/LINK/AAVE/BAL/BAND/ETH',
      address: '0x49ff149d649769033d43783e7456f626862cd160',
      totalLpTokens: 527701.3335593339,
      ownedLpTokensPct: 0.001356835370426365,
      mintBurntLedgerLpTokens: 7.160038343944657,
      currentOwnedLpTokens: 7.160038343944657,
      lpTokenUsdPrice: 16.994616455191213,
      totalValueUsdViaLpTokens: 121.6821054598019,
      totalValueUsd: 121.6821054598019,
      impLossPct: -99.93744711041558,
      initialCapitalValueUsd: 127.90569577882346,
      totalFeeUsd: 27.974575343094244,
      hasPartialSessions: false,
      tokens: [
        {
          tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          tokenName: 'WBTC',
          tokenStartingBalance: 0.000819211889317602,
          tokenCurrentBalance: 0.000698712966407743,
          tokenCurrentPrice: 43476.754,
          tokenUsdGain: -5.238902028616905,
          weight: 12.5,
          averageWeightedExecutedPrice: 39115.2012499249,
        },
        {
          tokenAddress: '0x408e41876cccdc0f92210600ef50372656052a38',
          tokenName: 'REN',
          tokenStartingBalance: 32.11065819410574,
          tokenCurrentBalance: 30.925456305182152,
          tokenCurrentPrice: 0.3902862,
          tokenUsdGain: -0.4625679414608087,
          weight: 5,
          averageWeightedExecutedPrice: 0.39827450668550596,
        },
        {
          tokenAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
          tokenName: 'LINK',
          tokenStartingBalance: 0.5997299390034192,
          tokenCurrentBalance: 0.6917624407054368,
          tokenCurrentPrice: 17.581135,
          tokenUsdGain: 1.6180358368109011,
          weight: 5,
          averageWeightedExecutedPrice: 21.324359048767533,
        },
        {
          tokenAddress: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
          tokenName: 'AAVE',
          tokenStartingBalance: 0.05201055847912002,
          tokenCurrentBalance: 0.08470939783339772,
          tokenCurrentPrice: 178.99449,
          tokenUsdGain: 5.852912073810867,
          weight: 6.25,
          averageWeightedExecutedPrice: 306.44647799594554,
        },
        {
          tokenAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
          tokenName: 'BAL',
          tokenStartingBalance: 0.6429655204900213,
          tokenCurrentBalance: 0.8267981875876586,
          tokenCurrentPrice: 14.661376,
          tokenUsdGain: 2.6952398534012882,
          weight: 5,
          averageWeightedExecutedPrice: 19.879928385026417,
        },
        {
          tokenAddress: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
          tokenName: 'BAND',
          tokenStartingBalance: 2.1023633615726163,
          tokenCurrentBalance: 3.0578030941463026,
          tokenCurrentPrice: 4.0445476,
          tokenUsdGain: 3.8643214773255443,
          weight: 5,
          averageWeightedExecutedPrice: 6.083085724076737,
        },
        {
          tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          tokenName: 'WETH',
          tokenStartingBalance: 0.012280541950185457,
          tokenCurrentBalance: 0.0088263448214083,
          tokenCurrentPrice: 3106.6814,
          tokenUsdGain: -10.731089971905396,
          weight: 11.25,
          averageWeightedExecutedPrice: 2343.131708505361,
        },
      ],
      netGainUsd: -2.40205070063449,
      netGainPct: -1.9358238593561647,
    },
    {
      poolProviderKey: 'sushiswap_eth',
      networkId: 1,
      lastSyncBlock: 13616352,
      name: 'FARM/ETH',
      address: '0x69b39b89f9274a16e8a19b78e5eb47a4d91dac9e',
      totalLpTokens: 24.867880750665172,
      ownedLpTokensPct: 0.2590051650156409,
      mintBurntLedgerLpTokens: 0.06440909557415313,
      currentOwnedLpTokens: 0.06440909557415313,
      lpTokenUsdPrice: 1458.1147651450838,
      totalValueUsdViaLpTokens: 93.91585326631355,
      totalValueUsd: 93.46204345997067,
      impLossPct: -0.9991311059023511,
      initialCapitalValueUsd: 99.49418725479029,
      totalFeeUsd: 14.03618955891469,
      hasPartialSessions: false,
      tokens: [
        {
          tokenAddress: '0xa0246c9032bc3a600820415ae600c6388619a14d',
          tokenName: 'FARM',
          tokenStartingBalance: 0.32758123441454284,
          tokenCurrentBalance: 0.4078008462024057,
          tokenCurrentPrice: 114.264336,
          tokenUsdGain: 9.166240675117923,
          weight: 0.5,
          averageWeightedExecutedPrice: 151.86185410255186,
        },
        {
          tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          tokenName: 'WETH',
          tokenStartingBalance: 0.016004095051664485,
          tokenCurrentBalance: 0.015085212969831622,
          tokenCurrentPrice: 3106.6814,
          tokenUsdGain: -2.8546738724234326,
          weight: 0.5,
          averageWeightedExecutedPrice: 3108.3977861167014,
        },
      ],
      netGainUsd: 6.311566802694486,
      netGainPct: 6.32588796383992,
    },
    {
      poolProviderKey: 'balancerv2_eth',
      networkId: 1,
      lastSyncBlock: 13616352,
      name: 'WBTC/ETH',
      address: '0xa6f548df93de924d73be7d25dc02554c6bd66db5',
      totalLpTokens: 16326.727234499962,
      ownedLpTokensPct: 0.00007718705338287901,
      mintBurntLedgerLpTokens: 0.012602119666170532,
      currentOwnedLpTokens: 0.012602119666170532,
      lpTokenUsdPrice: 11787.226791817911,
      totalValueUsdViaLpTokens: 148.5440425627807,
      totalValueUsd: 148.67396299012438,
      impLossPct: -0.13445172763223434,
      initialCapitalValueUsd: 129.0038756822184,
      totalFeeUsd: 9.830401230614186,
      hasPartialSessions: false,
      tokens: [
        {
          tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          tokenName: 'WBTC',
          tokenStartingBalance: 0.0016075784512105452,
          tokenCurrentBalance: 0.0017086703622966105,
          tokenCurrentPrice: 43476.754,
          tokenUsdGain: 4.395148149678734,
          weight: 0.5,
          averageWeightedExecutedPrice: 39942.09749638464,
        },
        {
          tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          tokenName: 'WETH',
          tokenStartingBalance: 0.024981430395399573,
          tokenCurrentBalance: 0.02394404588171281,
          tokenCurrentPrice: 3106.6814,
          tokenUsdGain: -3.222823173318709,
          weight: 0.5,
          averageWeightedExecutedPrice: 2572.7865335469783,
        },
      ],
      netGainUsd: 1.1723249763600165,
      netGainPct: 0.7823516967081803,
    },
    {
      poolProviderKey: 'uniswap_eth',
      networkId: 1,
      lastSyncBlock: 13616352,
      name: 'WBTC/ETH',
      address: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
      totalLpTokens: 0.012242988330365146,
      ownedLpTokensPct: 0.003138839324398332,
      mintBurntLedgerLpTokens: 3.84287732195e-7,
      currentOwnedLpTokens: 3.84287732195e-7,
      lpTokenUsdPrice: 2782644962.7406974,
      totalValueUsdViaLpTokens: 1069.3363222354628,
      totalValueUsd: 1073.1374587907967,
      impLossPct: -8.228246529614447,
      initialCapitalValueUsd: 731.9347670222953,
      totalFeeUsd: 21.397597571782565,
      hasPartialSessions: false,
      tokens: [
        {
          tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          tokenName: 'WBTC',
          tokenStartingBalance: 0.0076957099999940305,
          tokenCurrentBalance: 0.012323546693713206,
          tokenCurrentPrice: 43476.754,
          tokenUsdGain: 201.20331748500195,
          weight: 0.5,
          averageWeightedExecutedPrice: 47545.12316187831,
        },
        {
          tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          tokenName: 'WETH',
          tokenStartingBalance: 0.2496485599767369,
          tokenCurrentBalance: 0.17296580549930682,
          tokenCurrentPrice: 3106.6814,
          tokenUsdGain: -238.22888703579878,
          weight: 0.5,
          averageWeightedExecutedPrice: 1465.6342492098088,
        },
      ],
      netGainUsd: -37.02556955079672,
      netGainPct: -3.3351470554831044,
    },
    {
      poolProviderKey: 'kyber_eth',
      networkId: 1,
      lastSyncBlock: 13616352,
      name: 'ETH/USDT',
      address: '0xce9874c42dce7fffbe5e48b026ff1182733266cb',
      totalLpTokens: 0.001321111630731553,
      ownedLpTokensPct: 0.036227544458750725,
      mintBurntLedgerLpTokens: 4.78606303373e-7,
      currentOwnedLpTokens: 4.78606303373e-7,
      lpTokenUsdPrice: 114274603.66671132,
      totalValueUsdViaLpTokens: 54.692545630339374,
      totalValueUsd: 54.94613930324433,
      impLossPct: -1.6842775251571518,
      initialCapitalValueUsd: 44.4482179636866,
      totalFeeUsd: 6.245783049269283,
      hasPartialSessions: false,
      tokens: [
        {
          tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          tokenName: 'WETH',
          tokenStartingBalance: 0.010711894963237241,
          tokenCurrentBalance: 0.00840288635293865,
          tokenCurrentPrice: 3106.6814,
          tokenUsdGain: -7.17335410205448,
          weight: 0.5,
          averageWeightedExecutedPrice: 2146.70117082271,
        },
        {
          tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          tokenName: 'USDT',
          tokenStartingBalance: 21.41343199997234,
          tokenCurrentBalance: 28.789437739220887,
          tokenCurrentPrice: 1.0017927,
          tokenUsdGain: 7.389228704737299,
          weight: 0.5,
          averageWeightedExecutedPrice: 1.0018469017205198,
        },
      ],
      netGainUsd: 0.215874602682824,
      netGainPct: 0.39134648537483563,
    },
    {
      poolProviderKey: 'curve_eth',
      networkId: 1,
      lastSyncBlock: 13616352,
      name: 'WBTC/ETH/USDT',
      address: '0xc4ad29ba4b3c580e6d59105fff484999997675ff',
      totalLpTokens: 610545.1472926873,
      ownedLpTokensPct: 0.00002293818154795718,
      mintBurntLedgerLpTokens: 0.1400479543182392,
      currentOwnedLpTokens: 0.1400479543182392,
      lpTokenUsdPrice: 166728723845.96872,
      totalValueUsdViaLpTokens: 23350016700.718544,
      totalValueUsd: 23391876235.871586,
      impLossPct: -2.5053564159474795,
      initialCapitalValueUsd: 158.58055356819293,
      totalFeeUsd: 19.260088454240634,
      hasPartialSessions: false,
      tokens: [
        {
          tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          tokenName: 'WBTC',
          tokenStartingBalance: 0.0017738096285321793,
          tokenCurrentBalance: 0.7214729308152176,
          tokenCurrentPrice: 43476.754,
          tokenUsdGain: 31290.181645849712,
          weight: 0.3333333333333333,
          averageWeightedExecutedPrice: 29864.072831652193,
        },
        {
          tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          tokenName: 'WETH',
          tokenStartingBalance: 0.02965041579492163,
          tokenCurrentBalance: 1.67225822447847e-13,
          tokenCurrentPrice: 3106.6814,
          tokenUsdGain: -92.11439525182972,
          weight: 0.3333333333333333,
          averageWeightedExecutedPrice: 1792.0815187433063,
        },
        {
          tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          tokenName: 'USDT',
          tokenStartingBalance: 52.369549131723744,
          tokenCurrentBalance: 23349985349.83381,
          tokenCurrentPrice: 1.0017927,
          tokenUsdGain: 23391844816.107025,
          weight: 0.3333333333333333,
          averageWeightedExecutedPrice: 1.0019450679460384,
        },
      ],
      netGainUsd: 23391876014.174274,
      netGainPct: 49.99999976306164,
    },
  ],
  showUpgrade: true,
  priceLastUpdated: 1644579626000,
  nextUpdateAt: 1644582330774,
  message: null,
  allowDownload: false,
  visionTokenBalance: 0,
  nftExpiryDate: 0,
  nftTrialReturnEndDate: 0,
  loggedInWallet: null,
  totalCurrentPools: 8,
};
