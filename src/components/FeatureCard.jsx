import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg"
    >
      <div className="text-4xl mb-4 text-purple-400">
        {icon}
      </div>

      <h3 className="text-white text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;