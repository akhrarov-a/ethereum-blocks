/**
 * Transaction
 */
type Transaction = {
  from: string;
  to: string;
  blockHash: string;
};

/**
 * Ethereum Block
 */
type EthereumBlock = {
  number: string;
  hash: string;
  transactions: Transaction[];
};

export type { EthereumBlock, Transaction };
