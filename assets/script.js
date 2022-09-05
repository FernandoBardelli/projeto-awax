
document.querySelector('.menu-opener').addEventListener('click', ()=>{
    if(document.querySelector('nav').style.display == 'none'){
        document.querySelector('nav').style.display = 'block';
    } else {
        document.querySelector('nav').style.display = 'none';
    }
});

/* Código dos Sliders */

document.querySelectorAll(".sliders").forEach(item => {
    if(item.parentElement.classList.contains("section-team")) {

        item.querySelectorAll(".slide").forEach((itemSlide, index) => {
            if(index == 0) return;
            
            let dot = item.parentElement.parentElement.querySelector(".sliders-pointers").firstElementChild.cloneNode(true);
            dot.classList.remove("active");

            item.parentElement.parentElement.querySelector(".sliders-pointers").appendChild(dot);
        });

    } else {
        

        item.querySelectorAll(".slide").forEach((itemSlide, index) => {
            if(index == 0) return;
            
            let dot = item.parentElement.querySelector(".sliders-pointers").firstElementChild.cloneNode(true);
            dot.classList.remove("active");

            item.parentElement.querySelector(".sliders-pointers").appendChild(dot);
        });
    }
  
});

/*criando evento de clique nos pointers */

document.querySelectorAll(".sliders-pointers").forEach(item => {
    item.querySelectorAll(".pointer").forEach(itemDot => itemDot.addEventListener("click", changeSlide));
});

/* mudando class do pointer */
function changeSlide(e) {

    const sectionContainer = e.currentTarget.parentElement.parentElement;
    e.currentTarget.parentElement.querySelectorAll(".pointer").forEach(item => item.classList.remove("active"));
    e.currentTarget.classList.add("active");

    changeSlideItem(sectionContainer);
    
}

/* mudando o slide item baseado no item ativo da class do pointer */

function changeSlideItem(sectionContainer) {

    sectionContainer.querySelectorAll(".sliders-pointers .pointer").forEach((item, index) => {
        if(item.classList.contains("active")) {

            if(sectionContainer.classList.contains("section-body")) {
                sectionContainer.querySelector(".sliders").style.transform = `translateX(-${(sectionContainer.querySelector(".sliders .slide").clientWidth + 20) * index}px)`
            } else {
                sectionContainer.querySelector(".sliders").style.transform = `translateX(-${sectionContainer.querySelector(".sliders .slide").clientWidth * index}px)`
            }
            
        }
    });
}

/*arrumando width dos sliders */

window.addEventListener("resize", ()=> {
    document.querySelectorAll(".sliders-pointers").forEach(item => {
        changeSlideItem(item.parentElement);
    });
});

