import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FreeMode, Navigation } from 'swiper';
import { HistoricalEvent } from './HistoricalEvent';
import { SwiperButton } from '../UI/SwiperButton';
import { BREAKPOINTS, PositionTypes } from './config';
import { Category } from '../UI/Category';
import { Facts } from '../../data/config';
import useIsMobile from '../../hooks/useIsMobile';
import styles from './HistoricalEventSlider.module.scss';

interface HistoricalEventSliderProps {
  className?: string;
  facts: Facts;
  category: string;
}

export default function HistoricalEventSlider({
  className,
  facts,
  category,
}: HistoricalEventSliderProps) {
  const [position, setPosition] = useState<PositionTypes>(PositionTypes.beginning);
  const { isMobile } = useIsMobile();

  const swiperRef = useRef<SwiperType>();
  const compRef = useRef<HTMLDivElement | null>(null);

  const handleClickLeftButton = () => {
    swiperRef.current?.slidePrev();
  };

  const handleClickRightButton = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className={`${styles.historicalEventSlider} ${className}`} ref={compRef}>
      {isMobile && (
        <Category className={styles.historicalEventSlider__category} category={category} />
      )}

      <div className={styles.historicalEventSlider__container}>
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
        <nav className={styles.historicalEventSlider__nav}>
          <SwiperButton
            isLeft
            onClick={handleClickLeftButton}
            isHidden={position === PositionTypes.beginning}
          />
          <SwiperButton
            onClick={handleClickRightButton}
            isHidden={position === PositionTypes.end}
          />
        </nav>
      </div>
    </div>
  );
}

HistoricalEventSlider.defaultProps = {
  className: '',
};
