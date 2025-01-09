export interface Data {
  src: string;
  alt: string;
  title: string;
  slug: string;
  description?: string;
  price: number;
  quantity: number;
}

export const data: Data[] = [];