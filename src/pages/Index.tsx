
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import FeatureCard from '../components/FeatureCard';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = 'CURIOSO | Unleash Your Curiosity';
  }, []);

  // Feature data
  const features = [
    {
      icon: '🔍',
      title: 'Explore',
      description: 'Venture into new territories and discover what lies beyond your current knowledge.',
      delay: 100
    },
    {
      icon: '💡',
      title: 'Learn',
      description: 'Absorb new insights and perspectives that transform your understanding.',
      delay: 200
    },
    {
      icon: '🚀',
      title: 'Innovate',
      description: 'Turn your curiosity into creation, bringing new ideas to life.',
      delay: 300
    },
    {
      icon: '🌍',
      title: 'Connect',
      description: 'Build meaningful relationships with like-minded curious individuals worldwide.',
      delay: 400
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <InfoSection />
      
      {/* Features section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">What Makes Us Curious</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistics section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Curious Minds' },
              { number: '250+', label: 'Projects Launched' },
              { number: '15+', label: 'Countries' },
              { number: '99%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
