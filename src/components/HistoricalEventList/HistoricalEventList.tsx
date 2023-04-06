import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FreeMode, Navigation } from 'swiper';
import { facts } from '../../data/mock-data';
import HistoricalEvent from '../HistoricalEvent/HistoricalEvent';
import { SwiperButton } from '../UI/SwiperButton';
import { BREAKPOINTS, PositionTypes } from './config';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import styles from './HistoricalEventList.module.scss';

export default function HistoricalEventList() {
  const [position, setPosition] = useState<PositionTypes>(PositionTypes.beginning);
  const swiperRef = useRef<SwiperType>();

  const handleClickLeftButton = () => {
    swiperRef.current?.slidePrev();
  };

  const handleClickRightButton = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className={styles.historicalEventList}>
      <div className={styles.historicalEventList__container}>
        <Swiper
          grabCursor
          freeMode
          breakpoints={BREAKPOINTS}
          modules={[FreeMode, Navigation]}
          touchEventsTarget='container'
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onReachBeginning={() => {
            setPosition(PositionTypes.beginning);
          }}
          onFromEdge={() => {
            setPosition(PositionTypes.edge);
          }}
          onReachEnd={() => {
            setPosition(PositionTypes.end);
          }}
        >
          {facts.map((fact) => (
            <SwiperSlide key={fact.id}>
              <HistoricalEvent fact={fact} />
            </SwiperSlide>
          ))}
        </Swiper>
        <nav className={styles.historicalEventList__nav}>
          <SwiperButton
            typeButton='left'
            onClick={handleClickLeftButton}
            isHidden={position === PositionTypes.beginning}
          />
          <SwiperButton
            typeButton='right'
            onClick={handleClickRightButton}
            isHidden={position === PositionTypes.end}
          />
        </nav>
      </div>
    </div>
  );
}
