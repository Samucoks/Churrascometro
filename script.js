// Carne adulto por h = ((130g * Adultos) * h)
// Carne criança por h = ((65g * crianças) * h)

// Carne total = ((130 * (adultosB + adultosNB)) + (65 * criancas)) * duracao

// Cerveja = (adultosB * 300) * duracao
// Refrigerante/Agua = ((adultosNB *400) + ((adultosB + criancas) * 200))* duracao
function style(id){
    id.style.margin = '10px'
    id.style.textAlign = 'center'
}
function calcular(){
// HTML
    let adultosB = parseInt(document.getElementById('adultosB').value)
    let adultosNB = parseInt(document.getElementById('adultosNB').value)
    let criancas = parseInt(document.getElementById('criancas').value)
    let duracao = parseInt(document.getElementById('duracao').value)
    let carneT = document.getElementById('carneT')
    let cervejaT = document.getElementById('cervejaT')
    let bebidaT = document.getElementById('bebidaT')

// Calculo
    if(adultosB > 0 && adultosNB > 0 && criancas > 0 && duracao > 0){
    let carne = ((130 * (adultosB + adultosNB)) + (65 * criancas)) * duracao
    let carneKg = carne / 1000
    carneT.innerHTML = 'Quantidade de carne necessária: '+ carneKg + 'kg'
    carneT.style.tex
    style(carneT)

    // Cerveja
    let cerveja = (adultosB * 300) * duracao
    let cervejaL = cerveja / 1000
    cervejaT.innerHTML = 'Quantidade de cerveja necessária: '+ cervejaL +'L'
    style(cervejaT)

    //Bebidas
    let bebida = ((adultosNB *250) + ((adultosB + criancas) * 125))* duracao
    let bebidaL = bebida / 1000
    bebidaT.innerHTML = 'Quantidade de bebida necessária: '+ bebidaL +'L'
    style(bebidaT)
    }
    else if(adultosB > 0 && criancas > 0 && duracao > 0){
        let carne = ((130 * adultosB)+ ((65 * criancas))) * duracao
        let carneKg = carne / 1000
        carneT.innerHTML = 'Quantidade de carne necessária: '+ carneKg + 'kg'
        carneT.style.tex
        style(carneT)

        let cerveja = (adultosB * 300) * duracao
        let cervejaL = cerveja / 1000
        cervejaT.innerHTML = 'Quantidade de cerveja necessária: '+ cervejaL +'L'
        style(cervejaT)

        let bebida = ((adultosB + criancas)*125) * duracao
        let bebidaL = bebida / 1000
        bebidaT.innerHTML = 'Quantidade de bebida necessária: '+ bebidaL +'L'
        style(bebidaT)
    }
    else if(adultosNB > 0 && criancas > 0 && duracao > 0){
        let carne = ((130 * adultosNB) + (65 * criancas)) * duracao
        let carneKg = carne / 1000
        carneT.innerHTML = 'Quantidade de carne necessária: '+ carneKg + 'kg'
        carneT.style.tex
        style(carneT)

        //Bebidas
        let bebida = ((adultosNB *250) + (criancas * 125))* duracao
        let bebidaL = bebida / 1000
        bebidaT.innerHTML = 'Quantidade de bebida necessária: '+ bebidaL +'L'
        style(bebidaT)
    }
    else if(adultosB > 0 && adultosNB > 0 && duracao > 0){
        let carne = ((130 * (adultosB + adultosNB))) * duracao
        let carneKg = carne / 1000
        carneT.innerHTML = 'Quantidade de carne necessária: '+ carneKg + 'kg'
        carneT.style.tex
        style(carneT)

        // Cerveja
        let cerveja = (adultosB * 300) * duracao
        let cervejaL = cerveja / 1000
        cervejaT.innerHTML = 'Quantidade de cerveja necessária: '+ cervejaL +'L'
        style(cervejaT)

        //Bebidas
        let bebida = ((adultosNB *250) + ((adultosB) * 125))* duracao
        let bebidaL = bebida / 1000
        bebidaT.innerHTML = 'Quantidade de bebida necessária: '+ bebidaL +'L'
        style(bebidaT)
    }
    else if(adultosB > 0 && duracao > 0){
        let carne = (130 * adultosB ) * duracao
        let carneKg = carne / 1000
        carneT.innerHTML = 'Quantidade de carne necessária: '+ carneKg + 'kg'
        carneT.style.tex
        style(carneT)

        // Cerveja
        let cerveja = (adultosB * 300) * duracao
        let cervejaL = cerveja / 1000
        cervejaT.innerHTML = 'Quantidade de cerveja necessária: '+ cervejaL +'L'
        style(cervejaT)

    }
    else if(adultosNB > 0 && duracao > 0){
        let carne = ((130 * (adultosB + adultosNB)) + (65 * criancas)) * duracao
        let carneKg = carne / 1000
        carneT.innerHTML = 'Quantidade de carne necessária: '+ carneKg + 'kg'
        carneT.style.tex
        style(carneT)

        //Bebidas
        let bebida = (adultosNB *250)* duracao
        let bebidaL = bebida / 1000
        bebidaT.innerHTML = 'Quantidade de bebida necessária: '+ bebidaL +'L'
        style(bebidaT)
    }
    else if(criancas > 0 && duracao > 0){
        let carne = (65 * criancas) * duracao
        let carneKg = carne / 1000
        carneT.innerHTML = 'Quantidade de carne necessária: '+ carneKg + 'kg'
        carneT.style.tex
        style(carneT)
        //Bebidas
        let bebida = (criancas * 125)* duracao
        let bebidaL = bebida / 1000
        bebidaT.innerHTML = 'Quantidade de bebida necessária: '+ bebidaL +'L'
        style(bebidaT)
    }
}

// Efeito h1 
 let h1 = document.getElementsByTagName('h1')[0]
 h1.onclick = ()=>{
    let int1 = setInterval(()=>{
        h1.style.color ='#fff'
    }, 100)
    let int2 = setInterval(()=>{
        h1.style.color ='rgb(73, 39, 39)'
    }, 350)
    setTimeout(()=>{
        clearInterval(int1)
        clearInterval(int2)
    },15000)
 }




