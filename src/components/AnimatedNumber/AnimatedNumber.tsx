import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { numberAnimation } from './animations';

interface AnimateNumberProps {
  number: number;
  className?: string;
}

export default function AnimatedNumber({ number, className }: AnimateNumberProps) {
  const [initValue] = useState(number);

  const numberRef = useRef<HTMLDivElement | null>(null);
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {});

    return () => ctx.current?.revert();
  }, []);

  useLayoutEffect(() => {
    numberAnimation({ ctx, ref: numberRef, number });
  }, [number]);

  return (
    <div className={className} ref={numberRef}>
      {initValue}
    </div>
  );
}

AnimatedNumber.defaultProps = {
  className: '',
};
