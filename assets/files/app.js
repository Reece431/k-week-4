//edit cide me
const cid = 'LPTest1-OnlineSlots';
const a = `https://www.kingcasino.com/?PAR=321ga64cid${cid}&NeoDL=registration`;
let steps = document.querySelectorAll('.step');
const links = document.querySelectorAll('.cid');


window.addEventListener('load', () =>{
    steps.forEach((x,i) => {
        let num = document.createElement('p');
        num.innerText = i+1;
        num.classList.add('index');
        x.appendChild(num);
    })
    
    
    links.forEach(x => {
        x.href = a;
    })
})