import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import useDatesContext from '../../hooks/useDatesContext';
import {
  disappearAnimation,
  dotClosureAnimation,
  dotOpeningAnimation,
  rotateClockwiseAnimation,
  spawnAnimation,
} from './animations';
import styles from './Dot.module.scss';

interface DotProps {
  category: string;
  isActive?: boolean;
  i: number;
}

export default function Dot({ category, isActive, i }: DotProps) {
  const { currentPeriod, isEndAnimationAvailable, isSlideTransitionComplete, swiper } =
    useDatesContext();

  const dotRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const ctx = useRef<gsap.Context | null>(null);

  const onEnter = () => {
    if (!isActive) {
      dotOpeningAnimation({ ctx, ref: dotRef });
    }
  };

  const onLeave = () => {
    if (!isActive) {
      dotClosureAnimation({ ctx, ref: dotRef });
    }
  };

  const onClick = () => {
    if (!isActive) {
      swiper?.slideTo(i);
    }
  };

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {}, dotRef);

    return () => ctx.current?.revert();
  }, []);

  useLayoutEffect(() => {
    rotateClockwiseAnimation({ ctx, ref: dotRef, currentPeriod });

    if (isActive) {
      dotOpeningAnimation({ ctx, ref: dotRef });
    } else {
      dotClosureAnimation({ ctx, ref: dotRef });
    }
  }, [currentPeriod, isActive]);

  useLayoutEffect(() => {
    ctx.current?.add(() => {
      if (isEndAnimationAvailable && isSlideTransitionComplete) {
        spawnAnimation({ ctx, ref: spanRef, isActive });
      } else {
        disappearAnimation({ ctx, ref: spanRef });
      }
    });
  }, [isSlideTransitionComplete, isEndAnimationAvailable, isActive]);

  return (
    <button
      className={styles.dot}
      ref={dotRef}
      type='button'
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
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
