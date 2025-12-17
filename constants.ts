import { Service, PricingItem, Testimonial } from './types';
import { 
  TreePine, 
  Scissors, 
  Shovel, 
  Trash2, 
  Sprout, 
  Flower2, 
  Brush, 
  Fence 
} from 'lucide-react';

export const COMPANY_NAME = "Green Life Maintenance & Services LTD";
export const PHONE_NUMBER = "020 1234 5678";
export const EMAIL_ADDRESS = "office@greenlifemaintenance.co.uk";

export const SERVICES: Service[] = [
  {
    id: "maintenance",
    title: "Garden Maintenance",
    description: "Regular or one-off visits to keep your garden looking pristine all year round.",
    icon: "shovel",
    priceInfo: "From £45 / visit"
  },
  {
    id: "lawn",
    title: "Lawn Mowing & Care",
    description: "Professional mowing, edging, aeration and lawn treatment services.",
    icon: "scissors",
    priceInfo: "From £30 / hour"
  },
  {
    id: "hedge",
    title: "Hedge Trimming",
    description: "Expert pruning and shaping for hedges of all sizes and species.",
    icon: "fence",
    priceInfo: "From £50 / hour"
  },
  {
    id: "clearance",
    title: "Garden Clearance",
    description: "Full removal of green waste, rubbish, and overgrown vegetation.",
    icon: "trash",
    priceInfo: "Quote required"
  },
  {
    id: "weeding",
    title: "Weed Control",
    description: "Effective removal of weeds from beds, patios, and driveways.",
    icon: "sprout",
    priceInfo: "From £40 / hour"
  },
  {
    id: "planting",
    title: "Planting & Replanting",
    description: "Sourcing and planting of flowers, shrubs, and trees to suit your soil.",
    icon: "flower",
    priceInfo: "Per project"
  },
  {
    id: "landscaping",
    title: "Landscaping & Design",
    description: "Complete garden transformation, including turfing, decking, and paving.",
    icon: "tree",
    priceInfo: "Consultation free"
  },
  {
    id: "patio",
    title: "Patio Cleaning",
    description: "High-pressure jet washing to restore patios and driveways.",
    icon: "brush",
    priceInfo: "From £3 / sqm"
  }
];

export const PRICING_TABLE: PricingItem[] = [
  { service: "General Maintenance (One-off)", unit: "Per hour (2 gardeners)", price: "£60", notes: "Min. 1 hour" },
  { service: "General Maintenance (Regular)", unit: "Per hour (2 gardeners)", price: "£50", notes: "Min. 1 hour" },
  { service: "Lawn Mowing", unit: "Per hour", price: "£35", notes: "Depends on size" },
  { service: "Hedge Trimming", unit: "Per hour", price: "£45", notes: "Up to 3m height" },
  { service: "Pressure Washing", unit: "Per sq. metre", price: "£3.50", notes: "Min. charge £60" },
  { service: "Green Waste Removal", unit: "Per 180L bag", price: "£6", notes: "First bag free" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    location: "Surrey",
    text: "Green Life transformed our overgrown backyard into a lovely family space. The team was polite, punctual, and worked incredibly hard.",
    rating: 5
  },
  {
    id: "2",
    name: "David Thorne",
    location: "South London",
    text: "I use them for fortnightly lawn mowing. Always reliable and they leave everything tidy. Highly recommended for busy professionals.",
    rating: 5
  },
  {
    id: "3",
    name: "Emma Williams",
    location: "Kent",
    text: "Great service for a spring cleanup. The booking process was easy and the price was very competitive compared to other local quotes.",
    rating: 4
  }
];
