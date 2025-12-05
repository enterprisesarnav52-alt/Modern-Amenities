import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/1031/1920/1080" 
          alt="Premium Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center text-white">
        <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] mb-4 text-brand-red uppercase">
          Redefining Workspaces
        </h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight max-w-4xl">
          LUXURY OFFICE <br /> FURNITURE
        </h1>
        <p className="text-gray-200 text-lg mb-10 max-w-xl font-light">
          Experience the perfect blend of ergonomics, aesthetics, and functionality. Create an office that speaks volumes about your success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg">Explore Collection</Button>
          <Button variant="white" size="lg">Download Catalog</Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
