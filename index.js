let b = document.querySelectorAll('tbody tr')
const len = b.length
let y = 0
for (let index = 0; index < len; index++) {
    let sum = parseInt(b[index].children[2].textContent)
    y += sum
}

document.getElementById('o-t').addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    document.querySelector('.init').setAttribute('style', 'display: default');
    document.querySelector('.password').setAttribute('style', 'display: none');
    document.querySelector('.sum').setAttribute('style', 'opacity: 1');
    document.querySelector('.value').innerHTML = `${len} clientes`;
    document.querySelector('h3').innerHTML = 'Total de Clientes Devendo:';
})

document.getElementById('o-v').addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    document.querySelector('.init').setAttribute('style', 'display: default');
    document.querySelector('.password').setAttribute('style', 'display: none');
    document.querySelector('.sum').setAttribute('style', 'opacity: 1');
    document.querySelector('.value').innerHTML = `R$ ${y},00`;
    document.querySelector('h3').innerHTML = 'Soma Total dos Valores:';
})

document.getElementById('o-c').addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    document.querySelector('.init').setAttribute('style', 'display: default');
    document.querySelector('.password').setAttribute('style', 'display: none');
    document.querySelector('.sum').setAttribute('style', 'opacity: 1');
    document.querySelector('.value').innerHTML = `
    <strong>Nome: </strong>DOUGLAS DO DISSO<br>
    <strong>Data: </strong>30/12/2021<br>
    <strong>Valor: </strong>780,00<br>
    `;
    document.querySelector('h3').innerHTML = 'Clientes Atrasados:';
})

document.querySelector('.close').addEventListener('click', () => {
    document.body.removeAttribute('style');
    document.querySelector('.init').setAttribute('style', 'display: none');
})