/****Definir tamanho da tela ****/
var altura = 0
var largura= 0
var vidas = 1

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//Adciona o cronometro
var cronometro = setInterval(function()  {
    
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'
        clearInterval(criarMosquisto)
    }else{
    document.getElementById('cronometro').innerHTML = tempo
    }
},1000);

function posicaoRandomica(){
    //remover o mosquito (caso exista)

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

    //Controle de vidas e GAME OVER
    if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'
    }else{
    document.getElementById('v' + vidas).src="image/coracao_vazio.png"
    }

    vidas++
    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    /** Criar o elemento HTML **/

    var mosquito = document.createElement('img')
    mosquito.src = 'image/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

/**Definir tamanho do mosquto **/

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

/***Alternar o lado que o mosquito aparece ***/
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }
}
