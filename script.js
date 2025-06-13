const btn = document.querySelector('.dot');
const price = document.querySelectorAll('.price');
const priceActive = document.querySelectorAll('.price-active')
btn.addEventListener('click', function(){
    btn.classList.toggle('dot-active');
     price.forEach((p, i) => {
        if (p.style.display === 'block') {
            p.style.display = 'none';
            priceActive[i].style.display = 'block';
        } else {
            p.style.display = 'block';
            priceActive[i].style.display = 'none';
        }
    });   
})