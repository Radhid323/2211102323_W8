$(document).ready(function () {
  $('#p1, #p2, #p3').hide();

  $('#alertBtn').click(function () {
    const btn = $(this);

    if (btn.text() === 'Baca Cerpen') {
      // Menjalankan semua slideDown secara berurutan tanpa jeda
      $('#p1').stop(true, true).slideDown(600).promise().then(() => {
        $('#p2').stop(true, true).slideDown(600).promise().then(() => {
          $('#p3').stop(true, true).slideDown(600).promise().then(() => {
            $('.btn-alert').stop(true, true).slideDown(600);
            btn.text('Tampilkan Pesan');
          });
        });
      });
    } else if (btn.text() === 'Tampilkan Pesan') {
      // Menjalankan semua slideUp secara berurutan tanpa jeda
      $('#p1').stop(true, true).slideUp(600).promise().then(() => {
        $('#p2').stop(true, true).slideUp(600).promise().then(() => {
          $('#p3').stop(true, true).slideUp(600).promise().then(() => {
            // Menyembunyikan tombol setelah animasi selesai
            $('.btn-alert').stop(true, true).slideUp(600);
            
            // Memastikan #alertBox muncul setelah semua slideUp selesai
            $('#alertBox').fadeIn(1000);
          });
        });
      });
    }    
  });

  function createFallingPetals() {
    const petalContainer = document.getElementById('petal-container');
    const petal = document.createElement('div');
    petal.classList.add('petal');

    petal.style.left = Math.random() * window.innerWidth + 'px';
    const size = Math.random() * 10 + 8;
    petal.style.width = size + 'px';
    petal.style.height = size * 1.5 + 'px';

    petal.style.animationDuration = 5 + Math.random() * 5 + 's';

    petalContainer.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 10000);
  }

  setInterval(createFallingPetals, 200);
});
