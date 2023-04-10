import { createContext, ReactNode, useState, useMemo } from 'react';
import { DatesContextType } from './config';
import { HistoricalDates } from '../data/config';

export const DatesContext = createContext<DatesContextType | null>(null);

interface DatesContextProps {
  children: ReactNode;
}

export default function DatesContextProvider({ children }: DatesContextProps) {
  const [dates, setDates] = useState<HistoricalDates | null>(null);
  const [currentPeriod, setCurrentPeriod] = useState(0);

  const value = useMemo(
    () => ({
      dates,
      currentPeriod,
      setDates,
      setCurrentPeriod,
    }),
    [dates, currentPeriod]
  );

  return <DatesContext.Provider value={value}>{children}</DatesContext.Provider>;
}
