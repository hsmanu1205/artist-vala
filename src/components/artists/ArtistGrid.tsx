import React from "react";
import { motion } from "framer-motion";
import ArtistCard from "./ArtistCard";
import { Artist } from "@/api";

interface ArtistGridProps {
  artists: Artist[];
  onBookNow: (artist: Artist) => void;
}

export default function ArtistGrid({ artists, onBookNow }: ArtistGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {artists.map((artist, index) => (
        <motion.div
          key={artist.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <ArtistCard artist={artist} onBookNow={onBookNow} />
        </motion.div>
      ))}
    </div>
  );
}