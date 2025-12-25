export const categories = [
  { id: "makanan-utama", name: "Makanan Utama", icon: "🍛" },
  { id: "appetizer", name: "Appetizer", icon: "🥗" },
  { id: "sup-soto", name: "Sup & Soto", icon: "🍜" },
  { id: "minuman", name: "Minuman", icon: "🥤" },
  { id: "dessert", name: "Dessert", icon: "🍮" },
];

export const menuItems = [
  {
    id: "nasi-goreng",
    name: "Nasi Goreng Kampung",
    desc: "Nasi goreng dengan bumbu tradisional, telur, dan kerupuk",
    price: 45000,
    category: "makanan-utama",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80",
    popular: true,
  },
  {
    id: "rendang",
    name: "Rendang Sapi",
    desc: "Daging sapi empuk dengan bumbu rendang khas Padang",
    price: 75000,
    category: "makanan-utama",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=400&q=80",
    popular: true,
  },
  {
    id: "sate-ayam",
    name: "Sate Ayam Madura",
    desc: "10 tusuk sate ayam dengan bumbu kacang dan lontong",
    price: 55000,
    category: "makanan-utama",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&q=80",
    popular: true,
  },
  {
    id: "gado-gado",
    name: "Gado-Gado Jakarta",
    desc: "Sayuran segar dengan bumbu kacang, tahu, tempe",
    price: 35000,
    category: "makanan-utama",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
  },
  {
    id: "ayam-bakar",
    name: "Ayam Bakar Taliwang",
    desc: "Ayam bakar dengan sambal pedas khas Lombok",
    price: 65000,
    category: "makanan-utama",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&q=80",
  },
  {
    id: "mie-goreng",
    name: "Mie Goreng Jawa",
    desc: "Mie goreng dengan bumbu manis khas Jawa",
    price: 40000,
    category: "makanan-utama",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
  },
  {
    id: "lumpia",
    name: "Lumpia Semarang",
    desc: "5 buah lumpia goreng isi rebung dan udang",
    price: 30000,
    category: "appetizer",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80",
    popular: true,
  },
  {
    id: "tahu-tempe",
    name: "Tahu Tempe Goreng",
    desc: "Tahu dan tempe goreng crispy dengan sambal",
    price: 25000,
    category: "appetizer",
    image: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?w=400&q=80",
  },
  {
    id: "soto-ayam",
    name: "Soto Ayam Lamongan",
    desc: "Soto ayam kuning dengan telur, soun, dan koya",
    price: 38000,
    category: "sup-soto",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&q=80",
    popular: true,
  },
  {
    id: "sop-buntut",
    name: "Sop Buntut",
    desc: "Sop buntut sapi dengan kuah bening dan sayuran",
    price: 85000,
    category: "sup-soto",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  },
  {
    id: "es-teler",
    name: "Es Teler",
    desc: "Alpukat, kelapa muda, nangka dengan susu dan es",
    price: 25000,
    category: "minuman",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
    popular: true,
  },
  {
    id: "es-cendol",
    name: "Es Cendol",
    desc: "Cendol dengan santan dan gula merah",
    price: 22000,
    category: "minuman",
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&q=80",
  },
  {
    id: "kopi-tubruk",
    name: "Kopi Tubruk",
    desc: "Kopi hitam tradisional dengan gula aren",
    price: 20000,
    category: "minuman",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
  },
  {
    id: "klepon",
    name: "Klepon",
    desc: "6 buah klepon pandan dengan gula merah",
    price: 20000,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1606636660488-16a8646f012c?w=400&q=80",
  },
  {
    id: "kolak",
    name: "Kolak Pisang",
    desc: "Kolak pisang dengan santan dan gula merah",
    price: 22000,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
  },
];

export const locations = [
  {
    id: "jakarta-pusat",
    city: "Jakarta Pusat",
    address: "Jl. Sudirman No. 123",
    phone: "(021) 1234-5678",
    hours: "10:00 - 22:00",
  },
  {
    id: "jakarta-selatan",
    city: "Jakarta Selatan",
    address: "Jl. Kemang Raya No. 45",
    phone: "(021) 2345-6789",
    hours: "10:00 - 22:00",
  },
  {
    id: "bandung",
    city: "Bandung",
    address: "Jl. Braga No. 78",
    phone: "(022) 3456-7890",
    hours: "09:00 - 22:00",
  },
  {
    id: "surabaya",
    city: "Surabaya",
    address: "Jl. Tunjungan No. 56",
    phone: "(031) 4567-8901",
    hours: "10:00 - 22:00",
  },
];

export const testimonials = [
  {
    name: "Budi Santoso",
    role: "Food Blogger",
    text: "Rendang terenak yang pernah saya coba! Benar-benar mengingatkan masakan nenek.",
  },
  {
    name: "Siti Rahayu",
    role: "Pelanggan Setia",
    text: "Sudah 5 tahun berlangganan. Pelayanan ramah dan makanan selalu konsisten.",
  },
  {
    name: "Andi Wijaya",
    role: "Event Organizer",
    text: "Catering dari Rasa Negeri selalu jadi pilihan utama untuk acara-acara kami.",
  },
];

export const cateringPackages = [
  {
    name: "Paket Hemat",
    price: 75000,
    minOrder: 20,
    items: ["Nasi Putih", "Ayam Goreng", "Sayur Asem", "Sambal", "Kerupuk"],
  },
  {
    name: "Paket Standar",
    price: 100000,
    minOrder: 30,
    items: ["Nasi Putih", "Rendang Sapi", "Ayam Bakar", "Gado-Gado", "Sambal", "Es Teh"],
    popular: true,
  },
  {
    name: "Paket Premium",
    price: 150000,
    minOrder: 50,
    items: ["Nasi Kuning", "Rendang", "Ayam Bakar", "Sate Ayam", "Sop Buntut", "Es Teler", "Kue"],
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", alt: "Interior" },
  { src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80", alt: "Nasi Goreng" },
  { src: "https://images.unsplash.com/photo-1545247181-516773cae754?w=600&q=80", alt: "Rendang" },
  { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80", alt: "Dining" },
  { src: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=600&q=80", alt: "Sate" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Event" },
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80", alt: "VIP Room" },
  { src: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80", alt: "Soto" },
];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);
}
