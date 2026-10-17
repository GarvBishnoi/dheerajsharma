export interface CompanyInfo {
  name: string;
  role: string;
  badge: string;
  description: string;
  offerings: string[];
  highlights: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappUrl: string;
  location: string;
  coordinates: string;
  timezone: string;
  address: string;
  bio: string;
  companies: CompanyInfo[];
}

export interface NoteItem {
  id: string;
  sender: string;
  topic: string;
  message: string;
  timestamp: string;
}

export interface BookingSlot {
  date: string;
  time: string;
  name: string;
  email: string;
  purpose: string;
}
