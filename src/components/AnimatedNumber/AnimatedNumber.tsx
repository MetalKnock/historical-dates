import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './AnimatedNumber.module.scss';

interface AnimateNumberProps {
  number: number;
  className?: string;
}

export default function AnimatedNumber({ number, className }: AnimateNumberProps) {
  const [initValue] = useState(number);

  const numberRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.to(numberRef.current, {
      duration: 1,
      innerHTML: number,
      roundProps: 'innerHTML',
    });
  }, [number]);

  return (
    <div className={`${styles.animatedNumber} ${className}`} ref={numberRef}>
      {initValue}
    </div>
  );
}

AnimatedNumber.defaultProps = {
  className: '',
};
