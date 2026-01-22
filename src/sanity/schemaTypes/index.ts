import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, product],
}
