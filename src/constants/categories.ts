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
    image : "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg",
    href: "/artists/singers",
    description: "Professional vocalists for all events",
    count: 20,
  },
  {
    id: "2",
    name: "Music Bands",
    image: "https://files.prokerala.com/news/photos/imgs/1024/sanam-band-755620.jpg",
    href: "/artists/bands",
    description: "Live bands for weddings and parties",
    count: 10,
  },
  {
    id: "3",
    name: "Dancers",
    image: "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/05/427362476.jpg",
    href: "/artists/dancers",
    description: "Classical and contemporary performers",
    count: 30,
  },
  {
    id: "4",
    name: "Comedians",
    image: "https://imgeng.jagran.com/images/2025/02/11/article/image/Samay-Raina-1739257970143.jpg",
    href: "/artists/comedians",
    description: "Stand-up and improv artists",
    count: 15,
  },
  {
    id: "5",
    name: "Photographers",
    image: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/12743/20-EA427660.jpg",
    href: "/artists/photographers",
    description: "Event and portrait specialists",
    count: 20,
  },
  {
    id: "6",
    name: "Anchors",
    image: "https://www.goa-emcee.kontactus.in/assets/images/emcee-female-goa-1a.jpg",
    href: "/artists/emcees",
    description: "Event hosts and anchors",
    count: 15,
  },
  {
    id: "7",
    name: "Instrumentalists",
    image: "https://faroutmagazine.co.uk/static/uploads/1/2024/12/Zakir-Hussain-Indian-Musician-Jim-McGuire-Far-Out-Magazine-1024x768.jpg",
    href: "/artists/instrumentalists",
    description: "Solo instrumental performers",
    count: 10,
  },
  {
    id: "8",
    name: "DJs",
    image: "https://www.hindustantimes.com/ht-img/img/2024/09/27/550x309/gurbax2_1727431996381_1727432006091.jpg",
    href: "/artists/djs",
    description: "Music mixers for parties",
    count: 30,
  },
  {
    id: "9",
    name: "Actors",
    image: "https://wallpapers.com/images/high/master-vijay-4k-indian-actor-5vudqnf11l59nw3x.webp",
    href: "/artists/actors",
    description: "Stage and screen performers",
    count: 50,
  },
  {
    id: "10",
    name: "Models",
    image: "https://images.indianexpress.com/2021/03/FDCI-Rainbow-Show-SS-2019_PRhandout.jpg?w=640",
    href: "/artists/models",
    description: "Fashion and show professionals",
    count: 40,
  },
  {
    id: "11",
    name: "Chefs",
    image: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/kunal-kapoor-1.jpg",
    href: "/artists/chefs",
    description: "Culinary artists for events",
    count: 30,
  },
  // {
  //   id: "12",
  //   name: "Painters",
  //   image: "https://source.unsplash.com/random/400x400/?painter",
  //   href: "/artists/painters",
  //   description: "Live art creators",
  //   count: 32,
  // },
  // {
  //   id: "13",
  //   name: "Poets",
  //   image: "https://source.unsplash.com/random/400x400/?poet",
  //   href: "/artists/poets",
  //   description: "Spoken word artists",
  //   count: 28,
  // },
  {
    id: "14",
    name: "Magicians",
    image: "https://imgmain.buzztribe.news/photos/shares/2021/05/4-Famous-Magicians-of-India-till-date.jpg",
    href: "/artists/magicians",
    description: "Illusionists and mentalists",
    count: 15,
  },
  {
    id: "15",
    name: "Makeup Artists",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FH2oHLM2EmX4%2Foar2.jpg%3Fsqp%3D-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB%26rs%3DAOn4CLA5-JL1jALawOLa790qYsKUQ_zTMw&f=1&nofb=1&ipt=46109456f9d23f2245068385ba3aadbfd4a4a1a352feb7ad614218cac4c32816",
    href: "/artists/makeup-artists",
    description: "Beauty and special effects",
    count: 20,
  },
  {
    id: "16",
    name: "Fashion Designers",
    image: "https://superstarsbio.com/wp-content/uploads/2018/11/3-Manish-Malhotra.jpg",
    href: "/artists/fashion-designers",
    description: "Clothing and costume creators",
    count: 20,
  },
  {
    id: "17",
    name: "Videographers",
    image: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/08/best-wedding-videography-in-chandigarh-e1566369750691.jpg",
    href: "/artists/videographers",
    description: "Event video professionals",
    count: 15,
  },
  {
    id: "18",
    name: "Voice Artists",
    image: "https://sm.ign.com/t/ign_in/screenshot/default/sanket-mhatre-interview_9gyj.2560.png",
    href: "/artists/voice-artists",
    description: "Narration and dubbing",
    count: 10,
  },
  // {
  //   id: "19",
  //   name: "Circus Performers",
  //   image: "https://source.unsplash.com/random/400x400/?circus",
  //   href: "/artists/circus-performers",
  //   description: "Acrobats and variety acts",
  //   count: 29,
  // },
  {
    id: "20",
    name: "Wellness Coaches",
    image: "https://www.sahilfitness.com/wp-content/uploads/2021/05/IMG_20210511_160602-1024x671.jpg",
    href: "/artists/wellness-coaches",
    description: "Mind and body specialists",
    count: 40,
  }
];

export { categories };
export type { ICategory as Category };