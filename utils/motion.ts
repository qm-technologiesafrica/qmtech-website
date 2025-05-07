export const fadeInY = ({
  y = -20,
  duration = 1,
  delay = 0,
  opacity = 1,
}: {
  y?: number | string;
  duration?: number;
  delay?: number;
  opacity?: number;
}) => {
  return {
    hidden: {
      y,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity,
      transition: {
        duration,
        delay,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
};
export const fadeInX = ({
  x = -20,
  duration = 1,
  delay = 0,
  opacity = 1,
}: {
  x?: number;
  duration?: number;
  delay?: number;
  opacity?: number;
}) => {
  return {
    hidden: {
      x,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity,
      transition: {
        duration,
        delay,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
};
