import { hoc } from '@core';
import { useEthereumBlock } from './ethereum-block.props';
import React from 'react';

/**
 * Renders Ethereum Block
 */
const EthereumBlock = hoc(useEthereumBlock, ({ params }) => (
  <div>Ethereum Block#{params.id}</div>
));

export { EthereumBlock };
