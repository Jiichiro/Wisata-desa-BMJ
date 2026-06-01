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
    id: 'znsizhrtshhjsdcn3azr',
    name: 'Logo BMJ',
    category: 'budaya',
    caption: 'Logo BMJ',
    featured: false,
  },
  {
    id: 'kltpi9bjnbyz2tkrnlso',
    name: 'Sumber Air Tirta Wening Kahuripan',
    category: 'budaya',
    caption: 'Sumber Air Tirta Wening Kahuripan · Adat',
    featured: true,
  },
  {
    id: 'agcd28maz8rlkpsvfp3q',
    name: 'Sertifikasi Cokelat',
    category: 'fasilitas',
    caption: 'Sertifikasi Cokelat',
    featured: false,
  },
  {
    id: 'aouogqepee9lhmkqskeo',
    name: 'Pintu Masuk Pabrik Cokelat',
    category: 'fasilitas',
    caption: 'Pintu Masuk Pabrik Cokelat',
    featured: false,
  },
  {
    id: 'hrldhbmd1khqfj238gil',
    name: 'Panggung',
    category: 'fasilitas',
    caption: 'Panggung · Hiburan',
    featured: false,
  },
  {
    id: 'c1ivrbuxqy0axjyoltuy',
    name: 'Denah',
    category: 'budaya',
    caption: 'Denah BMJ',
    featured: false,
  },
  {
    id: 'icxoph3gkswjks8jnntq',
    name: 'Kolam Renang Dewasa',
    category: 'fasilitas',
    caption: 'Kolam Renang Dewasa',
    featured: false,
  },
  {
    id: 'c5ulbult7aziaauah4p5',
    name: 'Kolam Renang Anak-anak',
    category: 'fasilitas',
    caption: 'Kolam Renang Anak-anak',
    featured: false,
  },
  {
    id: 'ghtfbz38ny8vhf9fmo4a',
    name: 'Kolam Renang Anak-anak 2',
    category: 'fasilitas',
    caption: 'Kolam Renang Anak-anak',
    featured: false,
  },
  {
    id: 'vxhfunxncvitm2mf93cb',
    name: 'Area Oleh-oleh',
    category: 'budaya',
    caption: 'Area Oleh-oleh',
    featured: false,
  },
  {
    id: 'l2vc0aftuhtbvdhudqb4',
    name: 'Bagian Depan Wisata Desa',
    category: 'fasilitas',
    caption: 'Bagian Depan Wisata Desa',
    featured: false,
  },
  {
    id: 'gauaetthykpjqs6jo4uz',
    name: 'Tempat Duduk Area Oleh-oleh',
    category: 'fasilitas',
    caption: 'Tempat Duduk Area Oleh-oleh',
    featured: false,
  },
  {
    id: 'b3zlsrbogkklbbk7ykgt',
    name: 'Foto Pajangan',
    category: 'alam',
    caption: 'Foto Pajangan',
    featured: false,
  },
] as const;

export type PhotoCategory = (typeof PHOTOS)[number]['category'];

// ---- TIKET ----
export const TICKETS = [
  {
    type: 'Pengunjung Umum',
    name: 'Tiket Dewasa',
    price: 16000,
    note: 'Per orang',
  },
  {
    type: 'Pengunjung Muda',
    name: 'Tiket Anak-anak',
    price: 14000,
    note: 'Per orang',
  },
  {
    type: 'Member & Langganan',
    name: 'Tiket Pelanggan',
    price: 12000,
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
  { label: 'Instagram', icon: 'brand-instagram', url: 'https://www.instagram.com/wisatadesa.mojokerto/' },
  { label: 'Facebook', icon: 'brand-facebook', url: 'https://www.facebook.com/wisatadesa.mojokerto' },
  { label: 'TikTok', icon: 'brand-tiktok', url: 'https://www.tiktok.com/@wisatadesa.mojokerto' },
];

// ---- NAVIGASI ----
export const NAV = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Tiket', href: '/tiket' },
  { label: 'Galeri', href: '/galeri' },
];
