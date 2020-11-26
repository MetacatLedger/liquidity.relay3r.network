/*
import tokenUsdcSvg from './assets/token-usdc.svg'
import tokenEthSvg from './assets/token-eth.svg'
import tokenBptSvg from './assets/token-bpt.svg'
import tokenSushiPng from './assets/token-sushilp.png'
*/
import tokenUniSvg from './assets/token-uni.svg'
import tokenMooniSvg from './assets/token-mooniswap.svg'

import tokenRLRSvg from './assets/token-rlr-v2.svg'

import { ContractGroup } from './environment/types'

export enum PoolRoute {
  UniswapRlr = '/uniswap-rlreth',
  Mooniswap = '/mooniswap-rlreth',
  UniswapAntV1 = '/uniswap-ant-eth',
}

export type PoolName = 'unipoolRlrEth' | 'mooniswapRlrEth'

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
      endDate: 'December 26th, 8:12 GMT',
      liquidityUrl:
        'https://info.uniswap.org/pair/0xe4332d93b4f0477d5230852f59d2621e2acdea1a',
      ended: false,
    },
  ],
  [
    'mooniswapRlrEth',
    {
      title: 'Mooniswap RLR / ETH',
      path: PoolRoute.Mooniswap,
      stakeToken: {
        graphic: tokenMooniSvg,
        symbol: 'MLP',
        decimals: 18,
      },
      rewardToken: {
        graphic: tokenRLRSvg,
        symbol: 'RLR',
        decimals: 18,
      },
      contractGroup: 'mooniswap',
      endDate: 'December 26th, 8:12 GMT',
      liquidityUrl:
        'https://mooniswap.info/pair/0xf83f2c42d7b38394f67368c859756f10761bef42/',
      ended: false,
    },
  ],
])
