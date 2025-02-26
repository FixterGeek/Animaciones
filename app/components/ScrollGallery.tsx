import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { cn } from "~/lib/utils";

export const ScrollGallery = ({
  title = "Fixtergeek.com",
  subtitle = "Diseñado por Brendi. 👧🏻",
  images = [
    "/scroll_gallery/branding.webp",
    "/scroll_gallery/cellphones.webp",
    "/scroll_gallery/awesome.webp",
    "/scroll_gallery/beauty.webp",
    "/scroll_gallery/design.webp",
    "/scroll_gallery/pool.webp",
    "/scroll_gallery/chair.webp",
  ],
}: {
  images: string[];
  title: string;
  subtitle: string; // must contain at least 2 words
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(0);
  const splitSubtitle = subtitle.split(" ");
  const target = useRef(null);
  const { scrollYProgress } = useScroll({ target });
  const springYProgress = useSpring(scrollYProgress, { bounce: 0 });
  const exactIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8], // 5 sections+
    [0, 1, 2, 3, 4]
  );
  useMotionValueEvent(exactIndex, "change", (latest) => {
    const index = Math.floor(latest);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  });
  return (
    <article ref={target} className="text-white h-[600vh] bg-black ">
      <section className="sticky top-0 h-screen flex justify-center items-center">
        <header className="mr-8">
          <h2 className="text-xl font-bold mb-3">{title}</h2>
          <p className="text-xs text-gray-300">
            <strong className="tracking-wide text-white">
              {splitSubtitle[0]}{" "}
            </strong>
            {splitSubtitle.slice(1).join(" ")}
            <span>{currentIndex}</span>
          </p>
          <div className="w-[56px] overflow-hidden rounded-l-full">
            <AnimatedUnderline scrollYProgress={scrollYProgress} />
          </div>
        </header>
        <main>
          <Block
            onMouseLeave={() => setIsHovered(99)}
            scrollYProgress={springYProgress}
          >
            <img className="object-cover inset-0 absolute" src={images[0]} />
            <AnimatedGallery
              onMouseEnter={() => setIsHovered(1)}
              isPlaying={isHovered === 1}
              srcset={[images[1], images[images.length - 1]]}
            />
            <AnimatedGallery
              onMouseEnter={() => setIsHovered(2)}
              isPlaying={isHovered === 2}
              srcset={[images[2], images[images.length - 1]]}
            />
            <AnimatedGallery
              onMouseEnter={() => setIsHovered(3)}
              srcset={[images[3], images[images.length - 2]]}
              isPlaying={isHovered === 3}
            />
            <AnimatedGallery
              onMouseEnter={() => setIsHovered(4)}
              srcset={[images[4], images[images.length - 1]]}
              isPlaying={isHovered === 4}
            />
          </Block>
        </main>
      </section>
    </article>
  );
};

const AnimatedGallery = ({
  isPlaying,
  srcset,
  onMouseLeave,
  onMouseEnter,
}: {
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
  isPlaying?: boolean;
  srcset: string[];
}) => {
  const [current, setCurrent] = useState(0);
  const addOne = (c: number) => (c + 1) % srcset.length;
  const [next, setNext] = useState(addOne(0));
  const interval = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (isPlaying) {
      interval.current = setInterval(() => {
        setCurrent(addOne);
        setNext(addOne);
      }, 800);
    } else {
      interval.current && clearInterval(interval.current);
      setCurrent(0);
      setNext(addOne(0));
    }
    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [isPlaying]);
  return (
    <div
      style={{
        backgroundImage: `url('${srcset[next]}')`,
        backgroundPosition: "cover",
        backgroundSize: "cover",
      }}
    >
      <AnimatePresence>
        <motion.img
          onMouseEnter={onMouseEnter}
          key={current}
          src={srcset[current]}
          initial={{ skewY: 15, scale: 1.5, opacity: 0 }}
          animate={{ skewX: 0, skewY: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0 }}
        />
      </AnimatePresence>
    </div>
  );
};

const Block = ({
  scrollYProgress,
  children,
  onMouseLeave,
  onMouseEnter,
  ...props
}: {
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
  children?: ReactNode;
  scrollYProgress: MotionValue<number>;
  [x: string]: unknown;
}) => {
  const ranges = [null, [0, 0.2], [0.2, 0.4], [0.4, 0.6], [0.6, 0.8]];
  const images = Children.toArray(children);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "overflow-hidden w-[38vw] h-[45vh] bg-transparent rounded-3xl",
        "relative",
        "bg-red-500"
      )}
      {...props}
    >
      <AnimatedImage
        noClipPath
        scrollYProgress={scrollYProgress}
        index={0}
        node={images[0]}
      />
      {images.map((node, i) =>
        i === 0 ? null : (
          <AnimatedImage
            scrollYProgress={scrollYProgress}
            range={ranges[i]}
            index={i}
            key={i}
            node={node}
          />
        )
      )}
    </div>
  );
};

const AnimatedImage = ({
  range = [1, 1], // fixed
  index,
  node,
  scrollYProgress,
  noClipPath,
}: {
  noClipPath?: boolean;
  scrollYProgress: MotionValue<number>;
  range?: number[];
  node: ReactNode;
  index: number;
}) => {
  const y = useTransform(scrollYProgress, range, [10, 0]);
  const percentage = useTransform(scrollYProgress, range, [0, 200]);
  const pixels = useTransform(scrollYProgress, range, [0, 250]);
  // 45% 0px at 50% 100% => 165% 586px at 50% 100%
  const clipPath = noClipPath
    ? "ellipse(100% 100%)"
    : useMotionTemplate`ellipse(${percentage}% ${pixels}px at 50% 100%)`;
  return (
    <motion.figure
      className="absolute left-0 right-0 -top-4 -bottom-4"
      style={{
        y,
        clipPath,
      }}
    >
      {node}
    </motion.figure>
  );
};

// @todo animated underlines?
type Stroke = {
  color: string;
  range: [number, number];
};
const AnimatedUnderline = ({
  colors,
  scrollYProgress,
}: {
  colors?: string[];
  scrollYProgress: MotionValue<number>;
  target?: RefObject<HTMLDivElement>;
}) => {
  const map: Stroke[] = [
    {
      color: "#5e60f6",
      range: [0, 0.1],
    },

    {
      color: "#ffb7e4",
      range: [0.1, 0.2],
    },
    {
      color: "#da3e05",
      range: [0.2, 0.4],
    },
    {
      color: "#efc2cd",
      range: [0.4, 0.6],
    },
    {
      color: "#5e60f6",
      range: [0.6, 0.8],
    },
  ];
  return (
    <svg
      className="-ml-2"
      viewBox="0 0 165 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {map.map((stroke) => (
        <AnimatedPath
          key={stroke.color}
          stroke={stroke}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </svg>
  );
};

const AnimatedPath = ({
  stroke,
  scrollYProgress,
}: {
  stroke: Stroke;
  scrollYProgress: MotionValue<number>;
}) => {
  const pathLength = useTransform(scrollYProgress, stroke.range, [0.01, 1]);
  return (
    <motion.path
      key={stroke.color}
      d="M3 10C33.5381 4.0372 85.7179 -2.19674 162 9.99985"
      stroke={stroke.color}
      strokeWidth="5"
      strokeLinecap="round"
      style={{ pathLength }}
    ></motion.path>
  );
};
