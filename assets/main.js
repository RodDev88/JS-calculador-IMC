//CODIGO MEJORADO POR CHAT GPT

function calcularImc() {
  //Transforma variables a número con parseFloat
  let peso = parseFloat(document.querySelector("#peso").value);
  let estatura = parseFloat(document.querySelector("#estatura").value);

  //Estable condicion multiple para variables peso y estatura
  //obligamos a que sean numeros, tira mensaje en el caso que sean
  //NaN o que la op matematica sea 0

  if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
    alert("Por favor, ingresa valores válidos para peso y estatura.");
    return;
  }

  let calcular = peso / (estatura * estatura);
  let mensaje = document.querySelector("#resultado");

  if (calcular < 18.5) {
    mensaje.innerHTML = "Tiene un IMC bajo";
  } else if (calcular >= 18.5 && calcular <= 24.9) {
    mensaje.innerHTML = "Tiene un IMC normal";
  } else {
    mensaje.innerHTML = "Tiene un IMC alto";
  }
}

//CODIGO MÍO

// function calcularImc() {
//   let peso = document.querySelector("#peso").value;
//   let estatura = document.querySelector("#estatura").value;

//   let calcular = peso / (estatura * estatura);
//   let mensaje = document.querySelector("#resultado");

//   if (calcular < 18.5) {
//     mensaje.innerHTML = "Tiene un IMC bajo";
//   } else if (calcular >= 18.5 && calcular <= 24.9) {
//     mensaje.innerHTML = "Tiene un IMC normal";
//   } else if (calcular > 24.9) {
//     mensaje.innerHTML = "Tiene un IMC alto";
//   }
// }
