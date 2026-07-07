
let appSliders = JSON.parse(localStorage.getItem('sliderData')) || [];
document.querySelector('.slider').innerHTML = appSliders.map(s=>`<div class="slide" onclick="window.open('${s.link}')"><img src="${s.img}"></div>`).join('');