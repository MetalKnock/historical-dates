import { Dispatch } from 'react';
import { HistoricalDates } from '../data/config';

interface DatesContextType {
  dates: HistoricalDates | null;
  currentPeriod: number;
  setDates: Dispatch<React.SetStateAction<HistoricalDates | null>>;
  setCurrentPeriod: Dispatch<React.SetStateAction<number>>;
}

export type { DatesContextType };
