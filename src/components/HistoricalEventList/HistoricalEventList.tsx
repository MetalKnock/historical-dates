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
import styles from './HistoricalEventList.module.scss';
import useDatesContext from '../../hooks/useDatesContext';

export default function HistoricalEventList() {
  const [position, setPosition] = useState<PositionTypes>(PositionTypes.beginning);

  const { dates, currentPeriod } = useDatesContext();

  const swiperRef = useRef<SwiperType>();
  const compRef = useRef<HTMLDivElement | null>(null);

  const tl = useRef<GSAPTimeline | null>(null);
  const testRef = useRef<HTMLDivElement | null>(null);

  const handleClickLeftButton = () => {
    swiperRef.current?.slidePrev();
  };

  const handleClickRightButton = () => {
    swiperRef.current?.slideNext();
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(compRef.current, { delay: 0.5, duration: 1, opacity: 1 })
        .reverse();
    }, compRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {

    tl.current?.reversed(!tl.current?.reversed());
  }, [currentPeriod]);

  return (
    <div className={styles.historicalEventList} ref={compRef}>
      {dates && (
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
            {dates[currentPeriod].facts.map((fact) => (
              <SwiperSlide key={fact.id}>
                <HistoricalEvent fact={fact} />
              </SwiperSlide>
            ))}
          </Swiper>
          <nav className={styles.historicalEventList__nav} ref={testRef}>
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
          <button
            type='button'
            onClick={() => {
              if (tl.current?.reversed()) {
                tl.current.play();
              } else {
                tl.current?.reverse();
              }
            }}
          >
            123
          </button>
        </div>
      )}
    </div>
  );
}
