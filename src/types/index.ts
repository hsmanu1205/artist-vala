export interface Artist {
  id: string;
  name: string;
  category: string;
  city: string;
  rating: number;
  reviewCount: number;
  price: {
    min: number;
    max: number;
  };
  image: string;
  description: string;
  skills: string[];
  experience: number;
  languages: string[];
  availability: boolean;
  gender: "male" | "female";
}

export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  category: string;
  budget: string;
  city: string;
  eventDate: Date;
  eventTime: string;
  venue: string;
  guestCount: string;
  requirements: string;
}

export interface FilterOptions {
  category?: string;
  city?: string;
  budget?: string;
  eventType?: string;
  rating?: number;
  gender?: string;
}