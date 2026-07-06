function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-white text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;