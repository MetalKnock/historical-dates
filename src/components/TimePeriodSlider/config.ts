interface SpawnAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>;
  ref: React.MutableRefObject<HTMLDivElement | null>;
}

interface DisappearAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>;
  ref: React.MutableRefObject<HTMLDivElement | null>;
}

const DISAPPEAR_ANIMATION_DURATION = 300;

export type { SpawnAnimationProps, DisappearAnimationProps };
export { DISAPPEAR_ANIMATION_DURATION };
