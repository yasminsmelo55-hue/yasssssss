console.log("Início do contador asssíncrono...");
let contador = 0;
function incrementarContador(callback) {
  setTimeout(() => {
    contador++;
    callback(contador);
    incrementarContador(callback);
  }, 5000);
}
function mostrarContador(valor) {
  console.log(`Contador: ${valor}`);
}
incrementarContador(mostrarContador);
