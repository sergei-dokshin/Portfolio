
              /*                               COPY E-MAIL                             */
const btn = document.getElementById('e-mail'); 

function copyClipboard() {
    const text = document.querySelector('#inputField');     
    navigator.clipboard.writeText(text.value);
}

btn.addEventListener('click', copyClipboard); 


              /*                                 POP-UP                                  */
function popup() {
    let copy = document.querySelector('#popup');     
    copy.classList.add("move");
    setTimeout(function(){
        copy.classList.remove('move')
    }, 2500);
    
}


btn.addEventListener('mousedown', popup);

