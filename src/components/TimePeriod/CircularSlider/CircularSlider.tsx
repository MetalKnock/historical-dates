import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HISTORICAL_DATES } from '../../../data/mock-data';
import styles from './CircularSlider.module.scss';
import { Dot } from './Dot';
import useDatesContext from '../../../hooks/useDatesContext';

export default function CircularSlider() {
  const { currentPeriod } = useDatesContext();

  const circleRef = useRef<HTMLUListElement | null>(null);
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {});

    return () => ctx.current?.revert();
  }, []);

  useLayoutEffect(() => {
    ctx.current?.add(() => {
      gsap.to(circleRef.current, {
        duration: 1,
        ease: 'Power3 easeInOut',
        rotate: (-360 / 6) * currentPeriod,
        transformOrigin: 'center',
      });
    });
  }, [currentPeriod]);

  return (
    <div className={styles.circularSlider}>
      <div className={styles.circularSlider__container}>
        <ul ref={circleRef} className={styles.circularSlider__circle}>
          {HISTORICAL_DATES.map((date, i) => (
            <Dot key={date.id} i={i} isActive={currentPeriod === i} category={date.category} />
          ))}
        </ul>
      </div>
    </div>
  );
}
