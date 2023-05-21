// Tanggal target untuk hitung mundur
var targetDate = new Date("May 30, 2023 00:00:00").getTime();

// Update hitung mundur setiap satu detik
var countdown = setInterval(function () {
  // Waktu sekarang
  var now = new Date().getTime();

  // Selisih antara waktu target dan waktu sekarang
  var timeRemaining = targetDate - now;

  // Hitung hari, jam, menit, dan detik
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Tampilkan hitung mundur dalam elemen dengan id "countdown"
  document.getElementById("countdown").innerHTML =
    days +
    " hari, " +
    hours +
    " jam, " +
    minutes +
    " menit, " +
    seconds +
    " detik";

  // Jika waktu hitung mundur sudah selesai
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML =
      "Waktu hitung mundur telah berakhir!";
  }
}, 1000);
