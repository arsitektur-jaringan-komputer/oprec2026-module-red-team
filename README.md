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
- Definisi dan Tujuan Pentesting
- Jenis Pentest (External/Internal, Blackbox/Greybox/Whitebox)
- Aspek Legal dan Etika
- Fase Pentest
- Metodologi (OSSTMM, OWASP, PTES, ISSAF, NIST)

### 2. [Recon](./Recon/README.md)

Modul pengumpulan informasi awal terhadap target untuk memahami permukaan serangan.

Materi utama:
- Pentingnya Reconnaissance
- Tools dan Footprinting
- Scanning dengan `nmap` dan `rustscan`
- Directory Enumeration (`gobuster`)
- Verifikasi Service (NSE `nmap`)
- Subdomain Enumeration (`subfinder`)

### 3. [Vulnerability Assesment](./Vulnerability%20Assessment/README.md)

Pengantar vulnerability scanning dan cara memahami hasilnya secara benar.

Materi utama:
- Definisi Vulnerability Assessment
- SAST dan DAST
- Tools (Acunetix, Nessus, Nuclei, Nikto, WPScan)
- Contoh Scanning
- CVE

### 4. [Directory Traversal](./Directory%20Traversal/README.md)

Pengenalan kerentanan directory traversal yang memungkinkan akses file di luar direktori yang semestinya.

Materi utama:
- Konsep dan Dampak
- Alur Eksploitasi
- Identifikasi Parameter
- Akses File Sensitif (`/etc/passwd`)
- Risiko Kebocoran Data

### 5. [File Inclusion & Upload](./File%20Inclusion%20%26%20Upload/README.md)

Pembahasan dua kerentanan berbeda yang sering berujung pada pembacaan file sensitif atau eksekusi kode.

Materi utama:
- Konsep LFI dan Eksploitasi
- Mitigasi LFI
- File Upload Vulnerability
- Teknik Bypass Upload
- Mitigasi Upload

### 6. [SQL Injection](./SQL%20Injection/README.md)

Modul pengenalan SQL Injection, mulai dari bentuk dasar sampai teknik blind.

Materi utama:
- Basic SQLi dan Auth Bypass
- Error-Based dan Union-Based
- Blind SQLi (Time & Condition)
- Eksfiltrasi dan `sqlmap`
- Mitigasi SQLi

### 7. [XSS](./XSS/README.md)

Pengenalan cross-site scripting sebagai kerentanan yang menyerang sisi browser pengguna.

Materi utama:
- Konsep XSS
- Tipe (Reflected, Stored, DOM)
- Payload dan Skenario
- Dampak Serangan
- Pencegahan XSS