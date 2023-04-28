// funcao para validar que estou colocando so números.
export function notNumber(value) {
  return isNaN(value) || value == ""
}

// funcao para calcular IMC
export function IMC(peso, altura) {
  return (peso / ((altura / 100) ** 2)).toFixed(2)
}