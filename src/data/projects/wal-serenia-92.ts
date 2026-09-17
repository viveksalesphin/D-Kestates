import type { Project } from "@/lib/types";

/**
 * WAL Serenia 92 — currently the featured project.
 *
 * Data sourced from the D&K Estates brief / approved developer material.
 * Figures that were NOT supplied (possession dates, tower/unit counts, exact
 * travel times, land area) are intentionally omitted rather than invented.
 *
 * Images are labelled placeholders until real WAL Serenia renders are dropped
 * in. To swap: add the asset to /public/images/projects/wal-serenia-92/ and set
 * `src` to its path and `placeholder: false`.
 */
export const walSerenia92: Project = {
  slug: "wal-serenia-92",
  projectName: "WAL Serenia 92",
  positioning: "Serenia Wellness Residences",
  developer: "WAL Developments Pvt. Ltd.",
  advisor: "D&K Estates",
  location: "Sector 92, Gurugram",
  city: "Gurugram",
  propertyType: "Residential",
  configurationSummary: "Premium 3 BHK Residences",
  sizesSummary: "1,250 & 1,350 Sq. Ft.",
  configurations: [
    {
      label: "3 BHK",
      size: "1,250 Sq. Ft.",
      indicativePrice: "₹1,46,87,500",
      note: "Indicative base consideration at preferred pricing",
    },
    {
      label: "3 BHK",
      size: "1,350 Sq. Ft.",
      indicativePrice: "₹1,58,62,500",
      note: "Indicative base consideration at preferred pricing",
    },
  ],
  pricing: {
    startingFrom: "Starting from approx. ₹1.47 Cr*",
    benchmarkRate: "₹12,500 / sq. ft.",
    offerRate: "₹11,750 / sq. ft.",
    offerLabel: "Founder's Edition — limited-period preferred pricing",
    disclaimer:
      "*Pricing is indicative, subject to inventory availability, developer terms and change without prior notice. Statutory and other applicable charges — including GST, stamp duty, registration, IFMS, electricity/water connection deposits and maintenance deposits — may apply and are not necessarily included. Contact D&K Estates for the latest cost sheet.",
  },
  hero: {
    src: "/images/projects/wal-serenia-92/serenia-pool.png",
    alt: "WAL Serenia 92 — Wellness Residences with lap pool, Sector 92, Gurugram",
    placeholder: false,
    caption: "Project render — representational",
  },
  gallery: [
    {
      src: "/images/projects/wal-serenia-92/serenia-towers.png",
      alt: "WAL Serenia 92 residential towers, Sector 92, Gurugram",
      placeholder: false,
      caption: "Project render — representational",
    },
    {
      src: "/images/projects/wal-serenia-92/serenia-pool.png",
      alt: "WAL Serenia 92 wellness amenities and lap pool",
      placeholder: false,
      caption: "Project render — representational",
    },
  ],
  shortDescription:
    "Wellness-focused 3 BHK residences in Sector 92, Gurugram — modern homes set amid greener surroundings and wellness-oriented amenities.",
  description: [
    "WAL Serenia 92 is a wellness-oriented residential development in Sector 92, Gurugram, designed around modern homes, greener surroundings and a more balanced everyday lifestyle.",
    "The development places wellness at its core — from landscaped green spaces to amenities that support health and calm — while keeping the convenience of a well-connected Gurugram location.",
    "D&K Estates is the property advisor for WAL Serenia 92. We help you understand the configurations, pricing, floor plans and location so you can decide whether this home fits your requirement — whether that's self-use or investment.",
  ],
  amenities: [
    { label: "Wellness at the Core", icon: "heart" },
    { label: "Lush Green Landscapes", icon: "leaf" },
    { label: "Yoga Lawn & Meditation Spaces", icon: "flower" },
    { label: "Miyawaki Forest Trail", icon: "trees" },
    { label: "Lap Pool & Health Facilities", icon: "waves" },
    { label: "Oxygen Park", icon: "wind" },
    { label: "24/7 Security & Smart Living", icon: "shield" },
    { label: "Fragrance Garden", icon: "flower" },
    { label: "Ayurveda Garden", icon: "leaf" },
    { label: "Outdoor Fitness", icon: "dumbbell" },
    { label: "Pickleball Court", icon: "activity" },
    { label: "Temple", icon: "landmark" },
    { label: "Reflexology Deck", icon: "footprints" },
    { label: "Badminton Court", icon: "activity" },
  ],
  connectivity: {
    summary:
      "Strategically located in Sector 92, Gurugram — a well-connected address with easy access to workplaces, transit and the wider NCR road network.",
    items: [
      { label: "New Cyberhub", value: "1 min" },
      { label: "Southern Peripheral Road", value: "2 mins" },
      { label: "DLF Corporate Greens", value: "8 mins" },
      { label: "IGI Airport", value: "32 mins" },
      { label: "Easy access to NH-48" },
      { label: "Nearby metro connectivity" },
    ],
    note: "Travel times and connectivity points are as indicated in the approved project material and are approximate; actual times may vary with traffic and route.",
  },
  rera: {
    registrationNo: "RC/REP/HARERA/GGM/938/670/2025/41/SS(1)/1",
    registrationDate: "10/08/2026",
    authority: "HARERA — Haryana Real Estate Regulatory Authority, Gurugram",
    authorityUrl: "https://haryanarera.gov.in/",
  },
  featured: true,
  status: "Featured",
  disclaimer:
    "WAL Serenia 92 is developed by WAL Developments Pvt. Ltd. D&K Estates is the property advisor and enquiry point for this project and is not the developer/promoter. Images are representational unless stated otherwise. All details are subject to the developer's terms, applicable approvals and change without notice.",
  leadFormHeading: "Get WAL Serenia 92 Price List & Brochure",
  leadFormSubtext:
    "Share a few details and a D&K Estates property advisor will connect with you with the latest pricing, floor plans and project information.",
  seo: {
    title: "WAL Serenia 92, Sector 92 Gurugram | D&K Estates",
    description:
      "Explore WAL Serenia 92 wellness residences in Sector 92, Gurugram. Discover 3 BHK configurations, amenities, floor plans and latest pricing through D&K Estates.",
  },
};
