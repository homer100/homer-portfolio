// ===== EASY IMAGE LOCATIONS =====
// PROFILE PICTURE:
// Replace public/images/profile/profile.jpg with your own picture.
// The filename and location stay the same, so the profile code does not need editing.
const profileImage = "public/images/profile/profile.jpg";

// CERTIFICATES:
// Put your certificate images inside public/images/certificates/
// The sample entries now use the uploaded Sololearn certificates.
// Add or remove an entry below when you add or remove a certificate.
const certificates = [
  {
    title: "Introduction to HTML",
    organization: "Sololearn",
    date: "September 10, 2025",
    image: "public/images/certificates/HTML.jpg",
    alt: "Sololearn Introduction to HTML course certificate awarded to Homer Conda on September 10, 2025",
    pdf: "public/images/certificates/HTML.pdf",
    link: ""
  },
  {
    title: "Introduction to JavaScript",
    organization: "Sololearn",
    date: "September 11, 2025",
    image: "public/images/certificates/JavaScript.jpg",
    alt: "Sololearn Introduction to JavaScript course certificate awarded to Homer Conda on September 11, 2025",
    pdf: "public/images/certificates/JavaScript.pdf",
    link: ""
  },
  {
    title: "Introduction to CSS",
    organization: "Sololearn",
    date: "September 12, 2025",
    image: "public/images/certificates/CSS.jpg",
    alt: "Sololearn Introduction to CSS course certificate awarded to Homer Conda on September 12, 2025",
    pdf: "public/images/certificates/CSS.pdf",
    link: ""
  }
];

// PROJECT IMAGES:
// Put project screenshots inside public/images/projects/ and add their details here.
const projects = [
  {
    name: "Listahan ni Nanay",
    type: "Manual testing & evaluation",
    description: "Manually tested and evaluated the Listahan ni Nanay grocery-list app.",
    image: "public/images/projects/listahan-ni-nanay.jpg",
    imageAlt: "Listahan ni Nanay grocery-list app concept with a shopping cart and peso, grocery, and produce icons",
    technologies: ["Manual Testing", "App Evaluation"],
    github: "",
    demo: ""
  },
  {
    name: "IsdaPresyo",
    type: "Manual testing & evaluation",
    description: "Manually tested and evaluated IsdaPresyo, a fish-price monitoring app for the Bulan, Sorsogon fish market.",
    image: "public/images/projects/isda-presyo.jpg",
    imageAlt: "IsdaPresyo fish price monitoring interface for Bulan, Sorsogon, showing a fish type selector and public read-only view",
    technologies: ["Manual Testing", "App Evaluation"],
    github: "",
    demo: ""
  }
];

// ===== EDIT YOUR SKILLS HERE =====
// Keep the level descriptions honest; these are beginner-friendly examples.
const programmingSkills = [
  { name: "HTML", level: "Basic" },
  { name: "CSS", level: "Basic" },
  { name: "JavaScript", level: "Currently learning" },
  { name: "Python", level: "Familiar" },
  { name: "Java", level: "Familiar" },
  { name: "C++", level: "Familiar" }
];

const toolSkills = [
  { name: "Git / GitHub", level: "Basic" },
  { name: "Visual Studio Code", level: "Familiar" },

  { name: "Add your tools", level: "Edit me" }
];
