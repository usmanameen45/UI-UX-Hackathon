export interface Product {
  _id: string;
  slug: {
    _type: string;
    current: string;
  }
  tags: string[];
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: number;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  quantity: number;
  description: string;
  features: string[];
  name: string;
  category: {
    name: string;
  };
}