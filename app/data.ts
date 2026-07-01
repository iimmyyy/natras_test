// NuTras Didactic catalog.
// - "nutras" brand items are developed in-house by NuTras Didactic (Thailand).
// - "ln" brand items are Lucas-Nülle training systems distributed by NuTras for
//   the Thailand market. lnUrl links to the official Lucas-Nülle category page.
// Product descriptions are written in-house and kept faithful to what each
// system actually does — no invented specifications, model codes or claims.

export type Brand = 'nutras' | 'ln'

export const products: {
  id: string
  name: string
  category: string
  brand: Brand
}[] = [
  // --- NuTras own products ---
  { id: 'nt-pneumatics', name: 'Pneumatics Training System', category: 'industry', brand: 'nutras' },
  { id: 'nt-alignment', name: 'Industrial Mechanical Alignment Trainer', category: 'maint', brand: 'nutras' },
  { id: 'nt-hydrogen', name: 'Hydrogen Power Generation Trainer', category: 'power', brand: 'nutras' },

  // --- Lucas-Nülle distributed systems ---
  { id: 'ln-power', name: 'Power Engineering · Smart Grid · Micro Grid', category: 'power', brand: 'ln' },
  { id: 'ln-renewable', name: 'Renewable Energies', category: 'power', brand: 'ln' },
  { id: 'ln-machines', name: 'Electromechanical Energy Conversion', category: 'power', brand: 'ln' },
  { id: 'ln-automotive', name: 'Automotive · EV (ASE L3) & ADAS (ASE L4)', category: 'auto', brand: 'ln' },
  { id: 'ln-automation', name: 'Automation & Industry 4.0', category: 'industry', brand: 'ln' },
  { id: 'ln-process', name: 'Process Control', category: 'industry', brand: 'ln' },
  { id: 'ln-installation', name: 'Installation Technology & Industrial Maintenance', category: 'maint', brand: 'ln' },
  { id: 'ln-fluidpower', name: 'Fluid Power', category: 'maint', brand: 'ln' },
  { id: 'ln-unitrain', name: 'UniTrain Modular Learning Platform', category: 'maint', brand: 'ln' },
]

// All imagery is real: Lucas-Nülle photos for LN products, and branded NuTras
// panels for the in-house products (no stock/mock photos used).
export const productImages: Record<string, string> = {
  'nt-pneumatics': '/products/nt-pneumatics.jpg',
  'nt-alignment': '/products/nt-alignment.jpg',
  'nt-hydrogen': '/products/nt-hydrogen.jpg',
  'ln-power': '/products/power.jpg',
  'ln-renewable': '/products/wind.png',
  'ln-machines': '/products/power.jpg',
  'ln-automotive': '/products/adas.jpg',
  'ln-automation': '/products/automation.jpg',
  'ln-process': '/products/process.png',
  'ln-installation': '/products/installation.png',
  'ln-fluidpower': '/products/maintenance.png',
  'ln-unitrain': '/products/elotrain.png',
}

export const productDetails: Record<string, {
  subtitle: string
  description: string
  highlights: string[]
  specs: { key: string; value: string }[]
  lnUrl?: string
}> = {
  'nt-pneumatics': {
    subtitle: 'ชุดฝึกที่พัฒนาโดย NuTras',
    description:
      'ชุดฝึกนิวแมติกส์เชิงปฏิบัติที่พัฒนาโดย NuTras ผู้เรียนสร้างวงจรนิวแมติกส์ด้วยกระบอกสูบ วาล์วควบคุมทิศทางและอัตราการไหล เซนเซอร์ และอุปกรณ์ควบคุม แล้วต่อยอดสู่การควบคุมแบบอิเล็กโทร-นิวแมติกส์ และการเชื่อมต่อกับระบบอัตโนมัติในงานอุตสาหกรรม',
    highlights: [
      'สร้างวงจรนิวแมติกส์และอิเล็กโทร-นิวแมติกส์',
      'กระบอกสูบ วาล์วควบคุมทิศทาง/อัตราการไหล และเซนเซอร์',
      'แบบฝึกการเรียงลำดับและการควบคุมเชิงตรรกะ',
      'เชื่อมต่อกับระบบอัตโนมัติในงานอุตสาหกรรม',
    ],
    specs: [
      { key: 'หัวข้อ', value: 'วงจรนิวแมติกส์ กระบอกสูบ วาล์ว เซนเซอร์' },
      { key: 'การควบคุม', value: 'แบบแมนนวลและอิเล็กโทร-นิวแมติกส์' },
      { key: 'การประยุกต์ใช้', value: 'ระบบอัตโนมัติในงานอุตสาหกรรม' },
      { key: 'รูปแบบการเรียนรู้', value: 'เชิงปฏิบัติแบบโปรเจกต์' },
      { key: 'พัฒนาโดย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
  },
  'nt-alignment': {
    subtitle: 'ชุดฝึกที่พัฒนาโดย NuTras',
    description:
      'ชุดฝึกเชิงปฏิบัติสำหรับงานบำรุงรักษาเชิงกลในอุตสาหกรรม ผู้เรียนได้ฝึกการจัดศูนย์เพลา การปรับตั้งสายพานและคัปปลิ้ง การตรวจวัดการสั่นสะเทือน และงานบำรุงรักษาเชิงป้องกัน ซึ่งเป็นทักษะหลักในการบำรุงรักษาโรงงาน',
    highlights: [
      'ฝึกการจัดศูนย์เพลา',
      'การปรับตั้งสายพานและคัปปลิ้ง',
      'การตรวจวัดการสั่นสะเทือน',
      'งานบำรุงรักษาเชิงป้องกันแบบลงมือทำ',
    ],
    specs: [
      { key: 'หัวข้อ', value: 'การจัดศูนย์เพลา การปรับตั้งสายพานและคัปปลิ้ง' },
      { key: 'ทักษะ', value: 'การตรวจวัดการสั่นสะเทือน การบำรุงรักษาเชิงป้องกัน' },
      { key: 'การประยุกต์ใช้', value: 'งานบำรุงรักษาเชิงกลในอุตสาหกรรม' },
      { key: 'รูปแบบการเรียนรู้', value: 'ฝึกปฏิบัติจริง' },
      { key: 'พัฒนาโดย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
  },
  'nt-hydrogen': {
    subtitle: 'ชุดฝึกที่พัฒนาโดย NuTras',
    description:
      'สถานีแบบโมดูลาร์ที่สาธิตห่วงโซ่พลังงานไฮโดรเจนแบบครบวงจร ผู้เรียนติดตามการไหลของพลังงานจากแหล่งจ่ายไฟฟ้าหรือพลังงานแสงอาทิตย์ ผ่านกระบวนการอิเล็กโทรลิซิส การกักเก็บไฮโดรเจน การผลิตไฟฟ้าด้วยเซลล์เชื้อเพลิง และการแปลงเป็นโหลด AC/DC — เห็นภาพพลังงานไฮโดรเจนตั้งแต่ต้นจนจบ',
    highlights: [
      'ครบวงจร: แหล่งจ่าย → อิเล็กโทรไลเซอร์ → การกักเก็บ → เซลล์เชื้อเพลิง → โหลด',
      'ทดลองอิเล็กโทรลิซิสและเซลล์เชื้อเพลิงแบบลงมือทำ',
      'เลือกแหล่งจ่ายจากโซลาร์เซลล์หรือระบบไฟฟ้า',
      'ทดสอบโหลด AC/DC',
    ],
    specs: [
      { key: 'ห่วงโซ่พลังงาน', value: 'แหล่งจ่าย → อิเล็กโทรไลเซอร์ → การกักเก็บ → เซลล์เชื้อเพลิง → โหลด' },
      { key: 'แหล่งจ่าย', value: 'โซลาร์เซลล์หรือระบบไฟฟ้า' },
      { key: 'เอาต์พุต', value: 'เซลล์เชื้อเพลิง DC → อินเวอร์เตอร์ → โหลด AC / RLC' },
      { key: 'หัวข้อ', value: 'อิเล็กโทรลิซิส การกักเก็บ เซลล์เชื้อเพลิง การแปลงพลังงาน' },
      { key: 'การกำหนดค่า', value: 'สถานีพลังงานแบบโมดูลาร์' },
      { key: 'พัฒนาโดย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
  },

  'ln-power': {
    subtitle: 'Lucas-Nülle · ระบบไฟฟ้ากำลังและพลังงาน',
    description:
      'ชุดฝึก Lucas-Nülle ด้านวิศวกรรมไฟฟ้ากำลัง — ตั้งแต่การผลิต การส่งจ่าย และการป้องกัน ไปจนถึงการทำงานของ Smart Grid และ Micro Grid เหมาะสำหรับมหาวิทยาลัยและศูนย์พลังงานที่ต้องการสร้างหลักสูตรด้านโครงข่ายไฟฟ้าและการจัดการพลังงานสมัยใหม่',
    highlights: [
      'การผลิต การส่ง และการจ่ายไฟฟ้า',
      'รีเลย์ป้องกันและสวิตช์เกียร์',
      'การทำงานของ Smart Grid และ Micro Grid',
      'การจัดการพลังงานและการเชื่อมต่อโครงข่าย',
    ],
    specs: [
      { key: 'กลุ่มผลิตภัณฑ์', value: 'Power Engineering · Smart Grid · Micro Grid' },
      { key: 'แบรนด์', value: 'Lucas-Nülle' },
      { key: 'ตัวแทนจำหน่าย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
    lnUrl: 'https://www.lucas-nuelle.us/2755/apg/1168/Products/Power-Engineering-|-Smart-Grid-|-Micro-Grid.htm',
  },
  'ln-renewable': {
    subtitle: 'Lucas-Nülle · ระบบไฟฟ้ากำลังและพลังงาน',
    description:
      'ชุดฝึกครอบคลุมพลังงานแสงอาทิตย์ พลังงานลม และแหล่งพลังงานหมุนเวียนอื่นๆ รวมถึงการกักเก็บและการจ่ายเข้าโครงข่าย ผู้เรียนศึกษาการผลิต การแปลง และการเชื่อมต่อพลังงานหมุนเวียนเข้าสู่ระบบไฟฟ้าสมัยใหม่',
    highlights: [
      'พื้นฐานพลังงานแสงอาทิตย์และพลังงานลม',
      'การกักเก็บและการแปลงพลังงาน',
      'การจ่ายเข้าและเชื่อมต่อโครงข่าย',
      'การวัดและวิเคราะห์สมรรถนะ',
    ],
    specs: [
      { key: 'กลุ่มผลิตภัณฑ์', value: 'Renewable Energies' },
      { key: 'แบรนด์', value: 'Lucas-Nülle' },
      { key: 'ตัวแทนจำหน่าย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
    lnUrl: 'https://www.lucas-nuelle.us/2777/apg/15953/Products/Renewable-Energies.htm',
  },
  'ln-machines': {
    subtitle: 'Lucas-Nülle · ระบบไฟฟ้ากำลังและพลังงาน',
    description:
      'ชุดฝึกการแปลงพลังงานไฟฟ้า-เชิงกล ครอบคลุมหม้อแปลง เครื่องกลไฟฟ้า และอิเล็กทรอนิกส์กำลัง ผู้เรียนทดลองกับเครื่องกลไฟฟ้ากระแสตรง เหนี่ยวนำ และซิงโครนัส พร้อมศึกษาระบบขับเคลื่อนและคอนเวอร์เตอร์อิเล็กทรอนิกส์กำลัง',
    highlights: [
      'หม้อแปลงและเครื่องกลไฟฟ้า',
      'ทดลองเครื่องกลไฟฟ้ากระแสตรง เหนี่ยวนำ และซิงโครนัส',
      'อิเล็กทรอนิกส์กำลังและระบบขับเคลื่อน',
      'การวัดการแปลงพลังงาน',
    ],
    specs: [
      { key: 'กลุ่มผลิตภัณฑ์', value: 'Transformers · Machines · Power Electronics' },
      { key: 'แบรนด์', value: 'Lucas-Nülle' },
      { key: 'ตัวแทนจำหน่าย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
    lnUrl: 'https://www.lucas-nuelle.us/2756/apg/2/Products/Electromechanical-Energy-Conversion-|-Transformers-|-Machines-|-Power-Electronics.htm',
  },
  'ln-automotive': {
    subtitle: 'Lucas-Nülle · ยานยนต์',
    description:
      'ชุดฝึกด้านยานยนต์ ครอบคลุมเทคโนโลยียานยนต์ไฟฟ้าถึงระดับ ASE L3 และระบบช่วยเหลือผู้ขับขี่ขั้นสูง (ADAS) ถึงระดับ ASE L4 ออกแบบสำหรับหลักสูตรยานยนต์ที่เตรียมช่างเทคนิคสู่ยุค EV และการขับเคลื่อนสมัยใหม่',
    highlights: [
      'เทคโนโลยียานยนต์ไฟฟ้า (ASE L3)',
      'ADAS — ระบบช่วยเหลือผู้ขับขี่ (ASE L4)',
      'ความปลอดภัยไฟฟ้าแรงสูงและระบบแบตเตอรี่',
      'มอเตอร์ไดรฟ์และอิเล็กทรอนิกส์กำลังสำหรับ EV',
    ],
    specs: [
      { key: 'กลุ่มผลิตภัณฑ์', value: 'Automotive · EV (ASE L3) · ADAS (ASE L4)' },
      { key: 'แบรนด์', value: 'Lucas-Nülle' },
      { key: 'ตัวแทนจำหน่าย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
    lnUrl: 'https://www.lucas-nuelle.us/2765/apg/17909/Products/Automotive-|-EV-ASE-L3-and-ADAS-ASE-L4-.htm',
  },
  'ln-automation': {
    subtitle: 'Lucas-Nülle · ระบบอัตโนมัติ',
    description:
      'ชุดฝึกระบบอัตโนมัติและ Industry 4.0 — PLC, HMI, เซนเซอร์, fieldbus และเทคโนโลยีโรงงานอัจฉริยะแบบเชื่อมต่อเครือข่าย ผู้เรียนพัฒนาจากการควบคุมสถานีเดี่ยวไปสู่การผลิตแบบเชื่อมต่อดิจิทัลอย่างครบวงจร',
    highlights: [
      'การเขียนโปรแกรม PLC และ HMI',
      'เซนเซอร์และการสื่อสารผ่าน fieldbus',
      'แนวคิดโรงงานอัจฉริยะและ Industry 4.0',
      'ระบบการผลิตแบบเชื่อมต่อเครือข่ายดิจิทัล',
    ],
    specs: [
      { key: 'กลุ่มผลิตภัณฑ์', value: 'Automation · Industry 4.0' },
      { key: 'แบรนด์', value: 'Lucas-Nülle' },
      { key: 'ตัวแทนจำหน่าย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
    lnUrl: 'https://www.lucas-nuelle.us/2764/apg/552/Products/Automation-|-Industry-40.htm',
  },
  'ln-process': {
    subtitle: 'Lucas-Nülle · ระบบอัตโนมัติ',
    description:
      'ชุดฝึกการควบคุมกระบวนการสำหรับลูปควบคุมระดับ อัตราการไหล ความดัน และอุณหภูมิ ผู้เรียนเรียนรู้การควบคุมแบบวงปิด เครื่องมือวัด และการปรับจูนบนชุดทดลองกระบวนการที่สมจริง',
    highlights: [
      'การควบคุมระดับ อัตราการไหล ความดัน และอุณหภูมิ',
      'การควบคุมแบบวงปิดและการปรับจูน PID',
      'เครื่องมือวัดและเซนเซอร์ในงานอุตสาหกรรม',
      'การแสดงผลกระบวนการ (Process Visualisation)',
    ],
    specs: [
      { key: 'กลุ่มผลิตภัณฑ์', value: 'Process Control' },
      { key: 'แบรนด์', value: 'Lucas-Nülle' },
      { key: 'ตัวแทนจำหน่าย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
    lnUrl: 'https://www.lucas-nuelle.us/2760/apg/1986/Products/Process-Control.htm',
  },
  'ln-installation': {
    subtitle: 'Lucas-Nülle · งานบำรุงรักษา',
    description:
      'ชุดฝึกเทคโนโลยีการติดตั้งและงานบำรุงรักษาในอุตสาหกรรม — การเดินสายไฟในอาคาร ระบบป้องกัน และทักษะภาคปฏิบัติที่ช่างเทคนิคต้องใช้ในการติดตั้ง ตรวจสอบ และบำรุงรักษาระบบไฟฟ้าอย่างปลอดภัย',
    highlights: [
      'การติดตั้งไฟฟ้าและการเดินสายในอาคาร',
      'อุปกรณ์ป้องกันและความปลอดภัย',
      'การตรวจสอบและบำรุงรักษา',
      'การทำงานอย่างปลอดภัย',
    ],
    specs: [
      { key: 'กลุ่มผลิตภัณฑ์', value: 'Installation Technology & Industrial Maintenance' },
      { key: 'แบรนด์', value: 'Lucas-Nülle' },
      { key: 'ตัวแทนจำหน่าย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
    lnUrl: 'https://www.lucas-nuelle.us/2754/apg/19271/Products/Installation-Technology-and-Industrial-Maintenance.htm',
  },
  'ln-fluidpower': {
    subtitle: 'Lucas-Nülle · งานบำรุงรักษา',
    description:
      'ชุดฝึกระบบส่งกำลังด้วยของไหล ครอบคลุมไฮดรอลิกส์และนิวแมติกส์ — อุปกรณ์ วงจร และการควบคุม ผู้เรียนสร้างและวิเคราะห์วงจรส่งกำลังด้วยของไหลที่ใช้ในเครื่องจักรอุตสาหกรรม',
    highlights: [
      'พื้นฐานไฮดรอลิกส์และนิวแมติกส์',
      'พฤติกรรมของอุปกรณ์และการสร้างวงจร',
      'การควบคุมแบบอิเล็กโทร-ไฮดรอลิก / อิเล็กโทร-นิวแมติกส์',
      'การหาข้อบกพร่องและการวัด',
    ],
    specs: [
      { key: 'กลุ่มผลิตภัณฑ์', value: 'Fluid Power (Hydraulics · Pneumatics)' },
      { key: 'แบรนด์', value: 'Lucas-Nülle' },
      { key: 'ตัวแทนจำหน่าย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
    lnUrl: 'https://www.lucas-nuelle.us/3452/apg/9214/Products/Fluid-Power.htm',
  },
  'ln-unitrain': {
    subtitle: 'Lucas-Nülle · แพลตฟอร์มหลัก',
    description:
      'UniTrain คือแพลตฟอร์มการเรียนรู้แบบโมดูลาร์ของ Lucas-Nülle — ระบบที่ทำงานร่วมกับคอมพิวเตอร์ ผสานการ์ดทดลองฮาร์ดแวร์เข้ากับสื่อการสอนแบบอินเทอร์แอกทีฟ ครอบคลุมหัวข้อไฟฟ้า อิเล็กทรอนิกส์ ระบบอัตโนมัติ และพลังงาน ในแพลตฟอร์มเดียวที่ขยายได้',
    highlights: [
      'การเรียนรู้ผ่านคอมพิวเตอร์และมัลติมีเดีย',
      'การ์ดทดลองที่สลับเปลี่ยนได้',
      'การวัดและเครื่องมือวัดในตัว',
      'ขยายครอบคลุมได้หลายสาขาวิชา',
    ],
    specs: [
      { key: 'กลุ่มผลิตภัณฑ์', value: 'UniTrain' },
      { key: 'แบรนด์', value: 'Lucas-Nülle' },
      { key: 'ตัวแทนจำหน่าย', value: 'NuTras Didactic (ประเทศไทย)' },
    ],
    lnUrl: 'https://www.lucas-nuelle.us/2757/apg/1425/Products/UniTrain.htm',
  },
}

// Featured-unit detail rows for the Hydrogen Power Generation Trainer.
// Based on the real modular energy-flow concept of the system.
export const specRows: { key: string; value: string }[] = [
  { key: 'ห่วงโซ่พลังงาน', value: 'แหล่งจ่าย → อิเล็กโทรไลเซอร์ → การกักเก็บ → เซลล์เชื้อเพลิง → โหลด' },
  { key: 'แหล่งจ่าย', value: 'โซลาร์เซลล์หรือระบบไฟฟ้า' },
  { key: 'เอาต์พุต', value: 'เซลล์เชื้อเพลิง DC → อินเวอร์เตอร์ → โหลด AC / RLC' },
  { key: 'หัวข้อ', value: 'อิเล็กโทรลิซิส การกักเก็บ เซลล์เชื้อเพลิง การแปลงพลังงาน' },
  { key: 'การกำหนดค่า', value: 'สถานีพลังงานแบบโมดูลาร์' },
  { key: 'พัฒนาโดย', value: 'NuTras Didactic (ประเทศไทย)' },
]

export const catLabels: Record<string, string> = {
  power: 'Power & Energy',
  auto: 'Automotive & EV',
  industry: 'Automation & Industry 4.0',
  maint: 'Maintenance & Core',
}

export const catColors: Record<string, string> = {
  power: '#003f9a',
  auto: '#2871cc',
  industry: '#163A8C',
  maint: '#468fea',
}

export const brandLabels: Record<Brand, string> = {
  nutras: 'NuTras Own',
  ln: 'Lucas-Nülle',
}

// Full Lucas-Nülle portfolio NuTras distributes for the Thailand market.
export const lucasNuelleCategories: { name: string; url: string }[] = [
  { name: 'Installation Technology & Industrial Maintenance', url: 'https://www.lucas-nuelle.us/2754/apg/19271/Products/Installation-Technology-and-Industrial-Maintenance.htm' },
  { name: 'Power Engineering · Smart Grid · Micro Grid', url: 'https://www.lucas-nuelle.us/2755/apg/1168/Products/Power-Engineering-|-Smart-Grid-|-Micro-Grid.htm' },
  { name: 'Renewable Energies', url: 'https://www.lucas-nuelle.us/2777/apg/15953/Products/Renewable-Energies.htm' },
  { name: 'Electromechanical Energy Conversion', url: 'https://www.lucas-nuelle.us/2756/apg/2/Products/Electromechanical-Energy-Conversion-|-Transformers-|-Machines-|-Power-Electronics.htm' },
  { name: 'UniTrain', url: 'https://www.lucas-nuelle.us/2757/apg/1425/Products/UniTrain.htm' },
  { name: 'EloTrain — Plug-in System', url: 'https://www.lucas-nuelle.us/2758/apg/1726/Products/EloTrain-Plug-in-System.htm' },
  { name: 'Communication Technology', url: 'https://www.lucas-nuelle.us/2759/apg/1640/Products/Communication-Technology.htm' },
  { name: 'Process Control', url: 'https://www.lucas-nuelle.us/2760/apg/1986/Products/Process-Control.htm' },
  { name: 'Fluid Power', url: 'https://www.lucas-nuelle.us/3452/apg/9214/Products/Fluid-Power.htm' },
  { name: 'Microcomputers / Microcontrollers', url: 'https://www.lucas-nuelle.us/2763/apg/1521/Products/Microcomputers-Microcontrollers.htm' },
  { name: 'Automation · Industry 4.0', url: 'https://www.lucas-nuelle.us/2764/apg/552/Products/Automation-|-Industry-40.htm' },
  { name: 'Automotive · EV (ASE L3) & ADAS (ASE L4)', url: 'https://www.lucas-nuelle.us/2765/apg/17909/Products/Automotive-|-EV-ASE-L3-and-ADAS-ASE-L4-.htm' },
  { name: 'Commercial Vehicles & Agricultural Machinery', url: 'https://www.lucas-nuelle.us/3533/apg/17582/Products/Commercial-vehicles-and-agricultural-machinery.htm' },
  { name: 'Lab Systems', url: 'https://www.lucas-nuelle.us/2767/apg/1819/Products/Lab-Systems.htm' },
]
