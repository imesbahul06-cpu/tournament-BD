// URL থেকে Data নেওয়া
const urlParams = new URLSearchParams(window.location.search);
const data = JSON.parse(atob(urlParams.get('data')));

// Slider Set
document.querySelector('.slider').innerHTML = data.sliders.map(img=>`<div class="slide"><img src="${img}"></div>`).join('');

// Category Set
document.querySelectorAll('.cat-card img')[0].src = data.cats.br;
document.querySelectorAll('.cat-card img')[1].src = data.cats.cs;
document.querySelectorAll('.cat-card img')[2].src = data.cats.lone;
document.querySelectorAll('.cat-card img')[3].src = data.cats.free;

// Notice Set
document.getElementById('adminNotice').innerText = data.notice;

// App load হওয়ার সময় এটা চালাও
let cats = JSON.parse(localStorage.getItem('appCategories'));
document.querySelectorAll('.cat-card img')[0].src = cats[0].img; // BR
document.querySelectorAll('.cat-card img')[1].src = cats[1].img; // CS
document.querySelectorAll('.cat-card img')[2].src = cats[2].img; // LONE
document.querySelectorAll('.cat-card img')[3].src = cats[3].img; // FREE