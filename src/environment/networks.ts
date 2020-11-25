import { EnvNetworkConfig, EnvNetworkName } from './types'

const networks = new Map<EnvNetworkName, EnvNetworkConfig>([
  [
    'ethereum',
    {
      chainId: 1,
      legacyNetworkType: 'main',
      endpoints: {
        ethereum: 'https://mainnet.eth.aragon.network/',
      },
      ipfsGateway: 'https://ipfs.eth.aragon.network/ipfs',
      contracts: {
        unipoolRLRETH: {
          poolContract: '0x37b7870148b4b815cb6a4728a84816cc1150e3aa',
          lpToken: '0x9def9511fec79f83afcbffe4776b1d817dc775ae', // UNI
          rewardToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
        },
        mooniswap: {
          poolContract: '0x7f2b9e4134ba2f7e99859ae40436cbe888e86b79',
          lpToken: '0xde0999ee4e4bea6fecb03bf4ebef2626942ec6f5', // BPT
          rewardToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
        },
      },
    },
  ],
  [
    'ropsten',
    {
      chainId: 3,
      legacyNetworkType: 'ropsten',
      endpoints: {
        ethereum: 'https://ropsten.eth.aragon.network/',
      },
      ipfsGateway: 'https://ipfs.eth.aragon.network/ipfs',
      contracts: {
        unipoolRLRETH: {
          poolContract: '0xEC11712256aA6D260cE684A2E54E14f88C29E686',
          lpToken: '0xc25a4E07D7e1f8464D52dE0054613Fe74504aF7b',
          rewardToken: '0x2DCFA66aEd3901D180d937A2DA233F3F8CDd58C8',
        },
        mooniswap: {
          poolContract: '0xd91c406571cd6edcdd67e3519096c868dfc160d5',
          lpToken: '0xa117000000f279d81a1d3cc75430faa017fa5a2e',
          rewardToken: '0xa117000000f279d81a1d3cc75430faa017fa5a2e',
        },
      },
    },
  ],
])

export function getNetworkConfig(name: EnvNetworkName): EnvNetworkConfig {
  return networks.get(name) as EnvNetworkConfig
}
