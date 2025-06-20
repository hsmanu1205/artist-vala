// API service for Artist Vaala application
// This handles all backend API communications

interface Artist {
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

interface BookingRequest {
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

interface FilterOptions {
  category?: string;
  city?: string;
  budget?: string;
  eventType?: string;
  rating?: number;
  gender?: string;
}

// Mock API base URL - replace with actual backend URL
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://api.artistvaala.com/v1";

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  // Artist-related API calls
  async getArtists(filters?: FilterOptions): Promise<Artist[]> {
    // Mock data for development - replace with actual API call
    return this.getMockArtists(filters);
  }

  async getArtistById(id: string): Promise<Artist> {
    return this.request<Artist>(`/artists/${id}`);
  }

  async getArtistsByCategory(category: string): Promise<Artist[]> {
    return this.getArtists({ category });
  }

  // Booking-related API calls
  async submitBooking(
    booking: BookingRequest,
  ): Promise<{ success: boolean; bookingId: string }> {
    return this.request<{ success: boolean; bookingId: string }>("/bookings", {
      method: "POST",
      body: JSON.stringify(booking),
    });
  }

  // Filter options API calls
  async getCategories(): Promise<string[]> {
    return [
      "Musicians",
      "Dancers",
      "Singers",
      "Comedians",
      "Photographers",
      "Hosts & Anchors",
    ];
  }

  async getCities(): Promise<string[]> {
    return [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
    ];
  }

  async getEventTypes(): Promise<string[]> {
    return [
      "Wedding",
      "Birthday Party",
      "Corporate Event",
      "Festival",
      "Concert",
      "Anniversary",
      "Religious Ceremony",
      "Private Party",
    ];
  }

  // Mock data for development - remove when backend is ready
  private async getMockArtists(filters?: FilterOptions): Promise<Artist[]> {
    // Generate artists for each category
    const mockArtists: Artist[] = this.generateMockArtists();

    // Apply filters
    let filteredArtists = mockArtists;

    if (
      filters?.category &&
      filters.category !== "" &&
      filters.category !== "all"
    ) {
      filteredArtists = filteredArtists.filter(
        (artist) =>
          artist.category.toLowerCase() === filters.category?.toLowerCase(),
      );
    }

    if (filters?.city && filters.city !== "all" && filters.city !== "") {
      filteredArtists = filteredArtists.filter(
        (artist) => artist.city.toLowerCase() === filters.city?.toLowerCase(),
      );
    }

    if (filters?.rating) {
      filteredArtists = filteredArtists.filter(
        (artist) => artist.rating >= filters.rating!,
      );
    }

    if (filters?.gender && filters.gender !== "all" && filters.gender !== "") {
      filteredArtists = filteredArtists.filter(
        (artist) => artist.gender === filters.gender,
      );
    }

    return new Promise((resolve) => {
      setTimeout(() => resolve(filteredArtists), 100); // Reduced delay
    });
  }

  private generateMockArtists(): Artist[] {
    const categories = [
      "Musicians",
      "Dancers",
      "Singers",
      "Comedians",
      "Photographers",
      "Hosts",
    ];
    const cities = [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
    ];

    const maleNames = [
      "Ravi Sharma",
      "Amit Kumar",
      "Arjun Singh",
      "Vikash Gupta",
      "Rohit Verma",
      "Akash Patel",
      "Deepak Jain",
      "Manoj Tiwari",
      "Suresh Reddy",
      "Karan Mehta",
      "Rajesh Khanna",
      "Sanjay Dutt",
      "Aamir Khan",
      "Salman Khan",
      "Hrithik Roshan",
      "Ranveer Singh",
      "Varun Dhawan",
      "Tiger Shroff",
      "Kartik Aaryan",
      "Ayushmann Khurrana",
    ];

    const femaleNames = [
      "Priya Nair",
      "Sneha Patel",
      "Kavya Reddy",
      "Meera Jain",
      "Pooja Singh",
      "Anjali Sharma",
      "Nisha Gupta",
      "Ritika Verma",
      "Sunita Kumari",
      "Divya Agarwal",
      "Deepika Padukone",
      "Priyanka Chopra",
      "Kareena Kapoor",
      "Alia Bhatt",
      "Katrina Kaif",
      "Anushka Sharma",
      "Shraddha Kapoor",
      "Kriti Sanon",
      "Jacqueline Fernandez",
      "Sara Ali Khan",
    ];

    // Professional male photos
    const malePhotos = [
      "1507003211169-0a1dd7228f2d",
      "1500648767791-c54ba9faaed4",
      "1472099645785-5658abf4ff4e",
      "1519085360753-af0119f7c6d6",
      "1506794778202-cad84cf45f1d",
      "1507591064344-4c6ce005b128",
      "1493225457124-a3eb161ffa5f",
      "1553531087-5b0ff9f8bfe2",
      "1531123897727-8f129e8f8e6e",
      "1527980965255-d3b416303d12",
      "1521119989659-a83eee488004",
      "1495603889488-3048d1cfacc9",
      "1560250097-0b93528c311a",
      "1615813967515-e69138548451",
      "1551928023-8ad6e1b81e70",
      "1582750433449-1b94b7683dd7",
      "1535713875002-d1d0cf227877",
      "1544005313-94ddf0286df2",
    ];

    // Professional female photos
    const femalePhotos = [
      "1494790108755-2616b612b647",
      "1507081323647-4d250478b919",
      "1517841905240-472988babdf9",
      "1500917293891-ef795e70e1f6",
      "1438761681033-6461ffad8d80",
      "1463453091185-61582044d8b3",
      "1504609813442-a8924e83f76e",
      "1520813792240-56fc4a3765a7",
      "1529626455594-4ff0802cfb7e",
      "1487412720507-e7ab37603c6f",
      "1534751516642-89e29687eade",
      "1500336624523-d727130c3371",
      "1551843073-7a04242d7c73",
      "1573496359142-b8d87734a5a2",
      "1580489944761-8927dbe99c4e",
      "1554151228-544f615d2b9e",
      "1617019263326-2c97d1bd6b7a",
      "1544725176-6e2b999829b8",
    ];

    const mockArtists: Artist[] = [];
    let id = 1;

    categories.forEach((category) => {
      // Generate 25 artists per category
      for (let i = 0; i < 25; i++) {
        const isMale = i % 2 === 0;
        const names = isMale ? maleNames : femaleNames;
        const photos = isMale ? malePhotos : femalePhotos;

        const name = names[i % names.length];
        const photoId = photos[i % photos.length];
        const city = cities[Math.floor(Math.random() * cities.length)];
        const rating = 4.0 + Math.random() * 1.0;
        const reviewCount = 20 + Math.floor(Math.random() * 200);
        const basePrice = 8000 + Math.floor(Math.random() * 42000);
        const experience = 2 + Math.floor(Math.random() * 18);

        mockArtists.push({
          id: id.toString(),
          name: i > 9 ? `${name} ${i}` : name,
          category,
          city,
          rating: Math.round(rating * 10) / 10,
          reviewCount,
          price: {
            min: basePrice,
            max: basePrice + Math.floor(Math.random() * 30000),
          },
          image: `https://images.unsplash.com/photo-${photoId}?w=400&h=400&fit=crop&crop=face`,
          description: this.getDescriptionForCategory(
            category,
            isMale,
            experience,
          ),
          skills: this.getSkillsForCategory(category),
          experience,
          languages: this.getLanguagesForCity(city),
          availability: Math.random() > 0.15, // 85% available
          gender: isMale ? "male" : "female",
        });
        id++;
      }
    });

    console.log("Generated artists:", mockArtists.length, "artists total");
    console.log("Sample artist:", mockArtists[0]);
    return mockArtists;
  }

  private getDescriptionForCategory(
    category: string,
    isMale: boolean,
    experience: number,
  ): string {
    const gender = isMale ? "male" : "female";
    const pronoun = isMale ? "He" : "She";

    const descriptions: Record<string, string> = {
      Musicians: `Talented ${gender} musician with ${experience}+ years of experience in live performances. ${pronoun} specializes in various genres and has performed at numerous prestigious events across India.`,
      Dancers: `Professional ${gender} dancer trained in multiple dance forms. With ${experience} years of experience, ${pronoun.toLowerCase()} brings grace and energy to every performance.`,
      Singers: `Versatile ${gender} vocalist with a melodious voice and ${experience} years of professional singing experience. ${pronoun} performs in multiple languages and genres.`,
      Comedians: `Hilarious ${gender} stand-up comedian who knows how to entertain any crowd. With ${experience} years in comedy, ${pronoun.toLowerCase()} brings laughter to every event.`,
      Photographers: `Creative ${gender} photographer with an eye for capturing perfect moments. ${experience} years of experience in event and portrait photography.`,
      Hosts: `Charismatic ${gender} event host and anchor with excellent communication skills. ${experience} years of experience in hosting various types of events.`,
    };

    return (
      descriptions[category] ||
      `Professional ${category.slice(0, -1).toLowerCase()} with ${experience}+ years experience.`
    );
  }

  private getLanguagesForCity(city: string): string[] {
    const cityLanguages: Record<string, string[]> = {
      Mumbai: ["Hindi", "English", "Marathi"],
      Delhi: ["Hindi", "English", "Punjabi"],
      Bangalore: ["English", "Kannada", "Tamil", "Hindi"],
      Hyderabad: ["Telugu", "Hindi", "English"],
      Chennai: ["Tamil", "English", "Hindi"],
      Kolkata: ["Bengali", "Hindi", "English"],
      Pune: ["Marathi", "Hindi", "English"],
      Ahmedabad: ["Gujarati", "Hindi", "English"],
      Jaipur: ["Hindi", "English", "Rajasthani"],
      Lucknow: ["Hindi", "English", "Urdu"],
    };

    return cityLanguages[city] || ["Hindi", "English"];
  }

  private getSkillsForCategory(category: string): string[] {
    const skillMap: Record<string, string[]> = {
      Musicians: [
        "Classical Music",
        "Fusion",
        "Live Performance",
        "Jazz",
        "Rock",
      ],
      Dancers: [
        "Classical Dance",
        "Contemporary",
        "Choreography",
        "Folk Dance",
        "Bollywood",
      ],
      Singers: [
        "Bollywood Singing",
        "Classical Music",
        "Devotional Songs",
        "Ghazal",
        "Pop",
      ],
      Comedians: [
        "Stand-up Comedy",
        "Improv",
        "Event Hosting",
        "Mimicry",
        "Roasting",
      ],
      Photographers: [
        "Event Photography",
        "Portrait",
        "Wedding",
        "Commercial",
        "Fashion",
      ],
      Hosts: [
        "Corporate Hosting",
        "Wedding Emcee",
        "Event Management",
        "Public Speaking",
        "Live Anchoring",
        "TV Presenting",
      ],
    };

    return skillMap[category] || ["General Skills"];
  }
}

export const apiService = new ApiService();
export type { Artist, BookingRequest, FilterOptions };
