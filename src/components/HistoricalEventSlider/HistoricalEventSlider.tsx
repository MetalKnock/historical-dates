import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FreeMode, Navigation } from 'swiper';
import HistoricalEvent from './HistoricalEvent/HistoricalEvent';
import { SwiperButton } from '../UI/SwiperButton';
import { BREAKPOINTS, PositionTypes } from './config';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import styles from './HistoricalEventSlider.module.scss';
import useDatesContext from '../../hooks/useDatesContext';
import useIsMobile from '../../hooks/useIsMobile';
import { Category } from '../UI/Category';

interface HistoricalEventSliderProps {
  className?: string;
}

export default function HistoricalEventSlider({ className }: HistoricalEventSliderProps) {
  const [position, setPosition] = useState<PositionTypes>(PositionTypes.beginning);
  const { isMobile } = useIsMobile();

  const { dates, currentPeriod } = useDatesContext();

  const swiperRef = useRef<SwiperType>();
  const compRef = useRef<HTMLDivElement | null>(null);

  const tl = useRef<GSAPTimeline | null>(null);

  const handleClickLeftButton = () => {
    swiperRef.current?.slidePrev();
  };

  const handleClickRightButton = () => {
    swiperRef.current?.slideNext();
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (tl.current) tl.current.progress(0).kill();
      tl.current = gsap
        .timeline()
        .to(compRef.current, { delay: 0.5, duration: 1, opacity: 1 })
        .reverse();
    }, compRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(compRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, [currentPeriod]);

  return (
    <div className={`${styles.historicalEventSlider} ${className}`} ref={compRef}>
      {isMobile && dates && (
        <Category
          className={styles.historicalEventSlider__category}
          category={dates[currentPeriod].category}
        />
      )}
      {dates && (
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
            {dates[currentPeriod].facts.map((fact) => (
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
      )}
    </div>
  );
}

HistoricalEventSlider.defaultProps = {
  className: '',
};
