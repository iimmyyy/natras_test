import { defineField, defineType } from 'sanity'

// ตั้งค่าเว็บไซต์ / Global site settings (single document).
// Lets the admin edit contact info and key homepage copy without a developer.
export default defineType({
  name: 'siteSettings',
  title: 'ตั้งค่าเว็บไซต์',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'อีเมลติดต่อ', type: 'string' }),
    defineField({ name: 'location', title: 'ที่ตั้ง', type: 'string' }),
    defineField({ name: 'heroH1', title: 'หัวข้อหลัก (Hero)', type: 'string' }),
    defineField({ name: 'heroSub', title: 'คำบรรยายใต้หัวข้อหลัก', type: 'text', rows: 3 }),
    defineField({ name: 'aboutP1', title: 'เกี่ยวกับเรา — ย่อหน้า 1', type: 'text', rows: 3 }),
    defineField({ name: 'aboutP2', title: 'เกี่ยวกับเรา — ย่อหน้า 2', type: 'text', rows: 3 }),
  ],
  preview: {
    prepare() {
      return { title: 'ตั้งค่าเว็บไซต์' }
    },
  },
})
