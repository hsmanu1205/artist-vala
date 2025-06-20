import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Filters from '@/components/artists/Filters';
import ArtistGrid from '@/components/artists/ArtistGrid';
import CategoryGrid from '@/components/artists/CategoryGrid';
import { apiService, type Artist } from '@/api';
import { categories } from '@/constants/categories';

const Artists = () => {
  const { category } = useParams();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [city, setCity] = useState('all');
  const [gender, setGender] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    loadArtists();
  }, [category]);

  useEffect(() => {
    applyFilters();
  }, [artists, searchTerm, city, gender, sortBy]);

  const loadArtists = async () => {
    setIsLoading(true);
    try {
      const data = await apiService.getArtists({ category });
      setArtists(data);
    } catch (error) {
      console.error('Error loading artists:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...artists];

    if (searchTerm) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (city !== 'all') {
      filtered = filtered.filter((artist) => artist.city === city);
    }

    if (gender !== 'all') {
      filtered = filtered.filter((artist) => artist.gender === gender);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price.min - b.price.min;
        case 'price-high':
          return b.price.min - a.price.min;
        default:
          return 0;
      }
    });

    setFilteredArtists(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setCity('all');
    setGender('all');
    setSortBy('rating');
  };

  const handleBookNow = (artist: Artist) => {
    // Open booking modal
    console.log('Booking artist:', artist.name);
  };

  if (!category) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Browse Categories</h1>
        <CategoryGrid />
      </div>
    );
  }

  const categoryName = categories.find((c) => c.href === `/artists/${category}`)?.name || 'Artists';

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
      
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        city={city}
        setCity={setCity}
        gender={gender}
        setGender={setGender}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onClearFilters={clearFilters}
      />

      {isLoading ? (
        <div>Loading...</div>
      ) : filteredArtists.length > 0 ? (
        <ArtistGrid artists={filteredArtists} onBookNow={handleBookNow} />
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No artists found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filters
          </p>
          <Button 
            onClick={clearFilters}
            variant="outline"
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Artists;