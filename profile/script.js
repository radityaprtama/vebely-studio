// Interaksi tombol sederhana
document.getElementById("btnContact").addEventListener("click", function(){
  alert("Terima kasih! Tim kami akan segera menghubungi Anda.");
});

// Ambil elemen tombol berdasarkan ID
const contactBtn = document.getElementById("contactBtn");

// Tambahkan event ketika tombol diklik
contactBtn.addEventListener("click", function() {
  alert("Terima kasih sudah ingin menghubungi kami! 😊\nSilakan DM Instagram @vibely_ecommerce_studio atau kirim email ke: hello@vibelystudio.com");
});

contactBtn.addEventListener("click", function() {
  window.open("https://www.instagram.com/vibely_ecommerce_studio", "_blank");
});

