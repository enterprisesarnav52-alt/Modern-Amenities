import { NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'Furniture', href: 'furniture' },
  { label: 'GeM Services', href: 'gem-services' },
  { label: 'Director Series', href: '#director' },
  { label: 'Workstations', href: '#workstations' },
  { label: 'Chairs', href: '#chairs' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const LOGO_URL = "https://i.ibb.co/Vpy1738/logo.png";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Presidential Suite Desk',
    category: 'Director Series',
    price: '₹ 1,25,000',
    image: 'https://picsum.photos/id/366/800/600',
    isNew: true
  },
  {
    id: '2',
    name: 'ErgoMaster Pro Chair',
    category: 'Chairs',
    price: '₹ 28,500',
    image: 'https://picsum.photos/id/1080/800/600',
  },
  {
    id: '3',
    name: 'Collaborate Modular Station',
    category: 'Workstations',
    price: '₹ 45,000',
    image: 'https://picsum.photos/id/1081/800/600',
  },
  {
    id: '4',
    name: 'Executive Leather Recliner',
    category: 'Chairs',
    price: '₹ 35,000',
    image: 'https://picsum.photos/id/1069/800/600',
    isNew: true
  },
  {
    id: '5',
    name: 'Boardroom Vision Table',
    category: 'Meeting Tables',
    price: '₹ 85,000',
    image: 'https://picsum.photos/id/1070/800/600',
  },
  {
    id: '6',
    name: 'Minimalist Glass Desk',
    category: 'Director Series',
    price: '₹ 62,000',
    image: 'https://picsum.photos/id/1078/800/600',
  },
];

export const AIRA_PRODUCTS: Product[] = [
  {
    id: 'a1',
    name: 'Aira Lounge Chair',
    category: 'Seating',
    price: '₹ 24,500',
    image: 'https://picsum.photos/id/11/600/600',
    isNew: true
  },
  {
    id: 'a2',
    name: 'Aira Coffee Table',
    category: 'Tables',
    price: '₹ 18,000',
    image: 'https://picsum.photos/id/12/600/600',
  },
  {
    id: 'a3',
    name: 'Aira Floor Lamp',
    category: 'Lighting',
    price: '₹ 8,500',
    image: 'https://picsum.photos/id/13/600/600',
  },
  {
    id: 'a4',
    name: 'Aira 3-Seater Sofa',
    category: 'Seating',
    price: '₹ 65,000',
    image: 'https://picsum.photos/id/14/600/600',
    isNew: true
  },
  {
    id: 'a5',
    name: 'Aira Dining Set',
    category: 'Dining',
    price: '₹ 82,000',
    image: 'https://picsum.photos/id/15/600/600',
  },
  {
    id: 'a6',
    name: 'Aira Sideboard',
    category: 'Storage',
    price: '₹ 32,000',
    image: 'https://picsum.photos/id/16/600/600',
  },
  {
    id: 'a7',
    name: 'Aira Accent Chair',
    category: 'Seating',
    price: '₹ 19,500',
    image: 'https://picsum.photos/id/17/600/600',
  },
  {
    id: 'a8',
    name: 'Aira Bookshelf',
    category: 'Storage',
    price: '₹ 28,000',
    image: 'https://picsum.photos/id/18/600/600',
  },
];

export const CLIENTS = [
  "Google", "Amazon", "Microsoft", "Tata", "Reliance", "Infosys"
];