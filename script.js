let menu = document.querySelector('.menu1')
let left = document.querySelector('.main-left')
menu.addEventListener('click',function(){
    left.classList.toggle('add-main-left');
    // if (left.style.display === 'none' || left.style.display === '') {
    //     left.style.display = 'block';
    // } else {
    //     left.style.display = 'none';
    // }
});

