let num1 = document.getElementById("input1");
let num2 = document.getElementById("input2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");


button1.onclick = function(){
    const valor1 = num1.value;
    const valor2 = num2.value;
    let result = Math.min(valor1, valor2);
    alert("El numero menor es " + result);
    
}


button2.onclick = function(){
    const valor1 = num1.value;
    const valor2 = num2.value;
    let result = Object.is(valor1, valor2);
    alert(result);
}



button3.onclick = function(){
    let valor1 = num1.value;
    let valor2 = num2.value;
    valor1 = valor1 ^ valor2;
    valor2 = valor1 ^ valor2;
    valor1 = valor1 ^ valor2;
    alert("Este es el primer valor: " + valor1)
    alert("Este es el segundo valor: " + valor2)
}



button4.onclick = function(){
    let valor1 = num1.value;
    let valor2 = num2.value;
    let result;
    while(valor2 != 0){
        result = valor1 & valor2;
        valor1 = valor1 ^ valor2;
        valor2 = result << 1;
    }
    alert("La suma es " + valor1)
}

   
    
