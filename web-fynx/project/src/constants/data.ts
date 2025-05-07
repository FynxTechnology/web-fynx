import { NavItem, Service, Testimonial, Statistic, TeamMember, Partner, Language } from '../types';
import { Server, Users, Shield, Code, Database, Headset as HeadsetHelp, BarChart } from 'lucide-react';

export const languages: Language[] = [
  {
    code: 'pt-BR',
    name: 'Português (Brasil)',
    flag: 'https://flagcdn.com/br.svg',
  },
  {
    code: 'pt-PT',
    name: 'Português (Portugal)',
    flag: 'https://flagcdn.com/pt.svg',
  },
  {
    code: 'en-US',
    name: 'English (US)',
    flag: 'https://flagcdn.com/us.svg',
  },
  {
    code: 'en-AU',
    name: 'English (Australia)',
    flag: 'https://flagcdn.com/au.svg',
  },
];

export const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'About', href: '#about' },
  { title: 'Team', href: '#team' },
  { title: 'Partners', href: '#partners' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'IT Infrastructure Management',
    description: 'Comprehensive management and monitoring of your IT infrastructure for maximum performance and reliability.',
    icon: 'Server',
  },
  {
    id: '2',
    title: 'Professional IT Staffing',
    description: 'Connect with top IT professionals to strengthen your team with the right expertise when you need it.',
    icon: 'Users',
  },
  {
    id: '3',
    title: 'Cybersecurity Solutions',
    description: 'Protect your business with advanced security measures, threat detection, and incident response.',
    icon: 'Shield',
  },
  {
    id: '4',
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your specific business needs and challenges.',
    icon: 'Code',
  },
  {
    id: '5',
    title: 'Cloud Solutions',
    description: 'Strategic cloud migration, hosting, and management services to improve flexibility and scalability.',
    icon: 'Database',
  },
  {
    id: '6',
    title: 'IT Support & Help Desk',
    description: '24/7 technical support and responsive help desk services to keep your business running smoothly.',
    icon: 'HeadsetHelp',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'Innovate Solutions',
    content: 'Fynx has been an invaluable partner in our digital transformation. Their team of professionals seamlessly integrated with our staff and delivered exceptional results on time and within budget.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'IT Director',
    company: 'Global Enterprises',
    content: 'The security expertise that Fynx brings to the table is unmatched. They identified vulnerabilities we weren\'t aware of and implemented robust solutions that have protected our systems from multiple threats.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Operations Manager',
    company: 'TechStart Inc.',
    content: 'As a growing company, we needed flexible IT support that could scale with us. Fynx provided exactly that — professional, responsive service that adapts to our changing needs.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export const statistics: Statistic[] = [
  {
    id: '1',
    value: '30+',
    label: 'Clients Served',
    icon: 'Users',
  },
  {
    id: '2',
    value: '98%',
    label: 'Client Retention',
    icon: 'BarChart',
  },
  {
    id: '3',
    value: '500+',
    label: 'IT Professionals',
    icon: 'HeadsetHelp',
  },
  {
    id: '4',
    value: '8+',
    label: 'Years of Excellence',
    icon: 'Shield',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: 'With over 15 years in IT leadership, Alex founded Fynx with a mission to provide exceptional IT services that empower businesses to thrive in the digital age.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '2',
    name: 'Jamie Rivera',
    role: 'CTO',
    bio: 'Jamie brings technical excellence and innovation to every project, ensuring our clients receive cutting-edge solutions that drive business results.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '3',
    name: 'Taylor Patel',
    role: 'Head of IT Staffing',
    bio: 'Taylor has a unique talent for matching the right IT professionals with the right projects, creating successful partnerships for our clients.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '4',
    name: 'Sam Williams',
    role: 'Cybersecurity Lead',
    bio: 'Sam specializes in advanced threat protection and security compliance, helping organizations safeguard their most valuable digital assets.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export const partners: Partner[] = [
  {
    id: '1',
    name: 'SAP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
  },
  {
    id: '2',
    name: 'AWS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    id: '3',
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    id: '4',
    name: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Google_Cloud_Logo.svg',
  },
  {
    id: '5',
    name: 'RHC Solutions',
    logo: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];