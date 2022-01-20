import { BrowserRouter } from 'react-router-dom';
import { ProviderProps } from './provider.props';
import { Provider as StoreProvider } from 'react-redux';
import React from 'react';

/**
 * Renders Provider
 */
const Provider: React.FC<ProviderProps> = ({ children, store }) => (
  <StoreProvider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </StoreProvider>
);

export { Provider };
