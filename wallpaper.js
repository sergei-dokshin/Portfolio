               /*                              BACKGROUND IMAGE ANIMATION              */

function wallpaper() {
    let back = document.querySelector('#wallpaper');
    back.classList.add('life');
    setTimeout(function(){
        back.style.backgroundPosition = 'center';        
    }, 4990);
}              

document.addEventListener('DOMContentLoaded', wallpaper);

             /*                                 NAME                                    */

function myName() {
    let name = document.querySelector('#myName');
    name.classList.add('showName');
    setTimeout(function(){
        name.style.opacity = '1';
    }, 5990);
}            

document.addEventListener('DOMContentLoaded', myName);