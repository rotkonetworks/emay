import type { LocaleData } from "../types"
import { en } from "./en" // Use English as a fallback

export const id: LocaleData = {
  locale: "id",
  name: "Bahasa Indonesia",
  flag: "🇮🇩",
  translations: {
    ...en.translations, // Copy English translations
    // --- Override with Indonesian translations ---
    "site.title": "emay.me - Email Cepat dan Pribadi dengan JMAP",
    "site.description":
      "Rasakan email yang lebih cepat dan pribadi dengan emay.me, dibangun dengan protokol JMAP modern. Ucapkan selamat tinggal pada kotak masuk yang lambat dan berat.",
    "nav.features": "Fitur",
    "nav.pricing": "Harga",
    "nav.blog": "Blog",
    "nav.support": "Dukungan",
    "nav.getStarted": "Mulai",
    "hero.title": "Email Cepat dan Pribadi.",
    "hero.titleHighlight": " Gratis.",
    "hero.subtitle":
      "Pengalaman email modern yang fokus pada kecepatan, keamanan, dan kesederhanaan. Dari nol ke kotak surat dalam hitungan detik.",
    "hero.form.placeholder": "nama.anda",
    "hero.benefits.noPasswords": "Tanpa kata sandi, selamanya",
    "hero.benefits.freePlan": "Paket gratis yang murah hati",
    "hero.benefits.trial": "Uji coba 7 hari untuk nama premium",
    "features.title": "Direkayasa untuk Kecepatan & Kesederhanaan",
    "features.subtitle":
      "Kami tidak hanya membangun layanan email lain. Kami merancang ulang dari awal untuk performa dan pengalaman pengguna yang lebih baik.",
    "features.jmap.title": "Didukung oleh JMAP",
    "features.jmap.description":
      "Kami menggunakan JMAP, penerus modern IMAP. Ini berarti pengambilan pesan yang lebih cepat, notifikasi push yang tidak menguras baterai, dan penggunaan data yang jauh lebih sedikit.",
    "features.jmap.learnMore": "Pelajari tentang teknologi kami",
    "features.clients.title": "Klien yang Dibuat Khusus",
    "features.clients.description":
      "Protokol yang lebih cepat layak mendapat klien yang lebih cepat. Aplikasi web dan native kami dirancang minimal, berkinerja tinggi, dan menyenangkan untuk digunakan.",
    "pricing.title": "Harga Sederhana dan Transparan",
    "pricing.subtitle":
      "Layanan inti kami gratis. Tambahkan fitur premium jika dan ketika Anda membutuhkannya. Tanpa bundel, tanpa tekanan.",
    "pricing.premium.title": "Alamat Premium",
    "pricing.premium.description": "Amankan alamat @emay.me yang pendek dan mudah diingat.",
    "pricing.premium.price": "mulai $5/tahun",
    "pricing.storage.title": "Penyimpanan Lebih Banyak",
    "pricing.storage.description": "Tingkatkan ukuran kotak surat seiring kebutuhan Anda berkembang.",
    "pricing.storage.price": "mulai $1/GB/tahun",
    "pricing.domains.title": "Domain Kustom",
    "pricing.domains.description": "Gunakan domain Anda sendiri untuk identitas profesional.",
    "pricing.domains.price": "mulai $10/tahun",
    "app.title": "Aplikasi Android Native. Segera Hadir.",
    "app.notifyMe": "Beri Tahu Saya",
    "blog.title": "Blog emay.me",
    "blog.subtitle": "Pembaruan, analisis teknis mendalam, dan berita dari tim yang membangun masa depan email.",
    "support.title": "Pusat Dukungan",
    "support.subtitle": "Punya pertanyaan? Kami punya jawaban. Temukan bantuan untuk topik umum di bawah ini.",
    "footer.tagline": "Layanan email tercepat di web.",
    "auth.welcomeBack": "Selamat Datang Kembali",
    "auth.createAccount": "Buat Akun Anda",
    "auth.magicLink": "Lanjutkan dengan Magic Link",
    "auth.github": "Lanjutkan dengan GitHub",
    "auth.checkEmail": "Periksa email Anda",
    "auth.verifyCode": "Atau masukkan kode 6 digit",
    "auth.continueToInbox": "Lanjutkan ke Kotak Masuk",
    "common.search": "Cari...",
  },
}
