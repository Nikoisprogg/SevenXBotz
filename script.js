// Floating WhatsApp Button - Hide/Show on Scroll
const floatingBtn = document.querySelector(".floating-whatsapp");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 300) {
    // Sembunyi saat scroll ke bawah
    if (scrollTop > lastScrollTop) {
      floatingBtn.classList.add("hide");
    } else {
      // Muncul saat scroll ke atas
      floatingBtn.classList.remove("hide");
    }
  } else {
    // Selalu tampil jika di atas
    floatingBtn.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
// Ambil elemen audio dan tombol
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// Fungsi untuk memulai musik (dipicu oleh klik pengguna)
function startMusic() {
  bgMusic.play().then(() => {
    console.log("Musik dimulai!");
    musicBtn.textContent = "🔊 Musik Sedang Diputar";
    musicBtn.style.backgroundColor = "#2ecc71";
  }).catch(err => {
    console.log("Autoplay dibatasi:", err);
    musicBtn.textContent = "🔇 Gagal Memutar (Klik Lagi)";
    musicBtn.style.backgroundColor = "#e74c3c";
  });

  // Hapus event listener setelah dijalankan sekali
  document.body.removeEventListener("click", startMusic);
  musicBtn.removeEventListener("click", startMusic);
}

// Jalankan musik saat pengguna klik halaman atau tombol
document.body.addEventListener("click", startMusic);
musicBtn.addEventListener("click", startMusic);

// Toggle mute/unmute saat tombol diklik lagi
musicBtn.addEventListener("click", () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    musicBtn.textContent = "🔊 Musik Sedang Diputar";
    musicBtn.style.backgroundColor = "#2ecc71";
  } else {
    bgMusic.muted = true;
    musicBtn.textContent = "🔇 Musik Dibisukan";
    musicBtn.style.backgroundColor = "#f39c12";
  }

  // Fungsi untuk membuat partikel salju
function createSnowflakes(count) {
  const container = document.getElementById('snow-container');
  
  for (let i = 0; i < count; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Ukuran partikel salju acak
    const size = Math.random() * 4 + 2; // Ukuran antara 2-6 pixel
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    
    // Kecepatan jatuh salju acak
    const duration = Math.random() * 3 + 2; // Durasi animasi antara 2-5 detik
    snowflake.style.animationDuration = `${duration}s`;
    
    // Posisi awal acak
    const initialPosition = Math.random() * window.innerWidth;
    snowflake.style.left = `${initialPosition}px`;
    
    container.appendChild(snowflake);
  }
}

// Hapus partikel salju setelah animasi selesai
document.addEventListener('DOMContentLoaded', () => {
  createSnowflakes(100); // Buat 100 partikel salju
});
});
