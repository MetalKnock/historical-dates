import { gsap } from 'gsap';
import { DisappearAnimationProps, SpawnAnimationProps } from './config';

const spawnAnimation = ({ ctx, ref }: SpawnAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, { opacity: 1, duration: 0.4 });
  });
};

const disappearAnimation = ({ ctx, ref }: DisappearAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, { opacity: 0, duration: 0.3 });
  });
};

export { spawnAnimation, disappearAnimation };
