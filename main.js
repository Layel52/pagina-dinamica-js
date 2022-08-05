function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    //---------------------

    //console.log(idAudio);
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    //console.log(contador);


    tecla.onkeydown = function (evento) {

    /*incluindo a tecla "Enter" e "Space" à animação
      simbulo entre 'Space' e evento significa "ou"
    */
        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
} 
