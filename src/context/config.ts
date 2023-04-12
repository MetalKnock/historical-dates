import { Dispatch } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { HistoricalDates } from '../data/config';

interface DatesContextType {
  dates: HistoricalDates | null;
  currentPeriod: number;
  swiper: SwiperType | null;
  isSlideTransitionComplete: boolean;
  isEndAnimationAvailable: boolean;
  setDates: Dispatch<React.SetStateAction<HistoricalDates | null>>;
  setCurrentPeriod: Dispatch<React.SetStateAction<number>>;
  setSwiper: Dispatch<React.SetStateAction<SwiperType | null>>;
  setIsSlideTransitionComplete: Dispatch<React.SetStateAction<boolean>>;
  setIsEndAnimationAvailable: Dispatch<React.SetStateAction<boolean>>;
}

export type { DatesContextType };
