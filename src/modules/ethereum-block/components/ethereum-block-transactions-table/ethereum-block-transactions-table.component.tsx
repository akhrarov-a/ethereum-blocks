import { Spinner, Table } from 'react-bootstrap';
import { blockNumberHexToDec, hoc } from '@core';
import { useEthereumBlockTransactionsTable } from './ethereum-block-transactions-table.props';
import React from 'react';
import styles from './ethereum-block-transactions-table.module.scss';

/**
 * Renders Ethereum Block Transactions Table
 */
const EthereumBlockTransactionsTable = hoc(
  useEthereumBlockTransactionsTable,
  ({ loading, selectedBlock }) => (
    <div className={styles.container}>
      {loading ? (
        <div className={styles['spinner-container']}>
          <Spinner className={styles.spinner} animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        !!selectedBlock && (
          <div className={styles.content}>
            <h2 className={styles.title}>
              Block #{blockNumberHexToDec(selectedBlock?.number as string)}{' '}
              transactions
            </h2>
            <Table className={styles.table} bordered size='md'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Hash</th>
                </tr>
              </thead>
              <tbody>
                {selectedBlock?.transactions.map((transaction, index) => (
                  <tr key={transaction.blockHash}>
                    <td>{index + 1}</td>
                    <td>{transaction.from}</td>
                    <td>{transaction.to}</td>
                    <td>{transaction.blockHash}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )
      )}
    </div>
  )
);

export { EthereumBlockTransactionsTable };
