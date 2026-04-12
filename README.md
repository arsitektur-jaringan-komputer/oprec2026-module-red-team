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
- Definisi dan Tujuan Penetration Testing
- Klasifikasi Pentest: External/Internal, Blackbox/Greybox/Whitebox
- Aspek Legal dan Etika dalam Pengujian
- Fase Pentest: Pre-Engagement, Information Gathering, Vulnerability Assessment, Exploitation, Post-Exploitation, Lateral Movement, Proof-of-Concept, dan Post-Engagement
- Metodologi dan Framework Umum seperti OSSTMM, OWASP, PTES, ISSAF, dan NIST

### 2. [Recon](./Recon/README.md)

Modul pengumpulan informasi awal terhadap target untuk memahami permukaan serangan.

Materi utama:
- Alasan Reconnaissance Menjadi Tahap Penting
- Pengenalan Tools Recon dan Digital Footprinting
- Penggunaan `nmap` untuk Service Scanning
- Penggunaan `rustscan` untuk Port Scanning Cepat
- Penggunaan `gobuster` untuk Directory Enumeration
- Verifikasi Kerentanan Service dengan NSE Script pada `nmap`
- Subdomain Enumeration menggunakan `subfinder`

### 3. [Vulnerability Assesment](./Vulnerability%20Assessment/README.md)

Pengantar vulnerability scanning dan cara memahami hasilnya secara benar.

Materi utama:
- Definisi Vulnerability Scanning / Vulnerability Assessment
- Metode SAST dan DAST
- Tools Umum seperti Acunetix, Nessus, Nuclei, Nikto, dan WPScan
- Contoh Penggunaan Tools untuk Scanning Target
- Pentingnya Validasi Manual untuk Menghindari False Positive

### 4. [Directory Traversal](./Directory%20Traversal/README.md)

Pengenalan kerentanan directory traversal yang memungkinkan akses file di luar direktori yang semestinya.

Materi utama:
- Deskripsi dan Dampak Directory Traversal
- Contoh Alur Eksploitasi melalui Parameter yang Tidak Tersanitasi
- Cara Mengidentifikasi Parameter yang Dapat Dimanipulasi
- Contoh Pembacaan File Sensitif seperti `/etc/passwd`
- Ilustrasi Risiko Kebocoran File Internal dan Kredensial

### 5. [File Inclusion & Upload](./File%20Inclusion%20%26%20Upload/README.md)

Pembahasan dua kerentanan berbeda yang sering berujung pada pembacaan file sensitif atau eksekusi kode.

Materi utama:
- Definisi Local File Inclusion (LFI)
- Cara Kerja LFI dan Contoh Eksploitasi
- Mitigasi LFI dengan Validasi Input dan Whitelist
- Definisi File Upload Vulnerability
- Teknik Bypass Upload seperti Double Extension, Null Byte, dan Manipulasi Konten
- Mitigasi File Upload dengan Validasi Tipe, Ukuran, dan Penyimpanan File yang Aman

### 6. [SQL Injection](./SQL%20Injection/README.md)

Modul pengenalan SQL Injection, mulai dari bentuk dasar sampai teknik blind.

Materi utama:
- Basic SQL Injection dan Auth Bypass
- Visible Error-Based SQL Injection
- Union-Based SQL Injection
- Blind SQL Injection
- Time-Based Blind SQL Injection
- Condition-Based Blind SQL Injection
- Tips Eksfiltrasi Data, Cheat Sheet, dan Penggunaan `sqlmap`
- Mitigasi seperti Sanitasi Input, Parameterized Query, dan Pemanfaatan Framework/ORM

### 7. [XSS](./XSS/README.md)

Pengenalan cross-site scripting sebagai kerentanan yang menyerang sisi browser pengguna.

Materi utama:
- Definisi dan Cara Kerja XSS
- Tipe XSS: Reflected, Stored, dan DOM-Based
- Contoh Payload dan Skenario Serangan
- Dampak XSS Berdasarkan Konteks Aplikasi dan Hak Akses Korban
- Pencegahan melalui Filtering Input, Output Encoding, Header yang Tepat, dan Content Security Policy