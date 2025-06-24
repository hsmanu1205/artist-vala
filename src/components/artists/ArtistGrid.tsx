import React from 'react';
import ArtistCard from './ArtistCard';
import { Artist } from '@/types';

interface ArtistGridProps {
  artists: Artist[];
  onBookNow: (artist: Artist) => void;
}

const ArtistGrid: React.FC<ArtistGridProps> = ({ artists, onBookNow }) => {
  if (artists.length === 0) {
    return <div className="text-center py-8">No artists found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {artists.map(artist => (
        <ArtistCard 
          key={artist.id} 
          artist={artist} 
          onBookNow={onBookNow}
        />
      ))}
    </div>
  );
};

export default ArtistGrid;