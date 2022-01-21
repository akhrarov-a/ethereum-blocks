import { Button } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { hoc } from '@core';
import { useEthereumBlockHeader } from './ethereum-block-header.props';
import React from 'react';
import classNames from 'classnames';
import logo from '../../../../assets/logo-ethereum.png';
import styles from './ethereum-block-header.module.scss';

/**
 * Renders Ethereum Block Header
 */
const EthereumBlockHeader = hoc(
  useEthereumBlockHeader,
  ({
    selectedBlockNumber,
    onArrowLeftClick,
    onArrowRightClick,
    onLatestClick
  }) => (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={logo} className={styles.logo} alt='Logo Ethereum' />
        <div className={styles.info}>
          <h3 className={styles['info-title']}>
            Ethereum Block#{selectedBlockNumber}
          </h3>
          <div className={styles.button}>
            <IoIosArrowBack
              className={styles.arrow}
              onClick={onArrowLeftClick}
            />
            <span className={classNames(styles['tooltip-text'], styles.lefter)}>
              View Previous Block
            </span>
          </div>
          <h3 className={styles['info-title']}>{selectedBlockNumber}</h3>
          <div className={styles.button}>
            <IoIosArrowForward
              className={styles.arrow}
              onClick={onArrowRightClick}
            />
            <span className={styles['tooltip-text']}>View Next Block</span>
          </div>
          <Button
            className={styles.latest}
            variant='outline-dark'
            onClick={onLatestClick}
          >
            Latest
          </Button>
        </div>
      </div>
    </div>
  )
);

export { EthereumBlockHeader };
