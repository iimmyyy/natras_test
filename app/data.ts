export const products = [
  { id: 'ntx3100', model: 'NTX-3100', name: 'Electrical Machines Trainer', category: 'ee' },
  { id: 'ntx2200', model: 'NTX-2200', name: 'Power Electronics Workbench', category: 'ee' },
  { id: 'ntx1400', model: 'NTX-1400', name: 'Analog & Digital Circuits Lab', category: 'ee' },
  { id: 'nta5200', model: 'NTA-5200', name: 'PLC Training Station', category: 'auto' },
  { id: 'nta7000', model: 'NTA-7000', name: 'Industrial Robotics Cell', category: 'auto' },
  { id: 'nta3300', model: 'NTA-3300', name: 'Pneumatics & Sensors Rig', category: 'auto' },
  { id: 'ntm4100', model: 'NTM-4100', name: 'Thermodynamics Bench', category: 'mech' },
  { id: 'ntm4600', model: 'NTM-4600', name: 'Fluid Mechanics Channel', category: 'mech' },
  { id: 'ntm2800', model: 'NTM-2800', name: 'Materials Testing Frame', category: 'mech' },
  { id: 'ntr6100', model: 'NTR-6100', name: 'Solar PV Lab System', category: 'ren' },
  { id: 'ntr6400', model: 'NTR-6400', name: 'Wind Energy Trainer', category: 'ren' },
  { id: 'ntr8000', model: 'NTR-8000', name: 'Smart Microgrid Platform', category: 'ren' },
]

export const productImages: Record<string, string> = {
  ntx3100: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
  ntx2200: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80',
  ntx1400: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80',
  nta5200: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=80',
  nta7000: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80',
  nta3300: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=900&q=80',
  ntm4100: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80',
  ntm4600: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80',
  ntm2800: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',
  ntr6100: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80',
  ntr6400: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=80',
  ntr8000: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=900&q=80',
}

export const productDetails: Record<string, {
  subtitle: string
  description: string
  highlights: string[]
  specs: { key: string; value: string }[]
}> = {
  ntx3100: {
    subtitle: 'Modular Bench System',
    description: 'The NTX-3100 is a comprehensive electrical machines trainer designed for university engineering laboratories. It provides hands-on experience with DC, AC induction, synchronous, and universal motors using a modular bench configuration that allows rapid experiment changeover.',
    highlights: ['14 interchangeable experiment modules', 'Covers DC, AC induction & synchronous machines', 'USB data logging with lab software', 'RCD-protected 3-phase supply'],
    specs: [
      { key: 'Power supply', value: '3 × 400 V / 50 Hz, RCD-protected' },
      { key: 'Machine rating', value: '0.3 kW modular machine set' },
      { key: 'Modules', value: '14 interchangeable experiment modules' },
      { key: 'Instrumentation', value: 'Digital metering + USB data logging' },
      { key: 'Safety', value: 'Overload & residual-current protection (IEC 61010)' },
      { key: 'Footprint', value: '1600 × 800 × 1800 mm' },
      { key: 'Standards', value: 'IEC 61010 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  ntx2200: {
    subtitle: 'Power Conversion Laboratory',
    description: 'The NTX-2200 Power Electronics Workbench covers the full range of modern power conversion topologies. Students explore rectifiers, inverters, DC-DC converters, and motor drives using safe, bench-top modules with real oscilloscope and data-capture interfaces.',
    highlights: ['Rectifier, inverter & DC-DC converter modules', 'Variable-frequency drive experiments', 'Built-in oscilloscope interface', 'Gate-drive and protection circuits included'],
    specs: [
      { key: 'Input supply', value: '230 V / 50 Hz single-phase' },
      { key: 'Output power', value: 'Up to 500 W per module' },
      { key: 'Switching freq.', value: '1 kHz – 50 kHz adjustable' },
      { key: 'Topologies', value: 'Buck, Boost, Buck-Boost, H-Bridge, 3-phase VSI' },
      { key: 'Measurement', value: 'Voltage, current, power — USB DAQ' },
      { key: 'Footprint', value: '1400 × 700 × 1600 mm' },
      { key: 'Standards', value: 'IEC 61010 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  ntx1400: {
    subtitle: 'Electronics Teaching Station',
    description: 'The NTX-1400 provides a complete curriculum solution for analog and digital electronics courses. Self-contained experiment boards cover amplifiers, filters, logic gates, flip-flops, ADC/DAC, and microcontroller interfacing — all on a single bench footprint.',
    highlights: ['Op-amp, filter & oscillator experiments', 'Combinational & sequential digital logic', 'ADC/DAC and signal conversion modules', 'Integrated function generator & oscilloscope'],
    specs: [
      { key: 'Supply', value: '230 V / 50 Hz, isolated bench supply ±15 V / 5 V' },
      { key: 'Analog section', value: 'Op-amps, filters, signal generators, oscillators' },
      { key: 'Digital section', value: 'TTL/CMOS logic, flip-flops, counters, shift registers' },
      { key: 'Interface', value: 'ADC/DAC, PWM, UART, SPI, I²C' },
      { key: 'Instruments', value: 'DMM, function generator, 2-channel oscilloscope' },
      { key: 'Footprint', value: '1200 × 600 × 300 mm (benchtop)' },
      { key: 'Standards', value: 'IEC 61010 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  nta5200: {
    subtitle: 'Industrial PLC Training System',
    description: 'The NTA-5200 replicates an industrial PLC control environment for teaching ladder logic, function block, and structured text programming. It includes a physical I/O panel with switches, indicators, and a process simulation module representing real factory scenarios.',
    highlights: ['Industrial-grade PLC (IEC 61131-3 compliant)', 'HMI touchscreen panel included', 'Process simulation: conveyor, tank, sorting', 'Compatible with leading PLC brands'],
    specs: [
      { key: 'PLC', value: 'Industrial-grade, IEC 61131-3 · 32 DI / 32 DO / 8 AI / 4 AO' },
      { key: 'HMI', value: '7″ colour touchscreen with Ethernet comms' },
      { key: 'Networks', value: 'Profibus, Modbus RTU/TCP, EtherNet/IP' },
      { key: 'Simulation', value: 'Conveyor, tank level, temperature, sorting cell' },
      { key: 'Power', value: '230 V / 50 Hz, 24 V DC control rail' },
      { key: 'Footprint', value: '1500 × 750 × 1900 mm' },
      { key: 'Standards', value: 'IEC 61131-3 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  nta7000: {
    subtitle: '6-Axis Teaching Robot Cell',
    description: 'The NTA-7000 Industrial Robotics Cell brings real collaborative-robot technology into the university lab. Students program pick-and-place, arc welding simulation, and vision-guided assembly tasks using the same tools used in modern industry.',
    highlights: ['6-axis collaborative robot arm, 5 kg payload', 'Vision system with 2D/3D camera', 'Safety-rated fencing with light curtain', 'Industry-standard teach pendant included'],
    specs: [
      { key: 'Robot', value: '6-axis cobot · 5 kg payload · 850 mm reach' },
      { key: 'Repeatability', value: '±0.05 mm' },
      { key: 'Programming', value: 'Teach pendant + offline PC software' },
      { key: 'Vision', value: '2D barcode + 3D depth camera' },
      { key: 'Safety', value: 'ISO 10218-2 · light curtain · safety PLC' },
      { key: 'Footprint', value: '2000 × 1500 × 2200 mm (fenced cell)' },
      { key: 'Standards', value: 'ISO 10218 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  nta3300: {
    subtitle: 'Fluid Power & Sensing Rig',
    description: 'The NTA-3300 covers pneumatic circuit design, proportional valves, and industrial sensor technologies in a single bench rig. Students wire and configure pressure, proximity, temperature, and flow sensors alongside solenoid-valve controlled pneumatic actuators.',
    highlights: ['Modular pneumatic circuit panel', '10+ sensor types: proximity, pressure, flow, temp', 'Proportional pressure & flow control valves', 'PLC interface for automation integration'],
    specs: [
      { key: 'Air supply', value: '6 bar max, filtered & regulated on-bench' },
      { key: 'Actuators', value: '4× double-acting cylinders, 2× rotary' },
      { key: 'Valves', value: '5/2 solenoid, proportional pressure & flow' },
      { key: 'Sensors', value: 'Inductive, capacitive, optical, ultrasonic, pressure, flow' },
      { key: 'Interface', value: 'PLC-ready 24 V DC I/O terminal strip' },
      { key: 'Footprint', value: '1400 × 700 × 1800 mm' },
      { key: 'Standards', value: 'ISO 4414 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  ntm4100: {
    subtitle: 'Heat Transfer Teaching Bench',
    description: 'The NTM-4100 Thermodynamics Bench provides apparatus for conduction, convection, radiation, and refrigeration cycle experiments. Built-in data acquisition records temperature profiles in real time, enabling students to validate theoretical models against measured results.',
    highlights: ['Conduction, convection & radiation modules', 'Vapour-compression refrigeration loop', 'Real-time temperature mapping (16-point)', 'Linear & radial conduction rigs included'],
    specs: [
      { key: 'Power', value: '230 V / 50 Hz, 2.5 kW max heating load' },
      { key: 'Temperature range', value: 'Ambient to 300 °C (conduction module)' },
      { key: 'Data acquisition', value: '16-channel thermocouple DAQ, USB output' },
      { key: 'Refrigeration', value: 'R134a circuit · COP measurement' },
      { key: 'Experiments', value: '18 standard lab exercises included' },
      { key: 'Footprint', value: '1600 × 800 × 1000 mm (benchtop cart)' },
      { key: 'Standards', value: 'BS EN 563 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  ntm4600: {
    subtitle: 'Open-Channel Flow Laboratory',
    description: 'The NTM-4600 Fluid Mechanics Channel is a recirculating tilting flume for open-channel hydraulics experiments. Students measure flow profiles, weir coefficients, hydraulic jumps, and boundary-layer development using digital instrumentation integrated into the channel frame.',
    highlights: ['Tilting glass-sided recirculating flume', 'Variable-speed pump with flow measurement', 'Pitot tube & pressure tapping instrumentation', 'Weir, sluice gate & Venturi accessories'],
    specs: [
      { key: 'Channel length', value: '2500 mm working section' },
      { key: 'Width × Depth', value: '300 × 300 mm cross-section' },
      { key: 'Flow rate', value: '0–120 L/min (variable-speed pump)' },
      { key: 'Tilt', value: '±5° motorised bed slope' },
      { key: 'Instruments', value: 'Point gauge, Pitot tube, electronic flow meter' },
      { key: 'Footprint', value: '3200 × 600 × 900 mm' },
      { key: 'Standards', value: 'CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  ntm2800: {
    subtitle: 'Structural & Materials Test Frame',
    description: 'The NTM-2800 Materials Testing Frame is a universal mechanical testing apparatus for tension, compression, bending, and shear experiments. A digital load cell with real-time force-displacement graphing supports a full range of solid mechanics and materials characterisation exercises.',
    highlights: ['20 kN universal load frame (tension & compression)', 'Digital load cell + displacement transducer', 'Bending, torsion & hardness test rigs', 'Software: live F-δ graph, data export'],
    specs: [
      { key: 'Max. load', value: '20 kN (tension / compression)' },
      { key: 'Crosshead travel', value: '500 mm' },
      { key: 'Load resolution', value: '1 N (digital load cell)' },
      { key: 'Displacement', value: 'LVDT ±150 mm, 0.01 mm resolution' },
      { key: 'Test types', value: 'Tension, compression, 3-point bend, torsion, hardness' },
      { key: 'Footprint', value: '800 × 600 × 1800 mm' },
      { key: 'Standards', value: 'ISO 6892 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  ntr6100: {
    subtitle: 'Photovoltaic Systems Lab',
    description: 'The NTR-6100 Solar PV Lab System provides a complete photovoltaic training platform covering panel characteristics, MPPT algorithms, grid-tie and off-grid inverters, and battery storage management. An indoor solar simulator enables consistent year-round experiments.',
    highlights: ['Calibrated indoor solar simulator (1000 W/m²)', 'MPPT controller with live I-V curve tracer', 'Grid-tie & off-grid inverter comparison', 'Lithium-ion battery storage module'],
    specs: [
      { key: 'PV array', value: '400 Wp (4 × 100 W monocrystalline panels)' },
      { key: 'Simulator', value: '1000 W/m² halogen, AM1.5 spectrum approx.' },
      { key: 'Inverter', value: 'Grid-tie 400 W + off-grid 600 W (switchable)' },
      { key: 'Storage', value: '48 V / 20 Ah lithium-ion battery module' },
      { key: 'Monitoring', value: 'Web-based SCADA — power, voltage, current, SOC' },
      { key: 'Footprint', value: '2000 × 900 × 1800 mm' },
      { key: 'Standards', value: 'IEC 61730 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  ntr6400: {
    subtitle: 'Wind Turbine Training System',
    description: 'The NTR-6400 Wind Energy Trainer uses a controlled wind tunnel and scale turbine to teach blade aerodynamics, generator principles, pitch and yaw control, and power curve measurement. Students can investigate the effect of blade geometry and wind speed on electrical output.',
    highlights: ['Variable-speed wind tunnel (0–12 m/s)', '3-blade HAWT with pitch adjustment', 'Permanent-magnet generator with load bank', 'Power curve measurement software'],
    specs: [
      { key: 'Wind speed', value: '0–12 m/s (variable-speed tunnel fan)' },
      { key: 'Turbine type', value: '3-blade HAWT, 600 mm rotor diameter' },
      { key: 'Generator', value: 'Permanent-magnet, 3-phase AC, 50 W rated' },
      { key: 'Pitch control', value: 'Manual ± 30° blade pitch adjustment' },
      { key: 'Instrumentation', value: 'Anemometer, tachometer, power analyser' },
      { key: 'Footprint', value: '1800 × 800 × 1600 mm' },
      { key: 'Standards', value: 'IEC 61400 principles · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
  ntr8000: {
    subtitle: 'Hybrid Microgrid Platform',
    description: 'The NTR-8000 Smart Microgrid Platform integrates solar PV, wind, diesel generator emulation, battery storage, and smart-grid controls into a single didactic system. Students design and test islanded and grid-connected microgrid topologies with real energy management software.',
    highlights: ['Solar + wind + storage + genset emulation', 'EMS with load-shedding & peak-shaving algorithms', 'Smart meter with Modbus/IEC 61850 interface', 'Grid-forming & grid-following inverter modes'],
    specs: [
      { key: 'Sources', value: 'PV 400 Wp · Wind 200 W · Diesel emulator 500 W' },
      { key: 'Storage', value: '48 V / 40 Ah lithium-ion + BMS' },
      { key: 'Grid interface', value: 'Bidirectional grid-tie inverter 1 kW' },
      { key: 'EMS', value: 'Web SCADA — real-time dispatch, load control' },
      { key: 'Communications', value: 'Modbus TCP · IEC 61850 · MQTT' },
      { key: 'Footprint', value: '2400 × 900 × 1900 mm' },
      { key: 'Standards', value: 'IEC 61850 · IEC 62109 · CE · ISO 9001' },
      { key: 'Warranty', value: '3 years · on-site commissioning included' },
    ],
  },
}

export const specRows = [
  { key: 'Power supply', value: '3 × 400 V / 50 Hz, RCD-protected' },
  { key: 'Machine rating', value: '0.3 kW modular machine set' },
  { key: 'Modules', value: '14 interchangeable experiment modules' },
  { key: 'Instrumentation', value: 'Digital metering + USB data logging' },
  { key: 'Safety', value: 'Overload & residual-current protection (IEC 61010)' },
  { key: 'Footprint', value: '1600 × 800 × 1800 mm' },
  { key: 'Warranty', value: '3 years · on-site commissioning included' },
]

export const academicPartners = [
  { abbr: 'MUT', name: 'Mahanakorn University of Technology' },
  { abbr: 'API', name: 'Asian Pacific Institute' },
  { abbr: 'NEU', name: 'North-Eastern University' },
  { abbr: 'RTU', name: 'Rajamangala Technical University' },
  { abbr: 'KMI', name: 'King Mongkut Institute' },
  { abbr: 'SIT', name: 'Sirindhorn International Technology' },
]

export const techPartners = ['CONTROLS', 'SENSORICA', 'VOLTEX', 'MECANOVA', 'HELIOGRID', 'AUTOMÆ']

export const blogPosts = [
  { tag: 'Application note', time: '8 min', category: 'Electrical', title: 'Teaching three-phase power with the NTX-3100 trainer' },
  { tag: 'Tutorial', time: '12 min', category: 'Automation', title: 'Your first PLC ladder program: a step-by-step lab' },
  { tag: 'Case study', time: '6 min', category: 'Renewable', title: 'Building a renewable-energy lab on a faculty budget' },
  { tag: 'Whitepaper', time: '15 min', category: 'Curriculum', title: 'Aligning lab equipment to accreditation outcomes' },
]

export const whyUs = [
  { num: '01', title: 'International standards', body: 'All systems designed and tested to IEC, CE, and ISO 9001 requirements.' },
  { num: '02', title: 'Turnkey installation', body: 'On-site delivery, commissioning, and staff verification included.' },
  { num: '03', title: 'Faculty training', body: 'Full manuals, lab guides, and curriculum alignment support.' },
  { num: '04', title: 'Local support', body: 'Spare parts, calibration, and field service across the ASEAN region.' },
]

export const catLabels: Record<string, string> = {
  ee: 'Electrical & Electronics',
  auto: 'Automation & Robotics',
  mech: 'Mechanical & Thermofluids',
  ren: 'Renewable Energy',
}

export const catColors: Record<string, string> = {
  ee: '#1B3FA0',
  auto: '#0C2155',
  mech: '#163A8C',
  ren: '#4A90E2',
}
