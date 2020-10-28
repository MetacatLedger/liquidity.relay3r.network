import React from 'react'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import PoolButton from './PoolButton'
import PoolName from './PoolName'
import {
  PATH_BALANCER_ANTV2_USDC,
  PATH_UNISWAP_ANTV2_ETH,
  PATH_UNISWAP_ANT_ETH,
} from '../../Routes'

function Home(): JSX.Element {
  return (
    <LayoutGutter>
      <LayoutLimiter size="small">
        <div
          css={`
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <PoolButton to={PATH_UNISWAP_ANTV2_ETH}>
            <PoolName name="uniswapV2" />
          </PoolButton>
          <PoolButton to={PATH_BALANCER_ANTV2_USDC}>
            <PoolName name="balancer" />
          </PoolButton>
          <PoolButton to={PATH_UNISWAP_ANT_ETH} finished>
            <PoolName name="uniswapV1" />
          </PoolButton>
        </div>
      </LayoutLimiter>
    </LayoutGutter>
  )
}

export default Home