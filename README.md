# Modul Red Team

Repositori ini berisi kumpulan modul dasar untuk pembelajaran web penetration testing dan topik pendukungnya. Setiap modul memiliki fokus yang berbeda, mulai dari pengantar proses pentest, reconnaissance, vulnerability assessment, hingga beberapa kerentanan web yang umum ditemukan.

## Peringatan

Seluruh materi dalam repositori ini ditujukan hanya untuk edukasi, pembelajaran, dan praktik pada lingkungan yang sah.

- Jangan melakukan scanning, enumerasi, exploit, upload file, atau pengujian lain ke sistem yang bukan milik Anda tanpa izin tertulis.
- Aktivitas offensive security tanpa otorisasi dapat melanggar hukum dan berisiko menimbulkan gangguan layanan, kebocoran data, atau kerusakan sistem.
- Lakukan pengujian hanya pada lab, CTF, sandbox, atau target yang memang berada dalam scope dan telah disetujui.
- Validasi hasil otomatis secara hati-hati. Beberapa tools dan teknik dapat menghasilkan false positive atau berdampak ke ketersediaan layanan.

## Isi Modul

Urutan berikut disusun agar alur belajarnya lebih runtut: mulai dari pemahaman proses pentest, pengumpulan informasi, validasi kerentanan, lalu masuk ke jenis-jenis kerentanan web.

### 1. [Pentesting](./Pentesting/README.md)

Pengantar penetration testing sebagai fondasi sebelum masuk ke teknik teknis.

Materi utama:
- definisi dan tujuan penetration testing
- klasifikasi pentest: external/internal, blackbox/greybox/whitebox
- aspek legal dan etika dalam pengujian
- fase pentest: pre-engagement, information gathering, vulnerability assessment, exploitation, post-exploitation, lateral movement, proof-of-concept, dan post-engagement
- metodologi dan framework umum seperti OSSTMM, OWASP, PTES, ISSAF, dan NIST

### 2. [Recon](./Recon/README.md)

Modul pengumpulan informasi awal terhadap target untuk memahami permukaan serangan.

Materi utama:
- alasan reconnaissance menjadi tahap penting
- pengenalan tools recon dan digital footprinting
- penggunaan `nmap` untuk service scanning
- penggunaan `rustscan` untuk port scanning cepat
- penggunaan `gobuster` untuk directory enumeration
- verifikasi kerentanan service dengan NSE script pada `nmap`
- subdomain enumeration menggunakan `subfinder`

### 3. [Vulnerability Assesment](./Vulnerability%20Assessment/README.md)

Pengantar vulnerability scanning dan cara memahami hasilnya secara benar.

Materi utama:
- definisi vulnerability scanning / vulnerability assessment
- metode SAST dan DAST
- tools umum seperti Acunetix, Nessus, Nuclei, Nikto, dan WPScan
- contoh penggunaan tools untuk scanning target
- pentingnya validasi manual untuk menghindari false positive

### 4. [Directory Traversal](./Directory%20Traversal/README.md)

Pengenalan kerentanan directory traversal yang memungkinkan akses file di luar direktori yang semestinya.

Materi utama:
- deskripsi dan dampak directory traversal
- contoh alur eksploitasi melalui parameter yang tidak tersanitasi
- cara mengidentifikasi parameter yang dapat dimanipulasi
- contoh pembacaan file sensitif seperti `/etc/passwd`
- ilustrasi risiko kebocoran file internal dan kredensial

### 5. [File Inclusion & Upload](./File%20Inclusion%20%26%20Upload/README.md)

Pembahasan dua kerentanan berbeda yang sering berujung pada pembacaan file sensitif atau eksekusi kode.

Materi utama:
- definisi Local File Inclusion (LFI)
- cara kerja LFI dan contoh eksploitasi
- mitigasi LFI dengan validasi input dan whitelist
- definisi file upload vulnerability
- teknik bypass upload seperti double extension, null byte, dan manipulasi konten
- mitigasi file upload dengan validasi tipe, ukuran, dan penyimpanan file yang aman

### 6. [SQL Injection](./SQL%20Injection/README.md)

Modul pengenalan SQL Injection, mulai dari bentuk dasar sampai teknik blind.

Materi utama:
- basic SQL injection dan auth bypass
- visible error-based SQL injection
- union-based SQL injection
- blind SQL injection
- time-based blind SQL injection
- condition-based blind SQL injection
- tips eksfiltrasi data, cheat sheet, dan penggunaan `sqlmap`
- mitigasi seperti sanitasi input, parameterized query, dan pemanfaatan framework/ORM

### 7. [XSS](./XSS/README.md)

Pengenalan cross-site scripting sebagai kerentanan yang menyerang sisi browser pengguna.

Materi utama:
- definisi dan cara kerja XSS
- tipe XSS: reflected, stored, dan DOM-based
- contoh payload dan skenario serangan
- dampak XSS berdasarkan konteks aplikasi dan hak akses korban
- pencegahan melalui filtering input, output encoding, header yang tepat, dan Content Security Policy
