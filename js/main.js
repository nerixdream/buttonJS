const btnPress = document.querySelector('.btn');
const btnResult = document.querySelector('.result span');


(() => {
    document.getElementById('formulario').addEventListener('submit', evento);
})();


function evento(e) {
    e.preventDefault();
    const numero = document.querySelector('#numero');
    let tiempo = numero.value * 1000;

    btnResult.style.width = "100%";
    btnResult.style.transition = numero.value + "s";
    btnPress.setAttribute('disabled', '');
    setTimeout(() => {
        btnResult.style.width = "0%";
        btnPress.removeAttribute('disabled');
    }, tiempo);
}