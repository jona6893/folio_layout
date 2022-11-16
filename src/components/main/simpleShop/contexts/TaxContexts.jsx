import React from 'react'
import { createContext } from 'react'

export const TaxContexts = createContext();
const tax = 0.25

export const TaxProvider = ({ children }) => {
  return <TaxContexts.Provider value={tax}>{children}</TaxContexts.Provider>;
};

