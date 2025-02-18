import {
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef } from "react";

export const useInfinityMovement = (
  direction: number = 1,
  isHovered: boolean = false,
  withVelocity: boolean = false
) => {
  // scroll
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 40, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [-300, 300], [-10, 10]);

  const x = useMotionValue(-100);
  const scope = useRef<HTMLElement>(null);
  const noop = () => {};
  const animate = () => {
    if (!scope.current) return;

    const { width } = scope.current.getBoundingClientRect(); // cualquier anchor
    const laMitadNegativa = -width / 2;
    const f = withVelocity ? velocityFactor.get() : 1;
    if (direction > 0) {
      x.set(x.get() + 1 * f + 1);
    } else {
      x.set(x.get() - 1 * f - 1);
    }
    // corrections
    if (x.get() <= laMitadNegativa) {
      // izq
      x.set(0);
      return;
    }
    if (x.get() >= 0) {
      // der
      x.set(laMitadNegativa);
    }
  };
  useAnimationFrame(isHovered ? noop : animate);

  return [scope, x];
};
