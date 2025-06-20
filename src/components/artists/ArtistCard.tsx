import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

interface Artist {
  id: string;
  name: string;
  image: string;
  category: string;
  city: string;
  rating: number;
  reviewCount: number;
  price: { min: number; max: number };
  gender: string;
  availability: boolean;
  skills: string[];
}

interface ArtistCardProps {
  artist: Artist;
  onBookNow: (artist: Artist) => void;
}

export default function ArtistCard({ artist, onBookNow }: ArtistCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge
          variant="secondary"
          className={`absolute top-2 left-2 text-xs ${
            artist.gender === "male" 
              ? "bg-blue-100 text-blue-700" 
              : "bg-pink-100 text-pink-700"
          }`}
        >
          {artist.gender === "male" ? "👨 Male" : "👩 Female"}
        </Badge>
        {artist.availability && (
          <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs">
            Available
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{artist.name}</h3>
        <p className="text-sm text-gray-600">{artist.category}</p>
        
        <div className="flex items-center mt-2 gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{artist.rating}</span>
          <span className="text-gray-500 text-sm">({artist.reviewCount})</span>
        </div>
        
        <div className="flex items-center mt-1 gap-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 text-sm">{artist.city}</span>
        </div>
        
        <div className="mt-3">
          <div className="text-lg font-bold text-primary">
            ₹{artist.price.min.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Starting from</div>
        </div>
        
        <button
          onClick={() => onBookNow(artist)}
          className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Book Now
        </button>
      </CardContent>
    </Card>
  );
}