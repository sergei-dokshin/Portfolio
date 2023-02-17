
let checkbox = document.getElementById('darktheme');

const applyTheme = () => {
    let themeUrl;
    if(checkbox.checked == true) {
        themeUrl = 'theme-dark.css';
        localStorage.setItem('darkmode', 'on');         
    }
    else if(checkbox.checked == false) {
        themeUrl = 'theme-light.css';
        localStorage.clear();       
    }
    
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);    
}

checkbox.addEventListener('change', applyTheme);

function loading() {
    let storage = localStorage.getItem('darkmode');
    if(storage == 'on') {
        checkbox.checked = true;
        applyTheme();       
    }
}

document.addEventListener('DOMContentLoaded', loading);

