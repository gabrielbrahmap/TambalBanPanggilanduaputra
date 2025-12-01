/**
 * =============================================================
 * FILE: script.js
 * DESKRIPSI: Kode JavaScript untuk menambahkan interaksi
 * seperti efek scroll header dan animasi fade-in saat scroll.
 * =============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------
    // 1. Fungsi Header Shrink/Scroll
    // -----------------------------------------------------------
    const header = document.querySelector('header');
    
    // Tambahkan class 'scrolled' pada header jika posisi Y lebih dari 50px
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Jalankan fungsi saat window di-scroll
    window.addEventListener('scroll', handleScroll);
    
    // Jalankan sekali saat DOMContentLoaded untuk kondisi awal
    handleScroll();


    // -----------------------------------------------------------
    // 2. Fungsi Animasi Elemen Saat Scroll (Intersection Observer)
    // -----------------------------------------------------------
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Cek apakah browser mendukung Intersection Observer
    if ('IntersectionObserver' in window) {
        
        const observerOptions = {
            root: null, // Menggunakan viewport sebagai root
            rootMargin: '0px',
            threshold: 0.1 // Ketika 10% elemen terlihat, trigger
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Jika elemen masuk ke viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Hentikan pengamatan setelah elemen ter-animasi
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        // Amati setiap elemen yang memiliki class .animate-on-scroll
        animatedElements.forEach(element => {
            observer.observe(element);
        });
        
    } else {
        // Fallback jika Intersection Observer tidak didukung (jarang terjadi di browser modern)
        // Langsung tampilkan semua elemen yang harusnya di-animasi
        animatedElements.forEach(element => {
            element.classList.add('in-view');
        });
    }


    // -----------------------------------------------------------
    // 3. Optional: Form Submission Handler (Halaman Kontak)
    // -----------------------------------------------------------
    const contactForm = document.getElementById('form-kontak');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah submit form ke server
            
            // Dapatkan data form
            const nama = document.getElementById('nama').value;
            const pesan = document.getElementById('pesan').value;

            // Tampilkan alert sukses (ganti dengan integrasi server jika sudah ada)
            alert(`Terima kasih, ${nama}! Pesan Anda telah kami terima. Kami akan segera merespon pesan Anda.`);

            // Reset Form setelah berhasil
            contactForm.reset();
        });
    }

});