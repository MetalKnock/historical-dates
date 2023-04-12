import { gsap } from 'gsap';
import { CounterclockwiseRotationAnimationProps } from './config';

const counterclockwiseRotationAnimation = ({
  ctx,
  ref,
  currentPeriod,
}: CounterclockwiseRotationAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, {
      duration: 1,
      rotate: (-360 / 6) * currentPeriod,
      transformOrigin: 'center',
    });
  });
};

export { counterclockwiseRotationAnimation };
