export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  image: string;
  mapUrl: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const categories: Category[] = [
  {
    id: "makanan-utama",
    name: "Makanan Utama",
    description: "Hidangan utama khas Nusantara yang mengenyangkan",
    image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&q=80",
  },
  {
    id: "appetizer",
    name: "Appetizer",
    description: "Hidangan pembuka yang menggugah selera",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=600&q=80",
  },
  {
    id: "sup-soto",
    name: "Sup & Soto",
    description: "Kuah hangat dengan cita rasa tradisional",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80",
  },
  {
    id: "minuman",
    name: "Minuman",
    description: "Minuman segar khas Indonesia",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
  },
  {
    id: "dessert",
    name: "Dessert",
    description: "Pencuci mulut tradisional yang manis",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "nasi-goreng-kampung",
    name: "Nasi Goreng Kampung",
    description: "Nasi goreng dengan bumbu tradisional, telur, ayam suwir, dan kerupuk",
    price: 45000,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    category: "makanan-utama",
    isPopular: true,
  },
  {
    id: "rendang-sapi",
    name: "Rendang Sapi",
    description: "Daging sapi empuk dengan bumbu rendang khas Padang",
    price: 75000,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=600&q=80",
    category: "makanan-utama",
    isPopular: true,
    isSpicy: true,
  },
  {
    id: "sate-ayam-madura",
    name: "Sate Ayam Madura",
    description: "10 tusuk sate ayam dengan bumbu kacang dan lontong",
    price: 55000,
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=600&q=80",
    category: "makanan-utama",
    isPopular: true,
  },
  {
    id: "gado-gado-jakarta",
    name: "Gado-Gado Jakarta",
    description: "Sayuran segar dengan bumbu kacang, tahu, tempe, dan kerupuk",
    price: 35000,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    category: "makanan-utama",
  },
  {
    id: "ayam-bakar-taliwang",
    name: "Ayam Bakar Taliwang",
    description: "Ayam bakar dengan sambal pedas khas Lombok",
    price: 65000,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80",
    category: "makanan-utama",
    isSpicy: true,
  },
  {
    id: "mie-goreng-jawa",
    name: "Mie Goreng Jawa",
    description: "Mie goreng dengan bumbu manis khas Jawa, telur, dan sayuran",
    price: 40000,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    category: "makanan-utama",
  },
  {
    id: "lumpia-semarang",
    name: "Lumpia Semarang",
    description: "5 buah lumpia goreng isi rebung dan udang",
    price: 30000,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80",
    category: "appetizer",
    isPopular: true,
  },
  {
    id: "tahu-tempe-goreng",
    name: "Tahu Tempe Goreng",
    description: "Tahu dan tempe goreng crispy dengan sambal kecap",
    price: 25000,
    image: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?w=600&q=80",
    category: "appetizer",
  },
  {
    id: "perkedel-kentang",
    name: "Perkedel Kentang",
    description: "4 buah perkedel kentang dengan daging cincang",
    price: 28000,
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600&q=80",
    category: "appetizer",
  },
  {
    id: "soto-ayam-lamongan",
    name: "Soto Ayam Lamongan",
    description: "Soto ayam kuning dengan telur, soun, dan koya",
    price: 38000,
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80",
    category: "sup-soto",
    isPopular: true,
  },
  {
    id: "sop-buntut",
    name: "Sop Buntut",
    description: "Sop buntut sapi dengan kuah bening dan sayuran",
    price: 85000,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    category: "sup-soto",
  },
  {
    id: "rawon-surabaya",
    name: "Rawon Surabaya",
    description: "Sup daging dengan kuah hitam kluwek khas Surabaya",
    price: 55000,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
    category: "sup-soto",
  },
  {
    id: "es-teler",
    name: "Es Teler",
    description: "Alpukat, kelapa muda, nangka dengan susu dan es serut",
    price: 25000,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    category: "minuman",
    isPopular: true,
  },
  {
    id: "es-cendol",
    name: "Es Cendol",
    description: "Cendol dengan santan, gula merah, dan es",
    price: 22000,
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&q=80",
    category: "minuman",
  },
  {
    id: "jus-alpukat",
    name: "Jus Alpukat",
    description: "Jus alpukat segar dengan susu coklat",
    price: 28000,
    image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=600&q=80",
    category: "minuman",
  },
  {
    id: "teh-tarik",
    name: "Teh Tarik",
    description: "Teh manis dengan susu kental manis",
    price: 18000,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80",
    category: "minuman",
  },
  {
    id: "kopi-tubruk",
    name: "Kopi Tubruk",
    description: "Kopi hitam tradisional dengan gula aren",
    price: 20000,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    category: "minuman",
  },
  {
    id: "es-pisang-ijo",
    name: "Es Pisang Ijo",
    description: "Pisang dengan kulit hijau pandan, sirup, dan es",
    price: 25000,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    category: "dessert",
  },
  {
    id: "klepon",
    name: "Klepon",
    description: "6 buah klepon pandan dengan isian gula merah",
    price: 20000,
    image: "https://images.unsplash.com/photo-1606636660488-16a8646f012c?w=600&q=80",
    category: "dessert",
  },
  {
    id: "kolak-pisang",
    name: "Kolak Pisang",
    description: "Kolak pisang dengan santan dan gula merah",
    price: 22000,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    category: "dessert",
  },
];

export const locations: Location[] = [
  {
    id: "jakarta-pusat",
    name: "Rasa Negeri Jakarta Pusat",
    address: "Jl. Sudirman No. 123",
    city: "Jakarta Pusat",
    phone: "(021) 1234-5678",
    hours: "10:00 - 22:00",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "jakarta-selatan",
    name: "Rasa Negeri Jakarta Selatan",
    address: "Jl. Kemang Raya No. 45",
    city: "Jakarta Selatan",
    phone: "(021) 2345-6789",
    hours: "10:00 - 22:00",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "bandung",
    name: "Rasa Negeri Bandung",
    address: "Jl. Braga No. 78",
    city: "Bandung",
    phone: "(022) 3456-7890",
    hours: "09:00 - 22:00",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "surabaya",
    name: "Rasa Negeri Surabaya",
    address: "Jl. Tunjungan No. 56",
    city: "Surabaya",
    phone: "(031) 4567-8901",
    hours: "10:00 - 22:00",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    mapUrl: "https://maps.google.com",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Interior restoran",
    category: "interior",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    alt: "Nasi goreng",
    category: "makanan",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1545247181-516773cae754?w=800&q=80",
    alt: "Rendang",
    category: "makanan",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    alt: "Area makan",
    category: "interior",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=800&q=80",
    alt: "Sate ayam",
    category: "makanan",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Acara catering",
    category: "acara",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    alt: "Ruang VIP",
    category: "interior",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&q=80",
    alt: "Soto ayam",
    category: "makanan",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    alt: "Es teler",
    category: "minuman",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
    alt: "Acara pernikahan",
    category: "acara",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Dekorasi restoran",
    category: "interior",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=800&q=80",
    alt: "Es cendol",
    category: "minuman",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "Food Blogger",
    content: "Rasa Negeri benar-benar membawa saya kembali ke kampung halaman. Rendang-nya luar biasa!",
    rating: 5,
  },
  {
    id: "2",
    name: "Siti Rahayu",
    role: "Pelanggan Setia",
    content: "Sudah 5 tahun berlangganan dan tidak pernah kecewa. Pelayanan ramah dan makanan selalu konsisten.",
    rating: 5,
  },
  {
    id: "3",
    name: "Andi Wijaya",
    role: "Event Organizer",
    content: "Catering dari Rasa Negeri selalu menjadi pilihan utama untuk acara-acara kami. Profesional!",
    rating: 5,
  },
];

export const cateringPackages = [
  {
    id: "paket-hemat",
    name: "Paket Hemat",
    description: "Cocok untuk acara kecil dan pertemuan keluarga",
    price: 75000,
    minOrder: 20,
    items: ["Nasi Putih", "Ayam Goreng", "Sayur Asem", "Sambal", "Kerupuk", "Buah Potong"],
  },
  {
    id: "paket-standar",
    name: "Paket Standar",
    description: "Pilihan terbaik untuk acara kantor dan arisan",
    price: 100000,
    minOrder: 30,
    items: ["Nasi Putih", "Rendang Sapi", "Ayam Bakar", "Gado-Gado", "Sambal", "Kerupuk", "Es Teh", "Buah Potong"],
  },
  {
    id: "paket-premium",
    name: "Paket Premium",
    description: "Sempurna untuk acara spesial dan pernikahan",
    price: 150000,
    minOrder: 50,
    items: ["Nasi Putih/Nasi Kuning", "Rendang Sapi", "Ayam Bakar Taliwang", "Sate Ayam", "Gado-Gado", "Sop Buntut", "Sambal", "Kerupuk", "Es Teler", "Kue Tradisional"],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getMenuByCategory(categoryId: string): MenuItem[] {
  return menuItems.filter((item) => item.category === categoryId);
}

export function getPopularItems(): MenuItem[] {
  return menuItems.filter((item) => item.isPopular);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((cat) => cat.id === categoryId);
}
