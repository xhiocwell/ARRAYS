var vector = [];
for (var i = 0; i < 10; i++) {
  var valor = Math.floor(Math.random() * 100);
  vector.push(valor);
}
var maximo = Math.max(...vector);
var minimo = Math.min(...vector);

document.write("Vector: ", vector);
document.write("<br>Máximo valor: ", maximo);
document.write("<br>Mínimo valor: ", minimo);