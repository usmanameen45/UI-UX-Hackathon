import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, Category],
}
