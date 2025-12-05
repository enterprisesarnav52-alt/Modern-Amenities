import React from 'react';
import { Button } from './Button';
import { CheckCircle, Shield, Truck, FileText, ArrowRight } from 'lucide-react';

export const GemServices: React.FC = () => {
  return (
    <div className="pt-20 font-sans text-brand-black animate-in fade-in duration-500">
      {/* GeM Hero Section */}
      <div className="bg-brand-gray relative py-20 px-6 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2">
             <div className="flex items-center gap-2 mb-4">
               <span className="bg-brand-gold/20 text-brand-gold font-bold px-3 py-1 text-xs uppercase tracking-wider rounded-full">
                 Government e-Marketplace
               </span>
             </div>
             <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-black leading-tight">
               Simplified Procurement for <span className="text-brand-red">Government Buyers</span>
             </h1>
             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               Modern Amenities is a registered Original Equipment Manufacturer (OEM) on the GeM portal. We facilitate seamless, transparent, and efficient procurement of premium office furniture for government departments, PSUs, and autonomous bodies across India.
             </p>
             <div className="flex flex-wrap gap-4">
               <Button variant="primary">View GeM Catalog</Button>
               <Button variant="outline">Contact GeM Desk</Button>
             </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-brand-red/10 rounded-full blur-3xl"></div>
            <img 
              src="https://picsum.photos/id/1/800/600" 
              alt="GeM Services Office" 
              className="rounded-lg shadow-2xl relative z-10 w-full object-cover h-[400px]" 
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us on GeM */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Why Procure via GeM?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We ensure compliance with all government standards while delivering the luxury and durability Modern Amenities is known for.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "OEM Assurance", desc: "100% Authentic products directly from the manufacturer with valid standard warranty and service support." },
              { icon: CheckCircle, title: "QCI Certified", desc: "Our products adhere to strict quality standards and specifications as per QCI and other regulatory bodies." },
              { icon: Truck, title: "Pan-India Delivery", desc: "Robust logistics network ensuring safe delivery and installation to any pincode across India." },
              { icon: FileText, title: "Easy Documentation", desc: "Streamlined digital invoicing, challans, and paperwork for hassle-free claim processing." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 border border-gray-100 bg-white rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-brand-gray rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                  <feature.icon className="w-7 h-7 text-brand-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-20 bg-brand-black text-white">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-display font-bold mb-2">Available Categories</h2>
                  <p className="text-gray-400">Comprehensive range of furniture available for direct purchase and bidding.</p>
               </div>
               <a href="#" className="text-brand-red flex items-center gap-2 mt-4 md:mt-0 hover:gap-3 transition-all font-bold">
                 Download Product List <ArrowRight size={18} />
               </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 'Executive Revolving Chairs', 'Visitor Chairs', 'Modular Workstations', 'Executive Desks', 
                 'Conference Tables', 'Steel Almirahs', 'Compactors', 'Sofa Sets',
                 'Reception Units', 'Training Room Furniture', 'Cafeteria Furniture', 'Hostel Furniture'
               ].map((item) => (
                 <div key={item} className="p-6 border border-gray-800 rounded-lg hover:border-brand-red hover:bg-white/5 transition-colors cursor-default flex items-center justify-center text-center h-24">
                    <span className="font-medium tracking-wide">{item}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>
      
       {/* CTA Section */}
       <div className="py-24 bg-brand-red text-white text-center px-6 relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dot" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot)" />
            </svg>
         </div>
         
         <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Need a Custom Catalog or Bid Support?</h2>
           <p className="mb-10 text-lg text-white/90">
             We assist government departments in creating customized product catalogs and technical specifications for proprietary bidding and bulk procurement needs.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="white" size="lg">Contact Our GeM Team</Button>
             <button className="px-8 py-4 border-2 border-white text-white font-display font-medium uppercase tracking-wide hover:bg-white hover:text-brand-red transition-colors">
               Verify OEM Status
             </button>
           </div>
         </div>
       </div>
    </div>
  );
};
