const images = [
    { src: "https://brokenbaypearlfarm.com.au/wp-content/uploads/2023/06/Pearls-harvested-from-4-5-year-old-pearl-shell-2_-Broken-Bay-Pearl-Farm-NSW.jpg", alt: "Pearls" },
    { src: "https://mooncatcrystals.com/cdn/shop/articles/Amethyst-Its-Properties-Lore-and-Uses-Mooncat-Crystals-3665.jpg", alt: "Amethyst" },
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwXt8pvSIdAC4NuF-vyqK-RUW7gd_7LN_XhZxGBlhoOeeA-ncRqxJd9xJ7hzUOiCNpUTH_0Osa67ttEXgj9gbXWLKSQFQxO1x7xmALgMvupgn1tnY29PHidqMd5g9xGk8747ivHoyOk6B_Bd9XegCh8E-qxzwXFMRlasD2AqzGg-Q62QRD0e_aKw_Bob4/s1400/rainbow-moonstone.jpg", alt: "Blue Onyx" },
    { src: "https://www.lotuswei.com/cdn/shop/articles/Ruby_Gemstone_Raw_2000x1111_24309712-95e2-4c14-b982-b9593b7f51c3_2000x.jpg?v=1640501290", alt: "Ruby" },
    { src: "https://www.angelicroots.com/cdn/shop/products/IMG_3211_jpg_2048x.jpg?v=1634747742", alt: "Topaz" },
    { src: "https://www.anart.lv/cdn/shop/articles/closeup-green-stones.jpg?v=1679580207&width=1100", alt: "Green Onyx" },
    { src: "https://www.science.org/do/10.1126/science.z82pnrp/full/_20240424_on_room_pressure_diamonds-1714405882253.jpg", alt: "Diamonds" }, 
    { src: "https://gem.agency/wp-content/uploads/2023/04/black-gemstone.jpg", alt: "Tahitian" }, 
    { src: "https://preciousearth.in/cdn/shop/articles/Yellow_Sapphires_1000x1000_crop_center.webp?v=1711540862", alt: "Citrine" }  
];
  
  let currentIndex = 0;
  
  const galleryImage = document.getElementById("gallery-image");
  const thumbnailsContainer = document.getElementById("thumbnails");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  
  function updateImage(index) {
    galleryImage.src = images[index].src;
    galleryImage.alt = images[index].alt;
  }
  
  function generateThumbnails() {
    images.forEach((image, index) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = image.src;
      thumbnail.alt = image.alt;
      thumbnail.className = "thumbnail";
      thumbnail.addEventListener("click", () => {
        currentIndex = index;
        updateImage(currentIndex);
      });
      thumbnailsContainer.appendChild(thumbnail);
    });
  }
  
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
  });
  
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
  });
  
  updateImage(currentIndex);
  generateThumbnails();