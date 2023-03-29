function contar() {// let para var tem diferença de scopo, fora desse bloco não vai existir!
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        //esse comando transforma ini em um number, fazendo a conversão.
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            //resolvendo problema que travava o site
            alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {// valor do inicio for menor que o final
            //contagem crescente
            for (let c = i; c <= f; c += p) {//for significa,enquanto o contator for menor ou igual ao fim, ele vai receber ele mesmo + o passo.
                res.innerHTML += `${c} \u{1F449}`//comando para converter emoji para js o original seria U+1F449.
            }
        } else {
            //contagem descendente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`//emoji só funciona entre crase ``
    }
}
