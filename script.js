const btnIya = document.getElementById('btn-iya');
const btnNggak = document.getElementById('btn-nggak');
const pesanCinta = document.getElementById('pesan-cinta');
const pertanyaan = document.getElementById('pertanyaan');

btnIya.addEventListener('click', function() {
  
    pesanCinta.style.display = 'block';

    pertanyaan.style.display = 'none';
    btnIya.style.display = 'none';
    btnNggak.style.display = 'none';
});

btnNggak.addEventListener('mouseover', function() {
   
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const btnWidth = btnNggak.offsetWidth;
    const btnHeight = btnNggak.offsetHeight;

    const newTop = Math.random() * (windowHeight - btnHeight);
    const newLeft = Math.random() * (windowWidth - btnWidth);

    btnNggak.style.top = newTop + 'px';
    btnNggak.style.left = newLeft + 'px';
});