import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FreeMode, Navigation } from 'swiper';
import { facts } from '../../data/mock-data';
import HistoricalEvent from '../HistoricalEvent/HistoricalEvent';
import { SwiperButton } from '../UI/SwiperButton';
import { SLIDES_PER_VIEW, SPACE_BETWEEN } from './config';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import styles from './HistoricalEventList.module.scss';

export default function HistoricalEventList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>();

  const handleChangeActiveIndex = (swiper: SwiperType) => {
    if (swiper === null) return;
    const currentSlide = swiper.activeIndex;
    setActiveIndex(currentSlide);
  };

  const handleClickLeftButton = () => {
    swiperRef.current?.slidePrev();
  };

  const handleClickRightButton = () => {
    swiperRef.current?.slideNext();
  };

  const handleBeforeInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const breakpoints = {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1024: {
      slidesPerView: SLIDES_PER_VIEW,
      spaceBetween: SPACE_BETWEEN,
    },
  };

  return (
    <div className={styles.historicalEventList}>
      <div className={styles.historicalEventList__container}>
        <Swiper
          grabCursor
          freeMode
          initialSlide={activeIndex}
          onActiveIndexChange={handleChangeActiveIndex}
          breakpoints={breakpoints}
          modules={[FreeMode, Navigation]}
          touchEventsTarget='container'
          onBeforeInit={handleBeforeInit}
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
            isHidden={activeIndex === 0}
          />
          <SwiperButton
            typeButton='right'
            onClick={handleClickRightButton}
            isHidden={activeIndex > facts.length - 1 - SLIDES_PER_VIEW}
          />
        </nav>
      </div>
    </div>
  );
}
