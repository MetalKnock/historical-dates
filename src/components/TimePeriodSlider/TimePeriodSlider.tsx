import { useRef, useLayoutEffect } from 'react';
import { Navigation, EffectFade } from 'swiper';
import { Swiper as SwiperType } from 'swiper/types';
import { SwiperSlide, Swiper } from 'swiper/react';
import { gsap } from 'gsap';
import { HistoricalEventSlider } from '../HistoricalEventSlider';
import { disappearAnimation, spawnAnimation } from './animations';
import { DISAPPEAR_ANIMATION_DURATION } from './config';
import useDatesContext from '../../hooks/useDatesContext';

export default function TimePeriodSlider() {
  const {
    dates,
    currentPeriod,
    isSlideTransitionComplete,
    isEndAnimationAvailable,
    setCurrentPeriod,
    setSwiper,
    setIsEndAnimationAvailable,
    setIsSlideTransitionComplete,
  } = useDatesContext();

  const swiperRef = useRef<SwiperType | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {});

    return () => ctx.current?.revert();
  }, []);

  useLayoutEffect(() => {
    setIsEndAnimationAvailable(false);
    const timer = setTimeout(() => {
      setIsEndAnimationAvailable(true);
    }, DISAPPEAR_ANIMATION_DURATION);

    if (swiperRef.current) {
      disappearAnimation({ ctx, ref: containerRef });
    }

    return () => clearTimeout(timer);
  }, [currentPeriod, setIsEndAnimationAvailable]);

  useLayoutEffect(() => {
    if (swiperRef.current && isSlideTransitionComplete && isEndAnimationAvailable) {
      spawnAnimation({ ctx, ref: containerRef });
    }
  }, [isSlideTransitionComplete, isEndAnimationAvailable]);

  return (
    <div ref={containerRef}>
      {dates && (
        <Swiper
          effect='fade'
          fadeEffect={{ crossFade: true }}
          modules={[EffectFade, Navigation]}
          speed={1000}
          onSwiper={(swiperInst) => {
            setSwiper(swiperInst);
          }}
          onSlideChange={(swiper) => {
            setCurrentPeriod(swiper.activeIndex);
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChangeTransitionStart={() => {
            setIsSlideTransitionComplete(false);
          }}
          onSlideChangeTransitionEnd={() => {
            setIsSlideTransitionComplete(true);
          }}
          allowTouchMove={false}
        >
          {dates.map((date) => (
            <SwiperSlide key={date.id}>
              <HistoricalEventSlider category={date.category} facts={date.facts} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
