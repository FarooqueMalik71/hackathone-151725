import { ReactNode } from 'react';

export interface Product {
    productName: ReactNode | Iterable<ReactNode>;
  tags: string[];
  quantity: number;
    inventory: number;
    _id: string;
    title: string;
    price: number;
    productImage: any;
    description: string;
    rating: number;
    name: string;
    image?:{
        asset: {
          url: string;
          type: string;
        }
    
      };
      slug:{
        _type: string;
        current: string;
      }

    discountPercentage: number;
    category: string;
    brand: string;
  };

 