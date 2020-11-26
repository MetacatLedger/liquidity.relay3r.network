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
          poolContract: '0x93c05dFBDC926742B46f8465640859845d123B67',
          lpToken: '0xe4332d93B4f0477d5230852f59D2621E2AcdEa1A', // UNI
          rewardToken: '0x5b3F693EfD5710106eb2Eac839368364aCB5a70f', // WETH
        },
        mooniswap: {
          poolContract: '0xaF7346ef991d6C60714A6e021fe34461aFba795D',
          lpToken: '0xF83f2C42d7b38394F67368c859756F10761beF42', // BPT
          rewardToken: '0x5b3F693EfD5710106eb2Eac839368364aCB5a70f', // USDC
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
          poolContract: '0xe3f8Da61f229BeD7F78B4F6e995E19E669a41A10',
          lpToken: '0x0AFa09D87be7711B5C64A5b577F71AC9502764E0',
          rewardToken: '0x8875c2F905f832375d932Af54c0d3BD6b46ecb54',
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
