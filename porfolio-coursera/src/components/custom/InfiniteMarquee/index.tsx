import styles from "./style.module.css";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  images: ImageMarqueeProps[];
  speed: "slow" | "normal" | "fast";
  spacing: number;
  slides: number;
  nodes: React.ReactNode[];
}

export interface ImageMarqueeProps {
  src: string;
  alt: string;
}

export default function InfiniteMarquee({
  images = [],
  nodes = [],
  spacing = 0,
  slides = 2,
  speed = "normal",
  ...props
}: Partial<MarqueeProps>) {
  const speedMap = {
    slow: styles.marqueeWrapperSlow,
    normal: styles.marqueeWrapperNormal,
    fast: styles.marqueeWrapperFast,
  };

  const duplicateArray = <T,>(arr: T[]): T[] => {
    return Array(slides)
      .fill(null)
      .flatMap(() => arr);
  };

  if (images.length <= 0 && nodes.length <= 0) {
    return null;
  }

  if (nodes.length > 1) {
    return (
      <div className={`${styles.container}`} {...props}>
        <div
          className={`${styles.marqueeWrapper} ${speedMap[speed]}`}
          style={{ gap: `${spacing}px` }}
        >
          {duplicateArray(nodes).map((node, idx) => (
            <div key={idx}>{node}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container}`} {...props}>
      <div
        className={`${styles.marqueeWrapper} ${speedMap[speed]}`}
        style={{ gap: `${spacing}px` }}
      >
        {duplicateArray(images).map((image, idx) => (
          <img
            key={`${image.src}-${idx}`}
            src={image.src}
            alt={`Marquee image ${idx + 1} : ${image.alt}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}
