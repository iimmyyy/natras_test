import { defineArrayMember, defineField, defineType } from 'sanity'

// บทความความรู้ / Knowledge blog post.
export default defineType({
  name: 'post',
  title: 'บทความ (Blog)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'หัวข้อ',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (ใช้ใน URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'รูปปก',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'เกริ่นนำ (สรุปสั้น)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'เนื้อหา',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({ type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'แท็ก',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'publishedAt',
      title: 'วันที่เผยแพร่',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'ล่าสุดก่อน',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' },
  },
})
