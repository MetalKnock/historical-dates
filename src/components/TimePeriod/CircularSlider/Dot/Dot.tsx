import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Dot.module.scss';
import variables from '../../../../app/styles/_vars.scss';
import useDatesContext from '../../../../hooks/useDatesContext';

interface DotProps {
  category: string;
  isActive?: boolean;
  i: number;
}

export default function Dot({ category, isActive, i }: DotProps) {
  const { currentPeriod } = useDatesContext();

  const dotRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline();
    }, dotRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current
        ?.add('start')
        .to(
          dotRef.current,
          {
            duration: 1,
            ease: 'Power3 easeInOut',
            rotate: (360 / 6) * currentPeriod,
          },
          'start'
        )
        .to(
          dotRef.current,
          {
            duration: 0.5,
            transformOrigin: 'center center',
            background: variables.background,
            border: `1px solid ${variables.blackBlue}`,
            width: '56px',
            height: '56px',
            margin: '-28px',
            fontSize: '20px',
          },
          'start'
        )
        .to(spanRef.current, { ease: 'none', duration: 0.5, opacity: 1 })
        .reverse();
      if (isActive) {
        tl.current?.reversed(!tl.current.reversed());
      }
    }, dotRef);

    return () => ctx.revert();
  }, [currentPeriod, isActive]);


  const onEnter = () => {
    tl.current?.reversed(!tl.current?.reversed());
  };

  const onLeave = () => {
    tl.current?.reversed(!tl.current?.reversed());
  };

  return (
    <button
      className={styles.dot}
      ref={dotRef}
      type='button'
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {i + 1}
      <span className={styles.dot__category} ref={spanRef}>
        {category}
      </span>
    </button>
  );
}

Dot.defaultProps = {
  isActive: false,
};
