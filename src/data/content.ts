import { ServiceItem, TeamMember, GalleryItem, EventItem, EquipmentItem } from '../types';

export const COMPANY_INFO = {
  name: 'SEJO EVENTS',
  tagline: 'Creating Experiences. Celebrating Talent. Making Memories.',
  shortStatement:
    'We bring people together through exceptional entertainment, professional event management, creative productions and unforgettable experiences.',
  phone: '0181199528',
  phoneDisplay: '+254 181 199 528 / 0181199528',
  whatsappNumber: '254181199528',
  email: 'sejoarts7@gmail.com',
  bookingEmail: 'sejoarts7@gmail.com',
  address: 'Rongo, Migori, Kenya',
  servingAreas: 'Rongo, Migori County, Western Kenya, Nairobi & Countrywide',
  hours: 'Monday – Saturday: 8:00 AM – 7:00 PM (24/7 Live Event Support)',
  whatsappPresetMessage:
    'Hello SEJO EVENTS. I would like to enquire about your event entertainment and management services. Kindly share more information about your packages and availability.',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'planning',
    category: 'planning',
    title: 'Event Management & Planning',
    shortDesc:
      'End-to-end conceptualization, strategic coordination, and flawless execution for events of any magnitude.',
    fullDesc:
      'SEJO EVENTS handles every nuance of event planning with precision and flair. From corporate conferences and brand launches to glamorous weddings, graduation ceremonies, and cultural galas, our seasoned coordinators ensure timeline adherence, vendor alignment, guest hospitality, and complete peace of mind.',
    image: '/public/assets/aistudio/1047157350851581531_e2ed7499.jpeg',
    features: [
      'Corporate events & high-level conferences',
      'Weddings and milestone celebrations',
      'Graduation & award ceremonies',
      'School events & educational galas',
      'Cultural festivals & community functions',
      'Private VIP parties & public functions',
    ],
    bulletPoints: [
      'Comprehensive timeline & run-of-show scheduling',
      'Vendor management, catering & venue logistics',
      'VIP protocol, guest ushering & registration systems',
      'Budget optimization and cost management',
    ],
    idealFor: [
      'Corporations & Multinationals',
      'Educational Institutions',
      'Bridal Couples & Families',
      'Public & Community Organizations',
    ],
  },
  {
    id: 'entertainment',
    category: 'entertainment',
    title: 'Entertainment Services',
    shortDesc:
      'Electrifying live performances, charismatic MCs, world-class dancers, and top musical talent.',
    fullDesc:
      'Entertainment is the vibrant soul of SEJO EVENTS. We curate bespoke entertainment lineups tailored to your crowd demographics, including high-energy live bands, contemporary dance troupes, cultural troupes, stand-up comedy, and master-of-ceremonies who engage and inspire audiences from opening to finale.',
    image: '/public/assets/aistudio/New_Generations_Dancers_Ug__african_dance_1cc7e7bb.jpeg',
    features: [
      'Live music performances & acoustic ensembles',
      'Contemporary, urban & afrobeat dance crews',
      'Professional MC and master of ceremonies hosting',
      'Comedy, stand-up and dramatic sketches',
      'Cultural entertainment and folk troupes',
      'Talent showcases and choreographed stage acts',
    ],
    bulletPoints: [
      'Tailored setlists suited to event etiquette',
      'Experienced crowd-engaging presenters',
      'Dynamic choreography & costume styling',
      'Multi-genre musical versatility',
    ],
    idealFor: [
      'Corporate End of Year Parties',
      'Weddings & Reception Galas',
      'Festivals & Concerts',
      'Product Activations',
    ],
  },
  {
    id: 'schools',
    category: 'schools',
    title: 'School Talent Development',
    shortDesc:
      'Nurturing the next generation through structured talent shows, inter-school competitions, drama, and creative arts.',
    fullDesc:
      'Our dedicated School Programmes department collaborates directly with primary schools, high schools, colleges, and educational foundations across Kenya. We organize exhilarating talent exhibitions, drama festivals, music adjudications, and creative workshops that instill confidence and celebrate student brilliance.',
    image: '/public/assets/aistudio/IMG-20260329-WA0007_e1985ca1.jpg',
    features: [
      'Annual school talent shows & exhibitions',
      'Inter-school competitions & arts tournaments',
      'Drama and theatre festival staging',
      'Music, spoken word and dance competitions',
      'Early talent identification & mentorship',
      'Student entertainment & prize-giving celebrations',
    ],
    bulletPoints: [
      'Safe, orderly, student-friendly event governance',
      'Professional adjudication and encouraging critique',
      'Integrated sound and stage for real performance feel',
      'Creative arts development workshops for pupils',
    ],
    idealFor: [
      'Primary & Secondary Schools',
      'Universities & Colleges',
      'Education Boards & Sponsors',
      'Youth Empowerment Initiatives',
    ],
  },
  {
    id: 'production',
    category: 'production',
    title: 'Event Production & Technical Services',
    shortDesc:
      'State-of-the-art concert sound systems, atmospheric intelligent lighting, LED screens, and stage engineering.',
    fullDesc:
      'Technical excellence separates an ordinary gathering from an awe-inspiring spectacle. SEJO EVENTS provides tour-grade audio reinforcement, digital mixing consoles, stage trussing, computerized intelligent beams, high-definition LED video walls, and professional live multi-camera coverage.',
    image: '/src/assets/images/tech_sound_lighting_1794136432928.jpg',
    features: [
      'Professional line array sound systems',
      'Stage construction, podiums and modular decking',
      'Intelligent stage lighting, washes & effect lasers',
      'Indoor & outdoor LED screens and visual walls',
      'High-clarity public address (PA) systems',
      'Photography, videography and multi-cam live streaming',
    ],
    bulletPoints: [
      'Acoustic modeling and crystal-clear speech intelligibility',
      'Safety-certified structural truss rigging',
      'Dedicated on-site sound engineers & lighting techs',
      'Silent diesel power generator backups',
    ],
    idealFor: [
      'Concerts & Arena Shows',
      'High-Capacity Conferences',
      'Outdoor Sports & Rallies',
      'Church & Crusade Events',
    ],
  },
  {
    id: 'theatre',
    category: 'theatre',
    title: 'Theatre & Creative Productions',
    shortDesc:
      'Compelling theatrical plays, dramatic storytelling, cast coordination, and full-scale stage management.',
    fullDesc:
      'We breathe life into original narratives and celebrated stage plays. With expert theatrical directors, script consultants, set builders, costume designers, and soundscape artists, SEJO EVENTS orchestrates theatrical productions that captivate, educate, and provoke thought.',
    image: '/public/assets/aistudio/1769327378944_bb47b57c.jpg',
    features: [
      'Full-length stage plays and theatrical drama',
      'Commissioned corporate & social advocacy skits',
      'Cast, crew, and technical stage management',
      'Creative storytelling and script development',
      'Set design, period props and costume styling',
      'Theatre performance tours and festival entries',
    ],
    bulletPoints: [
      'Immersive stage blocking and character direction',
      'Custom acoustic effects and atmospheric lighting cues',
      'Community and social impact drama campaigns',
      'Professional actor auditioning & rehearsals',
    ],
    idealFor: [
      'Cultural Centers & Theatres',
      'NGO Awareness & Advocacy Campaigns',
      'Schools & Drama Clubs',
      'Brand Storytelling Launches',
    ],
  },
  {
    id: 'equipment',
    category: 'equipment',
    title: 'Equipment & Production Hire Solutions',
    shortDesc:
      'Premium event equipment rentals with reliable delivery, professional setup, and dedicated technical support.',
    fullDesc:
      'Need reliable equipment for your upcoming function? SEJO EVENTS offers competitive rental packages for sound gear, wireless microphones, LED screens, atmospheric lighting, generators, and stage platforms. Every rental includes test verification and optional certified operating technicians.',
    image: '/src/assets/images/hero_event_stage_1794136433211.jpg',
    features: [
      'PA systems & line array speaker stacks',
      'UHF wireless lapel and handheld microphones',
      'Moving heads, par cans, followspots and smoke hazers',
      'Pitch-matched P2.6 / P3.9 LED screen panels',
      'Heavy-duty aluminum box trusses & stage decks',
      'Live stream broadcasting switchers & HD cameras',
    ],
    bulletPoints: [
      'Flexible daily, weekend and multi-day rates',
      'Prompt on-site delivery and professional teardown',
      'Standby technician support to eliminate downtime',
      'Dry hire and full-service production packages',
    ],
    idealFor: [
      'Event Planners & Wedding Coordinators',
      'Churches & Community Venues',
      'Corporate Communications Teams',
      'School Administrators',
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'agumbi-joseph',
    name: 'Agumbi Joseph',
    role: 'Producer & Executive Lead',
    bio: 'Guiding the overarching vision, artistic excellence, and strategic production of SEJO EVENTS. Agumbi ensures every project meets high creative and operational benchmarks while championing talent empowerment across Kenya.',
    specialties: ['Executive Production', 'Strategic Event Direction', 'Talent Curation', 'Creative Vision'],
    contact: 'Producer Office, SEJO EVENTS',
  },
  {
    id: 'cyprian-kyalloh',
    name: 'Cyprian Kyalloh',
    role: 'Production & Event Manager',
    bio: 'Overseeing ground logistics, timeline governance, and multidisciplinary crew management. Cyprian coordinates complex event run-of-shows to guarantee seamless flow, guest comfort, and meticulous execution.',
    specialties: ['Event Operations', 'Logistics Management', 'Vendor Coordination', 'Stage Timelines'],
    contact: 'Operations Dept, SEJO EVENTS',
  },
  {
    id: 'cosmas-mutungi',
    name: 'Cosmas Mutungi',
    role: 'Technical & Stage Director',
    bio: 'Leading technical sound engineering, stage architecture, intelligent lighting, and visual setups. Cosmas brings a rigorous engineering discipline to sound clarity, electrical safety, and audiovisual impact.',
    specialties: ['Audio Engineering', 'Rigging & Staging', 'Lighting Design', 'AV Displays & Livestream'],
    contact: 'Technical Dept, SEJO EVENTS',
  },
  {
    id: 'sophie-ouma',
    name: 'Sophie Ouma',
    role: 'Creative Director',
    bio: 'Crafting the artistic soul of our live productions, themes, and theatrical works. Sophie works closely with choreographers, writers, and performers to transform thematic concepts into unforgettable stage moments.',
    specialties: ['Theatrical Direction', 'Script & Theme Development', 'Stage Aesthetics', 'Choreography'],
    contact: 'Creative Studio, SEJO EVENTS',
  },
  {
    id: 'charity-sophie',
    name: 'Charity Odhiambo & Sophie Ouma',
    role: 'Marketing & Public Relations Management',
    bio: 'Leading brand positioning, audience outreach, institutional partnerships, and client relations. Charity and Sophie ensure clear client communication, transparent proposals, and vibrant community engagement.',
    specialties: ['Public Relations', 'Client Engagement', 'School & Corporate Partnerships', 'Brand Marketing'],
    contact: 'PR & Communications, SEJO EVENTS',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Luxury Reception & Bridal Grandeur',
    category: 'Weddings and Celebrations',
    image: '/public/assets/aistudio/1047157350851581531_e2ed7499.jpeg',
    caption: 'Full wedding coordination, bridal ushering, ambient lighting, and bespoke entertainment.',
    location: 'Nairobi, Kenya',
    isGenuinePhoto: true,
  },
  {
    id: 'gal-2',
    title: 'Youth Performing Arts & Dance Crew Showcase',
    category: 'Music and Dance',
    image: '/public/assets/aistudio/New_Generations_Dancers_Ug__african_dance_1cc7e7bb.jpeg',
    caption: 'High-energy choreographed dance performance electrifying the stage at an arts festival.',
    location: 'Stage Live, Kenya',
    isGenuinePhoto: true,
  },
  {
    id: 'gal-3',
    title: 'Ceremonial Vows & Ring Exchange',
    category: 'Weddings and Celebrations',
    image: '/public/assets/aistudio/wedding_Idea___09625e53.jpeg',
    caption: 'Intimate moments captured with delicate decor, curated music, and seamless timing.',
    location: 'Kenya',
    isGenuinePhoto: true,
  },
  {
    id: 'gal-4',
    title: 'Traditional Cultural Festival Troupes',
    category: 'Cultural Performances',
    image: '/public/assets/aistudio/Celebrations_by_John_Downey___500px_4f817159.jpeg',
    caption: 'Celebrating heritage through authentic African rhythms, vibrant traditional attire, and folk dance.',
    location: 'Western Kenya',
    isGenuinePhoto: true,
  },
  {
    id: 'gal-5',
    title: 'Theatrical Stage Drama & Character Acting',
    category: 'Stage Productions',
    image: '/public/assets/aistudio/1769327378944_bb47b57c.jpg',
    caption: 'Dramatic character portrayal in an educational theatre production on social advocacy.',
    location: 'Regional Theatre, Kenya',
    isGenuinePhoto: true,
  },
  {
    id: 'gal-6',
    title: 'Secondary School Setbook Performance',
    category: 'School Events',
    image: '/public/assets/aistudio/IMG-20260329-WA0007_e1985ca1.jpg',
    caption: 'Live curriculum setbook dramatization and character presentation staged for high school students.',
    location: 'High Schools Tour, Kenya',
    isGenuinePhoto: true,
  },
  {
    id: 'gal-7',
    title: 'Educational Youth Auditorium Assembly',
    category: 'School Events',
    image: '/public/assets/aistudio/IMG-20260318-WA0047_c940c265.jpg',
    caption: 'Packed student gathering participating in creative arts development and entertainment.',
    location: 'Kenya',
    isGenuinePhoto: true,
  },
  {
    id: 'gal-8',
    title: 'Concert Stage Engineering & Truss Lighting',
    category: 'Sound and Lighting',
    image: '/src/assets/images/hero_event_stage_1794136433211.jpg',
    caption: 'Grand stage construction with curved truss arches, beam fixtures, and full-spectrum sound.',
    location: 'Main Arena Stage',
    isGenuinePhoto: false,
  },
  {
    id: 'gal-9',
    title: 'Live Audio Console & Line Array Rig',
    category: 'Event Setups',
    image: '/src/assets/images/tech_sound_lighting_1794136432928.jpg',
    caption: 'Tour-level digital sound desk controlling dual line-array hangs and LED screen backdrop.',
    location: 'Auditorium Venue',
    isGenuinePhoto: false,
  },
];

export const FEATURED_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'High School Setbook Performance Tour',
    category: 'Setbook Performance & Drama',
    date: 'Curriculum Arts Programme',
    location: 'High Schools Across Kenya',
    attendance: '850+ Students & Faculty',
    image: '/public/assets/aistudio/IMG-20260329-WA0007_e1985ca1.jpg',
    description:
      'Professional stage dramatization of national curriculum English literature and Kiswahili Fasihi setbooks, bringing key literary texts to life with seasoned theatre actors, character analysis, and interactive student Q&A sessions.',
    highlights: ['KCSE Literature & Fasihi Live Enactments', 'Interactive Student & Cast Question-and-Answer', 'Tour-Grade Stage Sets, Costumes & Sound'],
    isDemonstration: false,
  },
  {
    id: 'ev-2',
    title: 'Grand Royal Wedding Celebration',
    category: 'Weddings & Celebrations',
    date: 'Signature Private Gala',
    location: 'Nairobi, Kenya',
    attendance: '450 Guests',
    image: '/public/assets/aistudio/1047157350851581531_e2ed7499.jpeg',
    description:
      'Full-spectrum planning and reception entertainment including bridal party coordination, live band transitions, ambient uplighting, and charismatic MC hosting.',
    highlights: ['Live Acoustic & Band Set', 'Intelligent Mood Lighting', 'Flawless Protocol Coordination'],
    isDemonstration: false,
  },
  {
    id: 'ev-3',
    title: 'Kenya Heritage & Cultural Dance Festival',
    category: 'Cultural Entertainment',
    date: 'Cultural Celebration',
    location: 'Western & Rift Valley Tour',
    attendance: '1,200+ Attendees',
    image: '/public/assets/aistudio/Celebrations_by_John_Downey___500px_4f817159.jpeg',
    description:
      'A celebration of diverse Kenyan folklore, showcasing traditional instruments, high-energy costumed dances, and intergenerational storytelling.',
    highlights: ['Authentic Costumes', 'Live Traditional Percussion', 'Community Engagement'],
    isDemonstration: false,
  },
  {
    id: 'ev-4',
    title: 'Inter-Collegiate Drama & Theatre Gala',
    category: 'Theatre & Stage Production',
    date: 'Curated Production',
    location: 'Auditorium Hall, Kenya',
    attendance: '600 Attendees',
    image: '/public/assets/aistudio/1769327378944_bb47b57c.jpg',
    description:
      'A compelling theatrical performance highlighting youth advocacy, featuring full stage sets, period costumes, and coordinated soundscapes.',
    highlights: ['Original Script Staging', 'Dynamic Lighting Cues', 'Cast Mentorship'],
    isDemonstration: false,
  },
  {
    id: 'ev-5',
    title: 'Corporate Leadership Forum & Awards Gala',
    category: 'Corporate Events',
    date: 'Executive Summit (Demonstration)',
    location: 'Nairobi Convention Centre',
    attendance: '500 Delegates',
    image: '/src/assets/images/tech_sound_lighting_1794136432928.jpg',
    description:
      'Illustrative corporate production blueprint demonstrating dual LED backdrop walls, whisper-quiet wireless lapels, keynote timing, and awards fanfare.',
    highlights: ['LED Video Wall Presentation', 'Keynote Sound Engineering', 'Award Fanfare Lighting'],
    isDemonstration: true,
  },
];

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  {
    id: 'eq-1',
    name: 'Dual Line Array Speaker System (JBL / RCF Spec)',
    category: 'Sound',
    description:
      'High-output line array speaker clusters with dedicated subwoofers for crystal-clear throw across 300 to 2,500 people.',
    specs: 'Active 2-way tops + 18" subwoofers, flyware rigging, digital DSP management',
    dailyRateEstimate: 'From KES 25,000 / day',
  },
  {
    id: 'eq-2',
    name: '32-Channel Digital Mixing Console & Stage Box',
    category: 'Sound',
    description:
      'Multi-track live audio console with digital snake for complex live bands, choir setups, and corporate multi-mic panels.',
    specs: 'Digital motorised faders, iPad remote mixing, zero-latency DSP effects',
    dailyRateEstimate: 'From KES 15,000 / day',
  },
  {
    id: 'eq-3',
    name: 'UHF Wireless Diversity Microphones (Handheld & Lapel)',
    category: 'Sound',
    description:
      'Professional frequency-agile wireless systems ensuring zero dropouts for keynotes, MCs, pastors, and solo vocalists.',
    specs: 'Up to 100m stable range, cardioid capsules, battery telemetry monitors',
    dailyRateEstimate: 'From KES 3,500 / pair',
  },
  {
    id: 'eq-4',
    name: 'Intelligent Beam Moving Heads & Wash Package',
    category: 'Lighting',
    description:
      'DMX-controlled 230W/380W beam moving heads, RGBW LED stage washes, and atmospheric fog haze generators.',
    specs: 'Full DMX desk control, gobo patterns, prism effects, sound-active sync',
    dailyRateEstimate: 'From KES 18,000 / package',
  },
  {
    id: 'eq-5',
    name: 'Indoor / Outdoor HD LED Screen Wall (P3.9 / P2.6)',
    category: 'Visuals',
    description:
      'Modular high-brightness LED video display wall for presentations, live camera feeds, sponsor branding, and stage backdrops.',
    specs: 'Modular tiles (e.g. 3m x 2m or 4m x 3m), Novastar video processor, HDMI/SDI input',
    dailyRateEstimate: 'From KES 45,000 / setup',
  },
  {
    id: 'eq-6',
    name: 'Modular Aluminum Stage Decks & Overhead Box Truss',
    category: 'Staging',
    description:
      'Safety-certified interlocking 2m x 1m stage platforms with non-slip surfaces, skirting, staircases, and heavy-duty goalpost trusses.',
    specs: 'Load capacity 750kg/sqm, adjustable height 40cm–100cm, aluminum box truss',
    dailyRateEstimate: 'From KES 20,000 / setup',
  },
  {
    id: 'eq-7',
    name: 'Silent Diesel Power Generator Backup',
    category: 'Power & Support',
    description:
      'Soundproofed mobile diesel generator guaranteeing uninterrupted power supply for sound, lighting, and screens.',
    specs: '30kVA – 60kVA silenced canopy, automatic voltage regulator (AVR), operator included',
    dailyRateEstimate: 'From KES 22,000 / day',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Professional Event Management',
    desc: 'Structured timelines, thorough rehearsal schedules, and dedicated stage managers so your event runs like clockwork.',
  },
  {
    title: 'Creative Entertainment Solutions',
    desc: 'Bespoke live acts, dynamic dancers, engaging MCs, and cultural performances uniquely tailored to your audience.',
  },
  {
    title: 'Experienced Talent & Production Teams',
    desc: 'Led by seasoned producers, theatrical directors, and certified audio-visual engineers with deep industry expertise.',
  },
  {
    title: 'Reliable Technical Support',
    desc: 'Tour-grade sound systems, intelligent lighting, and standby power generators ensuring zero technical hiccups.',
  },
  {
    title: 'Attention to Detail',
    desc: 'From acoustic fine-tuning and lighting cues to guest protocol, we sweat every nuance so you can relax.',
  },
  {
    title: 'Customer Satisfaction',
    desc: 'Transparent pricing, responsive WhatsApp consultations, and client-first commitment across Kenya.',
  },
  {
    title: 'Affordable & Flexible Packages',
    desc: 'Customizable tiers designed to fit school budgets, family celebrations, and large corporate productions alike.',
  },
];

export const FAQS = [
  {
    q: 'How far in advance should we book SEJO EVENTS?',
    a: 'For weddings, major corporate summits, and annual school festivals, we recommend reserving your date 3 to 8 weeks in advance. However, we also accommodate short-notice bookings depending on technical and crew availability.',
  },
  {
    q: 'Does SEJO EVENTS provide services outside Rongo and Migori?',
    a: 'Yes! Headquartered in Rongo, Migori County, we operate nationwide across Kenya, with extensive experience in Migori, Kisumu, Nairobi, Nakuru, Eldoret, Western Kenya, and the Coast region.',
  },
  {
    q: 'How does the booking and quotation process work?',
    a: 'Simply fill out our online booking request form or send us a WhatsApp message to 0181199528. We provide an initial transparent estimate, conduct an optional site visit, and finalize a tailored service agreement.',
  },
  {
    q: 'Can we hire equipment only, or do you require full production services?',
    a: 'We offer both! You can hire specific sound, lighting, or staging equipment with an operator, or engage SEJO EVENTS for full-service event planning, entertainment, and production management.',
  },
  {
    q: 'What makes your School Programmes unique?',
    a: 'Our school talent shows and drama initiatives focus on holistic youth development. We provide real stage setups with sound and lighting so students experience performing on a professional platform, paired with constructive adjudication.',
  },
];
