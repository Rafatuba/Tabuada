var valor = document.querySelector("div.container input")
var tabuada = document.querySelector("div.container div.tabuada")
const calcular = document.querySelector("div.container button")

calcular.addEventListener("click", () => {

    tabuada.innerHTML = ""

    if(Number(valor.value) < 1 || Number(valor.value) > 10){
        tabuada.innerHTML = "Insira um valor no intervalo de 1 a 10"

    }else{

        for(i = 1; i <=10; i++){

            var calc = String(i) + " X " + valor.value + " = " + i * Number(valor.value);

            var resultado = document.createElement("p")

            resultado.innerText = calc

            tabuada.appendChild(resultado)
        }
    }
})