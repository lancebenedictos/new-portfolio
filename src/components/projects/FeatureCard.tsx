import { Feature } from "../../config/projects";
import { motion } from "framer-motion";
type Props = {
  feature: Feature;
};

const FeatureCard = ({ feature }: Props) => {
  return (
    <motion.div
      className="w-full rounded-lg overflow-hidden shadow-lg space-y-4 p-4"
      whileHover={{ scale: 1.01 }}
    >
      <p className=" font-semibold">{feature.name}</p>
      <img src={feature.img} />
    </motion.div>
  );
};

export default FeatureCard;
