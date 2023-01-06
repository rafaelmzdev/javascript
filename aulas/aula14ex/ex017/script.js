function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        alert('Por favor, digite um número')
    } else {
        let numero = Number(num.value)
        tab.innerHTML = ``
        for (i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}