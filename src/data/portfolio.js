import avatarImg from '../assets/avatar.png'

export const personalInfo = {
  name: 'Zar Ni Thway',
  title: 'Backend Developer',
  tagline: 'Building reliable backend systems — one query at a time',
  email: 'zarnithway.dev@gmail.com',
  location: 'Yangon, Myanmar',
  avatar: avatarImg,
  resumeUrl: '#',
}

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/youuu199', icon: 'github' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' },
]

export const aboutContent = {
  paragraphs: [
    'I\'m a job-seeking backend developer with an NCC Level 4 & 5 Diploma in Computing. I love building database-driven web applications — from e-commerce platforms to POS systems — using PHP, Laravel, and MySQL.',
    'Through my NCC diploma and hands-on projects, I\'ve gained solid foundations in PHP, Laravel, database design, and web development. I\'m looking for an opportunity to contribute, learn, and grow as a developer.',
  ],
  highlights: [
    { label: 'NCC L5 Diploma', value: '2025' },
    { label: 'NCC L4 Diploma', value: '2024' },
    { label: 'Projects Built', value: '3' },
    { label: 'Technologies', value: 'PHP/Laravel/SQL' },
  ],
}

export const skills = [
  { name: 'PHP', level: 85, category: 'backend' },
  { name: 'Laravel', level: 82, category: 'backend' },
  { name: 'MySQL', level: 82, category: 'database' },
  { name: 'Database Design', level: 80, category: 'database' },
  { name: 'JavaScript', level: 72, category: 'language' },
  { name: 'HTML/CSS', level: 78, category: 'frontend' },
  { name: 'Bootstrap', level: 70, category: 'frontend' },
  { name: 'REST APIs', level: 75, category: 'backend' },
  { name: 'Git/GitHub', level: 72, category: 'devops' },
  { name: 'Python', level: 60, category: 'language' },
  { name: 'React', level: 55, category: 'frontend' },
  { name: 'System Analysis', level: 70, category: 'language' },
]

export const skillCategories = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'language', label: 'Languages' },
  { id: 'devops', label: 'DevOps' },
]

export const projects = [
  {
    id: 1,
    title: 'Point of Sale (POS) System',
    description: 'A full-featured POS system built with Laravel featuring product management (create, read, update, delete), admin dashboard, and inventory tracking. Designed for retail businesses with an intuitive interface and robust backend logic.',
    image: 'https://images.unsplash.com/photo-1553729459-afe8f2e2c7a8?w=600&h=400&fit=crop',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'SCSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/youuu199/pos-project',
    featured: true,
  },
  {
    id: 2,
    title: 'Giga Chad Store',
    description: 'A full e-commerce platform built with native PHP featuring product listings, shopping cart with CRUD operations, checkout flow, order history, wishlist management, user authentication, reviews, and an admin panel.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/youuu199/giga_chad',
    featured: true,
  },
  {
    id: 3,
    title: 'Food Fusion',
    description: 'A food ordering and delivery platform with a MySQL database backend. Features menu management, order processing, and a structured relational database design for food-related data.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    tags: ['PHP', 'MySQL', 'Database Design'],
    liveUrl: '#',
    githubUrl: 'https://github.com/youuu199/food_fusion',
    featured: true,
  },
]

export const experience = [
  {
    id: 1,
    role: 'NCC Level 5 Diploma in Computing',
    company: 'NCC Education',
    location: 'Yangon, Myanmar',
    period: '2024 - 2025',
    description: 'Advanced diploma (120 credits, equivalent to 2nd year of a UK bachelor\'s degree) covering 8 modules — from software engineering to cyber security.',
    achievements: [
      'Software Engineering — SDLC, requirements analysis, testing & maintenance',
      'Object-Oriented Programming with Laravel — OOP principles applied in PHP, MVC architecture',
      'Database Systems — advanced SQL, normalization, transaction management',
      'Computer Networks — OSI/TCP-IP models, routing, switching, network security',
      'Web Development & Content Management — server-side scripting, CMS, e-commerce',
      'Management Information Systems — IT for business decision-making, ERP',
      'Business Intelligence — data warehousing, data mining, OLAP, reporting',
      'Cyber Security — cryptography, risk assessment, ethical hacking basics',
    ],
  },
  {
    id: 2,
    role: 'NCC Level 4 Diploma in Computing',
    company: 'NCC Education',
    location: 'Yangon, Myanmar',
    period: '2023 - 2024',
    description: 'Foundation diploma (equivalent to 1st year of a UK bachelor\'s degree) covering 6 core modules to build a solid computing foundation.',
    achievements: [
      'Programming — PHP & Laravel fundamentals, OOP, and MVC architecture',
      'Database Design & Development — ER modeling, normalization, SQL',
      'Web Development — HTML, CSS, JavaScript, and server-side scripting',
      'Computer Networks — data communication, topologies, TCP/IP, OSI model',
      'Computer Systems — architecture, hardware, operating systems, system software',
      'Skills for Computing — problem-solving, communication, teamwork, research methods',
    ],
  },
]

export const testimonials = []

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
