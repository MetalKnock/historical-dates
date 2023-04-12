import { createContext, ReactNode, useState, useMemo } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { DatesContextType } from './config';
import { HistoricalDates } from '../data/config';

export const DatesContext = createContext<DatesContextType | null>(null);

interface DatesContextProps {
  children: ReactNode;
}

export default function DatesContextProvider({ children }: DatesContextProps) {
  const [dates, setDates] = useState<HistoricalDates | null>(null);
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isSlideTransitionComplete, setIsSlideTransitionComplete] = useState(true);
  const [isEndAnimationAvailable, setIsEndAnimationAvailable] = useState(true);

  const value = useMemo(
    () => ({
      dates,
      currentPeriod,
      swiper,
      isSlideTransitionComplete,
      isEndAnimationAvailable,
      setDates,
      setCurrentPeriod,
      setSwiper,
      setIsSlideTransitionComplete,
      setIsEndAnimationAvailable,
    }),
    [dates, currentPeriod, swiper, isSlideTransitionComplete, isEndAnimationAvailable]
  );

  return <DatesContext.Provider value={value}>{children}</DatesContext.Provider>;
}
