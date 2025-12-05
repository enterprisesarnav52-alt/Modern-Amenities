import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { AIConsultant } from './components/AIConsultant';
import { GemServices } from './components/GemServices';
import { FurnitureCollection } from './components/FurnitureCollection';
import { PRODUCTS, CLIENTS } from './constants';
import { ArrowRight, Star } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'gem-services' | 'furniture'>('home');

  const handleNavigate = (href: string) => {
    if (href === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === 'gem-services') {
      setCurrentPage('gem-services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === 'furniture') {
      setCurrentPage('furniture');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      // If we are not on home, go to home first
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Wait for render then scroll
        setTimeout(() => {
          const element = document.getElementById(href.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brand-black selection:bg-brand-red selection:text-white">
      <Navbar onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Featured Categories (Director, Operative, etc.) */}
          <section id="director" className="py-20 bg-white scroll-mt-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h3 className="text-brand-red font-bold tracking-widest uppercase mb-2">Our Collections</h3>
                <h2 className="text-3xl md:text-4xl font-display font-bold">CRAFTED FOR LEADERS</h2>
                <div className="w-20 h-1 bg-brand-red mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Director Series", img: "https://picsum.photos/id/1070/600/800" },
                  { title: "Operative Series", img: "https://picsum.photos/id/3/600/800" },
                  { title: "Conference Series", img: "https://picsum.photos/id/180/600/800" }
                ].map((cat, idx) => (
                  <div key={idx} className="group relative h-[400px] overflow-hidden cursor-pointer">
                    <img 
                      src={cat.img} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-white text-2xl font-display font-bold mb-2">{cat.title}</h3>
                      <div className="flex items-center text-white/80 group-hover:text-brand-red transition-colors gap-2 text-sm font-bold uppercase tracking-wider">
                        View Products <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section id="workstations" className="py-20 bg-gray-50 scroll-mt-20">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-3xl font-display font-bold">Trending Products</h2>
                  <p className="text-gray-500 mt-2">Discover our most popular office solutions</p>
                </div>
                <a href="#" className="hidden md:flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all">
                  View All <ArrowRight size={18} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.map((product) => (
                  <div key={product.id} className="bg-white group cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 z-10">
                          NEW
                        </span>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
                      />
                      {/* Quick Action Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm flex gap-2">
                        <Button variant="primary" size="sm" className="w-full">Add to Quote</Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.category}</p>
                      <h3 className="font-display font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">{product.name}</h3>
                      <p className="text-gray-900 font-semibold">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center md:hidden">
                 <Button variant="outline">View All Products</Button>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-brand-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                 {/* Abstract pattern placeholder */}
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Modern Amenities?</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We don't just sell furniture; we design productivity. Our products are engineered to support the human body and inspire the human mind.
                        </p>
                        <ul className="space-y-6">
                            {[
                                { title: "Ergonomic Excellence", desc: "Designed for 24/7 comfort and posture support." },
                                { title: "Premium Materials", desc: "Sourced from the finest sustainable forests and suppliers." },
                                { title: "Lifetime Warranty", desc: "We stand behind the durability of every piece we create." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-brand-red shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <img 
                            src="https://picsum.photos/id/1073/600/600" 
                            alt="Quality Craftsmanship" 
                            className="w-full h-auto rounded-sm shadow-2xl border-8 border-white/5"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-xs hidden md:block">
                            <div className="flex text-brand-gold mb-2">
                                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-brand-black italic font-medium">"The best investment we made for our new headquarters. The quality is unmatched."</p>
                            <p className="text-gray-500 text-xs mt-4 font-bold uppercase">- CEO, TechFlow Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* Clientele */}
          <section id="projects" className="py-16 border-t border-gray-100 scroll-mt-20">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-8">Trusted by industry leaders</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale">
                    {CLIENTS.map((client, i) => (
                        <span key={i} className="text-2xl md:text-3xl font-display font-bold text-gray-800">{client}</span>
                    ))}
                </div>
            </div>
          </section>
        </main>
      )}

      {currentPage === 'gem-services' && (
        <GemServices />
      )}

      {currentPage === 'furniture' && (
        <FurnitureCollection />
      )}

      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;
