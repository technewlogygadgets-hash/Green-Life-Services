export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // URL or Lucide icon name placeholder
  priceInfo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface PricingItem {
  service: string;
  unit: string;
  price: string;
  notes?: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  mobile: string;
  postcode: string;
  serviceId: string;
  propertyType: 'House' | 'Flat' | 'Commercial' | '';
  date: string;
  time: 'Morning' | 'Afternoon' | '';
  frequency: 'One-off' | 'Weekly' | 'Fortnightly' | 'Monthly' | '';
  notes: string;
}
