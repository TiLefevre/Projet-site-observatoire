
$(window).scroll(function() {
    console.log($(window).scrollTop());
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) { 
            $('.gotopbtn').show(); 
    }
    else {
            $('.gotopbtn').hide(); 
    }
});

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
items.forEach(item => {
item.classList.remove('is-active');
item.removeAttribute('style');
});

indicator.style.width = `${el.offsetWidth}px`;
indicator.style.left = `${el.offsetLeft}px`;
indicator.style.backgroundColor = el.getAttribute('active-color');

el.classList.add('is-active');
el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
item.addEventListener('click', (e) => { handleIndicator(e.target)});
item.classList.contains('is-active') && handleIndicator(item);
});