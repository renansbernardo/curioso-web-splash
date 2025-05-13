
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Join thousands of curious minds exploring the boundaries of what's possible.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="px-8 py-4 bg-white text-black hover:bg-gray-200 font-bold rounded-full">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            By subscribing, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
