export const menuCategories = [
  { slug: "hidangan-utama", name: "Hidangan Utama", count: 45 },
  { slug: "appetizer", name: "Appetizer & Snack", count: 25 },
  { slug: "sambal", name: "Sambal Nusantara", count: 15 },
  { slug: "minuman", name: "Minuman Tradisional", count: 20 },
  { slug: "dessert", name: "Dessert Lokal", count: 15 },
  { slug: "paket", name: "Paket Keluarga", count: 8 },
];

export const menuItems: Record<string, Array<{
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  spicy?: number;
}>> = {
  "hidangan-utama": [
    { id: 1, name: "Rendang Padang Premium", description: "Daging sapi pilihan dimasak 8 jam dengan rempah autentik Minang", price: "Rp 85.000", image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500", badge: "Best Seller", spicy: 2 },
    { id: 2, name: "Gudeg Jogja Komplit", description: "Gudeg nangka muda dengan areh, krecek, telur, dan ayam kampung", price: "Rp 65.000", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500", badge: "Signature", spicy: 0 },
    { id: 3, name: "Bebek Goreng Madura", description: "Bebek kampung dimarinasi 24 jam, goreng kering dengan sambal korek", price: "Rp 95.000", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500", spicy: 3 },
    { id: 4, name: "Iga Bakar Kalasan", description: "Iga sapi bakar dengan bumbu manis khas Kalasan yang legendaris", price: "Rp 120.000", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500", spicy: 1 },
    { id: 5, name: "Soto Betawi Susu", description: "Soto khas Jakarta dengan kuah santan susu yang creamy dan kaya rempah", price: "Rp 55.000", image: "https://images.unsplash.com/photo-1547928578-bca3e9c5a0ab?w=500", spicy: 1 },
    { id: 6, name: "Ayam Betutu Bali", description: "Ayam utuh diisi bumbu betutu, dibungkus daun pisang dan dipanggang", price: "Rp 150.000", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500", badge: "Chef Special", spicy: 2 },
  ],
  "appetizer": [
    { id: 7, name: "Sate Lilit Bali", description: "Sate ikan khas Bali dengan bumbu lengkuas dan kelapa parut segar", price: "Rp 55.000", image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=500", spicy: 1 },
    { id: 8, name: "Lumpia Semarang", description: "Lumpia goreng isi rebung dan udang dengan kulit tipis renyah", price: "Rp 35.000", image: "https://images.unsplash.com/photo-1548507200-54d832c61abc?w=500", spicy: 0 },
    { id: 9, name: "Perkedel Jagung", description: "Perkedel jagung manis goreng dengan daun bawang dan cabai rawit", price: "Rp 25.000", image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=500", spicy: 1 },
  ],
  "sambal": [
    { id: 10, name: "Sambal Matah", description: "Sambal segar khas Bali dengan bawang merah, serai, dan minyak kelapa", price: "Rp 15.000", image: "https://images.unsplash.com/photo-1606335543042-57c525922933?w=500", spicy: 3 },
    { id: 11, name: "Sambal Terasi", description: "Sambal tradisional dengan terasi, tomat, dan cabai merah", price: "Rp 12.000", image: "https://images.unsplash.com/photo-1606335543042-57c525922933?w=500", spicy: 3 },
    { id: 12, name: "Sambal Ijo Padang", description: "Sambal hijau khas Padang dengan cabai hijau dan teri medan", price: "Rp 15.000", image: "https://images.unsplash.com/photo-1606335543042-57c525922933?w=500", spicy: 2 },
  ],
  "minuman": [
    { id: 13, name: "Es Teh Tarik", description: "Teh tarik ala Indonesia dengan susu kental manis", price: "Rp 18.000", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=500" },
    { id: 14, name: "Wedang Jahe", description: "Minuman hangat dari jahe segar, gula aren, dan serai", price: "Rp 20.000", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500" },
    { id: 15, name: "Es Cendol", description: "Cendol segar dengan santan, gula merah, dan es serut", price: "Rp 22.000", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=500" },
  ],
  "dessert": [
    { id: 16, name: "Klepon", description: "Bola ketan hijau isi gula merah dengan taburan kelapa parut", price: "Rp 18.000", image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500" },
    { id: 17, name: "Es Pisang Ijo", description: "Pisang dibungkus adonan hijau dengan saus santan dan sirup manis", price: "Rp 25.000", image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500" },
    { id: 18, name: "Kolak Pisang", description: "Kolak pisang dengan santan dan gula merah", price: "Rp 20.000", image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500" },
  ],
  "paket": [
    { id: 19, name: "Paket Nusantara", description: "Rendang, gudeg, soto betawi, nasi, sambal 3 macam. Untuk 4 orang", price: "Rp 350.000", image: "https://images.unsplash.com/photo-1547928578-bca3e9c5a0ab?w=500", badge: "Best Value" },
    { id: 20, name: "Paket Padang", description: "Rendang, ayam pop, gulai nangka, nasi, sambal ijo. Untuk 4 orang", price: "Rp 300.000", image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500" },
    { id: 21, name: "Paket Bali", description: "Ayam betutu, sate lilit, lawar, nasi, sambal matah. Untuk 4 orang", price: "Rp 400.000", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500", badge: "Premium" },
  ],
};

export const locations = [
  {
    id: 1,
    name: "Rasa Negeri Kemang",
    badge: "Flagship",
    address: "Jl. Kemang Raya No. 45, Jakarta Selatan",
    capacity: "150 kursi + Private Room",
    hours: "11:00 - 22:00",
    phone: "(021) 555-1234",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500",
  },
  {
    id: 2,
    name: "Rasa Negeri SCBD",
    badge: null,
    address: "Pacific Place Mall, Lt. 3, SCBD",
    capacity: "80 kursi",
    hours: "10:00 - 22:00",
    phone: "(021) 555-5678",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500",
  },
  {
    id: 3,
    name: "Rasa Negeri PIK",
    badge: null,
    address: "Jl. Pantai Indah Utara No. 12, PIK",
    capacity: "120 kursi + Outdoor",
    hours: "11:00 - 23:00",
    phone: "(021) 555-9012",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=500",
  },
];

export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800", alt: "Interior Restoran", category: "interior" },
  { id: 2, src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800", alt: "Eksterior", category: "eksterior" },
  { id: 3, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800", alt: "Private Room", category: "interior" },
  { id: 4, src: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800", alt: "Rendang Padang", category: "makanan" },
  { id: 5, src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800", alt: "Gudeg Jogja", category: "makanan" },
  { id: 6, src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800", alt: "Iga Bakar", category: "makanan" },
  { id: 7, src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800", alt: "Area Taman", category: "eksterior" },
  { id: 8, src: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=800", alt: "Sate Lilit", category: "makanan" },
];
