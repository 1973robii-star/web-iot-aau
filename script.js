// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mengambil elemen h1 yang kedua (Website saya yang pertama)
    const headings = document.querySelectorAll("h1");
    const secondHeading = headings[1];

    // 2. Menambahkan efek interaktif saat judul diklik
    if (secondHeading) {
        secondHeading.style.cursor = "pointer"; // Mengubah kursor jadi bentuk tangan
        
        secondHeading.addEventListener("click", () => {
            // Mengubah warna teks secara acak saat diklik
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            secondHeading.style.color = randomColor;
        });
    }

    // 3. Menampilkan pesan sambutan di konsol browser (F12 -> Console)
    console.log("Halo! File JS berhasil dimuat di GitHub Pages.");
});