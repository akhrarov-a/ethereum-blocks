import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { hoc } from '@core';
import { useEthereumBlockHeader } from './ethereum-block-header.props';
import React from 'react';
import logo from '../../../../assets/logo-ethereum.png';
import styles from './ethereum-block-header.module.scss';

/**
 * Renders Ethereum Block Header
 */
const EthereumBlockHeader = hoc(useEthereumBlockHeader, () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <img src={logo} className={styles.logo} alt='Logo Ethereum' />
      <div className={styles.info}>
        <h3 className={styles['info-title']}>Ethereum Block#{'latest'}</h3>
        <IoIosArrowBack className={styles.arrow} />
        <h3 className={styles['info-title']}>{'latest'}</h3>
        <IoIosArrowForward className={styles.arrow} />
      </div>
    </div>
  </div>
));

export { EthereumBlockHeader };
