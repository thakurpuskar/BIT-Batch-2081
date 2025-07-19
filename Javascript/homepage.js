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
function batchmatesApp() {
  return {
    search: "",
    batchmates: [
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
        fb: "https://www.facebook.com/utsab.chaudhary10",
      },
      {
        name: "Himal Wanem Limbu",
        image: "./assets/batchmates/himal.jpg",
        fb: "https://www.facebook.com/himal.wanem.854062",
      },
      {
        name: "Yuvraj Bhattarai",
        image: "./assets/batchmates/yuvraj.jpg",
        fb: "https://www.facebook.com/EnJal100",
      },
      {
        name: "Erosha Khadel",
        image: "./assets/batchmates/erosa.jpg",
        fb: "https://www.facebook.com/aro.sa.735",
      },
    ],
    filteredBatchmates() {
      if (!this.search.trim()) return this.batchmates;
      return this.batchmates.filter((mate) =>
        mate.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  };
}
function teacherDirectory() {
  return {
    search: "",
    teachers: [
      {
        name: "Balbhadra Bhandari",
        subject: "Basic Mathematics",
        facebook: "https://www.facebook.com/balbhadra.bhandari",
        image: "assets/teachers/balbadhur.jpg",
      },
      {
        name: "Mahesh Kumar Shah",
        subject: "OOP & C Programming",
        facebook: "https://www.facebook.com/mahesh.shah.1460",
        image: "assets/teachers/mahesh.jpg",
      },
      {
        name: "Bikash Soni",
        subject: "IIT & Microprocessor",
        facebook: "https://www.facebook.com/bikash.so",
        image: "assets/teachers/bikash.png",
      },
      {
        name: "Dharti Raj Shah",
        subject: "Digital Logic",
        facebook: "https://www.facebook.com/dhartiraj",
        image: "assets/teachers/Dhartiraj.jpg",
      },
      {
        name: "Bishal Shrestha",
        subject: "Sociology",
        facebook: "https://www.facebook.com/bishal.shrestha.265942",
        image: "assets/teachers/bishal shrestha.jpg",
      },
      {
        name: "Roma Ghimire",
        subject: "Basic Statistics",
        facebook: "https://www.facebook.com/roma.ghimire.7",
        image: "assets/teachers/Roma.jpg",
      },
      {
        name: "Nar Bahadur Tamang",
        subject: "Discrete Structure",
        facebook: "https://www.facebook.com/rnaren.nbt#",
        image: "assets/teachers/nar bahadur.jpg",
      },
      {
        name: "Surendra Ghimire",
        subject: "Economics",
        facebook: "https://www.facebook.com/surendra.ghimire.908",
        image: "assets/teachers/surendra.jpg",
      },
    ],
    get filteredTeachers() {
      return this.teachers.filter((t) => {
        const searchTerm = this.search.toLowerCase();
        return (
          t.name.toLowerCase().includes(searchTerm) ||
          t.subject.toLowerCase().includes(searchTerm)
        );
      });
    },
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("semesters", () => ({
    open: "",
    data: {
      sem1: [
        {
          name: "Basic Mathematics",
          teacher: "Mr. Balbhadra Bhandari",
          syllabus:
            "https://drive.google.com/file/d/1THpjtH_T9bHvmcAoiuo2rKlm3hpHdTJe/view",
          notes:
            "https://drive.google.com/drive/folders/1YkSWH1BKBX0reA92XLyANfp4smm_DxYK",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=First&subject=Basic%20Mathematics",
        },
        {
          name: "Introduction to IT",
          teacher: "Mr. Bikash Soni",
          syllabus:
            "https://drive.google.com/file/d/1t8XYI9oXND1ksnp4hneSD7I8r_Rk8LbY/view",
          notes:
            "https://drive.google.com/drive/folders/1YSgl1qNcl9xGKCJ4V1G6-1ap92lmEEhd",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=First&subject=Introduction%20to%20Information%20Technology",
        },
        {
          name: "C Programming",
          teacher: "Mr. Mahesh Shah",
          syllabus:
            "https://drive.google.com/file/d/1j4qG0GBkLTTv65RBbtoRq8VR2gWaiVxx/view",
          notes:
            "https://drive.google.com/drive/folders/1a7KUNwiVj_0l0q80NlNnjjDbdmaPRXL3",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=First&subject=C%20Programming",
        },
        {
          name: "Digital Logic",
          teacher: "Mr. Dharti Raj Shah",
          syllabus:
            "https://drive.google.com/file/d/11CL5fVWkWa21dcBVhLNz40luu0fOCtXZ/view",
          notes:
            "https://drive.google.com/drive/folders/1z9DLEuFQgmrcrnvxaEFZ8kKlyU4cUS3-",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=First&subject=Digital%20Logic",
        },
        {
          name: "Sociology",
          teacher: "Mr. Bishal Shrestha",
          syllabus:
            "https://drive.google.com/file/d/1uQqnQyP5MDeMovJNnW2zQFUmOoDP4D9F/view",
          notes:
            "https://drive.google.com/drive/folders/1G5R2YmtYyPJ61NGufnv3_hKq4z6SABca",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=First&subject=Sociology",
        },
      ],
      sem2: [
        {
          name: "Microprocessor and Computer Architecture",
          teacher: "Mr. Bikash Soni",
          syllabus:
            "https://drive.google.com/file/d/1GF7gT1-V4M6T4tFi7hiv6r85344SxJ4R/view",
          notes:
            "https://drive.google.com/drive/u/1/folders/1ZfWvjtpSf0_wo2z8DfTAfJXMVZBCpCLR",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Second&subject=Microprocessor%20and%20Computer%20Architecture",
        },
        {
          name: "Discrete Structure",
          teacher: "Mr. Nar Bahadur Tamang",
          syllabus:
            "https://drive.google.com/file/d/1EZDpM8qL07FmIlOaVoc0DLcp4zrLzeOw/view",
          notes:
            "https://drive.google.com/drive/u/1/folders/1dRGZOzCzy61ucNtrjEQoCzi_dOSVHC6z",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Second&subject=Discrete%20Structure",
        },
        {
          name: "Object Oriented Programming",
          teacher: "Mr. Mahesh Shah",
          syllabus:
            "https://drive.google.com/file/u/0/d/1u7S68CYvRCaYTZQWgJmvdC4TBZ2hbESH/view",
          notes:
            "https://drive.google.com/drive/u/1/folders/1FdhxbsMuxqlqMpssUz72s74qZU7FEZnh",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Second&subject=Object%20Oriented%20Programming",
        },
        {
          name: "Basic Statistics",
          teacher: "Mrs. Roma Ghimire",
          syllabus:
            "https://drive.google.com/file/d/1p8_oheucvj8AoRCzWOqPKXd6c_JKCiC5/view",
          notes:
            "https://drive.google.com/drive/u/1/folders/16DZVl0_CHUCRkWhxR9wCFH5K7tGt17a4",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Second&subject=Basic%20Statistics",
        },
        {
          name: "Economics",
          teacher: "Mr. Surendra Ghimire",
          syllabus:
            "https://drive.google.com/file/d/1JbYzm_VXtfbyxEnWZlQTIcYuElh1wTuD/view",
          notes:
            "https://drive.google.com/drive/u/1/folders/1O0Ej50XihnPWfNy77qUvA0Zz9_2vjCLZ",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Second&subject=Economics",
        },
      ],
      sem3: [
        {
          name: "Data Structures and Algorithms",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Third&subject=Data%20Structures%20and%20Algorithms",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Third&subject=Data%20Structures%20and%20Algorithms",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Third&subject=Data%20Structures%20and%20Algorithms",
        },
        {
          name: "Database Management System",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Third&subject=Web%20Technology",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Third&subject=Web%20Technology",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Third&subject=Web%20Technology",
        },
        {
          name: "Numerical Methods",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Third&subject=Numerical%20Methods",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Third&subject=Numerical%20Methods",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Third&subject=Numerical%20Methods",
        },
        {
          name: "Operating System",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Third&subject=Software%20Engineering",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Third&subject=Software%20Engineering",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Third&subject=Software%20Engineering",
        },
        {
          name: "Principle of Management",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Third&subject=Theory%20of%20Computation",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Third&subject=Theory%20of%20Computation",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Third&subject=Theory%20of%20Computation",
        },
      ],
      sem4: [
        {
          name: "Web Technology I",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fourth&subject=Operating%20Systems",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fourth&subject=Operating%20Systems",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fourth&subject=Operating%20Systems",
        },
        {
          name: "Artificial Intelligence",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fourth&subject=Database%20Management%20System",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fourth&subject=Database%20Management%20System",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fourth&subject=Database%20Management%20System",
        },
        {
          name: "System Analysis And Design",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fourth&subject=Computer%20Networks",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fourth&subject=Computer%20Networks",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fourth&subject=Computer%20Networks",
        },
        {
          name: "Network And Data Communications",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fourth&subject=Computer%20Graphics%20and%20Animation",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fourth&subject=Computer%20Graphics%20and%20Animation",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fourth&subject=Computer%20Graphics%20and%20Animation",
        },
        {
          name: "Operations Research",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fourth&subject=Research%20Methodology%20for%20BIT",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fourth&subject=Research%20Methodology%20for%20BIT",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fourth&subject=Research%20Methodology%20for%20BIT",
        },
      ],
      sem5: [
        {
          name: "Web Technology II",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fifth&subject=Design%20and%20Analysis%20of%20Algorithms",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fifth&subject=Design%20and%20Analysis%20of%20Algorithms",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fifth&subject=Design%20and%20Analysis%20of%20Algorithms",
        },
        {
          name: "Software Engineering",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fifth&subject=System%20Analysis%20and%20Design",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fifth&subject=System%20Analysis%20and%20Design",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fifth&subject=System%20Analysis%20and%20Design",
        },
        {
          name: "Information Security",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fifth&subject=Cryptography",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fifth&subject=Cryptography",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fifth&subject=Cryptography",
        },
        {
          name: "Computer Graphics",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fifth&subject=Multimedia%20Systems",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fifth&subject=Multimedia%20Systems",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fifth&subject=Multimedia%20Systems",
        },
        {
          name: "Technical Writing",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Fifth&subject=Knowledge%20Management",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Fifth&subject=Knowledge%20Management",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Fifth&subject=Knowledge%20Management",
        },
      ],
      sem6: [
        {
          name: "Net -Centric Computing",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Sixth&subject=Mobile%20Application%20Development",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Sixth&subject=Mobile%20Application%20Development",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Sixth&subject=Mobile%20Application%20Development",
        },
        {
          name: "Database Administration",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Sixth&subject=Cloud%20Computing",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Sixth&subject=Cloud%20Computing",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Sixth&subject=Cloud%20Computing",
        },
        {
          name: "Management Information System",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Sixth&subject=Geographical%20Information%20System",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Sixth&subject=Geographical%20Information%20System",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Sixth&subject=Geographical%20Information%20System",
        },
        {
          name: "Research Methodology",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
        },
        {
          name: "Geograophical Information System",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
        },
        {
          name: "Multimedia Computing",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
        },
        {
          name: "Wireless Networking",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
        },
        {
          name: "Society And Ethics In IT",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
        },
        {
          name: "Psychology",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Sixth&subject=Cyber%20Law%20and%20Professional%20Ethics",
        },
      ],
      sem7: [
        {
          name: "Advance Java Programming",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Seventh&subject=Big%20Data",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Seventh&subject=Big%20Data",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Seventh&subject=Big%20Data",
        },
        {
          name: "Software Project Management",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Seventh&subject=IT%20Governance",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Seventh&subject=IT%20Governance",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Seventh&subject=IT%20Governance",
        },
        {
          name: "E-Governance",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Seventh&subject=E-Governance",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Seventh&subject=E-Governance",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Seventh&subject=E-Governance",
        },
        {
          name: "Project Work",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Seventh&subject=Project%20Work%20I",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Seventh&subject=Project%20Work%20I",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Seventh&subject=Project%20Work%20I",
        },
        {
          name: "DSS And Expert System",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Seventh&subject=Internship",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Seventh&subject=Internship",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Seventh&subject=Internship",
        },
        {
          name: "Mobile Application Development",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Seventh&subject=Software%20Testing",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Seventh&subject=Software%20Testing",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Seventh&subject=Software%20Testing",
        },
        {
          name: "Simulation And Modeling",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Seventh&subject=Cloud%20Computing",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Seventh&subject=Cloud%20Computing",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Seventh&subject=Cloud%20Computing",
        },
        {
          name: "Cloud Computing",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Seventh&subject=Mobile%20Application%20Development",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Seventh&subject=Mobile%20Application%20Development",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Seventh&subject=Mobile%20Application%20Development",
        },
        {
          name: "Marketing",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Seventh&subject=Information%20Retrieval",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Seventh&subject=Information%20Retrieval",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Seventh&subject=Information%20Retrieval",
        },
      ],
      sem8: [
        {
          name: "Network System Administration",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Eighth&subject=Internship",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Eighth&subject=Internship",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Eighth&subject=Internship",
        },
        {
          name: "E-Governance",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Eighth&subject=Project%20Work%20II",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Eighth&subject=Project%20Work%20II",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Eighth&subject=Project%20Work%20II",
        },
        {
          name: "Internship",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Eighth&subject=Information%20Retrieval",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Eighth&subject=Information%20Retrieval",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Eighth&subject=Information%20Retrieval",
        },
        {
          name: "Data Warehousing And Data Mining",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Eighth&subject=IT%20Governance",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Eighth&subject=IT%20Governance",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Eighth&subject=IT%20Governance",
        },
        {
          name: "Knowledge Management",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Eighth&subject=Big%20Data",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Eighth&subject=Big%20Data",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Eighth&subject=Big%20Data",
        },
        {
          name: "Image Processing",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Eighth&subject=Software%20Testing",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Eighth&subject=Software%20Testing",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Eighth&subject=Software%20Testing",
        },
        {
          name: "Network Security",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Eighth&subject=Information%20Security",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Eighth&subject=Information%20Security",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Eighth&subject=Information%20Security",
        },
        {
          name: "Introduction To Telecommunications",
          syllabus:
            "https://bitinfonepal.com/resources/syllabus?semester=Eighth&subject=IT%20Entrepreneurship",
          notes:
            "https://bitinfonepal.com/resources/notes?semester=Eighth&subject=IT%20Entrepreneurship",
          questionPapers:
            "https://bitinfonepal.com/resources/questions?semester=Eighth&subject=IT%20Entrepreneurship",
        },
      ],
    },
  }));
});
function gallery() {
  return {
    images: [
      {
        src: "assets/gallery/2nd vs 7th sem Basketball.jpg",
        alt: "2nd vs 7th sem Basketball Match",
        caption: "2nd vs 7th sem Basketball Match",
      },
      {
        src: "assets/gallery/Coder Hustle 1.0.jpeg",
        alt: "Coder Hustle 1.0",
        caption: "Coder Hustle 1.0",
      },
      {
        src: "assets/gallery/Farewell Program.jpg",
        alt: "Farewell Program",
        caption: "Farewell Program",
      },
      {
        src: "assets/gallery/Shivajatha hiking.jpg",
        alt: "Shiva jatta Hiking",
        caption: "Shiva jatta Hiking",
      },
      {
        src: "assets/gallery/Youth it mou signing.jpg",
        alt: "Youth IT MOU Signing",
        caption: "Youth IT MOU Signing",
      },
      {
        src: "assets/gallery/library program.jpg",
        alt: "E-library Resources Program",
        caption: "E-library Resources Program",
      },
      {
        src: "assets/gallery/Danabari hiking.jpg",
        alt: "Danabari Hiking",
        caption: "Danabari Hiking",
      },
      {
        src: "assets/gallery/chindra dada hiking.jpg",
        alt: "Chinde dada Hiking",
        caption: "Chinde dada Hiking",
      },
      {
        src: "assets/gallery/girls awarness program.jpg",
        alt: "Women Empowerment Program",
        caption: "Women Empowerment Program",
      },
    ],
  };
}

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
