
function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 113.78;
    let euro = 122.78;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de pesos a Dolares es $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de pesos a Euros es $" + resultado.toFixed(2));
    }
    else{
        alert("Tienes que completar todos los requisitos")
    }
}