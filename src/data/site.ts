// ============================================================
// DATA TERPUSAT — edit file ini untuk update konten website
// Tidak perlu sentuh komponen atau halaman lainnya
// ============================================================

export const SITE = {
  name: 'Wisata Desa BMJ',
  fullName: 'Wisata Desa BMJ Mojopahit',
  tagline: 'Wisataku, Wisatamu, Wisatane Wong Akeh.',
  description:
    'Wisata Desa Bumi Mulyo Jati (BMJ) adalah tempat wisata unggulan Jawa Timur di Desa Randugenengan, Kecamatan Dlanggu, Kabupaten Mojokerto — mengusung elemen budaya Kerajaan Majapahit.',
  url: 'https://wisatadesabmj.web.id',
  address: 'Jl. Sudirman No.2, Randugenengan, Kec. Dlanggu, Kabupaten Mojokerto, Jawa Timur 61371',
  phone: '+62 857-4957-4107',
  email: 'timkreatifwd@gmail.com',
  mapsUrl:
    'https://www.google.com/maps/dir//CFV5%2B94F+Wisata+Desa+BMJ+Mojopahit',
  founded: 2002,
  patungHeight: 23,
};

// Cloudinary base — ganti BASE_URL jika pindah CDN
const CDN = 'https://res.cloudinary.com/dlw8ltf9c/image/upload';

// Helper buat URL Cloudinary dengan transformasi otomatis
// Pelajari parameter Cloudinary: https://cloudinary.com/documentation/transformation_reference
export function cdnUrl(id: string, w = 1200, h = 800) {
  return `${CDN}/c_auto,w_${w},h_${h},g_auto/f_auto/q_auto/v1/wisata%20desa/Foto/${id}`;
}

// ---- FOTO GALERI ----
// Tambah objek baru di sini untuk menambah foto ke galeri
export const PHOTOS = [
  {
    id: 'zuegazevm0qishbwkvyd',
    name: 'Patung Gajah Mada',
    category: 'ikon',
    caption: 'Patung Gajah Mada · Rekor MURI',
    featured: true, // foto featured muncul besar di hero galeri & homepage
  },
  {
    id: 'l2vc0aftuhtbvdhudqb4',
    name: 'Kolam Renang',
    category: 'fasilitas',
    caption: 'Kolam Renang · Fasilitas Utama',
    featured: false,
  },
  {
    id: 'wlhpt9zjp61v78sz3ihn',
    name: 'Kebun Cokelat',
    category: 'fasilitas',
    caption: 'Kebun Cokelat · Edukasi',
    featured: false,
  },
  {
    id: 'vxhfunxncvitm2mf93cb',
    name: 'Area Budaya Majapahit',
    category: 'budaya',
    caption: 'Area Budaya Majapahit',
    featured: false,
  },
  {
    id: 'hzxhtstlm1i6g2nzp4pv',
    name: 'Panorama BMJ',
    category: 'alam',
    caption: 'Panorama BMJ · Alam & Suasana',
    featured: false,
  },
  {
    id: 'icxoph3gkswjks8jnntq',
    name: 'Wahana Permainan',
    category: 'fasilitas',
    caption: 'Wahana Permainan',
    featured: false,
  },
  {
    id: 'kzahlyhb4acycsmrwk0a',
    name: 'Taman Bermain',
    category: 'fasilitas',
    caption: 'Taman Bermain',
    featured: false,
  },
  {
    id: 'bvkm1a6eeabch4a14ujs',
    name: 'Keindahan Alam Sekitar BMJ',
    category: 'alam',
    caption: 'Keindahan Alam Sekitar BMJ',
    featured: false,
  },
  {
    id: 'fzqopymhl6fkx0hnzjna',
    name: 'Suasana Sore Hari',
    category: 'alam',
    caption: 'Suasana Sore Hari',
    featured: false,
  },
] as const;

export type PhotoCategory = (typeof PHOTOS)[number]['category'];

// ---- TIKET ----
export const TICKETS = [
  {
    type: 'Pengunjung Umum',
    name: 'Tiket Dewasa',
    price: 20000,
    note: 'Per orang',
  },
  {
    type: 'Pengunjung Muda',
    name: 'Tiket Anak-anak',
    price: 18000,
    note: 'Per orang',
  },
  {
    type: 'Member & Langganan',
    name: 'Tiket Pelanggan',
    price: 15000,
    note: 'Sudah pernah berkunjung',
  },
];

// Format harga ke "Rp20.000"
export function formatPrice(price: number) {
  return `Rp${price.toLocaleString('id-ID')}`;
}

// ---- FASILITAS ----
// icon: nama Tabler Icons (https://tabler-icons.io)
export const FACILITIES = [
  { name: 'Kolam Renang', note: 'Dewasa & anak-anak', icon: 'swimming' },
  { name: 'Area Camping', note: 'Outbond & kelompok', icon: 'tent' },
  { name: 'Penginapan', note: 'Tersedia sejak 2024', icon: 'bed' },
  { name: 'Restoran', note: 'Kuliner lokal Mojokerto', icon: 'tools-kitchen-2' },
  { name: 'Masjid', note: 'Fasilitas ibadah', icon: 'building-mosque' },
  { name: 'Tempat Parkir', note: 'Luas & aman', icon: 'car' },
  { name: 'Taman Bermain', note: 'Wahana anak-anak', icon: 'device-gamepad-2' },
  { name: 'Panggung Hiburan', note: 'Acara & pertunjukan', icon: 'speakerphone' },
];

// ---- TIMELINE ----
export const TIMELINE = [
  { year: 2002, title: 'Pendirian BMJ', desc: 'Didirikan oleh Mulyono di Desa Dlanggu, Mojokerto sebagai wisata desa pertama di kawasan tersebut.' },
  { year: 2005, title: 'Fasilitas Permainan', desc: 'Penambahan bebek air, bom-bom car, dan wahana permainan anak-anak untuk memperluas daya tarik keluarga.' },
  { year: 2010, title: 'Camping & Outbond', desc: 'Pembangunan area camping dan outbond untuk kegiatan kelompok, sekolah, dan komunitas.' },
  { year: 2015, title: 'Edukasi Kakao', desc: 'Pengenalan program edukasi kakao: proses tanam, panen, pembuatan, hingga pengemasan produk cokelat.' },
  { year: 2020, title: 'Renovasi Besar', desc: 'Renovasi menyeluruh untuk memperbarui fasilitas dan menambahkan atraksi-atraksi baru yang lebih modern.' },
  { year: 2022, title: 'Perayaan 20 Tahun', desc: 'Peringatan dua dekade BMJ dengan berbagai acara spesial, promosi, dan apresiasi kepada pelanggan setia.' },
  { year: 2024, title: 'Fasilitas Modern', desc: 'Penambahan penginapan dan restoran untuk meningkatkan kenyamanan wisatawan yang ingin bermalam.' },
  { year: 2025, title: 'Terus Berkembang', desc: 'Kami terus berinovasi meningkatkan layanan demi kepuasan setiap pengunjung yang datang.' },
];

// ---- SOSIAL MEDIA ----
export const SOCIALS = [
  { label: 'Instagram', icon: 'brand-instagram', url: 'https://www.instagram.com/wisatadesa.dlanggu/' },
  { label: 'Facebook', icon: 'brand-facebook', url: 'https://m.facebook.com/wisatadesa.dlanggu/' },
  { label: 'TikTok', icon: 'brand-tiktok', url: 'https://www.tiktok.com/@wisatadesa.dlanggu' },
];

// ---- NAVIGASI ----
export const NAV = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Galeri', href: '/galeri' },
];
