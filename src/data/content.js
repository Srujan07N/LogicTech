// Central content file. Anything in [brackets] is placeholder content —
// swap in real company details before launch.
import {
  Code2, Globe, Smartphone, Cloud, GitBranch, Headset, Palette,
  ShieldCheck, BrainCircuit, Database, Search, Compass, PenTool,
  Hammer, Rocket, Users, Sparkles, Clock, LineChart, Link2,
} from 'lucide-react'

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: 10, suffix: '+', label: 'Projects delivered' },
  { value: 5, suffix: '+', label: 'Technology domains' },
  { value: 20, suffix: '+', label: 'Happy clients' },
  { value: 24, suffix: '/7', label: 'Technical support', isRatio: true },
]

export const services = [
  { icon: Code2, title: 'Software Development', desc: 'Custom applications built around how your business actually operates, not a generic template.' },
  { icon: Globe, title: 'Web Development', desc: 'Fast, accessible websites and web platforms engineered to scale with your traffic and your team.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native-feel iOS and Android apps from a single React Native codebase.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Architecture, migration, and cost optimisation across AWS and Azure.' },
  { icon: GitBranch, title: 'DevOps & Automation', desc: 'CI/CD pipelines and infrastructure-as-code that make releases routine, not risky.' },
  { icon: Headset, title: 'IT Consulting', desc: 'Independent technical guidance to help you choose the right tools before you build.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Interfaces designed around real user behaviour, backed by research and testing.' },
  { icon: ShieldCheck, title: 'Cybersecurity', desc: 'Audits, hardening, and monitoring to keep your systems and your data defensible.' },
  { icon: BrainCircuit, title: 'AI & Machine Learning', desc: 'Practical ML features and automation that solve a specific business problem well.' },
  { icon: Database, title: 'Database Solutions', desc: 'Schema design, performance tuning, and migration for SQL and NoSQL systems.' },
]

export const techCategories = [
  { label: 'Frontend', items: ['React', 'Angular', 'TypeScript'] },
  { label: 'Backend', items: ['Node.js', 'Java', 'Python'] },
  { label: 'Cloud', items: ['AWS', 'Azure'] },
  { label: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'Git'] },
  { label: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { label: 'AI / ML', items: ['TensorFlow'] },
]

export const whyChooseUs = [
  { icon: Users, title: 'Experienced professionals', desc: 'A senior team that has shipped production systems across industries.' },
  { icon: Sparkles, title: 'Innovative solutions', desc: 'We evaluate new tools on merit, not hype, and apply them where they earn their place.' },
  { icon: Headset, title: 'Customer-centric approach', desc: 'You get a direct line to the people building your product, not a ticket queue.' },
  { icon: LineChart, title: 'Scalable technology', desc: 'Systems architected to handle tomorrow\u2019s load, not just today\u2019s demo.' },
  { icon: Clock, title: 'On-time delivery', desc: 'Realistic timelines, tracked openly, with no surprises at the finish line.' },
  { icon: ShieldCheck, title: 'Continuous support', desc: 'We stay involved after launch \u2014 monitoring, fixing, and improving.' },
]

export const process = [
  { num: '01', title: 'Discover', icon: Search, desc: 'We learn your business, users, and constraints before proposing anything.' },
  { num: '02', title: 'Strategize', icon: Compass, desc: 'We map the right technology approach against your budget and timeline.' },
  { num: '03', title: 'Design', icon: PenTool, desc: 'We design intuitive, scalable interfaces grounded in real user flows.' },
  { num: '04', title: 'Develop', icon: Hammer, desc: 'We build, test, and optimise in short, reviewable iterations.' },
  { num: '05', title: 'Deliver', icon: Rocket, desc: 'We deploy, monitor, and keep improving after launch.' },
]

export const projects = [
  { title: '[Project Name]', industry: 'Healthcare', desc: 'Patient scheduling platform replacing a paper-based intake process.', tech: ['React', 'Node.js', 'PostgreSQL'] },
  { title: '[Project Name]', industry: 'Logistics', desc: 'Real-time fleet tracking dashboard for a regional delivery network.', tech: ['React Native', 'AWS', 'MongoDB'] },
  { title: '[Project Name]', industry: 'Retail', desc: 'Headless e-commerce storefront built for sub-second page loads.', tech: ['React', 'Node.js', 'Docker'] },
]

export const caseStudy = {
  problem: '[Client] was losing hours each week to a manual, spreadsheet-driven workflow that didn\u2019t scale past a handful of staff.',
  solution: 'We designed a purpose-built internal tool that mirrored their existing process, so adoption required almost no retraining.',
  technology: 'React, Node.js, PostgreSQL, deployed on AWS with automated CI/CD.',
  implementation: 'Delivered in three two-week sprints, with the client reviewing a working build at the end of each.',
  result: '[Placeholder result \u2014 add real metrics once available, e.g. hours saved per week or error-rate reduction.]',
}

export const testimonials = [
  { name: '[Client Name]', role: '[Designation]', company: '[Company]', quote: 'Placeholder testimonial \u2014 replace with a direct quote from an actual client once available.' },
  { name: '[Client Name]', role: '[Designation]', company: '[Company]', quote: 'Placeholder testimonial \u2014 replace with a direct quote from an actual client once available.' },
  { name: '[Client Name]', role: '[Designation]', company: '[Company]', quote: 'Placeholder testimonial \u2014 replace with a direct quote from an actual client once available.' },
]

export const team = [
  { name: '[Team Member]', role: 'Founder & CEO', desc: 'Placeholder bio \u2014 add background once finalised.' },
  { name: '[Team Member]', role: 'Lead Engineer', desc: 'Placeholder bio \u2014 add background once finalised.' },
  { name: '[Team Member]', role: 'Design Lead', desc: 'Placeholder bio \u2014 add background once finalised.' },
  { name: '[Team Member]', role: 'DevOps Lead', desc: 'Placeholder bio \u2014 add background once finalised.' },
]

export const openings = [
  { title: '[Job Title]', location: '[Location / Remote]', experience: '[0\u20132 yrs]', type: 'Full-time', skills: ['React', 'Node.js'] },
  { title: '[Job Title]', location: '[Location / Remote]', experience: '[2\u20134 yrs]', type: 'Full-time', skills: ['AWS', 'DevOps'] },
]

export const blog = [
  { category: 'Cloud', title: '[Blog Post Title]', desc: 'Placeholder summary \u2014 add real article content once published.' },
  { category: 'AI', title: '[Blog Post Title]', desc: 'Placeholder summary \u2014 add real article content once published.' },
  { category: 'Cybersecurity', title: '[Blog Post Title]', desc: 'Placeholder summary \u2014 add real article content once published.' },
]

export const contactInfo = {
  email: '[Company Email]',
  phone: '[Phone Number]',
  address: '[Company Address]',
  hours: 'Mon \u2013 Fri, 9:00 AM \u2013 6:00 PM',
}

export const socials = [
  { icon: Link2, label: 'LinkedIn', href: '#' },
]
