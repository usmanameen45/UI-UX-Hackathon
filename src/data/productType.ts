export interface Product {
  src: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  title: string;
  price: number;
  description: string | null;
  slug: {
    current: string;
    _type: string;
  };
}