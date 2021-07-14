const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const divprincipal = document.querySelector('#main')
const titulo = document.createElement('h1')
titulo.innerText = 'Sprint 03 - Katas de JavaScript'
divprincipal.appendChild(titulo)

function showResults(n) {
    let novaDiv = document.createElement('div')
    novaDiv.style.height = 30+"px";
    novaDiv.style.background = "lightgray";
    novaDiv.style.fontSize = 17 + "px";
    novaDiv.style.marginTop = 5 + "px";
    novaDiv.style.paddingTop = 10 +"px";
    novaDiv.innerText = n
    divprincipal.appendChild(novaDiv)
}

 function kata1() {
    // implemente o código do kata 1 aqui
    let num = [];
    for(i=1; i<=25; i++) {
        num += i + ' ';
    }
    return showResults('Resultado do kata1: ' + num)
 }
 kata1()

function kata2() {
    // implemente o código do kata 2 aqui
    let num = [];
    for(i=25; i>=1; i--) {
        num += i + ' ';
    }
    return showResults('Resultado do kata2: ' + num)
}
kata2()

function kata3() {
    // implemente o código do kata 3 aqui
    let num = [];
    for(i=1; i<=25; i++) {
        num += (i*-1) + ' ';
    }
    return showResults('Resultado do kata3: ' + num)
}
kata3()

function kata4() {
    // implemente o código do kata 4 aqui
    let num = [];
    for(i=25; i>=1; i--) {
        num += (i*-1) + ' ';
    }
    return showResults('Resultado do kata4: ' + num)
}
kata4()

function kata5() {
    // implemente o código do kata 5 aqui
    let num = [];
    for(i=25; i>=-25; i--) {
        if(i % 2 !== 0){
            num += i + ' ';
        }
    }
    return showResults('Resultado do kata5: ' + num)
}
kata5()

function kata6() {
    // implemente o código do kata 6 aqui
    let num = [];
    for(i=1; i<=100; i++) {
        if(i % 3 === 0){
            num += i + ' ';
        }
    }
    return showResults('Resultado do kata6: ' + num)
}
kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    let num = [];
    for(i=1; i<=100; i++) {
        if(i % 7 === 0){
            num += i + ' ';
        }
    }
    return showResults('Resultado do kata7: ' + num)
}
kata7()

function kata8() {
    // implemente o código do kata 8 aqui
    let num = [];
    for(i=100; i>=1; i--) {
        if(i %3 === 0 || i % 7 === 0){
            num += i + ' ';
        }
    }
    return showResults('Resultado do kata8: ' + num)
}
kata8()

function kata9() {
    // implemente o código do kata 9 aqui
    let num = [];
    for(i=1; i<=100; i++) {
        if(i % 5 === 0 && i % 2 !== 0){
            num += i + ' ';
        }
    }
    return showResults('Resultado do kata9: ' + num)
}
kata9()

function kata10() {
    // implemente o código do kata 10 aqui
    let num = [];
    for(i=0; i<sampleArray.length; i++) {
            num += sampleArray[i]+ ' ';
    }
    return showResults('Resultado do kata10: ' + num)
}
kata10()

function kata11() {
    // implemente o código do kata 11 aqui
    let num = [];
    for(i=0; i<sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0){
            num += sampleArray[i] + ' ';
        }
    }
    return showResults('Resultado do kata11: ' + num)
}
kata11()

function kata12() {
    // implemente o código do kata 12 aqui
    let num = [];
    for(i=0; i<sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0){
            num += sampleArray[i] + ' ';
        }
    }
    return showResults('Resuldato do kata12: ' + num)
}
kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    let num = [];
    for(i=0; i<sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0){
            num += sampleArray[i] + ' ';
        }
    }
    return showResults('Resultado do kata13: ' + num)
}
kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    let num = [];
    for(i=0; i<sampleArray.length; i++) {
        num += (sampleArray[i] * sampleArray[i])+ ' ';
    }
    return showResults('Resultado do kata14: ' + num)
}
kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    let sum = 0;
    for(i=1; i<=20; i++) {
        sum+=i
    }
    return showResults('Resultado do kata15: ' + sum)
}
kata15()

function kata16() {
    // implemente o código do kata 16 aqui
    let sum = 0;
    for(i=0; i<sampleArray.length; i++) {
        sum += sampleArray[i]
    }
    return showResults('Resultado do kata16: ' + sum)
}
kata16()

function kata17() {
    // implemente o código do kata 17 aqui
    let menor = 0;
    for(i=0; i<sampleArray.length; i++) {
        if(menor === 0){
            menor = sampleArray[i];
        }
        if(sampleArray[i]<menor){
            menor = sampleArray[i];
        }
    }
    return showResults('Resultado do kata17: ' + menor)
}
kata17()

function kata18() {
    // implemente o código do kata 18 aqui
    let maior = 0;
    for(i=0; i<sampleArray.length; i++) {
        if(maior === 0){
            maior = sampleArray[i];
        }
        if(sampleArray[i]>maior){
            maior = sampleArray[i];
        }
    }
    return showResults('Resultado do kata18: ' + maior)
}
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */
 const divSecundaria = document.querySelector('#extra')
 const titulo2 = document.createElement('h1')
 titulo2.innerText = 'Sprint 03 - Katas de JavaScript - Extra'
 divSecundaria.appendChild(titulo2)

function showExtra(widtha, colorc, turns, fontf){
    let novaDiv = document.createElement('div')
    novaDiv.style.height = 20 + "px";
    novaDiv.style.width = widtha + "px";
    novaDiv.style.marginTop = 10 + "px"
    novaDiv.style.background = colorc;
    novaDiv.innerHTML = turns;
    novaDiv.style.fontSize = fontf+"px";
    divSecundaria.appendChild(novaDiv);
}

showExtra(250,'','Resultado do kataBonus1: ', 20)
function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    for(let i = 1; i <=20; i++){
        showExtra(100, 'gray', i)
    }
    
}
kataBonus1()

showExtra(250,'','Resultado do kataBonus2:',20)
function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    let sum = 1;
    for(let i = 105; i<=200; i+=5){
        showExtra(i, 'gray',sum)
        sum+=1;
    }

}
kataBonus2()

showExtra(250,'','Resultado do kataBonus3:',20)
function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    for(let i = 0;i<sampleArray.length;i++){
        showExtra(sampleArray[i], 'gray', (i+1))
    }
}
kataBonus3()

showExtra(250,'','Resultado do kataBonus4:',20)
function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    for(let i = 0;i<sampleArray.length;i++){
        if(i%2===0){
            showExtra(sampleArray[i], 'red', (i+1))
        }
        else{
            showExtra(sampleArray[i], 'grey', (i+1))
        }
    }
}
kataBonus4()

showExtra(250, '', 'Resultado do kataBonus5:',20)
function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    for(let i = 0;i<sampleArray.length;i++){
        if(sampleArray[i]%2===0){
            showExtra(sampleArray[i], 'red', (i+1))
        }
        else{
            showExtra(sampleArray[i], 'grey', (i+1))
        }
    }
}
kataBonus5()