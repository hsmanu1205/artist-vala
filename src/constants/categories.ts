// src/constants/categories.ts
interface ICategory {
  id: string;
  name: string;
  image: string;
  href: string;
  description: string;
  count: number;
}

const categories: ICategory[] = [
  {
    id: "1",
    name: "Singers",
    image: "https://source.unsplash.com/random/400x400/?singer",
    href: "/artists/singers",
    description: "Professional vocalists for all events",
    count: 125,
  },
  {
    id: "2",
    name: "Music Bands",
    image: "https://source.unsplash.com/random/400x400/?band",
    href: "/artists/bands",
    description: "Live bands for weddings and parties",
    count: 89,
  },
  {
    id: "3",
    name: "Dancers",
    image: "https://source.unsplash.com/random/400x400/?dancer",
    href: "/artists/dancers",
    description: "Classical and contemporary performers",
    count: 78,
  },
  {
    id: "4",
    name: "Comedians",
    image: "https://source.unsplash.com/random/400x400/?comedian",
    href: "/artists/comedians",
    description: "Stand-up and improv artists",
    count: 65,
  },
  {
    id: "5",
    name: "Photographers",
    image: "https://source.unsplash.com/random/400x400/?photographer",
    href: "/artists/photographers",
    description: "Event and portrait specialists",
    count: 112,
  },
  {
    id: "6",
    name: "Emcees",
    image: "https://source.unsplash.com/random/400x400/?host",
    href: "/artists/emcees",
    description: "Event hosts and anchors",
    count: 54,
  },
  {
    id: "7",
    name: "Instrumentalists",
    image: "https://source.unsplash.com/random/400x400/?musician",
    href: "/artists/instrumentalists",
    description: "Solo instrumental performers",
    count: 87,
  },
  {
    id: "8",
    name: "DJs",
    image: "https://source.unsplash.com/random/400x400/?dj",
    href: "/artists/djs",
    description: "Music mixers for parties",
    count: 93,
  },
  {
    id: "9",
    name: "Actors",
    image: "https://source.unsplash.com/random/400x400/?actor",
    href: "/artists/actors",
    description: "Stage and screen performers",
    count: 76,
  },
  {
    id: "10",
    name: "Models",
    image: "https://source.unsplash.com/random/400x400/?model",
    href: "/artists/models",
    description: "Fashion and show professionals",
    count: 68,
  },
  {
    id: "11",
    name: "Chefs",
    image: "https://source.unsplash.com/random/400x400/?chef",
    href: "/artists/chefs",
    description: "Culinary artists for events",
    count: 45,
  },
  {
    id: "12",
    name: "Painters",
    image: "https://source.unsplash.com/random/400x400/?painter",
    href: "/artists/painters",
    description: "Live art creators",
    count: 32,
  },
  {
    id: "13",
    name: "Poets",
    image: "https://source.unsplash.com/random/400x400/?poet",
    href: "/artists/poets",
    description: "Spoken word artists",
    count: 28,
  },
  {
    id: "14",
    name: "Magicians",
    image: "https://source.unsplash.com/random/400x400/?magician",
    href: "/artists/magicians",
    description: "Illusionists and mentalists",
    count: 42,
  },
  {
    id: "15",
    name: "Makeup Artists",
    image: "https://source.unsplash.com/random/400x400/?makeup",
    href: "/artists/makeup-artists",
    description: "Beauty and special effects",
    count: 59,
  },
  {
    id: "16",
    name: "Fashion Designers",
    image: "https://source.unsplash.com/random/400x400/?fashion",
    href: "/artists/fashion-designers",
    description: "Clothing and costume creators",
    count: 37,
  },
  {
    id: "17",
    name: "Videographers",
    image: "https://source.unsplash.com/random/400x400/?videography",
    href: "/artists/videographers",
    description: "Event video professionals",
    count: 51,
  },
  {
    id: "18",
    name: "Voice Artists",
    image: "https://source.unsplash.com/random/400x400/?voice",
    href: "/artists/voice-artists",
    description: "Narration and dubbing",
    count: 43,
  },
  {
    id: "19",
    name: "Circus Performers",
    image: "https://source.unsplash.com/random/400x400/?circus",
    href: "/artists/circus-performers",
    description: "Acrobats and variety acts",
    count: 29,
  },
  {
    id: "20",
    name: "Wellness Coaches",
    image: "https://source.unsplash.com/random/400x400/?yoga",
    href: "/artists/wellness-coaches",
    description: "Mind and body specialists",
    count: 36,
  }
];

export { categories };
export type { ICategory as Category };