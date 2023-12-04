function toggle(e) {
    var elemento = document.getElementById(e);
    var display = window.getComputedStyle(elemento).display;
    
    if(display == 'none') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
}