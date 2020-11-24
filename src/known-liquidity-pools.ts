/*
import tokenUsdcSvg from './assets/token-usdc.svg'
import tokenEthSvg from './assets/token-eth.svg'
import tokenBptSvg from './assets/token-bpt.svg'
*/
import tokenUniSvg from './assets/token-uni.svg'

import tokenRLRSvg from './assets/token-rlr-v2.svg'
import tokenSushiPng from './assets/token-sushilp.png'

import { ContractGroup } from './environment/types'

export enum PoolRoute {
  UniswapRlr = '/uniswap-antv2-eth',
  Sushiswap = '/balancer-antv2-usdc',
  UniswapAntV1 = '/uniswap-ant-eth',
}

export type PoolName = 'unipoolRlrEth' | 'sushiswapRlrEth'

export type PoolAttributes = {
  title: string
  path: PoolRoute
  stakeToken: {
    graphic: string
    symbol: string
    decimals: number
  }
  rewardToken: {
    graphic: string
    symbol: string
    decimals: number
  }
  contractGroup: ContractGroup
  liquidityUrl: string | null
  endDate: string
  ended?: boolean
}

export const KNOWN_LIQUIDITY_POOLS = new Map<PoolName, PoolAttributes>([
  [
    'unipoolRlrEth',
    {
      title: 'Uniswap RLR / ETH',
      path: PoolRoute.UniswapRlr,
      stakeToken: {
        graphic: tokenUniSvg,
        symbol: 'ULP',
        decimals: 18,
      },
      rewardToken: {
        graphic: tokenRLRSvg,
        symbol: 'RLR',
        decimals: 18,
      },
      contractGroup: 'unipoolRLRETH',
      endDate: 'November 12th, 15:00 UTC',
      liquidityUrl:
        'https://info.uniswap.org/pair/0xe4332d93b4f0477d5230852f59d2621e2acdea1a',
      ended: false,
    },
  ],
  [
    'sushiswapRlrEth',
    {
      title: 'Sushiswap RLR / ETH',
      path: PoolRoute.Sushiswap,
      stakeToken: {
        graphic: tokenSushiPng,
        symbol: 'SLP',
        decimals: 18,
      },
      rewardToken: {
        graphic: tokenRLRSvg,
        symbol: 'RLR',
        decimals: 18,
      },
      contractGroup: 'balancer',
      endDate: 'November 12th, 15:00 UTC',
      liquidityUrl:
        'https://sushiswap.fi/token/0x5b3F693EfD5710106eb2Eac839368364aCB5a70f/',
      ended: false,
    },
  ],
])
