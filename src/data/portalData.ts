export interface BusinessEntity {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  subCategory?: string;
  domain: string;
  url: string;
  icon: string;
  image: string;
  imageAlt: string;
  location: string;
  phone?: string;
  description: string;
  programs?: { name: string; duration: string; eligibility: string }[];
  facilities?: string[];
  pillars?: { title: string; desc: string; icon: string }[];
  badge: string;
  compliance?: string;
  status: string;
  jurisdiction: string;
}

export const PORTFOLIO_ENTITIES: BusinessEntity[] = [
  {
    id: 'nursing-colleges',
    name: 'GPR LacSo Nursing Colleges',
    shortName: 'GPR LacSo Nursing',
    tagline: 'Healthcare Education & Clinical Training',
    category: 'Healthcare Education',
    subCategory: 'INC-Aligned Curriculum',
    domain: 'lacsonursing.com',
    url: 'https://www.lacsonursing.com',
    icon: 'medical_services',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDji2biQmkfU3BvMTt0tdjzXLV2O4CdKje2O520dfKdp821gtkacNHrbn_AM7TmOfEx59HIDCLoInAkT0bRQKLBd4iRBN98jM5VpHOYd5RKGI8kgdR7TUWn1qn2NEqHYPURm0096NYT5iLaLTzQmLnfX4NRu-wALGwuSQtzZkhzGf1skmHWRqwOo8LQ0UbaGi4bbBoBqBWtMkXZ92isGsylo_CsqIR8zveu8p5EyQf2CZA9mW0Uxb0X',
    imageAlt: 'GPR LacSo Nursing Colleges campus building at Sri Vishnu Complex, Kharmanghat, Hyderabad',
    location: 'GPR Group, 4th Floor, Sri Vishnu Complex, opp. Colosseum Mall, Saroornagar, Janki Enclave, Bhagya Nagar, Kharmanghat, Hyderabad, Telangana 500035',
    phone: '+91 8297975050 / +91 9492083999',
    description: 'Nursing education, including B.Sc. Nursing and GNM.',
    programs: [
      { name: 'B.Sc. Nursing', duration: '4-Year Undergraduate Degree', eligibility: 'BiPC / PCB' },
      { name: 'GNM (General Nursing & Midwifery)', duration: '3-Year Professional Diploma', eligibility: 'MPC, CEC, BiPC, MEC Streams' }
    ],
    facilities: [
      'Pre-clinical lab',
      'First Aid demo',
      'Fundamental nursing',
      'Midwifery & Child',
      'Anatomy displays',
      'Hostel housing'
    ],
    badge: 'Headquarters',
    status: 'Verified Official Portal',
    jurisdiction: 'Kharmanghat, Hyderabad'
  },
  {
    id: 'hotel-management',
    name: 'LacSo Institute of Hotel Management and Catering Technology',
    shortName: 'LacSo IHM',
    tagline: 'Hospitality, Catering & Tourism',
    category: 'Hospitality Education',
    subCategory: 'Global Standards',
    domain: 'lacsoihm.com',
    url: 'https://www.lacsoihm.com',
    icon: 'restaurant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzc8dGkosVp0F9pdV5finb-EHjbRT5p_TntAMdQXRS0khRkidhvhiI5n8JFoe2cvJ4jBHbZlIRcTC9tpLCQPm0-xSEHr5IyCaOy_OfKcx2sMtTDknRswX5fn8hK39Vk2y_efDWWkn3rt291Qm9lFtJJIiHiKW0bA0WMTRbEYmyhWi_TdFcfsfpPgLmwtb4aicA6XXj0AeQxGNRSpH0JTWIiuGREiJpVmFfIdEjOVI',
    imageAlt: 'Professional culinary arts students and master chef in training kitchen, LacSo Institute of Hotel Management',
    location: 'Sri Vishnu Complex, Karmanghat, Sagar Road, Hyderabad',
    description: 'Hospitality education and training.',
    pillars: [
      { title: 'Culinary Arts & Production', desc: 'Advanced culinary craftsmanship, butchery, international gastronomy, and banquet management suites.', icon: 'restaurant' },
      { title: 'F&B Service Operations', desc: 'Comprehensive silver service, sommelier training, mixology, and high-volume dining coordination.', icon: 'room_service' },
      { title: 'Front Office Operations', desc: 'Property Management Systems (PMS), luxury concierge protocols, and guest relations mastery.', icon: 'concierge' },
      { title: 'Industry Internships', desc: 'Direct placement channels into 5-star hotel conglomerates and cruise lines worldwide.', icon: 'badge' }
    ],
    badge: 'Verified Official Portal',
    status: 'Verified Official Portal',
    jurisdiction: 'Hyderabad, Telangana'
  },
  {
    id: 'go-grow',
    name: 'Go Grow International',
    shortName: 'Go Grow International',
    tagline: 'Global Business Services & Cross-Border Advisory',
    category: 'Overseas Careers',
    subCategory: 'International Trade',
    domain: 'gogrowinternational.com',
    url: 'https://www.gogrowinternational.com',
    icon: 'public',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1V8tCGV20m8yG-IrUdKbA2_THmwgIAmWNK3_XWHVL_K7VnTfnBmdnVywFb_JIv8NRZG1l8vGjHSYPVjY3OqgSbzDOTyKKHzgq5MYDrzT5e7Lsrz2esE0UyGqlJa0QbhmQtUtwWwiqgWNfrSSOhmn0pQR5dRKR_PyQgcAHAIAapZqu0wnVlebEYcI8OfDF_bGq3VmutXdDNl806MsXPv58W4C-IafeOvSv12etOyoGGl',
    imageAlt: 'Student holding study visa and passport in airport departure terminal, Go Grow International',
    location: 'Corporate Secretariat, Hyderabad & Transnational Corridors',
    description: 'International career and overseas employment services.',
    pillars: [
      { title: 'Cross-Border Expansion', desc: 'Foreign direct market entry and jurisdictional compliance.', icon: 'public' },
      { title: 'Strategic Partnerships', desc: 'Syndicated joint ventures and institutional co-investments.', icon: 'handshake' },
      { title: 'Trade Networks', desc: 'Supply chain acceleration and global trade corridors.', icon: 'hub' }
    ],
    badge: 'Verified Enterprise Portal',
    status: 'Verified Enterprise Portal',
    jurisdiction: 'Transnational Corridors'
  },
  {
    id: 'gpr-infra',
    name: 'GPR Infra',
    shortName: 'GPR Infra',
    tagline: 'Infrastructure, Civil Construction & Real Estate',
    category: 'Real Estate Development',
    subCategory: 'Hyderabad Metro Focus',
    domain: 'gprhyd.com',
    url: 'https://www.gprhyd.com',
    icon: 'apartment',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkHLRxlSuPWaxKS4209TTTlS4JuG0IQY90wX2OaMDVOOslXoJqH-rqEiGwHaMYdrSHRdwB6rbdqalp1uNU3Y-1z79gsTFrizJOfbt--rPPi3Rt1_G3ojn-jYdJmILT6QvM6liwfLQnS252dO4QdGbDWxHD0emeWbrqC1PoyP7bLXZeVyCVyS5yFKH81CB6LLs6pUcf5LV2L0fRcDDudvDpx4nBsuIxRU_7ou3s1ic',
    imageAlt: 'Modern premium commercial corporate real estate development and high-rise glass building, GPR Infra',
    location: 'Hyderabad Regional Belt, Telangana',
    description: 'Real estate and plotted development.',
    pillars: [
      { title: 'Property Development', desc: 'Commercial complexes and residential townships.', icon: 'apartment' },
      { title: 'Civil Contracting', desc: 'Heavy structural execution and site engineering.', icon: 'engineering' },
      { title: 'Urban Frameworks', desc: 'Civic utility alignments and roadway infrastructure.', icon: 'location_city' }
    ],
    badge: 'Focus Territory: Hyderabad',
    status: 'Verified Enterprise Portal',
    jurisdiction: 'Hyderabad, Telangana'
  },
  {
    id: 'growth-invest',
    name: 'GPR Growth Invest',
    shortName: 'GPR Growth Invest',
    tagline: 'Strategic Capital, Growth Advisory & Asset Investments',
    category: 'Financial Services',
    subCategory: 'Capital Management',
    domain: 'gprgi.com',
    url: 'https://www.gprgi.com',
    icon: 'trending_up',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8bXwweojaRBe-nSwhvYnAaaNsL3LNV4MAJ9A_hlTRhFWLoyJfW5RnoIz8qhF4avOke6EEGHv9sYD3KTkIC_FMOCBbeObnHYLvLG0bBZOshDdbuKcTtWbw_AR2e2l5vy2WBIqsIjVxhkkxTshGSzOyjgrlN3_hSDMWS5ML05KB-egb_XruBBqXeDYJAGJzITJMiOOHdssl5zPY4fVpDHMchXSJ1SuanY0eDuciJxM',
    imageAlt: 'Corporate global wealth management and financial investment boardroom consultation, GPR Growth Invest',
    location: 'Corporate Headquarters, Hyderabad',
    description: 'Mutual fund distribution and financial services.',
    pillars: [
      { title: 'Direct Enterprise Equity', desc: 'Structured growth equity injections into mature regional operating enterprises.', icon: 'account_balance' },
      { title: 'Long-Term Value Preservation', desc: 'Asset-backed allocation with an emphasis on sustained yield and generational equity.', icon: 'trending_up' }
    ],
    compliance: 'Compliance Note: Details marked for review per group compliance; consult entity directly.',
    badge: 'Direct Advisory',
    status: 'Verified Enterprise Portal',
    jurisdiction: 'Corporate Headquarters'
  }
];

export const CHAIRMAN_DATA = {
  name: 'G. Prabhakar Rao',
  title: 'Chairman & Managing Director, GPR Group',
  shortTitle: 'Chairman, GPR Group',
  portraitImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY5XgR7eUpIG0EmHzutnP7-5t-miYZzyxHmGgZkdj1MbMsALgoQ9xDSskBGJzZKjpD2fIV6lHMIJVHlNGGmI_c5C6GyaazqBMAtrYop2txoc17BnaqVAu79KgU-suDwHEsrDfJb9HHbL-LSZC_t9BLaX9aOTSI97XM7ZP56ngcobb9B-ACMWBtRFshmQ_GMb546VcIMvaNMC1LDwapofSGVQSgPeKYJhZhvdXOwUe4xtoj50HyJMEL',
  secondaryPortrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX7MGWLsEBmtp4PXJs0XNwRpuNcFaZuGkC3a38gpia2OzAP6X7PtWvAj_Dfr0eOTwhKoRD832s91VuaYYPEnoQPGoVDLqMexx-aTIeUDCpHUJb32eiLv0MQ6Qn8DtxoNBV3dWj00FZYjseWTR9_sn5TvqlJOjjEYfjPZvYFjt-ST88JgiqCZ0vJFjAThXFlwjGlvy4mPG38JXfzGqMr8A82dwUvqVBmGCYvlNpXUqHzASiizSYtfPo',
  experience: '25+',
  sectors: '5',
  credentials: 'M.Tech (Electrical Power Engineering, JNTU Kukatpally), MBA, NISM Series V-A Certified',
  biography: 'G. Prabhakar Rao, Chairman & Managing Director of GPR Group, is a JNTU Kukatpally alumnus with an M.Tech in Electrical Power Engineering, an MBA and NISM Series V-A certification. With more than 25 years of professional experience, he began his career in academia and progressed from Assistant Professor to HOD and Vice Principal before moving into entrepreneurship. He now leads GPR Group’s organizations across education, international career services, real estate and financial services.',
  message: '“At GPR Group, our vision is rooted in building institutions and enterprises that create lasting value for the community. Whether through preparing the next generation of compassionate nurses at GPR LacSo Nursing Colleges, shaping hospitality leaders at LacSo IHM, or executing robust infrastructure projects through GPR Infra, our commitment remains anchored in trust, quality, and human potential.”',
  hyderabadQuote: '“Hyderabad has always been a city of confluence—where centuries of historic resilience harmoniously meet forward-looking enterprise. At GPR Group, our institutions are founded on that very Hyderabadi spirit: compassionate care, uncompromising work ethic, and open doors for every aspiring student and professional.”',
  pillars: [
    {
      number: 'Pillar I',
      title: 'Human Capital Development',
      desc: 'Championing vocational and professional healthcare education. Providing state-of-the-art simulation labs and global hospitality curriculums to prepare skilled talent for worldwide opportunity.',
      entities: 'GPR LacSo Colleges & LacSo IHM',
      icon: 'school'
    },
    {
      number: 'Pillar II',
      title: 'Sustainable Enterprise',
      desc: 'Ensuring sustainable, environmentally conscious, and stringently compliant growth across commercial and civil ventures, from advanced infrastructure projects to fiscal investment portfolios.',
      entities: 'GPR Infra & Growth Invest',
      icon: 'corporate_fare'
    },
    {
      number: 'Pillar III',
      title: 'Community Upliftment',
      desc: 'Fostering job creation, accessible education, and regional development in Telangana through inclusive scholarship programs, regional recruitment drives, and community health initiatives.',
      entities: 'Regional Welfare Initiatives',
      icon: 'volunteer_activism'
    }
  ]
};

export const CORPORATE_INFO = {
  name: 'GPR GROUP',
  subtitle: 'DIVERSE BUSINESSES · ONE GROUP',
  logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVo3_6hU5p6D-2RIJhuGJ9p-zg8xkUlAvErtlo70o8OBTuGilgwCq8WI4rIEXOnCEkos8Hi4KLPAN34PkLnhmyXGfnmfeIh1YLyj62idxFChR7QDfiJ8N2dpckis3IsBrmy6QfxTXL7jV-swQmwyRNgItjCBtne9De09067MvFhGfJ8mJTu4gW2yCl-mGj-7RaaDzZIwZINF6h-iveIQLIeSTwy_4w6qCSH3piHI0epbeY4YnPtHKu',
  address: 'GPR Group, 4th Floor, Sri Vishnu Complex, opp. Colosseum Mall, Saroornagar, Janki Enclave, Bhagya Nagar, Kharmanghat, Hyderabad, Telangana 500035',
  helplineAdmissions: '+91 8297975050',
  helplineGeneral: '+91 9492083999',
  email: 'secretariat@gprgroup.org',
  hours: 'Monday – Saturday: 9:30 AM – 6:00 PM IST (Sunday: Reserved for Scheduled Admissions Visits)',
  images: {
    daytimeFacade: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkIKyWKMgONlvIXouYVyBwSXEk-JjSQBeKhABpRPCTDY1hANp_oGO5Uafr1i3M5JsGk3Sd6NrtGTohEFzD0bu-5RlLLu2pwptHnH-vxutcqmWoiXWhApxoRL50JKoaCIB-ewQ7SgqHaAkwJ5Xr4hSvEk804zkP95JxSDwldjHowatIrPQtma_zWvP2DlpujHv9GWSeDAYOVdTCoErM7oZ11kefJpe_Cydq6uZqdOu6prAskA8vD44c',
    eveningFacade: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKak5j-jdHTbhLfoYN5zcB-sWF6pQewelAnZKj8NWY6MU1eG6IPfD9b5W0SbX0JiHQLjg6fC4L_xV5Gd20b4jsNb2MpoHfMMSMxKr9MPs7DhKl5isSnf11GH48kY2-9ltQZrxa-TrpwDBQ8yhnLH_-VVlOVCglTJAqSyGl61U68u2bOYamYYlkTktUOPoHW2J3H3dhsTpKXxA1vXlE9RuYhVWHCtF9eoRbvM71WrieQJG9jLHgB8QB',
    mapSnapshot: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC816tH_8U3HBUeM9UJicCMt_Ktr_0pABkxVr5rIKQYlAmQ6JINfI7f5a8bNL8IwRtyJT5avsi_nW1y1Jp10Sd9qPkaZ7yjUUdYCH_LkzNyIDwWRG6YDVsChAwXHcY0VtE0MzsGP4Bdz6LL3e_SrNBlB8bFY6uDoEnbUnrRKHeQPRkTzjPPmTGQhFG3wo8E4ddTmdWjxy_VV4X4DeBJ1CKN7W6rZrEdaEzhiK8tUA',
    charminarHeritage: 'https://lh3.googleusercontent.com/aida/AEtjO1W-mOLVfb0fX019cOJj8gnw0iziDXQ8Ue1I3UlKDvyRz5XepuusASpf3zHpoUEAD9MWk-MH-gRBksZWOfou6WKjS-oSegq-miNncoQza-N4kUgHbuEYNkh-u6wvbrr-8ZWYcB1Kxq00nOKrk0FXgGftllN2nw3Z3KtdSBeFtOrOAioQLJhKwhLxnH5bfxROE0DbdWpiKZEKYGlGC9rstmtjxu8yaCakM-X8MW_WQEPp',
    cyberabadSkyline: 'https://lh3.googleusercontent.com/aida/AEtjO1U6Lz1-oR9EOaqPZtjFH_lGPOFOOLfUyrn3crU4eykpY5m-QHKxOGLCVDr8z1c_4jCGtI6cI5B-4U_ZmWzRFTvvYSib-miYq8q6pRnmhnfgjq9q7v-BJRr-xX79PylcKF0hS6Pl3hwaG6LLBTgFntKcoMXrgP-9i_SvsL_FLLuFt7hlI1yn5ss5xN6ThIPDjje4jIN-sA1jYboGqsCJcEJgPAzkt53fNtDTUTuC-i1J'
  }
};
