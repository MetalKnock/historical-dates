import { gsap } from 'gsap';
import variables from '../../app/styles/_vars.scss';
import {
  ButtonAnimationProps,
  DisappearAnimationProps,
  RotateClockwiseAnimationProps,
  SpawnAnimationProps,
} from './config';

const dotOpeningAnimation = ({ ctx, ref }: ButtonAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, {
      cursor: 'pointer',
      duration: 0.5,
      transformOrigin: 'center center',
      background: variables.background,
      border: `1px solid ${variables.blackBlue}`,
      width: '56px',
      height: '56px',
      margin: '-28px',
      fontSize: '20px',
    });
  });
};

const dotClosureAnimation = ({ ctx, ref }: ButtonAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, {
      cursor: 'pointer',
      duration: 0.5,
      transformOrigin: 'center center',
      background: variables.blackBlue,
      border: `1px solid ${variables.blackBlue}`,
      width: '6px',
      height: '6px',
      margin: '-3px',
      fontSize: '0px',
    });
  });
};

const rotateClockwiseAnimation = ({ ctx, ref, currentPeriod }: RotateClockwiseAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, {
      duration: 1,
      rotate: (360 / 6) * currentPeriod + 120,
    });
  });
};

const spawnAnimation = ({ ctx, ref, isActive }: SpawnAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, {
      opacity: isActive ? 1 : 0,
      display: isActive ? 'inline' : 'none',
      duration: 0.4,
    });
  });
};

const disappearAnimation = ({ ctx, ref }: DisappearAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, { opacity: 0, duration: 0.4 });
  });
};

export {
  dotOpeningAnimation,
  dotClosureAnimation,
  rotateClockwiseAnimation,
  spawnAnimation,
  disappearAnimation,
};
