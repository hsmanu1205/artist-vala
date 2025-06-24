import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Artist, BookingRequest, FilterOptions } from '@/types';

// Google Sheets Configuration
const SPREADSHEET_ID = '1u-uYqfxv9NOHTIxZX3reOiVfaCDEu8fh';
const API_KEY = 'AIzaSyCgC_tDVE3jUY75LD-8qYR3jMHj9zz9CU4';
const doc = new GoogleSpreadsheet(SPREADSHEET_ID, {
  apiKey: API_KEY
});

// Helper function to apply filters
const applyFilters = (artists: Artist[], filters?: FilterOptions): Artist[] => {
  if (!filters) return artists;

  let filteredArtists = [...artists];

  if (filters.category) {
    filteredArtists = filteredArtists.filter(
      artist => artist.category.toLowerCase() === filters.category?.toLowerCase()
    );
  }

  if (filters.city) {
    filteredArtists = filteredArtists.filter(
      artist => artist.city.toLowerCase() === filters.city?.toLowerCase()
    );
  }

  if (filters.rating) {
    filteredArtists = filteredArtists.filter(
      artist => artist.rating >= filters.rating!
    );
  }

  if (filters.gender) {
    filteredArtists = filteredArtists.filter(
      artist => artist.gender === filters.gender
    );
  }

  return filteredArtists;
};

// Google Sheets API Functions
export const fetchArtists = async (filters?: FilterOptions): Promise<Artist[]> => {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // First sheet contains artists
    const rows = await sheet.getRows();
    
    const artists = rows.map(row => ({
      id: row.get('ID') || '',
      name: row.get('Name') || '',
      category: row.get('Category') || '',
      city: row.get('City') || '',
      rating: Number(row.get('Rating')) || 0,
      reviewCount: Number(row.get('ReviewCount')) || 0,
      price: {
        min: Number(row.get('PriceMin')) || 0,
        max: Number(row.get('PriceMax')) || 0
      },
      image: row.get('Image') || '',
      description: row.get('Description') || '',
      skills: row.get('Skills')?.split(',') || [],
      experience: Number(row.get('Experience')) || 0,
      languages: row.get('Languages')?.split(',') || [],
      availability: row.get('Availability') === 'true',
      gender: (row.get('Gender') as "male" | "female") || 'male'
    }));

    return applyFilters(artists, filters);
  } catch (error) {
    console.error('Error fetching artists:', error);
    return [];
  }
};

export const fetchCategories = async (): Promise<string[]> => {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1]; // Second sheet contains categories
    const rows = await sheet.getRows();
    return rows.map(row => row.get('Name') || '');
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const submitBooking = async (
  booking: BookingRequest
): Promise<{ success: boolean; bookingId: string }> => {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[2] || await doc.addSheet(); // Third sheet for bookings
    await sheet.addRow({
      Name: booking.name,
      Email: booking.email,
      Phone: booking.phone,
      EventType: booking.eventType,
      Date: booking.eventDate,
      // Add other booking fields as needed
    });
    return { success: true, bookingId: Date.now().toString() };
  } catch (error) {
    console.error('Error submitting booking:', error);
    return { success: false, bookingId: '' };
  }
};

// Legacy API Service for backward compatibility
class ApiService {
  async getArtists(filters?: FilterOptions): Promise<Artist[]> {
    return fetchArtists(filters);
  }

  async getArtistById(id: string): Promise<Artist> {
    const artists = await fetchArtists();
    const artist = artists.find(a => a.id === id);
    if (!artist) throw new Error('Artist not found');
    return artist;
  }

  async getArtistsByCategory(category: string): Promise<Artist[]> {
    return fetchArtists({ category });
  }

  async submitBooking(booking: BookingRequest) {
    return submitBooking(booking);
  }

  async getCategories(): Promise<string[]> {
    return fetchCategories();
  }

  // ... other methods as needed
}

// Export everything
export const apiService = new ApiService();
export default {
  fetchArtists,
  fetchCategories,
  submitBooking,
  apiService
};