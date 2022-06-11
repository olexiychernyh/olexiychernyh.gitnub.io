let imgFullShow = document.querySelectorAll('img');

for (let i = 0; i < imgFullShow.length; i++) {
    imgFullShow[i].addEventListener('dblclick', function () {
        let srcImg = this.src;
        let newDiv = document.createElement('.igg');
        newDiv.classList.add('.img-galery');
        newDiv.innerHTML = "<img class = '.img-full-show' src = ' " + srcImg + "'>";
        document.body.prepend(newDiv);
        newDiv.onclick = () => {
            newDiv.remove();
        }
    })
    imgFullShow[i].addEventListener('contextmenu', fullScreen2);
}

function fullScreen2() {
    if (document.fullscreenEnabled && document.fullscreenElement === null) {
        this.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }
}






frame.addEventListener('click', function(){
    this.style.animation = 'frame-animation 1s steps(10) infinite';
}, {once: true})

removeDiv.addEventListener('click', function(){
    frame.remove();
})





frame2.addEventListener('click', function(){
    this.style.animation = 'frame-animation2 1s steps(10) infinite';
}, {once: true})
removeDiv2.addEventListener('click', function(){
    frame2.remove();
})



frame3.addEventListener('click', function(){
    this.style.animation = 'frame-animation3 1s steps(10) infinite';
}, {once: true})
removeDiv3.addEventListener('click', function(){
    frame3.remove();
})




frame4.addEventListener('click', function(){
    this.style.animation = 'frame-animation4 1s steps(10) infinite';
}, {once: true})
removeDiv4.addEventListener('click', function(){
    frame4.remove();
})




frame5.addEventListener('click', function(){
    this.style.animation = 'frame-animation5 1s steps(10) infinite';
}, {once: true})
removeDiv5.addEventListener('click', function(){
    frame5.remove();
})







frame6.addEventListener('click', function(){
    this.style.animation = 'frame-animation6 1s steps(10) infinite';
}, {once: true})
removeDiv6.addEventListener('click', function(){
    frame6.remove();
})