function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'images/foto-bebe-m.png')
            } else if (idade < 19) {
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else if (idade < 111) {
                img.setAttribute('src', 'images/foto-idoso-m.png')
            } else {
                img.setAttribute('src', 'images/foto-morto.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (idade < 19) {
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/foto-adulto-f.png')
            } else if (idade < 111) {
                img.setAttribute('src', 'images/foto-idoso-f.png')
            } else {
                img.setAttribute('src', 'images/foto-morto.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}