function contar() {// let para var tem diferença de scopo, fora desse bloco não vai existir!
    let inicio  = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        alert('Tudo OK!')
    }
}