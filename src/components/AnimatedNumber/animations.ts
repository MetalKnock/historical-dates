import { gsap } from 'gsap';
import { NumberAnimationProps } from './config';

const numberAnimation = ({ ctx, ref, number }: NumberAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, {
      duration: 1,
      innerHTML: number,
      roundProps: 'innerHTML',
    });
  });
};

export { numberAnimation };
