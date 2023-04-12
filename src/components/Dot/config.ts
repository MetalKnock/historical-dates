interface ButtonAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>;
  ref: React.MutableRefObject<HTMLButtonElement | null>;
}

interface RotateClockwiseAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>;
  ref: React.MutableRefObject<HTMLButtonElement | null>;
  currentPeriod: number;
}

interface SpawnAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>;
  ref: React.MutableRefObject<HTMLSpanElement | null>;
  isActive: boolean | undefined;
}

interface DisappearAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>;
  ref: React.MutableRefObject<HTMLSpanElement | null>;
}

export type {
  ButtonAnimationProps,
  RotateClockwiseAnimationProps,
  SpawnAnimationProps,
  DisappearAnimationProps,
};
