
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
    document.title = 'CURIOSO | Desperte Sua Curiosidade';
  }, []);

  // Feature data
  const features = [
    {
      icon: '🔍',
      title: 'Explorar',
      description: 'Aventure-se em novos territórios e descubra o que há além do seu conhecimento atual.',
      delay: 100
    },
    {
      icon: '💡',
      title: 'Aprender',
      description: 'Absorva novos insights e perspectivas que transformam seu entendimento.',
      delay: 200
    },
    {
      icon: '🚀',
      title: 'Inovar',
      description: 'Transforme sua curiosidade em criação, dando vida a novas ideias.',
      delay: 300
    },
    {
      icon: '🌍',
      title: 'Conectar',
      description: 'Construa relacionamentos significativos com pessoas curiosas de todo o mundo.',
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">O Que Nos Torna Curiosos</h2>
          
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
              { number: '10K+', label: 'Mentes Curiosas' },
              { number: '250+', label: 'Projetos Lançados' },
              { number: '15+', label: 'Países' },
              { number: '99%', label: 'Satisfação' }
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
