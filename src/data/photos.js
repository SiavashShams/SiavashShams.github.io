export const photos = [
    { id: 1,  src: "/images/hobbies/n1.jpg",  caption: "Coastal overlook on a road trip down the Pacific Coast Highway" },
    { id: 2,  src: "/images/hobbies/n2.jpg",  caption: "The open road through the California hills" },
    { id: 3,  src: "/images/hobbies/n3.jpg",  caption: "Storm light breaking over the Pacific" },
    { id: 4,  src: "/images/hobbies/n4.jpg",  caption: "Black-and-white portrait against a cloudy sky" },
    { id: 5,  src: "/images/hobbies/n5.jpg",  caption: "Sea caves carved into the coastal cliffs" },
    { id: 6,  src: "/images/hobbies/n6.jpg",  caption: "A good boy taking in the ocean view" },
    { id: 7,  src: "/images/hobbies/n7.jpg",  caption: "A lazy afternoon by Lake Tahoe" },
    { id: 8,  src: "/images/hobbies/n8.jpg",  caption: "Driving the mountain roads near Tahoe" },
    { id: 9,  src: "/images/hobbies/n9.jpg",  caption: "Taking in the alpine views" },
    { id: 10, src: "/images/hobbies/n10.jpg", caption: "An alpine lake framed by the Sierra Nevada" },
    { id: 11, src: "/images/hobbies/n11.jpg", caption: "Snowmelt rushing through the Sierra" },
    { id: 12, src: "/images/hobbies/n12.jpg", caption: "Crystal-clear water along Tahoe's boulder shoreline" },
    { id: 13, src: "/images/hobbies/n13.jpg", caption: "Geese gliding across a calm lake" }
  ];

export const previewPhotos = [photos[0], photos[9], photos[1], ...photos.filter(photo => ![1, 10, 2].includes(photo.id))];
