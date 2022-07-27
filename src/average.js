/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrayNum) => {
  let sum = 0;
  if (arrayNum.length === 0) {
    return undefined;
  }
  for (const index of arrayNum) {
    if (typeof index !== 'number') {
      return undefined;
    } 
    sum += index;
  }
  const media = sum / arrayNum.length;
  return Math.round(media);
};
const array = [3, 4, 5];
console.log(average(array));
module.exports = average;
