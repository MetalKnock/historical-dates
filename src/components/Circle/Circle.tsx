import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Dot } from '../Dot';
import { HISTORICAL_DATES } from '../../data/mock-data';
import { counterclockwiseRotationAnimation } from './animations';
import useDatesContext from '../../hooks/useDatesContext';
import styles from './CircularSlider.module.scss';

export default function CircularSlider() {
  const { currentPeriod } = useDatesContext();

  const circleRef = useRef<HTMLUListElement | null>(null);
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {});

    return () => ctx.current?.revert();
  }, []);

  useLayoutEffect(() => {
    counterclockwiseRotationAnimation({ ctx, ref: circleRef, currentPeriod });
  }, [currentPeriod]);

  return (
    <div className={styles.circle}>
      <div className={styles.circle__container}>
        <ul ref={circleRef} className={styles.circle__circle}>
          {HISTORICAL_DATES.map((date, i) => (
            <Dot key={date.id} i={i} isActive={currentPeriod === i} category={date.category} />
          ))}
        </ul>
      </div>
    </div>
  );
}
