const btnIya = document.getElementById('btn-iya');
const btnNggak = document.getElementById('btn-nggak');
const pesanCinta = document.getElementById('pesan-cinta');
const pertanyaan = document.getElementById('pertanyaan');

const container = document.querySelector('.container');

btnIya.addEventListener('click', function() {
    pesanCinta.style.display = 'block';
    pertanyaan.style.display = 'none';
    btnIya.style.display = 'none';
    btnNggak.style.display = 'none';
});

btnNggak.addEventListener('mouseover', function() {
   
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const btnWidth = btnNggak.offsetWidth;
    const btnHeight = btnNggak.offsetHeight;

    const padding = 10;
    const newTop = Math.random() * (containerHeight - btnHeight - padding);
    const newLeft = Math.random() * (containerWidth - btnWidth - padding);

    btnNggak.style.top = newTop + 'px';
    btnNggak.style.left = newLeft + 'px';
});
