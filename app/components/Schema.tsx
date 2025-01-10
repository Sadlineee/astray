import { SchemaProps } from '@/types/SchemaProps'

export default function Schema({ schemaData }: { schemaData: SchemaProps }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}