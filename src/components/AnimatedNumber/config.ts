interface NumberAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>;
  ref: React.MutableRefObject<HTMLDivElement | null>;
  number: number;
}

export type { NumberAnimationProps };
