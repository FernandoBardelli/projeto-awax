
document.querySelector('.menu-opener').addEventListener('click', ()=>{
    if(document.querySelector('nav').style.display == 'none'){
        document.querySelector('nav').style.display = 'block';
    } else {
        document.querySelector('nav').style.display = 'none';
    }
});