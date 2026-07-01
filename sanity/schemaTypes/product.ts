import { defineArrayMember, defineField, defineType } from 'sanity'

// ชุดฝึก / Training product. Content is single-language (mixed TH/EN) to match
// the current site — Thai body text with English labels and technical terms.
export default defineType({
  name: 'product',
  title: 'ชุดฝึก (Product)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'ชื่อสินค้า',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (ใช้ใน URL)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'หมวดหมู่',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Power & Energy', value: 'power' },
          { title: 'Automotive & EV', value: 'auto' },
          { title: 'Automation & Industry 4.0', value: 'industry' },
          { title: 'Maintenance & Core', value: 'maint' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'brand',
      title: 'แบรนด์',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'NuTras (พัฒนาเอง)', value: 'nutras' },
          { title: 'Lucas-Nülle', value: 'ln' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'รูปภาพ',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'subtitle',
      title: 'คำโปรย (ใต้ชื่อ)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'คำบรรยาย',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'highlights',
      title: 'คุณสมบัติเด่น',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'specs',
      title: 'ข้อมูลจำเพาะทางเทคนิค',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'key', title: 'หัวข้อ', type: 'string' },
            { name: 'value', title: 'รายละเอียด', type: 'string' },
          ],
          preview: { select: { title: 'key', subtitle: 'value' } },
        }),
      ],
    }),
    defineField({
      name: 'lnUrl',
      title: 'ลิงก์หน้า Lucas-Nülle (ถ้ามี)',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'ลำดับการแสดงผล (น้อยไปมาก)',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'ลำดับการแสดงผล',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'image' },
  },
})
