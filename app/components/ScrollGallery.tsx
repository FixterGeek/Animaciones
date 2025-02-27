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
import { useFakeData, type Group } from "~/hooks/useFakeData";
import { useMatchMedia } from "~/hooks/useMatchMedia";
import { cn } from "~/lib/utils";
import { images as staticImages } from "~/hooks/useFakeData";

const ranges = [
  [0, 0],
  [0, 0.2],
  [0.2, 0.4],
  [0.4, 0.6],
  [0.6, 0.8],
  [0.8, 1],
];

export const ScrollGallery = ({
  title = "Fixtergeek.com",
  subtitle = "Diseñado por Brendi. 👧🏻",
  images = staticImages,
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

  const { groups } = useFakeData();

  return (
    <article ref={target} className="text-white h-[500vh] bg-black ">
      <section className="sticky top-0 h-screen flex justify-center items-center lg:w-[68vw] gap-6 pl-6">
        <header className="">
          <h2 className="lg:text-7xl text-5xl font-bold mb-3 lg:mb-10">
            {title}
          </h2>
          <p className="text-2xl lg:text-4xl text-gray-300">
            <strong className="tracking-wide text-white">
              {splitSubtitle[0]}{" "}
            </strong>
            {splitSubtitle.slice(1).join(" ")}
            <span>{currentIndex}</span>
          </p>
          <div className="w-[13vw] lg:w-[10vw] overflow-hidden rounded-l-full">
            <AnimatedUnderline scrollYProgress={scrollYProgress} />
          </div>
        </header>
        <main>
          <Block
            onMouseLeave={() => setIsHovered(99)}
            scrollYProgress={springYProgress}
          >
            {groups.map((g, i) => (
              <AnimatedGallery
                key={i}
                onMouseEnter={() => setIsHovered(i)}
                isPlaying={isHovered === i}
                srcset={[images[i], ...g.images]}
              />
            ))}
          </Block>
        </main>
        <footer className="w-[420px]"></footer>
      </section>
      {/* {groups.map((g, i) => (
        <div className="">
          <Actions
            scrollYProgress={scrollYProgress}
            range={ranges[i + 1]}
            group={g}
            key={i}
          />
        </div>
      ))} */}
    </article>
  );
};

const Actions = ({
  group,
  range,
  scrollYProgress,
}: {
  range: number[];
  group: Group;
  scrollYProgress: MotionValue<number>;
}) => {
  // const y = useTransform(scrollYProgress, range, ["50vh", "0vh"]);
  return (
    <motion.div className="h-[80vh] lg:flex flex-col pl-[65%] gap-6 hidden bg-gray-500">
      <h3 className="text-5xl font-extralight">{group.title}</h3>
      <div className="flex gap-4">
        {group.links.map((l, i) => (
          <button
            className={cn(
              "hover:scale-110",
              "py-3 px-6 bg-pink-500 rounded-full",
              {
                "bg-white text-black": i === 1,
                "bg-transparent border-2": i === 2,
              }
            )}
          >
            {l.text}
          </button>
        ))}
      </div>
      <p className="text-2xl">{group.paragraph}</p>
    </motion.div>
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
  const images = Children.toArray(children);

  console.log("Images", images);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "overflow-hidden lg:w-[24vw] lg:h-[60vh] w-[40vw] h-[50vh] bg-transparent rounded-3xl",
        "relative",
        "bg-indigo-500"
      )}
      {...props}
    >
      {images.map((node, i) => (
        <AnimatedImage
          scrollYProgress={scrollYProgress}
          range={ranges[i]}
          index={i}
          key={i}
          node={node}
        />
      ))}
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
  const y = useTransform(scrollYProgress, range, [30, 0]);
  const percentage = useTransform(scrollYProgress, range, [0, 500]);
  const isDesktop = useMatchMedia("(min-width: 1024px)");
  const pixels = useTransform(scrollYProgress, range, [
    0,
    isDesktop ? 700 : 600,
  ]);
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
      // color: "#5e60f6",
      color: "#ffb7e4", // pink
      range: [0, 0.2],
    },

    {
      color: "#da3e05", // orange
      range: [0.2, 0.4],
    },
    {
      // color: "#da3e05",
      color: "#ffb7e4", // pink
      range: [0.4, 0.6],
    },
    {
      // color: "#efc2cd",
      color: "#5e60f6", // indigo
      range: [0.6, 0.8],
    },
    {
      color: "#5e60f6", // indigo
      range: [0.8, 1],
    },
  ];
  return (
    <svg
      className="-ml-2"
      viewBox="0 0 165 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {map.map((stroke, i) => (
        <AnimatedPath
          key={i}
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
