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