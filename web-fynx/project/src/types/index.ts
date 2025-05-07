export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}