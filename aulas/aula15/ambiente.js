let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()



for (let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o número ${num[i]}`)
}

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)