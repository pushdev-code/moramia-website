const lessBtn = document.querySelector('.qty-less');
const moreBtn = document.querySelector('.qty-more');
const number = document.querySelector('.qty-number');

lessBtn.addEventListener('click',()=>{
    if(!isNaN(number.value)&&number.value>1){
        number.value--;
    }
});

moreBtn.addEventListener('click',()=>{
    if(!isNaN(number.value)){
        number.value++;
    }
});
