export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  recommendedProducts?: Product[];
}
