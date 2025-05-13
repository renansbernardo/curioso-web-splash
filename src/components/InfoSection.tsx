
import React from 'react';

const InfoSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Liberte Sua Curiosidade</h2>
          <div className="w-20 h-1.5 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Em um mundo cheio de maravilhas, a curiosidade é a chave que desbloqueia possibilidades infinitas.
            Acreditamos no poder de fazer perguntas, explorar o desconhecido e descobrir o extraordinário.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Por Que a Curiosidade Importa</h3>
            <p className="text-gray-600">
              A curiosidade impulsiona a inovação, alimenta o aprendizado e estimula o crescimento. É o traço fundamental que
              impulsionou a humanidade ao longo da história.
            </p>
            <div className="space-y-4">
              {[
                "Desperta a criatividade e o pensamento inovador",
                "Leva a uma compreensão mais profunda e conhecimento",
                "Cria conexões significativas com o mundo",
                "Transforma momentos comuns em descobertas extraordinárias"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">
                      ✓
                    </div>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-full w-full overflow-hidden rounded-lg shadow-xl">
            <div className="h-96 bg-gradient-to-br from-purple-500 to-indigo-600 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white text-8xl font-black opacity-20">
                ?
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                  <div className="text-4xl font-bold text-gray-800 animate-float">?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
