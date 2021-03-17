
function Calcular (){
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    let resultado = (peso / (altura*altura)).toFixed(2)
    if(resultado < 18.5){
        window.alert('Magreza '+resultado)
    }else if(resultado > 18.5 && resultado < 24.9){
        window.alert('Normal '+resultado)
    }else if(resultado > 25 && resultado < 29.9){   
        window.alert('Sobrepeso '+resultado)
    }else if(resultado > 30.00 && resultado < 39.9){
        window.alert('Obesidade '+resultado)
    }else if(resultado > 40){
        window.alert('Obesidade plus '+resultado)
    } 
}
function Resetar(){
    const peso = document.getElementById("peso").value=0
    const altura = document.getElementById("altura").value=0
}