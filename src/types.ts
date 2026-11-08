export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'schools' 
  | 'gallery' 
  | 'events' 
  | 'team' 
  | 'contact';

export interface ServiceItem {
  id: string;
  category: 'planning' | 'entertainment' | 'schools' | 'production' | 'theatre' | 'equipment';
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  bulletPoints: string[];
  idealFor: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  specialties: string[];
  contact?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 
    | 'Corporate Events'
    | 'School Events'
    | 'Weddings and Celebrations'
    | 'Stage Productions'
    | 'Music and Dance'
    | 'Cultural Performances'
    | 'Sound and Lighting'
    | 'Event Setups';
  image: string;
  caption: string;
  location?: string;
  isGenuinePhoto?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  attendance: string;
  image: string;
  description: string;
  highlights: string[];
  isDemonstration?: boolean;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Sound' | 'Lighting' | 'Visuals' | 'Staging' | 'Power & Support';
  description: string;
  specs: string;
  dailyRateEstimate: string;
  image?: string;
}

export interface BookingRequest {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  organization?: string;
  eventType: string;
  location: string;
  eventDate: string;
  guestCount: number;
  servicesRequired: string[];
  estimatedBudget: string;
  additionalDetails: string;
  status: 'Pending Review' | 'Contacted';
}
