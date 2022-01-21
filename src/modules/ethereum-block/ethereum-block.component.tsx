import {
  EthereumBlockHeader,
  EthereumBlockTransactionsTable
} from './components';
import { hoc } from '@core';
import { useEthereumBlock } from './ethereum-block.props';
import React from 'react';

/**
 * Renders Ethereum Block
 */
const EthereumBlock = hoc(useEthereumBlock, () => (
  <div>
    <EthereumBlockHeader />
    <EthereumBlockTransactionsTable />
  </div>
));

export { EthereumBlock };
