
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
