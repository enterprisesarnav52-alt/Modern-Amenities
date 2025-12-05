import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { LOGO_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <img 
                 src={LOGO_URL} 
                 alt="Modern Amenities Logo" 
                 className="h-10 w-auto brightness-0 invert" 
               />
               <span className="font-display font-bold text-lg tracking-widest text-white">
                 MODERN AMENITIES
               </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Leading the revolution in modern workspaces. We craft premium furniture that combines ergonomics, durability, and timeless design for the leaders of tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-red transition-colors">Director Series</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Workstations</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Ergonomic Chairs</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Meeting Tables</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Lounge Furniture</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-red transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Request Catalog</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Care Instructions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red mt-1 shrink-0" />
                <span>Reg. Office : 111A/27, Ashok Nagar, <br />Kanpur Nagar, Uttar Pradesh 208012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <span>sales@modernamenities.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Modern Amenities. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};