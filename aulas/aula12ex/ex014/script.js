function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        //  BOM DIA
        document.body.style.background = '#cea263'
        img.src = 'images/manha.png'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        document.body.style.background = '#b9846f'
        img.src = 'images/tarde.png'
    } else {
        // BOA NOITE
        document.body.style.background = '#424d5b'
        img.src = 'images/noite.png'
    }
}

