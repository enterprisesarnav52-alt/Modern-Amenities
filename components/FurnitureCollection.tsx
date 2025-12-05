import React, { useState } from 'react';
import { AIRA_PRODUCTS } from '../constants';
import { Filter, ChevronDown, Heart, ShoppingCart } from 'lucide-react';
import { Button } from './Button';

export const FurnitureCollection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Seating', 'Tables', 'Storage', 'Lighting', 'Dining'];
  
  const filteredProducts = activeFilter === 'All' 
    ? AIRA_PRODUCTS 
    : AIRA_PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen animate-in fade-in duration-500">
      
      {/* Collection Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">New Arrivals</p>
        <h1 className="text-4xl md:text-6xl font-display font-light text-brand-black mb-6">
          The Aira Collection
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          A celebration of minimalist design and functional elegance. The Aira collection brings contemporary aesthetics to your living and workspaces, crafted with precision and premium materials.
        </p>
      </div>

      {/* Toolbar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-y border-gray-100 mb-12">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Categories */}
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-6 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === cat ? 'text-brand-red' : 'text-gray-500 hover:text-brand-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filters & Sort */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
             <button className="flex items-center gap-2 hover:text-brand-black transition-colors">
               <Filter size={16} /> Filter
             </button>
             <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
             <button className="flex items-center gap-2 hover:text-brand-black transition-colors group">
               Sort by <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
             </button>
             <span className="text-gray-400 hidden md:inline">
               {filteredProducts.length} Products
             </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                {product.isNew && (
                  <span className="absolute top-0 left-0 bg-brand-black text-white text-[10px] font-bold px-3 py-1.5 z-10 uppercase tracking-wider">
                    New Arrival
                  </span>
                )}
                
                {/* Image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Actions */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-red hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-red hover:text-white transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>

                {/* Quick Add overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                   <Button variant="outline" size="sm" className="w-full">Quick View</Button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-display font-medium text-lg text-brand-black mb-1 group-hover:text-brand-red transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-900 font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
          <Button variant="outline" className="px-12">Load More Products</Button>
        </div>
      </div>
    </div>
  );
};
