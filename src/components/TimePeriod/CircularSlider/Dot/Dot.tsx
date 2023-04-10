import { useRef, useLayoutEffect } from 'react';
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
  const { currentPeriod, setCurrentPeriod } = useDatesContext();

  const dotRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const tl = useRef<GSAPTimeline | null>(null);
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {}, dotRef);

    return () => ctx.current?.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx1 = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(dotRef.current, {
          cursor: 'pointer',
          duration: 0.5,
          transformOrigin: 'center center',
          background: variables.background,
          border: `1px solid ${variables.blackBlue}`,
          width: '56px',
          height: '56px',
          margin: '-28px',
          fontSize: '20px',
        })
        .set(spanRef.current, { display: 'none' }, '<')
        .reverse();
    }, dotRef);

    return () => ctx1.revert();
  }, []);

  useLayoutEffect(() => {
    ctx.current?.add(() => {
      gsap.to(dotRef.current, {
        duration: 1,
        ease: 'Power3 easeInOut',
        rotate: (360 / 6) * currentPeriod + 120,
      });
      if (isActive) {
        gsap.to(dotRef.current, {
          duration: 0.5,
          transformOrigin: 'center center',
          background: variables.background,
          border: `1px solid ${variables.blackBlue}`,
          width: '56px',
          height: '56px',
          margin: '-28px',
          fontSize: '20px',
        });
      } else {
        gsap.to(dotRef.current, {
          duration: 0.5,
          transformOrigin: 'center center',
          background: variables.blackBlue,
          border: `1px solid ${variables.blackBlue}`,
          width: '6px',
          height: '6px',
          margin: '-3px',
          fontSize: '0px',
        });
      }

      gsap.to(spanRef.current, { ease: 'none', duration: 0.5, opacity: 1 });
    });
  }, [currentPeriod, isActive]);

  const onEnter = () => {
    if (!isActive) {
      tl.current?.reversed(!tl.current?.reversed());
    }
  };

  const onLeave = () => {
    if (!isActive) {
      tl.current?.reversed(!tl.current?.reversed());
    }
  };
  const onClick = () => {
    if (!isActive) {
      setCurrentPeriod(i);
      tl.current?.reversed(!tl.current?.reversed());
    }
  };

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
