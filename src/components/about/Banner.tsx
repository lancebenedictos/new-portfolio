import { motion } from "framer-motion";

type MousePosition = {
  x: number;
  y: number;
};

type Props = {
  mousePosition: MousePosition;
};
const Banner = ({ mousePosition }: Props) => {
  const size = 200;

  return (
    <div className="hidden relative md:flex items-center">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
            (mousePosition.y - size) / 2
          }px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p>A full-stack developer that loves to learn about new things</p>
      </motion.div>

      <div className="mask-body">
        <p>
          I'm a <span>passionate</span> full-stack developer with strong focus
          on producing high quality code.
        </p>
      </div>
    </div>
  );
};

export default Banner;
