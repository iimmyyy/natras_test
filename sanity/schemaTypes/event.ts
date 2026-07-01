import { defineArrayMember, defineField, defineType } from 'sanity'

// กิจกรรมที่เคยจัด / Past event or activity.
export default defineType({
  name: 'event',
  title: 'กิจกรรม (Event)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'ชื่อกิจกรรม',
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
      name: 'date',
      title: 'วันที่จัด',
      type: 'date',
    }),
    defineField({
      name: 'location',
      title: 'สถานที่',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'รูปปก',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'แกลเลอรีรูปภาพ',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
      options: { layout: 'grid' },
    }),
    defineField({
      name: 'body',
      title: 'รายละเอียดกิจกรรม',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
  ],
  orderings: [
    {
      title: 'ล่าสุดก่อน',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'coverImage' },
  },
})
