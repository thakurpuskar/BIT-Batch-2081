fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
  });
function navbar() {
  return {
    open: false,
    scrolled: false,
    init() {
      window.addEventListener("scroll", () => {
        this.scrolled = window.scrollY > 10;
      });
    },
  };
}

const mates = [
  {
    name: "Aarogya Raj Upreti",
    image: "./assets/batchmates/aarogya.jpg",
    fb: "https://www.facebook.com/aarogya977",
  },
  {
    name: "Srijan Khawas",
    image: "./assets/batchmates/srijan.jpg",
    fb: "https://www.facebook.com/shrijan.khawas",
  },
  {
    name: "Angel Shrestha",
    image: "./assets/batchmates/angel.jpg",
    fb: "https://www.facebook.com/angel.shrestha.647553",
  },
  {
    name: "Yashaswi Sharma Wasti",
    image: "./assets/batchmates/yashaswi.jpg",
    fb: "https://www.facebook.com/yashashwi.sharma.3",
  },
  {
    name: "Manjil Khatri",
    image: "./assets/batchmates/manjil.jpg",
    fb: "https://www.facebook.com/manjil.khatri.267138",
  },
  {
    name: "Aayush Halwali",
    image: "./assets/batchmates/aayush.jpg",
    fb: "https://www.facebook.com/aayushrajkarnikar",
  },
  {
    name: "Rabin Nepali",
    image: "./assets/batchmates/rabin.jpg",
    fb: "https://www.facebook.com/rabinnepali01",
  },
  {
    name: "Puskar Kumar Thakur",
    image: "./assets/batchmates/puskar.jpg",
    fb: "https://www.facebook.com/puskar.kumar.thakur",
  },
  {
    name: "Binam Shrestha",
    image: "./assets/batchmates/Binam.png",
    fb: "https://www.facebook.com/binam.shrestha.494077",
  },
  {
    name: "Sanjeev Kumar Pandit",
    image: "./assets/batchmates/sanjeev pandit.jpg",
    fb: "https://www.facebook.com/lordsanjeevv",
  },
  {
    name: "Kamal Kishor Thakur Barhi",
    image: "./assets/batchmates/kamal.png",
    fb: "https://www.facebook.com/kamal.tagore.2025",
  },
  {
    name: "Sanam Shrestha",
    image: "./assets/batchmates/sanam.jpg",
    fb: "https://www.facebook.com/sanam.stha.940641",
  },
  {
    name: "Manoj Rai",
    image: "./assets/batchmates/Manoj.jpeg",
    fb: "https://www.facebook.com/raipiece",
  },
  {
    name: "Rabina Basnet",
    image: "./assets/batchmates/rabina.jpg",
    fb: "https://www.facebook.com/rabina.basnet.29",
  },
  {
    name: "Sadrish Shrestha",
    image: "./assets/batchmates/sadrish.jpg",
    fb: "https://www.facebook.com/sadrish.stha",
  },
  {
    name: "Bikalpa Adhikari",
    image: "./assets/batchmates/bikalpa.png",
    fb: "https://www.facebook.com/bikalpa.adhikari.1428",
  },
  {
    name: "Aabhas Thapa",
    image: "./assets/batchmates/aabash.jpg",
    fb: "https://www.facebook.com/aabhashdon.steven.9",
  },
  {
    name: "Aditya Tajpuriya",
    image: "./assets/batchmates/aaditya.jpg",
    fb: "https://www.facebook.com/manish.aditya.tajpuriya",
  },
  {
    name: "Salina Nepal",
    image: "./assets/batchmates/salina.jpg",
    fb: "https://www.facebook.com/salina.nepal.981013",
  },
  {
    name: "Rochak Rai",
    image: "./assets/batchmates/rochak.jpeg",
    fb: "https://www.facebook.com/profile.php?id=100068583527061",
  },
  {
    name: "Sasim Rai",
    image: "./assets/batchmates/sasim.jpeg",
    fb: "https://www.facebook.com/sasim.rai.754",
  },
  {
    name: "Abinaya Pandey",
    image: "./assets/batchmates/abhinaya.jpg",
    fb: "https://www.facebook.com/abinaya.pandey.2025",
  },
  {
    name: "Amrita Majhi",
    image: "./assets/batchmates/amrita.jpg",
    fb: "https://www.facebook.com/amritaa.mazee.5",
  },
  {
    name: "Subana Niroula",
    image: "./assets/batchmates/subhana.jpg",
    fb: "https://www.facebook.com/subana.niroula",
  },
  {
    name: "Nabin Chaudhary",
    image: "./assets/batchmates/nabin.jpg",
    fb: "https://www.facebook.com/nabin.chaudhary.238872",
  },
  {
    name: "Nambin Limbu",
    image: "./assets/batchmates/nambin.jpg",
    fb: "https://www.facebook.com/malaibolnu.manxaina",
  },
  {
    name: "Dipjal Tamrakar",
    image: "./assets/batchmates/dipjal.jpg",
    fb: "https://www.facebook.com/dipjal.tamrakar.2025",
  },
  {
    name: "Tanchhohang Limbu",
    image: "./assets/batchmates/tanchong.jpg",
    fb: "https://www.facebook.com/tanchho.hang.221031",
  },
  {
    name: "Samikshya Karki",
    image: "./assets/batchmates/samikshya.jpg",
    fb: "https://www.facebook.com/samikshya.lamakarki",
  },
  {
    name: "Ankit Poudel",
    image: "./assets/batchmates/ankit.jpg",
    fb: "https://www.facebook.com/ankit.poudel.3975",
  },
  {
    name: "Ujwal Acharya",
    image: "./assets/batchmates/ujwal.jpg",
    fb: "https://www.facebook.com/ujwal.acharya.01",
  },
  {
    name: "Utsab Chaudhary",
    image: "./assets/batchmates/non photo.jpg",
    fb: "https://www.facebook.com/utsab.chaudhary10#",
  },
  {
    name: "Himal Wanem Limbu",
    image: "./assets/batchmates/himal.jpg",
    fb: "https://www.facebook.com/himal.wanem.854062",
  },
  {
    name: "Yuvraj Bhattarai",
    image: "./assets/batchmates/yuvraj.jpg",
    fb: "https://www.facebook.com/EnJal100#",
  },
  {
    name: "Erosha Khadel",
    image: "./assets/batchmates/erosa.jpg",
    fb: "https://www.facebook.com/aro.sa.735",
  },
];
const grid = document.getElementById("matesGrid");
const searchInput = document.getElementById("searchInput");

function renderMates(list) {
  grid.innerHTML = "";
  list.forEach((mate) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-xs p-6 flex flex-col items-center text-center space-y-4";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", "1000");

    card.innerHTML = `
        <div class="w-32 h-32 overflow-hidden rounded-full shadow-md group">
          <img src="${mate.image}" alt="${mate.name}"
               class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
        </div>
        <h4 class="text-purple-700 text-2xl font-bold">${mate.name}</h4>
        <p class="text-gray-600 text-sm font-medium">BIT Student | Central Campus of Technology</p>
        <p class="text-gray-500 text-sm">
          Passionate about technology, coding, and innovation. Dedicated to learning and building digital solutions.
        </p>
        <a href="${mate.fb}" target="_blank" rel="noopener"
           class="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
          About Me
        </a>
      `;
    grid.appendChild(card);
  });
}

// Initial render
renderMates(mates);

// Wire up search
searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = mates.filter((m) => m.name.toLowerCase().includes(term));
  renderMates(filtered);
});

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
