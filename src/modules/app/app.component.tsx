import { EthereumBlock } from '@ethereum-block';
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import React from 'react';

/**
 * Renders App
 */
const App = () => (
  <div>
    <Routes>
      <Route path='/block/:id' element={<EthereumBlock />} />
      <Route path='*' element={<Navigate to='/block/latest' />} />
    </Routes>
  </div>
);

export { App };
