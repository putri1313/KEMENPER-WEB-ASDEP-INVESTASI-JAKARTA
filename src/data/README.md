# Menambahkan konten situs

Semua teks yang dilihat pengunjung harus tersedia dalam bahasa Indonesia dan bahasa Inggris.

- Untuk konten yang disimpan di `src/data`, gunakan tipe `LocalizedContent` dari `src/lib/localized-content.ts`. Isi properti `en` dan `id` setiap kali membuat judul, deskripsi, kategori, nama yang diterjemahkan, atau label baru.
- Tampilkan pasangan teks dengan `getLocalizedContent(copy, language)` dari `useSitePreferences()`. Jangan menampilkan salah satu bahasa secara langsung.
- Untuk label antarmuka yang digunakan ulang, tambahkan pasangan terjemahan ke kamus `translations` di `src/lib/site-preferences.tsx` dan tampilkan label melalui `t("English source text")`.
- Saat bahasa Indonesia dipilih, mode pengembangan mencatat label antarmuka yang belum memiliki terjemahan di konsol. Jangan menganggap fallback ke bahasa Inggris sebagai terjemahan.
- Nama resmi, merek, singkatan, alamat, dan judul dokumen resmi dapat tetap sama bila memang tidak memiliki bentuk terjemahan yang berbeda.

`LocalizedContent` mewajibkan kedua bidang pada waktu kompilasi, sehingga entri konten baru tidak dapat ditambahkan hanya dalam satu bahasa.
